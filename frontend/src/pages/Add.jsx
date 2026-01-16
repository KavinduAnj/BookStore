import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Add = () => {
  const [book, setBook] = useState({
    author: "",
    description: "",
    price: null,
    cover: "",

  });
  const navigate = useNavigate();
  const handleChange = (e) => {
    setBook((prev) => ({...prev, [e.target.name]: e.target.value}));
  };
  const handleClick = async e => {
    e.preventDefault();
    try{
      await axios.post("http://localhost:8800/books", book);
      navigate("/");
    }catch(err){
      console.log(err);
    }
  }
 
  return (
    <div className='form'>
      <h1>Add</h1>
      <h1>Add New Book</h1>
      <input type="text" placeholder='Author' onChange={handleChange} name="author"  />
      <input type="text" placeholder='Description' onChange={handleChange} name ="description"/>
      <input type="number" placeholder='Price' onChange={handleChange} name="price"/>
      <input type="text" placeholder='Cover' onChange={handleChange} name = "cover"/>
      <button onClick={handleClick}>Add</button>
    </div>
  )
}

export default Add
