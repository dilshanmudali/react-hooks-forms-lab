import {useState} from "react";
import { v4 as uuid } from "uuid";

function ItemForm({onItemFormSubmit}) {

  const [name, setName] = useState("")
  const [category, setCategory] = useState("produce")

  function handleNameChange(e){
    setName(e.target.value)
    // console.log('name Change', e.target.value)
  }

  function handleCategoryChange(e){
    setCategory(e.target.value)
    // console.log('category')
  }
  
  function handleSubmit(e){
    e.preventDefault()
    onItemFormSubmit({
      id: uuid(),
      name,
      category
    })
  }

  return (
    <form 
      onSubmit = {handleSubmit}
      className="NewItem">
      <label>
        Name:
        <input type="text" name="name" 
          value = {name}
          onChange = {handleNameChange}
        />
      </label>

      <label>
        Category:
        <select name="category" 
          value={category}
          onChange = {handleCategoryChange}
        >
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
