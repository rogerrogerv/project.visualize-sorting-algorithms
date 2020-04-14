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
    expect(newQuickSort.sort()).to.deep.equal([1]);
  });

  it("should sort [2, 1]", () => {
    let newQuickSort = new Sort([2, 1]);
    expect(newQuickSort.sort()).to.deep.equal([1, 2]);
  });

  it("should sort [2, 2, 1, 3, 1, 3]", () => {
    let newQuickSort = new Sort([2, 2, 1, 3, 1, 3]);
    expect(newQuickSort.sort()).to.deep.equal([1, 1, 2, 2, 3, 3]);
  });

  it("should sort any size array of random numbers", () => {
    let smallArray = Sort.generateRandomArray(10);
    let largeArray = Sort.generateRandomArray(1000);
    let smallCopy = JSON.parse(JSON.stringify(smallArray));
    let smallQuickSort = new Sort(smallArray);
    let largeCopy = JSON.parse(JSON.stringify(largeArray));
    let largeQuickSort = new Sort(largeArray);
    expect(smallQuickSort.sort()).to.deep.equal(
      smallCopy.sort((a, b) => a - b)
    );
    expect(largeQuickSort.sort()).to.deep.equal(
      largeCopy.sort((a, b) => a - b)
    );
  });

  describe("generateRandomArray()", () => {
    it("should be a function", () => {
      expect(Sort.generateRandomArray).to.be.a("function");
    });
    it("should return various size arrays, depending on input", () => {
      let oneSizeArray = Sort.generateRandomArray(1);
      let tenSizeArray = Sort.generateRandomArray(10);
      let aHundredSizeArray = Sort.generateRandomArray(100);
      expect(oneSizeArray.length).to.equal(1);
      expect(tenSizeArray.length).to.equal(10);
      expect(aHundredSizeArray.length).to.equal(100);
    });
    it("should return arrays containing random numbers (1-100)", () => {
      let firstArray = Sort.generateRandomArray(10);
      let secondArray = Sort.generateRandomArray(10);
      let newQuickSort1 = new Sort(firstArray);
      let newQuickSort2 = new Sort(secondArray);
      expect(newQuickSort1.array).to.not.equal(newQuickSort2.array);
    });
  });
});
