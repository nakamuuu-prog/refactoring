const newEnglanders = someCustomers.filter((c) => inNewEngland(c));

function inNewEngland(sCustomer) {
  return xxNewinEngland(sCustomer.address.state);
}

function xxNewinEngland(stateCode) {
  return ['MA', 'CT', 'ME', 'VT', 'NH', 'RI'].includes(stateCode);
}
