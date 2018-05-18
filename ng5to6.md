# Angular v5 to v6 upgrade

Please do not perform the steps marked with a [x]

Please delete complete project on your local machine before starting.

Make sure you are using Node 8 or later

## Clone Master branch

git clone https://njcoutinho@bitbucket.org/qliktag/qliktagweb.git

## DELETE

[x] Delete node_modules folder and package-lock.json

## Install latest cli globally and in local project folder

npm install -g @angular/cli

[x] npm install @angular/cli@latest

## Update CLI

[x] ng update @angular/cli

[x] Check if angular.json file has been created

## Update CORE

[x] ng update --all

## Update remaining packages

[x] npm install -g npm-check-updates

[x] ncu -u

## Update rxjs

[x] npm install -g rxjs-tslint
rxjs-5-to-6-migrate -p src/tsconfig.app.json

[x] npm install --save rxjs-compat

## Typescript warning

[x] npm install typescript@'>=2.7.0 <2.8.0'

## DELETE AND RE-INSTALL

Delete node_modules folder and package-lock.json

npm i

## FIX ERROR with angular2-json-schema-FormsModule
ERROR in ./node_modules/angular2-json-schema-form/angular2-json-schema-form.es5.js

line no 7 comment out //import * as Ajv from 'ajv';

## NG SERVE and ENJOY
