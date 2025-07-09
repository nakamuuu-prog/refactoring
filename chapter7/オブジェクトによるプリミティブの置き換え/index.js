class Priority {
  constructor(value) {
    this._value = value;
  }
  toString() {
    return this._value;
  }
}

class Order {
  constructor(data) {
    this.priority = data.priority;
  }
  get priority() {
    return this._priority.toString();
  }
  set priority(aString) {
    this._priority = new Priority(aString);
  }
}

highPriorityCount = orders.filter(
  (o) => 'high' === o.priority || 'rush' === o.priority
);
