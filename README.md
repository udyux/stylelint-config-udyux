# stylelint-config-udyux

> An opinionated and portable [stylelint](https://stylelint.io/) config built around [BEM](http://getbem.com/)

## Installation

```bash
$ npm install -D stylelint-config-udyux
# or
$ yarn add --dev stylelint-config-udyux
```

## Usage

Add `stylelint-config-udyux` to the `extends` array in your `.stylelintrc.*` file.

```javascript
{
  extends: [
    // ...
    "stylelint-config-udyux"
  ]
}
```

_Don't forget that extended configs are merged in order, so the last entry takes precedence over the others in case of rule conflicts._

## Documentation

### Plugins

This config makes use of the following plugins:

- [stylelint-order](https://github.com/hudochenkov/stylelint-order)
- [stylelint-declaration-strict-value](https://github.com/AndyOGo/stylelint-declaration-strict-value)
- [stylelint-declaration-block-no-ignored-properties](https://github.com/kristerkari/stylelint-declaration-block-no-ignored-properties)

### Extended configs

This config extends the following configs:

- [stylelint-config-standard](https://github.com/stylelint/stylelint-config-standard)
- [stylelint-config-recommended-scss](https://github.com/kristerkari/stylelint-config-recommended-scss)

---

Licensed under [MIT](LICENSE)
