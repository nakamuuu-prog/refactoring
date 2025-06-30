function rating(aDriver) {
  return aDriver.numberOfLateDeliveries.length > 5 ? 2 : 1;
}
