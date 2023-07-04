# iso-sdk

[![npm version](https://badgen.net/npm/v/@sdkdeck/iso-sdk/latest)](https://www.npmjs.com/package/@sdkdeck/iso-sdk)
[![node](https://badgen.net/npm/node/@sdkdeck/iso-sdk/latest)](https://www.npmjs.com/package/@sdkdeck/iso-sdk)
[![npm downloads](https://badgen.net/npm/dw/@sdkdeck/iso-sdk/latest)](https://www.npmjs.com/package/@sdkdeck/iso-sdk)
[![npm downloads](https://badgen.net/npm/dm/@sdkdeck/iso-sdk/latest)](https://www.npmjs.com/package/@sdkdeck/iso-sdk)
[![npm downloads](https://badgen.net/npm/dy/@sdkdeck/iso-sdk/latest)](https://www.npmjs.com/package/@sdkdeck/iso-sdk)
[![npm downloads](https://badgen.net/npm/dt/@sdkdeck/iso-sdk/latest)](https://www.npmjs.com/package/@sdkdeck/iso-sdk)
[![dependents](https://badgen.net/npm/dependents/@sdkdeck/iso-sdk/latest)](https://www.npmjs.com/package/@sdkdeck/iso-sdk)
[![types](https://badgen.net/npm/types/@sdkdeck/iso-sdk/latest)](https://www.npmjs.com/package/@sdkdeck/iso-sdk)
[![license](https://badgen.net/npm/license/@sdkdeck/iso-sdk/latest)](https://www.npmjs.com/package/@sdkdeck/iso-sdk)

An SDK for ISO standards.

---

## Documentation

### Contents

- [Installation](#installation)
- [Usage](#usage)
  - [ISO 4217](#iso-4217)

### Installation

```
$ npm i @sdkdeck/iso-sdk
```

### Usage

#### ISO-4217

ISO 4217 is a standard published by the International Organization for Standardization (ISO) that defines alpha codes and numeric codes for the representation of currencies and provides information about the relationships between individual currencies and their minor units.

- To use the standard, you may import using:

    ```js
    const { ISO4217CurrencyCode } = require("@sdkdeck/iso-sdk")
    // or
    import { ISO4217CurrencyCode } from "@sdkdeck/iso-sdk"
    ```

- The standard has the following data format:

    ```json
    [
        {
            "code": "PHP",
            "no": 608,
            "decimals": 2,
            "name": "Philippine Peso"
        }
    ]
    ```

- Consume the standard using the following:

    ```js
    /**
     * getByCode(code)
     * @code [string] code of the currency
     **/
    ISO4217CurrencyCode.getByCode("PHP")

    /**
     * getByNumericCode(code)
     * @code [number] numeric code of the currency
     **/
    ISO4217CurrencyCode.getByNumericCode(608)

    /**
     * getByName(name)
     * @name [string] numeric code of the currency
     **/
    ISO4217CurrencyCode.getByName("Philippine")
    ```