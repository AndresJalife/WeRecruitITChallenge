// Given two arrays of integers, compute the pair of values (one value in each array) 
// with the smallest (non-negative) difference. Return the difference.

function smallestDifference(a, b){
	a.sort((i,n) => i-n);
	b.sort((i,n) => i-n);
	let smallestD = -1;
	let i = 0;
	let n = 0;

	while (i < a.length || n < b.length) {
		const actDif = Math.abs(a[i] - b[n]);
		if (smallestD < 0 || actDif < smallestD) {
			smallestD = actDif;
		}

		if (a[i] < b[n]) i += 1;
		else n += 1;
	}
	return smallestD;
}

// The idea of this solution is to sort both arrays in order to have two pointers i and n, 
// pointing to a and b respectively and always pointing to smallest element of each one. 
// We will then make a while loop until both arrays are covered 
// (having a time complexity of O(n + m), where n is the length of a, and m the length of b).
// In each loop we will check if the difference of the elements pointing are smaller than the partial smallest.
// We then will increase the pointer that has the smallest element, so we will always have the minimum difference (as it's ordered). 
