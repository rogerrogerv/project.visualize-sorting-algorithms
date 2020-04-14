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
    let newQuickSort0 = new Sort([1]);
    console.log(newQuickSort0, "------------1----------------");
    expect(newQuickSort0.sort()).to.deep.equal([1]);
  });

  it("should sort [2, 1]", () => {
    let newQuickSort1 = new Sort([2, 1]);
    console.log(newQuickSort1, "------------2------------");
    expect(newQuickSort1.sort()).to.deep.equal([1, 2]);
  });

  it("should sort [2, 2, 1]", () => {
    let newQuickSort2 = new Sort([2, 2, 1]);
    console.log(newQuickSort2, "------------2------------");
    expect(newQuickSort2.sort()).to.deep.equal([1, 2, 2]);
  });
});
