<p align="center">
  <a href="https://www.gatsbyjs.org">
    <img alt="Gatsby" src="https://www.gatsbyjs.org/monogram.svg" width="60" />
  </a>
</p>
<h1 align="center">
  Gatsby Tested Starter
</h1>

<p align="center">
  <a href="https://www.typescriptlang.org/">
    <img src="https://img.shields.io/badge/built%20with-Typescript-%23007acc">
  </a>
  <a href="https://jestjs.io/">
    <img src="https://img.shields.io/badge/tested_with-jest-99424f.svg" />
  </a>
  <a href="https://www.cypress.io/">
    <img src="https://img.shields.io/badge/tested%20with-Cypress-04C38E.svg">
  </a>
</p>

Getting started with sane code and a testing mentality has never been simplier
with Gatsby.

[**Gatsby**](https://www.gatsbyjs.org/) is a framework to create React apps that
load static content first, then bootstraps React once everything loads. This
keeps everything blazing fast to load, but keeps the dynamic nature that
everyone loves with React.

[**Typescript**](https://www.typescriptlang.org/) lets you catch all those pesky
errors by uping your typing hygiene and providing better code hints.

[**Jest**](https://jestjs.io/) keeps your Unit and Integration tests easy with
[Testing-Library](https://testing-library.com/). Jest + Gatsby take some setting
up, but that's all been taken care of.

[**Cypress**](https://www.cypress.io/) automates your browser to check through
your End-to-End tests with ease and speed.

With Jest and Cypress together, be able to cover important aspects of your code
while only testing how the user would interact with your app!

## 🚀 Quick start

1.  **Create a Gatsby site.**

    Use the Gatsby CLI to create a new site, specifying the default starter.

    ```shell
    # create a new Gatsby site using the default starter
    gatsby new new-starter https://github.com/lexedwards/starter-cypr-jest-ts
    ```

2.  **Start developing.**

    Navigate into your new site’s directory and start it up.

    ```shell
    cd new-starter/
    npm run validate
    gatsby develop
    ```

3.  **Open the source code and start editing!**

    Your site is now running at `http://localhost:8000`!

    _Note: You'll also see a second link: _`http://localhost:8000/___graphql`_.
    This is a tool you can use to experiment with querying your data. Learn more
    about using this tool in the
    [Gatsby tutorial](https://www.gatsbyjs.org/tutorial/part-five/#introducing-graphiql)._

    Open the `new-starter` directory in your code editor of choice and edit
    `src/pages/index.js`. Save your changes and the browser will update in real
    time!

## What's inside?

There are a multitude of config files within the root, from `.nvmrc` stating
what version of node to use, `.eslintrc` to check for typos, and `.huskyrc` &
`lintstagedrc` which will fire commands when you start commiting code with git.

1.  **`/src`**: This directory will contain all of the code related to what you
    will see on the front-end of your site (what you see in the browser) such as
    your site header or a page template. `src` is a convention for “source
    code”.

`gatsby-*.js` files run in `Node`; _not_ the browser. Until Node pushes support
for modules in the LTS line, I still recommend these files stay in commonJS
rather than ES6 Modules.

1.  **`gatsby-browser.js`**: This file is where Gatsby expects to find any usage
    of the [Gatsby browser APIs](https://www.gatsbyjs.org/docs/browser-apis/).
    These allow customization/extension of default Gatsby settings affecting the
    browser. Currently there is a `layout` React Element wrapping the Page
    Element so that I wouldn't have to continuously import it to each and every
    page or template. As well as this, there is a nifty css variable generator
    to calculate `--vh`, as safari users will experience a different `vh` in
    native CSS.

2.  **`gatsby-config.js`**: This is the main configuration file for a Gatsby
    site. This is where you can specify information about your site (metadata)
    like the site title and description, which Gatsby plugins you’d like to
    include, etc. (Check out the
    [config docs](https://www.gatsbyjs.org/docs/gatsby-config/) for more
    detail).

3.  **`gatsby-node.js`**: This file is where Gatsby expects to find any usage of
    the [Gatsby Node APIs](https://www.gatsbyjs.org/docs/node-apis/). This would
    be where functions for auto-generated pages would live, taking in data and
    templates and feeding it to the SSR generation.

4.  **`gatsby-ssr.js`**: This file is where Gatsby expects to find any usage of
    the
    [Gatsby server-side rendering APIs](https://www.gatsbyjs.org/docs/ssr-apis/).
    It's highly recommended anything that's present within `gatsby-browser` is
    also present within `gatsby-ssr` if it affects page-generation, such as
    wrapping elements i.e `<Layout />`

5.  **`package.json`**: A manifest file for Node.js projects, which includes
    things like metadata (the project’s name, author, etc). This manifest is how
    npm knows which packages to install for your project.

6.  **`README.md`**: A text file containing useful reference information about
    your project.

## Deploy

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/lexedwards/starter-cypr-jest-ts)
