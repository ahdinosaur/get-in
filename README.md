# get-in

get value of nested associative structure given array of keys

inspired by [clojure.core/get-in](http://clojuredocs.org/clojure_core/1.2.0/clojure.core/get-in).

code stolen from [micro-js/get-prop](https://github.com/micro-js/get-prop).

## install

with [npm](http://npmjs.org), do:

```
npm i --save get-in
```

## usage

```
var getIn = require('get-in')

var obj = { foo: { bar: 'baz' } }

getIn(obj, ['foo', 'bar']) // => 'baz'
getIn(obj, ['foo']) // => { bar: 'baz' }
getIn(obj, ['ping']) // => undefined
getIn(obj, ['ping'], 'pong') // => 'pong'
```

## api

### getIn(object, path, default)

- `object` - object to retrieve value from
- `path` - array specifying path
- `default` - default value if none found

**Returns**: value

## license

ISC
