let customerData;

function getCustomerData() {
  return customerData;
}

function getRawDataOfCustomers() {
  return customerData._data;
}

function setRawDataOfCustomers(arg) {
  return (customerData = new CustomerData(arg));
}

class CustomerData {
  constructor(data) {
    this._data = data;
  }
}

setRawDataOfCustomers({
  1920: {
    name: 'martin',
    id: '1920',
    usages: {
      2016: {
        1: 50,
        2: 55,
        // 3 月分以降は省略
      },
      2015: {
        1: 70,
        2: 63,
        // 3 月分以降は省略
      },
    },
  },
});

// sample update...
function setUsage(customerID, year, month, amount) {
  getRawDataOfCustomers()[customerID].usages[year][month] = amount;
}
setUsage(customerID, year, month, amount);

// sample read...
function compareUsage(customerID, laterYear, month) {
  const later = getRawDataOfCustomers()[customerID].usages[laterYear][month];
  const earlier =
    getRawDataOfCustomers()[customerID].usages[laterYear - 1][month];
  return { laterAmount: later, change: later - earlier }; //前年同月比較
}
