const array = [4,8,7,6,9,8,1,7,2,1,0,];
const quicksortarr = [];

function numberadd(){
    let x = document.getElementById("numb").value;
    array.push(x);
    console.log(array)
}

function quicksort(){
  let pivot = array[Math.floor(array.length / 2)];
  let leftArr = [];
  let rightArr = [];

  for (let i = 1; i < array.length; i++) {
    if (array[i] < pivot) {
      leftArr.push(array[i]);
    } else {
      rightArr.push(array[i]);
    }
  }

  console.log(leftArr);
  console.log(pivot);
  console.log(rightArr);
}