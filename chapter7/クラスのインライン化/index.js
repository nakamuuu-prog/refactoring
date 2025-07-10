aShipment.shippingCompany = request.vendor;

class Shipment {
  get trackingInfo() {
    return `${this.shippingCompany}: ${this.trackingNumber}`;
  }

  get shippingCompany() {
    return this.shippingCompany;
  }
  set shippingCompany(arg) {
    this.shippingCompany = arg;
  }

  get trackingNumber() {
    return this.trackingNumber;
  }
  set trackingNumber(arg) {
    this.trackingNumber = arg;
  }
}
