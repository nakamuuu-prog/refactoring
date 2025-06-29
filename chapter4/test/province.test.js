import { Province } from '../index.js';
import { expect } from 'chai';

describe('province', function () {
  let asia;
  beforeEach(function () {
    asia = new Province(sampleProvinceData());
  });
  it('shortfall', function () {
    expect(asia.shortfall).equal(5);
  });
  it('profit', function () {
    expect(asia.profit).equal(230);
  });
});

function sampleProvinceData() {
  return {
    name: 'Asia',
    producers: [
      { name: 'Byzantium', cost: 10, production: 9 },
      { name: 'Attalia', cost: 12, production: 10 },
      { name: 'Sinope', cost: 10, production: 6 },
    ],
    demand: 30,
    price: 20,
  };
}
