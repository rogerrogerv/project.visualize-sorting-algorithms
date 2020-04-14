class QuickSort {
  constructor(array) {
    this.array = array;
    this.sorted;
  }

  sort(inputArray = this.array) {
    if (inputArray.length <= 1) {
      //when the branch/recursion gets down to 1 item left, we output it
      return inputArray;
    } else {
      let sortedArray = [];
      let leftSide = [];
      let rightSide = [];
      let pivot = inputArray.pop(); //we pull out the pivot point (simple style)

      for (let i = 0; i < inputArray.length; i++) {
        //Loop through the array and start the comparisons, anything
        //lower/less than the pivot point we put it on the left side
        //otherwise is must be greater so we put it on the right side
        if (inputArray[i] <= pivot) {
          leftSide.push(inputArray[i]);
        } else {
          rightSide.push(inputArray[i]);
        }
      } // The recursion gets called here and build the output array
      return sortedArray.concat(
        this.sort(leftSide),
        pivot,
        this.sort(rightSide)
      );
    }
  }

  static generateRandomArray(size = 10) {
    let arrayOfRandomness = [];
    for (let i = 0; i < size; i++) {
      arrayOfRandomness.push(Math.floor(Math.random() * Math.floor(100) + 1));
    }
    return arrayOfRandomness;
  }

  // returnValue(value) {
  //   return value;
  // }
}

module.exports = QuickSort;
