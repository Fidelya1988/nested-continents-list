import React, {useContext} from "react";
import { HelpersContext } from "../..";

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
