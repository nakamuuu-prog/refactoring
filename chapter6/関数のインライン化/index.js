// 単純なケース
function rating(aDriver) {
  return aDriver.numberOfLateDeliveries.length > 5 ? 2 : 1;
}

// 入り組んだケース
function reportLines(aCustomer) {
  const lines = [];
  lines.push(['name', aCustomer.name]);
  lines.push(['location', aCustomer.location]);
  return lines;
}
