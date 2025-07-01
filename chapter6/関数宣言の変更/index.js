const newEnglanders = someCustomers.filter((c) => inNewEngland(c));

function inNewEngland(sCustomer) {
  return ['MA', 'CT', 'ME', 'VT', 'NH', 'RI'].includes(sCustomer.address.state);
}
