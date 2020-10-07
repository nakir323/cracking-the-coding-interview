const { ConsoleReporter } = require("jasmine");

const bubbleSort = require("./sort").bubbleSort;
const selectionSort = require("./sort").selectionSort;
const mergeSort = require("./sort").mergeSort;

jasmine.getEnv().addReporter(ConsoleReporter())

// describe("Test bubbleSort function", function () {
//   it("[] should be []", function () {
//     const arg = [];
//     const want = [];
//     bubbleSort(arg);
//     expect(arg).toEqual(want);
//   });
//   it("[1] should be [1]", function () {
//     const arg = [1];
//     const want = [1];
//     bubbleSort(arg);
//     expect(arg).toEqual(want);
//   });
//   it("[1, 2] should be [1, 2]", function () {
//     const arg = [1, 2];
//     const want = [1, 2];
//     bubbleSort(arg);
//     expect(arg).toEqual(want);
//   });
//   it("[4, 3] should be [3, 4]", function () {
//     const arg = [4, 3];
//     const want = [3, 4];
//     bubbleSort(arg);
//     expect(arg).toEqual(want);
//   });
//   it("[1, 2, 3, 4, 5] should be [1, 2, 3, 4, 5]", function () {
//     const arg = [1, 2, 3, 4, 5];
//     const want = [1, 2, 3, 4, 5];
//     bubbleSort(arg);
//     expect(arg).toEqual(want);
//   });
//   it("[3, 2, 1] should be [1, 2, 3]", function () {
//     const arg = [3, 2, 1];
//     const want = [1, 2, 3];
//     bubbleSort(arg);
//     expect(arg).toEqual(want);
//   });
//   it("[3, 4, 1, 3837, 7, -3] should be [-3, 1, 3, 4, 7, 3837]", function () {
//     const arg = [3, 4, 1, 3837, 7, -3];
//     const want = [-3, 1, 3, 4, 7, 3837]
//     bubbleSort(arg);
//     expect(arg).toEqual(want);
//   });
// });

// describe("Test selectionSort function", function () {
//   it("[] should be []", function () {
//     const arg = [];
//     const want = [];
//     selectionSort(arg);
//     expect(arg).toEqual(want);
//   });
//   it("[1] should be [1]", function () {
//     const arg = [1];
//     const want = [1];
//     selectionSort(arg);
//     expect(arg).toEqual(want);
//   });
//   it("[1, 2] should be [1, 2]", function () {
//     const arg = [1, 2];
//     const want = [1, 2];
//     selectionSort(arg);
//     expect(arg).toEqual(want);
//   });
//   it("[4, 3] should be [3, 4]", function () {
//     const arg = [4, 3];
//     const want = [3, 4];
//     selectionSort(arg);
//     expect(arg).toEqual(want);
//   });
//   it("[1, 2, 3, 4, 5] should be [1, 2, 3, 4, 5]", function () {
//     const arg = [1, 2, 3, 4, 5];
//     const want = [1, 2, 3, 4, 5];
//     selectionSort(arg);
//     expect(arg).toEqual(want);
//   });
//   it("[3, 2, 1] should be [1, 2, 3]", function () {
//     const arg = [3, 2, 1];
//     const want = [1, 2, 3];
//     selectionSort(arg);
//     expect(arg).toEqual(want);
//   });
//   it("[3, 4, 1, 3837, 7, -3] should be [-3, 1, 3, 4, 7, 3837]", function () {
//     const arg = [3, 4, 1, 3837, 7, -3];
//     const want = [-3, 1, 3, 4, 7, 3837]
//     selectionSort(arg);
//     expect(arg).toEqual(want);
//   });
// });

describe("Test mergeSort function", function () {
  it("[] should be []", function () {
    const arg = [];
    const want = [];
    expect(mergeSort(arg)).toEqual(want);
  });
  it("[1] should be [1]", function () {
    const arg = [1];
    const want = [1];
    expect(mergeSort(arg)).toEqual(want);
  });
  it("[1, 2] should be [1, 2]", function () {
    const arg = [1, 2];
    const want = [1, 2];
    expect(mergeSort(arg)).toEqual(want);
  });
  it("[4, 3] should be [3, 4]", function () {
    const arg = [4, 3];
    const want = [3, 4];
    expect(mergeSort(arg)).toEqual(want);
  });
  it("[1, 2, 3, 4, 5] should be [1, 2, 3, 4, 5]", function () {
    const arg = [1, 2, 3, 4, 5];
    const want = [1, 2, 3, 4, 5];
    expect(mergeSort(arg)).toEqual(want);
  });
  it("[3, 2, 1] should be [1, 2, 3]", function () {
    const arg = [3, 2, 1];
    const want = [1, 2, 3];
    expect(mergeSort(arg)).toEqual(want);
  });
  it("[3, 4, 1, 3837, 7, -3] should be [-3, 1, 3, 4, 7, 3837]", function () {
    const arg = [3, 4, 1, 3837, 7, -3];
    const want = [-3, 1, 3, 4, 7, 3837]
    expect(mergeSort(arg)).toEqual(want);
  });
});
