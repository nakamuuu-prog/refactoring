export function statement(invoice, plays) {
  const statementData = {};
  statementData.customer = invoice.customer;
  statementData.performances = invoice.performances.map(enrichPerformance);
  statementData.totalAmount = totalAmount(statementData);
  statementData.totalVolumeCredits = totalVolumeCredits(statementData);
  return renderPlainText(statementData, plays);

  function enrichPerformance(aPerformance) {
    const result = Object.assign({}, aPerformance);
    result.play = playFor(result);
    result.amount = amountFor(result);
    result.volumeCredits = volumeCreditsFor(result);
    return result;
  }

  function playFor(aPerformance) {
    return plays[aPerformance.playID];
  }

  function amountFor(aPerformances) {
    let result = 0;

    switch (aPerformances.play.type) {
      case 'tragedy':
        result = 40000;
        if (aPerformances.audience > 30) {
          result += 1000 * (aPerformances.audience - 30);
        }
        break;
      case 'comedy':
        result = 30000;
        if (aPerformances.audience > 20) {
          result += 10000 + 500 * (aPerformances.audience - 20);
        }
        result += 300 * aPerformances.audience;
        break;
      default:
        throw new Error(`unknown type: ${playFor(aPerformances).type}`);
    }

    return result;
  }

  function volumeCreditsFor(aPerformance) {
    let result = 0;
    // ボリューム特典のポイントを加算
    result += Math.max(aPerformance.audience - 30, 0);
    // 喜劇のときは 10 人につき、さらにポイントを加算
    if ('comedy' === aPerformance.play.type)
      result += Math.floor(aPerformance.audience / 5);

    return result;
  }

  function totalAmount(data) {
    return data.performances.reduce((total, p) => total + p.amount, 0);
  }

  function totalVolumeCredits(data) {
    return data.performances.reduce((total, p) => total + p.volumeCredits, 0);
  }
}

function renderPlainText(data, plays) {
  let result = `Statement for ${data.customer}\n`;
  for (let perf of data.performances) {
    result += `  ${perf.play.name}: ${usd(perf.amount / 100)} (${
      perf.audience
    } seats)\n`;
  }
  result += `Amount owed is ${usd(data.totalAmount / 100)}\n`;
  result += `You earned ${data.totalVolumeCredits} credits\n`;
  return result;

  function usd(aNumber) {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2,
    }).format(aNumber);
  }
}
