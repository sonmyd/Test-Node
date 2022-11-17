exports.success = function (req, res, message) {
  res.send({
    body: message,
  });
};
exports.error = function (req, res, err) {
  res.send({
    error: err,
  });
};
