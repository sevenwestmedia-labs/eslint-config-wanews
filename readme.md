# WANews eslint config

Configured for typescript + react

[![Build Status](https://travis-ci.com/sevenwestmedia-labs/eslint-config-wanews.svg?branch=master)](https://travis-ci.com/sevenwestmedia-labs/eslint-config-wanews) [![Greenkeeper badge](https://badges.greenkeeper.io/sevenwestmedia-labs/eslint-config-wanews.svg)](https://greenkeeper.io/)

## Config

### .vscode/settings.json

```json
"eslint.validate": [
    "javascript",
    "javascriptreact",
    { "language": "typescript", "autoFix": true },
    { "language": "typescriptreact", "autoFix": true }
]
```

### .eslintrc

```json
{
  "extends": ["wanews"]
}
```

### .eslintignore

```
dist
```
