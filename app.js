import { promisify } from 'node:util'
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url';
import { dirname } from 'node:path';

import express from 'express'

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express()
const port = 3000

let markdeepSettingsPath = path.join(__dirname, 'markdeep-options.json');
let markdeepSettingsContents = ''
if (fs.existsSync(markdeepSettingsPath))
{
    markdeepSettingsContents = JSON.stringify(JSON.parse(fs.readFileSync(markdeepSettingsPath)));
}
else
{
    markdeepSettingsPath = null;
    markdeepSettingsContents = null;
}

async function ServeRequest(req, res) {
    /** @type {string} */
    let originalUrl = req.originalUrl === '/' 
        ? '/index.html' 
        : req.originalUrl;

    const paramsIdx = originalUrl.lastIndexOf('?')
    if (paramsIdx !== -1) {
        originalUrl = originalUrl.substring(0, paramsIdx)
    }

    if (originalUrl.endsWith('.html')) {
        const parsedPath = path.parse(originalUrl);
        const expectedPath = path.join(__dirname, 'site', parsedPath.dir, parsedPath.name + '.md');
        const expectedPathExists = await promisify(fs.exists)(expectedPath);

        if (expectedPathExists) {
            const fileContents = await promisify(fs.readFile)(expectedPath);

            res.send(`<!DOCTYPE html lang="en"><meta charset="utf-8">
<html>
${fileContents}
<script>markdeepOptions = JSON.parse('${markdeepSettingsContents}');</script>
<!-- Markdeep: --><style class="fallback">body{visibility:hidden;white-space:pre;font-family:monospace}</style><script src="markdeep.min.js"></script><script src="https://casual-effects.com/markdeep/latest/markdeep.min.js"></script><script>window.alreadyProcessedMarkdeep||(document.body.style.visibility="visible")</script>
</html>
        `);
        } else {
            res.status(404).send('file not found');
        }
    } else {
        const expectedPath = path.join(__dirname, 'site', originalUrl);
        const expectedPathExists = await promisify(fs.exists)(expectedPath);

        if (expectedPathExists) {
            res.sendFile(expectedPath);
        } else {
            res.status(404).send('file not found');
        }
    }
}

app.get('/', ServeRequest);
app.get('/*splat', ServeRequest);

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});