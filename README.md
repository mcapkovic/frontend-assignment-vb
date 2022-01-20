# Frontend Assignment
<br /><br /><br />
<p align="center">
<img src="assets/vestberry-logo.svg" width="300" align="center" alt="Vestberry logo" />
</p>
<br /><br />

## Task

Your task is to create a simple page with a table of companies and a chart indicating the size of investments, based on the design. You can start with the prepared project we have created and with our backend.
<br />

[Figma link here](https://www.figma.com/file/EnTB5ILYMPO5jZlRKuLXJ6/assignment?node-id=2%3A195)


<br />
<img src="assets/page.png" width="100%" alt="Page" />
<br />
<br />
<img src="assets/modal.png" width="100%" alt="Modal" />
<br />
<br />

## Objectives

* Try to get the template visual as close as possible to the design, you can export icons from figma.

* Make it possible to add a new company to the table (with its name, stage, sector and investment size)

* Adding new a company should also be reflected in the list of „companies by investment size pie chart“, and „companies by sectors statistics“

* Adding a new company should be done using a simple modal box (design included in Figma)

* Feel free to use any additional library you might need for completing this project, or to change the structure or anything

* We would like to see, how will you solve this task in terms of result precision, code quality & readability
<br />
<br />

## Project structure

```
.
├── assets                   # Assets and templates for this project
├── public                   # Static public assets
├── server                   # Express application that provides graphql backend
│   └── main.js              # Server application entry point
├── client                      # Application source code
```
<br />
<br />

## Requirements
 (tested on)
* node `^17.4.0`
* yarn `^1.22.17` or npm `^8.3.1`
<br />
<br />

## Installation

After confirming that your environment meets the above [requirements](#requirements), clone `code` by following commands:

```bash
$ git clone git@github.com:andylacko/frontend-assignment.git <directory>
$ cd <directory>
```

When that's done, install the project dependencies.

```bash
$ npm i  # Install project dependencies (or `yarn`)
```
<br />
<br />

## Running the Project

After completing the [installation](#installation) step, you're ready to start the project!

```bash
$ npm start  # Start the development server (or `yarn start`)
```

While developing, you will probably rely mostly on `yarn start` or `npm start`; however, there are additional scripts at your disposal:

|`npm run <script>`        |Description|
|-----------------------|-----------|
|`start`                |Serves your app at `localhost:3000`|
|`dev:client`           |Starts the frontend part|
|`dev:server`           |Starts the backend part|
|`lint`                 |[Lints](http://stackoverflow.com/questions/8503559/what-is-linting) the project for potential errors|
|`lint:fix`             |Lints the project and [fixes all correctable errors](http://eslint.org/docs/user-guide/command-line-interface.html#fix)|

<br />
<br />

## Finish

after finishing your work, send us the repo link