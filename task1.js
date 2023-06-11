// 1 TASK
const array = [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20];

const answer = (arr) => {
    let sortedArray = arr.sort(function(a, b){return a - b});
    // creating a sorted list in ascending order

    let newArray = [sortedArray[0]];
    // creating a new temporary array that holds the values of the items in the array that are the same
    let finalArray = [];
    // the final output array
    for(let i=0; i<sortedArray.length; i++) {
        if(sortedArray[i] === sortedArray[i+1]) 
        {
            newArray.push(sortedArray[i+1])
        } 
        else 
        {
            (newArray.length !== 1) ? finalArray.push(newArray) : finalArray.push(sortedArray[i])
            newArray = [sortedArray[i+1]];
        }
    }
    // this code checks whether the two elements that are next to each other are equal. 
    // If they are equal it puts the value of the second element into newArray. If not it checks the number of elements in the newArray
    // If the number of elements in the newArray are larger than 1, code pushes the array into the final array. 
    // If the number of elements in the newArray is 1, it pushes it into the final array not as array but as element
    // In the end new array holds the value of the next element only

    return finalArray;
}
answer(array);

//BONUS
// use typeof to know whether each element is num or string. 
// if it is num type put it inside arr1, if string put inside arr2
// then at the end put both at final arr.

const array2 = [1, "2", "3", 2];

const answer2 = (arr) => {
    let numArray = [];
    let stringArray = [];
    let finalArray = [];

    for (item of arr) {
        if(typeof item === 'number')
        {
            numArray.push(item);
        } else if (typeof item === 'string')
        {
            stringArray.push(item);
        }
    }
    finalArray.push(numArray, stringArray);
    return finalArray;
}
answer2(array2);