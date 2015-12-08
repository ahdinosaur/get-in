var test = require('tape');
var getIn = require('../');

test.skip("non-Array path", function (t) {
  t.equal(getIn({ "a": { "b": "c" }}, undefined), undefined);
  t.equal(getIn({ "a": { "b": "c" }}, "a.b"), undefined);
  t.equal(getIn({ "a": { "b": "c" }}, { "a": "b"}), undefined);
  t.end();
});

test("an empty path", function (t) {
  t.equal(getIn("object", []), "object");
  t.end();
});

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

test("a two-level path into arrays", function (t) {
  t.equal(
    getIn(
      [
        "a",
        [
          "b",
          "c",
        ],
      ],
      [1, 1]
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

test("a path that resolves to null property", function (t) {
  t.equal(
    getIn(
      {
        "a": {
          "b": null,
        },
      },
      ["a", "b"]
    ),
    null
  );
  t.end();
});

test("object with custom get function", function (t) {
  function Obj (props) {
    this.props = props;
  }
  Obj.prototype.get = function get (key) {
    return this.props[key];
  };

  t.equal(
    getIn(
      new Obj({
        "a": new Obj({
          "b": "c"
        }),
      }),
      ["a", "b"]
    ),
    "c"
  );
  t.end();
});

test("returns undefined when object too shallow", function(t) {
  t.equal(getIn(null, [0, 0]), undefined);
  t.end();
});

test("supports default value for unmatched", function(t) {
  t.equal(getIn(null, [0, 0], "default"), "default");
  t.equal(getIn({}, ["missing"], "default"), "default");
  t.end();
});
