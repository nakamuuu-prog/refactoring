const customerData = {
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
};

function getRawDataOfCustomers() {
  return customerData;
}

function setRawDataOfCustomers(arg) {
  return (customerData = arg);
}

// sample update...
getRawDataOfCustomers()[customerID].usages[year][month] = amount;

// sample read...
function compareUsage(customerID, laterYear, month) {
  const later = getRawDataOfCustomers()[customerID].usages[laterYear][month];
  const earlier =
    getRawDataOfCustomers()[customerID].usages[laterYear - 1][month];
  return { laterAmount: later, change: later - earlier }; //前年同月比較
}
