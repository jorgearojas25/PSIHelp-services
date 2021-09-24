const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const mySchema = new Schema({
  //* Find more examples at moongose documentation
  TestName: { type: String, required: true, default: "" },
  Active: { type: Boolean, default: true },
  NumberProp: { type: Number, default: 0 },
  DateProp: { type: Date, default: Date.now },
  NumberRangeProp: { type: Number, min: 0, max: 10 },
  ArrayProp: { type: Array },
  _SomeId: { type: Schema.Types.ObjectId },
});

const model = mongoose.model("Thing", mySchema);
module.exports = model;
