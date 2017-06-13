# Nile Web Interface

## Introduction

This project contains the web interface for CERN Nile Service, pilot service within the CERN IT department, based on Kafka and Zookeeper.

It's implemented in Angular2 TypeScript (v2.4.9), using Bootstrap 4 CSS Framework, Sass, Responsive layout, ngx-charts, ionicons... 

This project was generated with [angular-cli](https://github.com/angular/angular-cli) version 1.0.0-rc-1 and uses Webpack for the module bundle.

## Development and build

Verify that you are running at least node 6.9.x and npm 3.x.x by running node -v and npm -v in a terminal/console window. Older versions produce errors, but newer versions are fine.

To build the project use the command `npm install` which will build the artifacts in the `dist/` directory.

Then, to run the project, use `npm start` for a dev server. Navigate to `http://localhost:3000/`. The app will automatically reload if you change any of the source files.
In case of using Unix, the loading can get stuck, if so, try `UV_THREADPOOL_SIZE=64 npm start`

To get more help on the `angular-cli` use `ng help` or go check out the [Angular-CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
