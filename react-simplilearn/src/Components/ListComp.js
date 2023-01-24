import React from "react"

function ListComp() {
   const names = ['Masud', 'Ikbal', 'Rana'];
   const listOfNames = names.map((name) => 
        <li>{name}</li> 
   );

   return (
       <ul>{listOfNames}</ul>   
   )
}
export default ListComp;