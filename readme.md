# WANews eslint config

Configured for typescript + react

[![Build Status](https://travis-ci.com/sevenwestmedia-labs/eslint-config-wanews.svg?branch=master)](https://travis-ci.com/sevenwestmedia-labs/eslint-config-wanews)

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
