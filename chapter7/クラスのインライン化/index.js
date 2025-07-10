aShipment.shippingCompany = request.vendor;

class TrackingInformation {
  get shippingCompany() {
    return this._shippingCompany;
  }
  set shippingCompany(arg) {
    this._shippingCompany = arg;
  }

  get trackingNumber() {
    return this._trackingNumber;
  }
  set trackingNumber(arg) {
    this._trackingNumber = arg;
  }

  get display() {
    return `${this.shippingCompany}: ${this.trackingNumber}`;
  }
}

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
