/*
 * Problem 7.1: Max Sum Contiguous Subarray
*/

var maxSubArray = function (nums) {
    let maxSum = nums[0]
    let curSum = 0
  
    for (let i = 0; i < nums.length; i++) {
      if (curSum < 0) {
        curSum = 0
      }
      curSum = curSum + nums[i]
      maxSum = Math.max(maxSum, curSum)
  
    }
    return maxSum
  
  
  };

//   Input 1: A = [1, 2, 3, 4, -10]
  console.log(maxSubArray([1, 2, 3, 4, -10]));
//   Output 1: 10

// Input 2: A = [-2, 1, -3, 4, -1, 2, 1, -5, 4]
console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
// Output 2: 6