const Sort = require("../src/Sort");
const { expect } = require("chai");

describe("Sort", () => {
  it("should be a function", () => {
    expect(Sort).to.be.a("function");
  });

  it("should have a sort method", () => {
    expect(Sort.prototype.sort).to.be.a("function");
  });

  it("should sort [1]", () => {
    let newQuickSort = new Sort([1]);
    expect(newQuickSort.sort()).to.be.deep.equal([1]);
  });

  it("should sort [2, 1]", () => {
    let newQuickSort = new Sort([2, 1]);
    expect(newQuickSort.sort()).to.be.deep.equal([1, 2]);
  });

  it("should sort [1]", () => {
    let newQuickSort = new Sort([2, 2, 1]);
    expect(newQuickSort.sort()).to.be.deep.equal([1, 2, 2]);
  });
});
