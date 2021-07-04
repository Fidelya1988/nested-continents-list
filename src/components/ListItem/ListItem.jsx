import React from "react";

function ListItem({ items, hasChildren }) {
  return (
    <>
      {items.map((item) => (
        <li key={item.code}>
          <p>{item.name}</p>
    {hasChildren && <ListItem />}
        </li>
      ))}
    </>
  );
}

export default ListItem;
