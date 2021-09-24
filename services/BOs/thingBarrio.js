class Thing {
  constructor(data) {
    this.TestName = data.TestName;
    this.Active = data.Active;
    this.NumberProp = data.NumberProp;
    this.DateProp = data.DateProp;
    this.NumberRangeProp = data.NumberRangeProp;
    this.ArrayProp = data.ArrayProp;
    this._SomeId = data._SomeId;
  }
}

module.exports = Thing;
