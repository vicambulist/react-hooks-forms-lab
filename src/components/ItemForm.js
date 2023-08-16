import React, {useState} from "react";
import { v4 as uuid } from "uuid";



function ItemForm( {onItemFormSubmit}) {

  // Adding all of this before the return


  // Set state for each item input on the form aka name and selection box of category
  const [name, setName] = useState("")
  const [category, setCategory] = useState("Produce")

  //Write functions for each input
  function handleNameChange(event) {
    setName(event.target.value)
  }

  function handleCategoryChange(event) {
    setCategory(event.target.value)
  }


  // Write a function to handle the inputs, then pass the functions down to the form
  function handleSubmit(event) {
    event.preventDefault()
    //Write a constant to hold the data
    onItemFormSubmit ({
      id: uuid(), //This generates a unique ID
      name: name,
      category: category
    })

  }






  return (
    <form className="NewItem" onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="name" onChange={handleNameChange}/>
      </label>

      <label>
        Category:
        <select name="category" onChange={handleCategoryChange}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
