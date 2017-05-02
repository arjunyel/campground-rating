# Campground Rating

[https://camp-rating.firebaseapp.com/](https://camp-rating.firebaseapp.com/)

A [Progressive Web App](https://developers.google.com/web/progressive-web-apps/) for posting/joining events at campgrounds around the Southern Illinois Area. Users are rated by other users on the quality of the events they host.

Scores a 99 out of 100 on the [Lighthouse PWA Test](https://developers.google.com/web/tools/lighthouse/)

### Setup

##### Prerequisites

First, install [Polymer CLI](https://github.com/Polymer/polymer-cli) using
[npm](https://www.npmjs.com) (we assume you have pre-installed [node.js](https://nodejs.org)).

    npm install -g polymer-cli

Install [Bower](https://bower.io/)

    npm install -g bower

##### Initialize project from Github

    git clone https://github.com/arjunyel/campground-rating.git
    cd campground-rating
    bower install

##### Generate service worker and deploy to internet

    polymer build
    firebase deploy

### Start the development server

This command serves the app at `http://localhost:8081` and provides basic URL
routing for the app:

    polymer serve

