# Volto Style Wrapper

[![NPM](https://img.shields.io/npm/v/@kitconcept/volto-style-wrapper.svg)](https://www.npmjs.com/package/@kitconcept/volto-style-wrapper)
[![Build Status](https://github.com/kitconcept/volto-style-wrapper/actions/workflows/code.yml/badge.svg)](https://github.com/kitconcept/volto-style-wrapper/actions)
[![Build Status](https://github.com/kitconcept/volto-style-wrapper/actions/workflows/unit.yml/badge.svg)](https://github.com/kitconcept/volto-style-wrapper/actions)
[![Build Status](https://github.com/kitconcept/volto-style-wrapper/actions/workflows/acceptance.yml/badge.svg)](https://github.com/kitconcept/volto-style-wrapper/actions)

![kitconcept GmbH](https://github.com/kitconcept/volto-blocks/raw/master/kitconcept.png)

The Volto Style Wrapper allows editors to add styles to a block.

## Screenshot

TODO

## Screencast

TODO

## Installation

Create a new Volto project (you can skip this step if you already have one):

```
npm install -g yo @plone/generator-volto
yo @plone/volto my-volto-project --addon @kitconcept/volto-style-wrapper
cd my-volto-project
```

Add `@kitconcept/volto-style-wrapper`to your package.json:

```
"addons": [
    "@kitconcept/volto-style-wrapper"
],

"dependencies": {
    "@kitconcept/volto-style-wrapper": "*"
}
```

Download and install the new add-on by running:

```
yarn install
```

Start Volto with:

```
yarn start
```

Go to http://localhost:3000, login, create a new page.

# Credits

<img alt="Forschungszentrum Jülich" src="https://github.com/kitconcept/volto-blocks/raw/master/fz-juelich.svg" width="200px" />

The development of this plugin has been kindly sponsored by [Forschungszentrum Jülich](https://fz-juelich.de).

# License

The project is licensed under the MIT license.
