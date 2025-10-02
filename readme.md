# xo.codes

[xo.codes](https://github.com/xoorath/xo.codes) on GitHub is the repository for my personal website at [https://xo.codes](https://xo.codes).

## Branches

| Branch                                                        | Purpose                                                       |
|---------------------------------------------------------------|---------------------------------------------------------------|
| [main](https://github.com/xoorath/xo.codes/tree/main)          | website source                                                |
| [www-dev](https://github.com/xoorath/xo.codes/tree/www-dev)    | [https://dev.xo.codes](https://dev.xo.codes) static site source |
| [www-prod](https://github.com/xoorath/xo.codes/tree/www-prod)  | [https://xo.codes](https://xo.codes) static site source         |

Each commit to [main](https://github.com/xoorath/xo.codes/tree/main) kicks off an action that updates [www-dev](https://github.com/xoorath/xo.codes/tree/www-dev).

[www-prod](https://github.com/xoorath/xo.codes/tree/www-prod) is not updated automatically, it's done by pushing [www-dev](https://github.com/xoorath/xo.codes/tree/www-dev) to [www-prod](https://github.com/xoorath/xo.codes/tree/www-prod). That process can be done through the [push to prod](https://github.com/xoorath/xo.codes/actions/workflows/push-to-prod.yaml) action.
