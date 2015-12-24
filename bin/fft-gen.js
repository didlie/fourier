#!/usr/bin/env node

'use strict';

var template = require('lodash.template'),
    fs = require('fs'),
    path = require('path');

fs.readFile(
    path.resolve(__dirname, '../src/fft-template.js'),
    { encoding: 'utf8' },
    function (err, data) {
        if (err) { throw err; }
        var t = template(data);
        console.log(t({
            asms: [true, false],
            bases: [2, 3],
            sizes: [4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
        }));
    }
);
