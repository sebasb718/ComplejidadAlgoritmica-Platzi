// Complejidad Temporal -> O(n * n + 6) -> O(n^2)
// Complejidad Espacial -> O(n + 4) -> O(n)
// Espacio auxiliar  = Complejidad espacial - espacio datos de entrada = O(4) = O(1)

function bubbleSort(array) {  //Espacio: array -> O(n)
  let length = array.lenght; //Tiempo: O(1) //Espacio: lenght -> O(1)
  for (let i = 0; i < length; i++) {  //Tiempo: O(n)  //Espacio: i -> O(1)
    for (let j = 0; j < length; j++) {  //Tiempo: O(n)  //Espacio: j -> O(1)
      if (array[j] > array[j+1]) {  //Tiempo: O(1)
        let temp = array[j];  //Tiempo: O(1)  //Espacio: temp -> O(1)
        array[j] = array[j+1];  //Tiempo: O(1)
        array[j+1] = temp;  //Tiempo: O(1)       
      }
    }    
  }
  return array;  //Tiempo: O(1)
}