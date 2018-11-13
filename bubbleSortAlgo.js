const { performance } = require('perf_hooks')

function bubbleSort(a) {
    var swapped;
    do {
    	swapped = false;
    	for (var i=0; i < a.length-1; i++) {
        	if (a[i] > a[i+1]) {
            	var temp = a[i];
            	a[i] = a[i+1];
            	a[i+1] = temp;
            	swapped = true;
        	}
    	}
    } while (swapped);
}
 
// var ary = [34, 203, 3, 746, 200, 984, 198, 764, 9];
var ary = Array.from({length: 100}, () => Math.floor(Math.random() * 900));

var t0 = performance.now();
bubbleSort(ary);
var t1 = performance.now();
console.log(ary);
console.log("Call to bubbleSort(ary) took " + (t1 - t0) + " milliseconds.")

module.exports = bubbleSort;