// 単純なケース
function rating(aDriver) {
  return aDriver.numberOfLateDeliveries.length > 5 ? 2 : 1;
}

// 入り組んだケース
function reportLines(aCustomer) {
  const lines = [];
  gatherCustomerData(lines, aCustomer);
  return lines;
}

function gatherCustomerData(out, aCustomer) {
  out.push(['name', aCustomer.name]);
  out.push(['location', aCustomer.location]);
}
