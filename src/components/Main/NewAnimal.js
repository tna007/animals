import React from "react";

function NewAnimal({ value, submit }) {
  return (
    <div>
      <form>
        <label htmlFor="name">Name</label>
        <input type="text" name="name" onChange={value}></input>

        <label htmlFor="aclass">Class</label>
        <select name="aclass" onChange={value}>
          <option>Mammals</option>
          <option>Birds</option>
        </select>

        <label htmlFor="desc">Description</label>
        <input type="text" name="desc" onChange={value}></input>

        <label htmlFor="link">Link</label>
        <input type="text" name="link" onChange={value}></input>

        <label htmlFor="img">Image</label>
        <input type="text" name="img" onChange={value}></input>

        <button type="submit" onClick={submit}>
          Send
        </button>
      </form>
    </div>
  );
}

export default NewAnimal;
