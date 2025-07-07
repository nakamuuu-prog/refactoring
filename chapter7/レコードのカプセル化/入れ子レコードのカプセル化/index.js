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

// sample update...
customerData[customerID].usages[year][month] = amount;

// sample read...
function compareUsage(customerID, laterYear, month) {
  const later = customerData[customerID].usages[laterYear][month];
  const earlier = customerData[customerID].usages[laterYear - 1][month];
  return { laterAmount: later, change: later - earlier }; //前年同月比較
}
