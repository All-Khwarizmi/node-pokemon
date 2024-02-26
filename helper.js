module.exports.succes = (res, message, data) => {
  res.status(200).json({
    message,
    data,
  });
};

module.exports.error = (res, message) => {
  res.status(404).json({
    message,
  });
};

module.exports.notFound = (res) => {
    res.status(404).json({
        message: "Not Found",
    });
    }