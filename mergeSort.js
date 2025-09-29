const mergeSort = (nums) =>{
    if (nums.length <= 1) return nums
    const mid = Math.floor(nums.length/2)
    
    let leftSide = nums.slice(0,mid)
    let rightSide = nums.slice(mid,nums.length)

    leftSide = mergeSort(leftSide)
    rightSide = mergeSort(rightSide)

    const sortedNums = []

    while (leftSide.length > 0 && rightSide.length > 0) {
        if (leftSide[0] < rightSide[0]) {
            sortedNums.push(leftSide.shift())
            
        }  else {
            sortedNums.push(rightSide.shift())
            
        }

    } 

    sortedNums.push(...leftSide)
    sortedNums.push(...rightSide)

    return sortedNums

}

console.log(mergeSort([1,5,2,5,7,10]))