module.exports.add = function () {
  return { type: "add" };
};

module.exports.remove = function () {
  return { type: "remove" };
};

module.exports.addN = function (n) {
  return { type: "add-n", payload: n };
};
