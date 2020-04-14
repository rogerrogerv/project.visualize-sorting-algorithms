class QuickSort {
  constructor(array) {
    this.array = array;
    this.sorted;
  }

  sort(array) {
    array = this.array;
    if (array.length < 2) {
      return array;
    } else {
      let tempArray,
        leftSide,
        rightSide = [];
      let pivot = array.pop();

      for (let i = 0; i < array.length; i++) {
        if (array[i] <= pivot) {
          leftSide.push(array[i]);
        } else {
          rightSide.push[array[i]];
        }
      }
      return tempArray.concat(this.sort(leftSide), pivot, this.sort(rightSide));
    }
  }
  // let tempArray = this.array;

  // if (this.array[0] > this.array[1]) {
  //   tempArray[1] = this.array[0];
  //   tempArray[0] = this.array[1];
  // }

  // this.sorted = this.array;
  // console.log("sort!");
  // return this.sorted;

  /*
    select pivot Point;

    compare all elements of array with pivot element;
    -if the first element is less than the pivot, move left pointer
    to the right (+1 to left )

    same operations on left side of pivot and right side of pivot;


    */

  //   if (list.length < 2)
  //     return list;  let pivot = list[0];
  //   let left  = [];
  //   let right = [];  for (let i = 1, total = list.length; i < total; i++){
  //     if (list[i] < pivot)
  //       left.push(list[i]);
  //     else
  //       right.push(list[i]);
  //   }  return [
  //     ...quickSort(left),
  //     pivot,
  //     ...quickSort(right)
  //   ];
  // };
  // }

  returnValue(value) {
    return value;
  }

  // swap(items, leftIndex, rightIndex) {
  //   var temp = items[leftIndex];
  //   items[leftIndex] = items[rightIndex];
  //   items[rightIndex] = temp;
  // }
}

module.exports = QuickSort;
