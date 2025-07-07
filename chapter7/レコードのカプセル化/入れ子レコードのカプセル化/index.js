let customerData;

function getCustomerData() {
  return customerData;
}

function getRawDataOfCustomers() {
  return customerData.rowData;
}

function setRawDataOfCustomers(arg) {
  return (customerData = new CustomerData(arg));
}

class CustomerData {
  constructor(data) {
    this._data = data;
  }
  // すべてのカプセル化ができたことを確認するために、データのディープコピーを返す関数を実装する
  rowData() {
    // ladashライブラリのディープコピーを使う
    return _.cloneDeep(this._data);
  }

  usage(customerID, year, month) {
    return this._data[customerID].usages[year][month];
  }

  setUsage(customerID, year, month, amount) {
    this._data[customerID].usages[year][month] = amount;
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
getCustomerData.setUsage(customerID, year, month, amount);

// sample read...
function compareUsage(customerID, laterYear, month) {
  const later = getCustomerData().usage(customerID, laterYear, month);
  const earlier = getCustomerData().usage(customerID, laterYear - 1, month);
  return { laterAmount: later, change: later - earlier }; //前年同月比較
}
