function intercambiar(cell1,cell2) {
  var temp = document.getElementById(cell1).className;
  document.getElementById(cell1).className = document.getElementById(cell2).className;
  document.getElementById(cell2).className = temp;
}


function clickcuadro(row,column) {
  var cell = document.getElementById("cell"+row+column);
  var cuadro = cell.className;
  if (cuadro!="cuadro9") { 
       //derecha
       if (column<3) {
         if ( document.getElementById("cell"+row+(column+1)).className=="cuadro9") {
           intercambiar("cell"+row+column,"cell"+row+(column+1));
           return;
         }
       }
       //izquierda
       if (column>1) {
         if ( document.getElementById("cell"+row+(column-1)).className=="cuadro9") {
           intercambiar("cell"+row+column,"cell"+row+(column-1));
           return;
         }
       }
         //arriba
       if (row>1) {
         if ( document.getElementById("cell"+(row-1)+column).className=="cuadro9") {
           intercambiar("cell"+row+column,"cell"+(row-1)+column);
           return;
         }
       }
       //abajo
       if (row<3) {
         if ( document.getElementById("cell"+(row+1)+column).className=="cuadro9") {
           intercambiar("cell"+row+column,"cell"+(row+1)+column);
           return;
         }
       } 
  }
  
}