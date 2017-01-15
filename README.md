pipe-chain
==========
[![Build Status](https://travis-ci.org/MKGaru/pipe-chain.svg?branch=master)](https://travis-ci.org/MKGaru/pipe-chain)
[![npm version](https://badge.fury.io/js/pipe-chain.svg)](https://badge.fury.io/js/pipe-chain)
[![MIT License](http://img.shields.io/badge/license-MIT-blue.svg?style=flat)](LICENSE)

Simple chainable object.

Usage
--------------------------------
```javascript
// if use with nodejs then require('pipe-chain')
// if use with typescript then import 'pipe-chain'

{a:3,b:4,c:2}.pipe(Object.keys)      // -> ['a','b','c']
[3,4,5,2,8,6].pipe(v=>Math.min(...v) // -> 2
(3.63).pipe(Math.floor)              // -> 3
'filter'.pipe(v=>'-webkit-'+v)       // -> '-webkit-filter'

[6,4,8]
  .pipe(v=>Math.min(...v))          // ... 4
  .pipe(Math.sqrt)                  // -> 2
```` 

  
Instal
---------------------------------
`npm install pipe-chain`


Licence
---------------------------------
MIT
