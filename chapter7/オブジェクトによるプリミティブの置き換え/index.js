class Order {
  constructor(data) {
    this.priority = data.priority;
  }
}

highPriorityCount = orders.filter(
  (o) => 'high' === o.priority || 'rush' === o.priority
);
