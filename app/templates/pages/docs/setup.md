---
title: Setup
description: How-to set up FFWD projects
---


```sh
npm install -g yo generator-ffwd
mkdir -p path/to/some-project
cd path/to/some-project
yo ffwd
```

```mysql
CREATE USER 'some_project'@'localhost'
  IDENTIFIED BY  '***';

GRANT USAGE ON * . * TO  'some_project'@'localhost'
  IDENTIFIED BY  '***'
  WITH
    MAX_QUERIES_PER_HOUR 0
    MAX_CONNECTIONS_PER_HOUR 0
    MAX_UPDATES_PER_HOUR 0
    MAX_USER_CONNECTIONS 0 ;

GRANT ALL PRIVILEGES ON  `some_project\_%` . *
  TO  'some_project'@'localhost';
```

Create a `js` at the root of your project:

```js
/* jshint node: true */
'use strict';

var app = require('ffwd-net/server')({
  appName: 'My app',

  staticContent: {
    'doc':    '/docs',
    'pages':  '/pages',
    'dist':   '/'
  },

  features: {
    'ffwd-modeling': true,
    'ffwd-auth': {
      // ...
    }
  }
});

module.exports = app;
```

Then, in a terminal:

```sh
grunt develop
```


and finally open a browser at [http://localhost:3000](http://localhost:3000).