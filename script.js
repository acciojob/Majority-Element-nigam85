//your code here
function majorityElement(nums) {
  let majority = nums[0];
  let count = 1;

  for (let i = 1; i < nums.length; i++) {
    if (count === 0) {
      majority = nums[i];
      count = 1;
    } else if (nums[i] === majority) {
      count++;
    } else {
      count--;
    }
  }

  return majority;
}

// Example usage:
const input = [2, 1, 2];
const result = majorityElement(input);
console.log(result); // Output: 2
