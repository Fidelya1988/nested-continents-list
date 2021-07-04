import React from "react";

const getChildArray = (obj) => {
  for (const key in obj) {
    if (obj[key] instanceof Array) return obj[key];
  }
};

function ListItem({ items, selectedItem, handleSelect }) {

  return (
    
    <>

      {items.map((item) => (
        <li key={item.code}>
          <p onClick={()=>handleSelect(item.code)}>{item.name}</p>
         {getChildArray(item) && <ul> <ListItem items={getChildArray(item)} handleSelect={handleSelect} selectedItem={selectedItem}/></ul>}  
        </li>
      ))}
    </>
  );
}

export default ListItem;
