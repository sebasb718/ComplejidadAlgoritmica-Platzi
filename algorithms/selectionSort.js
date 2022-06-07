// Complejidad Temporal -> O(n * n + 9) -> O(n^2)
// Complejidad Espacial -> O(n + 5) -> O(n)
// Espacio auxiliar  = Complejidad espacial - espacio datos de entrada = O(5) = O(1)

function selectionSort(array) {  //Espacio: array -> O(n)
  let length = array.lenght;  //Tiempo: O(1)  //Espacio: lenght -> O(1)

  for (let i = 0; i < length; i++) {  //Tiempo: O(n)  //Espacio: i -> O(1)
    let min = i;  //Tiempo: O(1)  //Espacio: min -> O(1)
    for (let j = i + 1; j < length; j++) {  //Tiempo: O(n)  //Espacio: j -> O(1)
      if (array[j] < array[min]) {  //Tiempo: O(1)
        min = j;  //Tiempo: O(1)      
      }   
    }
    if (min != i) {  //Tiempo: O(1)
      let temp = array[i];  //Tiempo: O(1)  //Espacio: temp -> O(1)
      array[i] = array[min];  //Tiempo: O(1)
      array[min] = temp;  //Tiempo: O(1)       
    }    
  }
  return array;  //Tiempo: O(1)
}