[![Build Status](https://travis-ci.org/prettier/prettier.svg?branch=master)](https://travis-ci.org/prettier/prettier)
[![Coverage Status](https://coveralls.io/repos/github/FrontEndCapstone/Reviews/badge.svg?branch=master&service=github)](https://coveralls.io/github/FrontEndCapstone/Reviews?branch=master)
[![Maintainability](https://api.codeclimate.com/v1/badges/29769fb0f8f18fe5fcda/maintainability)](https://codeclimate.com/github/FrontEndCapstone/Reviews/maintainability)
[![MIT Licence](https://badges.frapsoft.com/os/mit/mit.svg?v=103)](https://opensource.org/licenses/mit-license.php)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

# Trailblazers Reviews

> Trailblazers is a reimplementation of the REI CoOp site's product page.  This repo contains the "Reviews" component for that project, which fetches reviews from the database, displays them to the user via a React frontend, and allows the user to interact with those reviews.

## Related Projects

  - [Proxy server for running all components](https://github.com/FrontEndCapstone/DanielSockwellProxyServer)
  - [ProductDescription component](https://github.com/FrontEndCapstone/ProdcutDescription)
  - [ProductDetails component](https://github.com/FrontEndCapstone/Product-Details)
  - [ProductComparisons component](https://github.com/FrontEndCapstone/ProductComparisons)

## Table of Contents

1. [Requirements](#requirements)
1. [Development](#development)

## Requirements

- Node 6.13.0

## Development

Development requires eslint (for code linting) and Jest (for testing), along with several plugins for each.  All dev dependencies are listed in the package.json file.

Contributions are welcome, but please ensure that you add tests and that all tests pass.  A drop in coverage, failing tests, or linter errors will cause the build to fail and the contribution to require revision.

### Installing Dependencies

From within the root directory:

```sh
npm install -g webpack-cli
npm install
```

