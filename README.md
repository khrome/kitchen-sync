Kitchen Sync
============

Promises are great, but they break your stack... callback are great, until you want to use them in an async function.

I've been using a simple code strategy to get the best of both worlds, but it's ugly and repetitive, so... I'll just make it modular

Usage
-----

```javascript
    const sync = require('kitchen-sync');
    function theFnIWantToUseInBothModes(anArg, another, callbackFn){
        let callback = sync(callbackFn)
        // do something asynchronous and return
        return callback.return;
    }
```
If a callback is passed, it works that way, with no stack breakage... if not a promise is returned. Easy.

Testing
-------

```bash
./node_modules/mocha/bin/mocha
```
