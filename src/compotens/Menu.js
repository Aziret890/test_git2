import React, { useEffect, useState } from "react";
import MenuBlock from "./MenuBlock";
import { useProvaider } from "../Contexts";

function Menu() {
  const { datas } = useProvaider();
  // const [item, setItem] = useState([]);
  // useEffect(() => {
  //   let data = JSON.parse(localStorage.getItem("data")) || [];
  //   setItem(data);
  // }, []);

  // console.log(item);
  console.log(datas);
  return (
    <>
      <div className="container">
        <div
          style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)" }}
          className="blocksGrid"
        >
          {datas?.map((el) => (
            <MenuBlock key={el.id} el={el} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Menu;
