class Order {
  constructor(data) {
    this.priority = data.priority;
  }
  get priority() {
    return this._priority;
  }
  set priority(aString) {
    this._priority = aString;
  }
}

highPriorityCount = orders.filter(
  (o) => 'high' === o.priority || 'rush' === o.priority
);
