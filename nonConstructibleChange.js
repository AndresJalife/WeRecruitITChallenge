// Given an array of positive integers representing the values of coins in your possession, 
// write a function that returns the minimum amount of change (the minimum sum of money) 
// that you **cannot** create. The given coins can have any positive integer value and aren’t 
// necessarily unique (i.e., you can have multiple coins of the same value).
//  If you’re given no coins, the minimum amount of change that you can’t create is 1.

function nonConstructibleChange(coins){
	if (coins.length == 0) return 1;
	coins.sort((a,b) => a-b);
	if (coins[0] != 1) return 1;
	let minValue = 0;
	for (let coin of coins) {
		if (coin > minValue + 1) return minValue + 1;
		minValue += coin;
	}
	return minValue;
}

// For this exercise I already had some thoughts on the solution since I had already done it before.
// We begin by sorting the array in order to start with the minimum amount, and in each loop continue with the next min.

// We will iterate through the coins and in each loop:
// - The minValue will have the minimum change that we can create 
//   (if we have 4, we can create 1, 2, 3, 4)

// - The next coin shoud be at most the minValue + 1 (as it's ordered), 
//   otherwise we wouldn't be able to create that change.

// - If we have a minimum value of 5, and the next coin is 7 (minValue + 2), 
//   there is no way that we can create 6 (minValue + 1) because all coins left are equal or greater that 7.