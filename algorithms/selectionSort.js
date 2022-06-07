// Complejidad Temporal -> O(n * n + 9) -> O(n^2)
// Complejidad Espacial -> O()

function selectionSort(array) {
  let length = array.lenght;  //Tiempo: O(1)

  for (let i = 0; i < length; i++) {  //Tiempo: O(n)
    let min = i;  //Tiempo: O(1)
    for (let j = i + 1; j < length; j++) {  //Tiempo: O(n)
      if (array[j] < array[min]) {  //Tiempo: O(1)
        min = j;  //Tiempo: O(1)      
      }   
    }
    if (min != i) {  //Tiempo: O(1)
      let temp = array[i];  //Tiempo: O(1)
      array[i] = array[min];  //Tiempo: O(1)
      array[min] = temp;  //Tiempo: O(1)       
    }    
  }
  return array;  //Tiempo: O(1)
}