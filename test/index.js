var test = require('tape');
var getIn = require('../');

test("a simple path", function (t) {
  t.equal(
    getIn(
      {
        "a": "b",
      },
      ["a"]
    ),
    "b"
  );
  t.end();
});

test("a two-level path", function (t) {
  t.equal(
    getIn(
      {
        "a": {
          "b": "c",
        },
      },
      ["a", "b"]
    ),
    "c"
  );
  t.end();
});

test("an unresolved path", function (t) {
  t.equal(
    getIn(
      {
        "a": {
          "b": "c",
        },
      },
      ["a", "x"]
    ),
    undefined
  );
  t.end();
});

test("a path that resolves to undefined property", function (t) {
  t.equal(
    getIn(
      {
        "a": {
          "b": undefined,
        },
      },
      ["a", "b"]
    ),
    undefined
  );
  t.end();
});
