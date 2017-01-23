# floidtv front-end
A static page for floidtv.de. If you want to view a deployed preview of this project, navigate your Browser to: https://floidtv.herokuapp.com/

[![Build Status](https://travis-ci.com/guddii/floidtv.svg?token=eegTHzinhpzjEegiUyMy&branch=master)](https://travis-ci.com/guddii/floidtv)

## Requirements
- [GIT](https://git-scm.com/) available at the command-line interface
- [Nodejs](https://nodejs.org/en) available at the command-line interface (Please consult `./package.json` for the appropriate Nodejs `engine`)
- [NPM](https://nodejs.org/en) available at the command-line interface (Please consult `./package.json` for the appropriate NPM `engine`)

## Getting started
Installing this project locally, requires following steps in your terminal:
```
git clone https://github.com/guddii/floidtv.git
cd floidtv  
npm install
bower install
```
### Build commands

Following build commands are available:  
- `npm start` generates all assets, watch file changes and starts a webserver (Development)
- `npm run build` generates all assets and starts a webserver (Staging)
