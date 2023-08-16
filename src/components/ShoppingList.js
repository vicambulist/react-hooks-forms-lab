import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items, onItemFormSubmit }) {
  const [selectedCategory, setSelectedCategory] = useState("All");

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  //Set state for the search bar
  const [search, setSearch] = useState("")

  function handleSearch(e) {
    setSearch(e.target.value)
  }

  // const itemsToDisplay = items.filter((item) => {
  //   if (selectedCategory === "All") return true;
  //   return item.category === selectedCategory;    
  // });

  // We can chain filters after filters! So refactor the itemsToDisplay
  // from above, removing returns so tha twe can display what we need:

  const itemsToDisplay = 
    items.filter((item) => selectedCategory === "All" ? true : item.category === selectedCategory)
      .filter((item) => item.name.toLowerCase().includes(search.toLowerCase()))
    

  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit={onItemFormSubmit}/>
      <Filter onCategoryChange={handleCategoryChange} onSearchChange = {handleSearch}/>
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
