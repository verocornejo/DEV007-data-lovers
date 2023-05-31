// estas funciones son de ejemplo

export const sortName = () => {
  pokemones.sort((a,b) => {
  if(a.name.pokemon < b.name.pokemon) { 
    return -1; } //si el nombre de a es menor que el de b, lo posiciona primero
  if(a.name.pokemon > b.name.pokemon) { 
    return 1; } //si el nombre de a es mayor que el de b, lo posiciona despues
  return 0; // si el nombre de a es igual al de b, no los cambia de posicion
  });
  contenedor.innerHTML = "";
  mostrarPokemones(pokemones);
  };
  //para llamar la funcion en el html Ordenar por nombre