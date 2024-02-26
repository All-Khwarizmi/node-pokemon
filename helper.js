module.exports.succes = (res, message, data) => {
  res.status(200).json({
    message,
    data,
  });
};

module.exports.error = (res) => {
  res.status(500).json({
    message: "Internal Server Error",
  });
};

module.exports.notFound = (res, message) => {
  res.status(404).json({
    message,
  });
};
