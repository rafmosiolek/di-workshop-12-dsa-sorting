const { performance } = require('perf_hooks');

const bubbleSort = require('./bubbleSortAlgo');
const mergeSort = require('./mergeSortAlgo');
const insertionSort = require('./insertionSortAlgo');


let list = Array.from({length: 100}, () => Math.floor(Math.random() * 1000));

const t0 = performance.now();
bubbleSort(list);
const t1 = performance.now();

const t2 = performance.now();
mergeSort(list);
const t3 = performance.now();

const t4 = performance.now();
insertionSort(list);
const t5 = performance.now();

console.log("To sort given list,\nbubbleSort took " + (t1 - t0) + " ms,\nmergeSort took " + (t3 - t2) + " ms,\nand insertionSort took " + (t5 - t4) + " ms.")



