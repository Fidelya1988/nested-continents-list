import React from "react";

const getChildArray = (obj) => {
  for (const key in obj) {
    if (obj[key] instanceof Array) return obj[key];
  }
};

function ListItem({ items }) {
  return (
    <>
      {items.map((item) => (
        <li key={item.code}>
          <p>{item.name}</p>
         <ul>{getChildArray(item) && <ListItem items={getChildArray(item)} />} </ul> 
        </li>
      ))}
    </>
  );
}

export default ListItem;
