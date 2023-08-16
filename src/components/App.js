import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import Header from "./Header";
import itemData from "../data/items";

function App() {
  const [items, setItems] = useState(itemData);
  const [isDarkMode, setIsDarkMode] = useState(false);

  function handleDarkModeClick() {
    setIsDarkMode((isDarkMode) => !isDarkMode);
  }

  // Have to put the function to handle the submission here because we're
  // updating the data which is called here
  function handleItemFormSubmit(newItem) {
    setItems([...items, newItem]);
  }

  // Have to pass down the handleItemFormSubmit twice!
  return (
    <div className={"App " + (isDarkMode ? "dark" : "light")}>
      <Header isDarkMode={isDarkMode} onDarkModeClick={handleDarkModeClick} />
      <ShoppingList items={items} onItemFormSubmit = {handleItemFormSubmit}/>
    </div>
  );
}

export default App;
