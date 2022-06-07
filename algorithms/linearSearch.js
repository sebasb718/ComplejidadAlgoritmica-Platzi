// Complejidad Temporal -> O(n + 3) -> O(n)
// Complejidad Espacial -> O()

function linearSearch(array, key){
  for (let index = 0; index < array.length; index++) {  //Tiempo: O(n)
    if (array[index] === key) {  //Tiempo: O(1)
      return index;  //Tiempo: O(1)
    }    
  }
  return -1;  //Tiempo: O(1)
}