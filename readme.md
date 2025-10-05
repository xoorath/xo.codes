# xo.codes

[xo.codes](https://github.com/xoorath/xo.codes) on GitHub is the repository for
my personal website at [https://xo.codes](https://xo.codes).

## Branches

| Branch                                                         | Purpose                                                         |
|----------------------------------------------------------------|-----------------------------------------------------------------|
| [main](https://github.com/xoorath/xo.codes/tree/main)          | website source                                                  |
| [www-dev](https://github.com/xoorath/xo.codes/tree/www-dev)    | [https://dev.xo.codes](https://dev.xo.codes) static site source |
| [www-prod](https://github.com/xoorath/xo.codes/tree/www-prod)  | [https://xo.codes](https://xo.codes) static site source         |

Each commit to [main](https://github.com/xoorath/xo.codes/tree/main) kicks off
an action that updates
[www-dev](https://github.com/xoorath/xo.codes/tree/www-dev).

[www-prod](https://github.com/xoorath/xo.codes/tree/www-prod)
is not updated automatically, it's done by pushing
[www-dev](https://github.com/xoorath/xo.codes/tree/www-dev) to
[www-prod](https://github.com/xoorath/xo.codes/tree/www-prod). 
That process can be done through the
[push to prod](https://github.com/xoorath/xo.codes/actions/workflows/push-to-prod.yaml)
action.

# Development

## 1: live updates with app.js

There's a helper tool in this repo to serve the website live for quick iteration.

```
npm start
```

This command will serve the site on localhost:3000.

I also symlink the data directory for images and other files to work.

```
sshfs -o allow_other xo@xo.codes:/mnt/data /mnt/xo.codes/data
sudo ln -s /mnt/xo.codes/data /home/xo/Projects/git/xo.codes/site/
```

## 2. Build and serve a local directory 

I normally have [markdeep-static](https://github.com/xoorath/markdeep-static)
checked out in a peer directory to this repository and build with:

`node ../markdeep-static/app.js --in ./site --out ./build --options ./markdeep-options.json`

This builds the static website into ./build the same way the github action does.
I then cd into the build directory and serve it with:

```
python -m http.server 3001
```

This serves the website on localhost:3001

I also symlink the data directory for images and other files to work.

```
sshfs -o allow_other xo@xo.codes:/mnt/data /mnt/xo.codes/data
sudo ln -s /mnt/xo.codes/data /home/xo/Projects/git/xo.codes/build/
```

# Known issues

The [markdeep-static](https://github.com/xoorath/markdeep-static) tool this
website is built with recursively using the syntax for 
[Markdeep in Markdeep](https://casual-effects.com/markdeep/features.md.html#embeddingdocuments/markdeepiniframe)
. That behaves slightly differently than using the actual Markdown in Markdeep
feature so rendering isn't 1:1. Notably: the embedding we do in markdeep-static
treats the embedded markdown as part of the parent document wheres
[Markdeep in Markdeep](https://casual-effects.com/markdeep/features.md.html#embeddingdocuments/markdeepiniframe)
embeds a document that is rendered by itself. That means
[markdeep-static](https://github.com/xoorath/markdeep-static) will be able to
(for better **and** worse) join documents like a templating engine.

For example:

*fragments/header.md*
```.md
              	**Some Title**
```

*index.md*
```.md
      	(insert fragments/header.html here)
              **Some subtitle here**
```

In this example our [./app.js](./app.js) tool here will render two titles while
[markdeep-static](https://github.com/xoorath/markdeep-static) would render a
title and a subtitle.