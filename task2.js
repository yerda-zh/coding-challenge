// 2 TASK
// Function that takes an array of numbers and a target number.
// there should be two loops. the first loop runs the items to assign it to first num
// the second loop runs the the same items, except when the first item is equal to second item, 
// to assign to second num. Once the code finds two numbers that equal the target number it pushes 
// the ans array.
// and returns it so that the code won't run further to give 2 pairs that are identical.

const answer = (arr, targetNum) => {
	let ans = [];
	for (item1 of arr)
	{
		for (item2 of arr)
		{
			if (item1 === item2) { continue; }
			if (item1 + item2 === targetNum) {
				ans.push(item1, item2);
				return ans;
			}
		}
	}
}
answer([1,2,3], 4);