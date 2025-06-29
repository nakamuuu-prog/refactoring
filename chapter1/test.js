// node 1/test.js
const fs = require('fs');
const path = require('path');
const assert = require('assert');
const { statement } = require('./index');

const invoice = JSON.parse(
  fs.readFileSync(path.join(__dirname, 'invoices.json'), 'utf-8')
);
const plays = JSON.parse(
  fs.readFileSync(path.join(__dirname, 'plays.json'), 'utf-8')
);

// 期待される出力（trim()で末尾改行無視）
const expectedOutput = `
Statement for BigCo
  Hamlet: $650.00 (55 seats)
  As You Like It: $580.00 (35 seats)
  Othello: $500.00 (40 seats)
Amount owed is $1,730.00
You earned 47 credits
`.trim();

// 実際の出力
const actualOutput = statement(invoice[0], plays).trim();

// テスト
console.log('----- テスト開始 -----');
console.log();
try {
  assert.strictEqual(actualOutput, expectedOutput);
  console.log('✅ テスト成功：出力は期待通りです');
} catch (e) {
  console.error('❌ テスト失敗：出力が期待と異なります');
  console.error('---- 実際の出力 ----');
  console.error(actualOutput);
  console.error('---- 期待される出力 ----');
  console.error(expectedOutput);
}
console.log();
console.log('----- テスト終了 ----- ');
