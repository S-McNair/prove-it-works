const expect = require('chai').expect;
const Mortgage = require('../../src/js/lib/Mortgage');

describe('Mortgage Calculator', () => {
    let mortgage, mortgage1, mortgage2, mortgage3 = null;

  before(() => {
    mortgage = new Mortgage();
    mortgage1 = new Mortgage(100000, 10, 15, 12);
    mortgage2 = new Mortgage(200000, 3, 30, 12);
    mortgage3 = new Mortgage(375000, 7.5, 30, 12);
    });

    it('should have a Mortgage.monthlyPayment function', () => {
      expect(mortgage.monthlyPayment).to.exist;
    });

    it('should have mortgage1 === 1074.61', () => {
      expect(mortgage1.monthlyPayment()).to.equal('1074.61');
    })

    it('should have mortgage2 === 843.21', () => {
      expect(mortgage2.monthlyPayment()).to.equal('843.21');
    })

    it('should have mortgage3 === 2622.05', () => {
      expect(mortgage3.monthlyPayment()).to.equal('2622.05');
    })

});
