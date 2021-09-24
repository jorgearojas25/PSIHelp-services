class result {
  constructor(result, entities, messages) {
    (this.result = result),
      (this.entities = entities),
      (this.messages = messages);
  }
}

exports.success = (req, res, response, status) => {
  let resp = new result(true, response, []);
  res.status(status || 200).send(resp);
};

exports.error = (req, res, exception, status, log) => {
  console.log(log);
  let err = new result(false, [], exception);
  res.status(status || 500).send(err);
};
