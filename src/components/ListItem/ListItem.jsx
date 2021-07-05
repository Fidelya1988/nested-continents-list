import React, {useContext} from "react";
import { HelpersContext } from "../..";

// const getChildArray = (obj) => {
//   for (const key in obj) {
//     if (obj[key] instanceof Array) return obj[key];
//   }
// };

// const getSelectedItem =(code, items) => {
// for(const key in items) {
//   if (items[key]===code) return items[key]
// }
// }
function ListItem({ items, selectedItem, handleSelect }) {
const {getChildArray, getSelectedItem } = useContext(HelpersContext)
  return (
    <>
      {items.map((item) => (
        <li key={item.code}>
          <p onClick={() => handleSelect(item.code)}>{item.name}</p>
          {getSelectedItem(item.code, selectedItem) && (
            <ul>
              {" "}
              <ListItem
                items={getChildArray(item)}
                handleSelect={getChildArray(item) && handleSelect}
                selectedItem={getChildArray(item) && selectedItem}
              />
            </ul>
          )}
        </li>
      ))}
    </>
  );
}

export default ListItem;
