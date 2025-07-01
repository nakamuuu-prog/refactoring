const newEnglanders = someCustomers.filter((c) => inNewEngland(c));

function inNewEngland(sCustomer) {
  const stateCode = sCustomer.address.state;
  return xxNewinEngland(stateCode);
}

function xxNewinEngland(stateCode) {
  return ['MA', 'CT', 'ME', 'VT', 'NH', 'RI'].includes(stateCode);
}
