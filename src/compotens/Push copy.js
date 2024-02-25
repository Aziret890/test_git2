import React, { useState } from "react";
import { useMainContext, useProvaider } from "../Contexts";
import { useNavigate } from "react-router-dom";

function Edit() {
  const [obj, setObj] = useState(
    JSON.parse(localStorage.getItem("edit")) || []
  );
  const [name, setName] = useState(obj.name);
  const [url, setUrl] = useState(obj.url);
  const [price, setPrice] = useState(obj.price);
  const navigate = useNavigate();
  const { setDatas } = useProvaider();
  function Edit() {
    let data = JSON.parse(localStorage.getItem("data")) || [];
    data = data.map((el) => {
      if (el.id === obj.id) {
        return {
          ...el,
          name: (el.name = name),
          url: (el.url = url),
          price: (el.price = price),
        };
      }
      return el;
    });
    localStorage.setItem("data", JSON.stringify(data));
    setDatas(data);
    navigate("/menu");
  }
  return (
    <>
      <div style={{ maxWidth: "700px", margin: "100px auto" }}>
        <input
          onChange={(e) => setName(e.target.value)}
          value={name}
          type="text"
          name=""
          id=""
          placeholder="name product"
        />
        <input
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          type="text"
          name=""
          id=""
          placeholder="prcie $$$$"
        />
        <input
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          type="text"
          name=""
          id=""
          placeholder="photo 📷📸"
        />
      </div>
      <button onClick={() => Edit()}>Edit</button>
    </>
  );
}

export default Edit;
