// Complejidad Temporal -> O(n * n + 6) -> O(n^2)
// Complejidad Espacial -> O()

function bubbleSort(array) {
  let length = array.lenght; //Tiempo: O(1)
  for (let i = 0; i < length; i++) {  //Tiempo: O(n)
    for (let j = 0; j < length; j++) {  //Tiempo: O(n)
      if (array[j] > array[j+1]) {  //Tiempo: O(1)
        let temp = array[j];  //Tiempo: O(1)
        array[j] = array[j+1];  //Tiempo: O(1)
        array[j+1] = temp;  //Tiempo: O(1)       
      }
    }    
  }
  return array;  //Tiempo: O(1)
}