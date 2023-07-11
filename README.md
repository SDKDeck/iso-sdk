# iso-sdk

[![npm version](https://badgen.net/npm/v/@sdkdeck/iso-sdk/latest)](https://www.npmjs.com/package/@sdkdeck/iso-sdk)
[![node](https://badgen.net/npm/node/@sdkdeck/iso-sdk/latest)](https://www.npmjs.com/package/@sdkdeck/iso-sdk)
[![npm downloads](https://badgen.net/npm/dw/@sdkdeck/iso-sdk/latest)](https://www.npmjs.com/package/@sdkdeck/iso-sdk)
[![npm downloads](https://badgen.net/npm/dm/@sdkdeck/iso-sdk/latest)](https://www.npmjs.com/package/@sdkdeck/iso-sdk)
[![npm downloads](https://badgen.net/npm/dy/@sdkdeck/iso-sdk/latest)](https://www.npmjs.com/package/@sdkdeck/iso-sdk)
[![npm downloads](https://badgen.net/npm/dt/@sdkdeck/iso-sdk/latest)](https://www.npmjs.com/package/@sdkdeck/iso-sdk)
[![dependents](https://badgen.net/npm/dependents/@sdkdeck/iso-sdk/latest)](https://www.npmjs.com/package/@sdkdeck/iso-sdk)
[![license](https://badgen.net/npm/license/@sdkdeck/iso-sdk/latest)](https://www.npmjs.com/package/@sdkdeck/iso-sdk)

An SDK for ISO standards. Vist our SDK on NPM, https://www.npmjs.com/package/@sdkdeck/iso-sdk.

---

**DISCLAIMER**: The information provided in this SDK is based on the latest standard available as of July 2023. While efforts are continuously being made to ensure the accuracy and reliability of the information, there is no guarantee of its completeness, correctness, or timeliness. Users of this SDK are advised to independently verify and validate the information according to their specific requirements and consult relevant official sources or experts as needed. The use of this SDK and reliance on its information are at the user's own risk. The SDK provider disclaims any liability for any loss or damages incurred directly or indirectly from the use of this SDK or its information. Please note that standards and regulations may change over time, and it is the user's responsibility to stay updated with the latest information. This SDK is not intended to replace professional advice or serve as a substitute for official documentation. Always consult appropriate authorities or experts for specific guidance and compliance with applicable standards and regulations.

## Documentation

### Contents

- [Installation](#installation)
- [Usage](#usage)
  - [ISO 4217](#iso-4217)
  - [ISO 3166-1](#iso-3166-1)

### Installation

```
$ npm i @sdkdeck/iso-sdk
```

### Usage

#### ISO-4217

**ISO 4217** is a standard published by the International Organization for Standardization (ISO) that defines alpha codes and numeric codes for the representation of currencies and provides information about the relationships between individual currencies and their minor units.

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
            "name" : "Philippine Peso",
            "code" : "PHP",
            "no" : "608",
            "decimals" : 2,
            "countries" : ["PH"]
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

#### ISO-3166-1

**ISO 3166-1** is an ISO standard published by the International Organization for Standardization (ISO) that defines codes for the names of countries, dependent territories, special areas of geographical interest, and their principal subdivisions (e.g., provinces or states). The official name of the standard is Codes for the representation of names of countries and their subdivisions.

**Part 1**: Country codes, defines codes for the names of countries, dependent territories, and special areas of geographical interest. It defines three sets of country codes:

**ISO 3166-1 alpha-2** – two-letter country codes which are the most widely used of the three, and used most prominently for the Internet's country code top-level domains (with a few exceptions).

**ISO 3166-1 alpha-3** – three-letter country codes which allow a better visual association between the codes and the country names than the alpha-2 codes.

**ISO 3166-1 numeric** – three-digit country codes which are identical to those developed and maintained by the United Nations Statistics Division, with the advantage of script (writing system) independence, and hence useful for people or systems using non-Latin scripts.

- To use the standard, you may import using:

    ```js
    const { ISO3166P1CountryCode } = require("@sdkdeck/iso-sdk")
    // or
    import { ISO3166P1CountryCode } from "@sdkdeck/iso-sdk"
    ```

- The standard has the following data format:

    ```json
    [
        {
            "name": "Philippines (the)",
            "alpha2": "PH",
            "alpha3": "PHL",
            "no": "608"
        }
    ]
    ```

- Consume the standard using the following:

    ```js
    /**
     * getByAlpha2Code(code)
     * @code [string] alpha-2 code of the country
     **/
    ISO3166P1CountryCode.getByAlpha2Code("PH")

    /**
     * getByAlpha3Code(code)
     * @code [string] alpha-3 code of the country
     **/
    ISO3166P1CountryCode.getByAlpha3Code("PHL")

    /**
     * getByNumericCode(code)
     * @code [string] numeric code of the country
     **/
    ISO3166P1CountryCode.getByNumericCode("608")
    
    /**
     * getByName(name)
     * @name [string] name of the country
     **/
    ISO3166P1CountryCode.getByName("Philippines")
    ```