export const printArray = (arr: number[], i: number = arr.length - 1) => {
    if (i >= 0) {
      printArray(arr, i - 1);
      console.log(`Elemento ${i}: `, arr[i]);
    }
  };
  
  const arr = [1,2,3,4,5,6,7,8,9,10]

  printArray(arr)