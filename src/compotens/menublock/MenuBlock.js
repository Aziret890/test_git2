import { Card } from "antd";
import Meta from "antd/es/card/Meta";
import React, { useEffect, useState } from "react";
import { useProvaider } from "../../Contexts";
import { json, useNavigate } from "react-router-dom";

function MenuBlock({ el }) {
  const { setDatas, setBasket } = useProvaider();
  const navigate = useNavigate();
  const [order, setOrder] = useState([]);
  useEffect(() => {
    deleteProduct();
  }, []);
  function deleteProduct(idx) {
    let data = JSON.parse(localStorage.getItem("data")) || [];
    data = data.filter((el) => el.id !== idx);
    localStorage.setItem("data", JSON.stringify(data));
    setDatas(data);
  }
  function Edit(el) {
    localStorage.setItem("edit", JSON.stringify(el));
    navigate("/edit");
  }
  function toOrder(element) {
    let data = JSON.parse(localStorage.getItem("basket")) || [];
    if (!data.some((el) => el.id == element.id)) {
      data.push(element);
    }
    setBasket(data);
    localStorage.setItem("basket", JSON.stringify(data));
    navigate("/order");
  }
  return (
    <div className="block">
      <Card
        style={{
          width: 300,
        }}
        cover={<img alt="example" src={el.url} />}
        actions={[
          <button
            onClick={() => deleteProduct(el.id)}
            style={{ border: "none", background: "none" }}
          >
            delete
          </button>,
          <button
            style={{ border: "none", background: "none" }}
            onClick={() => Edit(el)}
          >
            edit
          </button>,
          <button
            onClick={() => toOrder(el)}
            style={{ border: "none", background: "none" }}
          >
            order
          </button>,
        ]}
      >
        <Meta title={el.price} description={el.name} />
      </Card>
    </div>
  );
}

export default MenuBlock;
