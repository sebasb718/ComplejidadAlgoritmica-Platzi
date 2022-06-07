// Complejidad Temporal -> O(n + 3) -> O(n)
// Complejidad Espacial -> O(n + 2) -> O(n)
// Espacio auxiliar  = Complejidad espacial - espacio datos de entrada = O(1)

function linearSearch(array, key){  //Espacio: array -> O(n)   key -> O(1)
  for (let index = 0; index < array.length; index++) {  //Tiempo: O(n)  Espacio: index -> O(1)
    if (array[index] === key) {  //Tiempo: O(1) 
      return index;  //Tiempo: O(1)
    }    
  }
  return -1;  //Tiempo: O(1)
}