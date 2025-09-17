# xo.fail

[xo.fail](https://github.com/xoorath/xo.fail) on GitHub is the repository for my personal website at [https://xo.fail](https://xo.fail).

## Branches

| Branch                                                        | Purpose                                                       |
|---------------------------------------------------------------|---------------------------------------------------------------|
| [main](https://github.com/xoorath/xo.fail/tree/main)          | website source                                                |
| [www-dev](https://github.com/xoorath/xo.fail/tree/www-dev)    | [https://dev.xo.fail](https://dev.xo.fail) static site source |
| [www-prod](https://github.com/xoorath/xo.fail/tree/www-prod)  | [https://xo.fail](https://xo.fail) static site source         |

Each commit to [main](https://github.com/xoorath/xo.fail/tree/main) kicks off an action that updates [www-dev](https://github.com/xoorath/xo.fail/tree/www-dev).

[www-prod](https://github.com/xoorath/xo.fail/tree/www-prod) is not updated automatically, it's done by pushing [www-dev](https://github.com/xoorath/xo.fail/tree/www-dev) to [www-prod](https://github.com/xoorath/xo.fail/tree/www-prod). That process can be done through the [push to prod](https://github.com/xoorath/xo.fail/actions/workflows/push-to-prod.yaml) action.
