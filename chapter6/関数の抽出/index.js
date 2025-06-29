function printOwing(invoice) {
  let outstanding = 0;

  printBanner();

  // 未払い金の計算 (calculate outstanding)
  for (const o of invoice.orders) {
    outstanding += o.amount;
  }

  recordDueDate(invoice);
  printDetails(invoice, outstanding);

  function printBanner() {
    console.log('**************************');
    console.log('**** Customer Owes ****');
    console.log('**************************');
  }
}

function recordDueDate(invoice) {
  const today = Clock.today;
  invoice.dueDate = new Date(
    today.getFullYear(),
    today.getMonth(),
    today.getDate() + 30
  );
}

function printDetails(invoice, outstanding) {
  console.log(`name: ${invoice.customer}`);
  console.log(`amount: ${outstanding}`);
  console.log(`due: ${invoice.dueDate.toLocaleDateString()}`);
}
