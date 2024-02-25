import React, { useState } from "react";
import { useMainContext, useProvaider } from "../../Contexts";
import "./push.css";
function Push() {
    const [name, setName] = useState("");
    const [url, setUrl] = useState("");
    const [price, setPrice] = useState("");
    const { setDatas } = useProvaider();
    const dataId = new Date();
    function onFinish() {
        let data = JSON.parse(localStorage.getItem("data")) || [];
        if (name.length > 0 || url.length > 0 || price.length > 0) {
            let newObj = {
                name: name,
                url: url,
                price: price,
                id: dataId.getTime(),
            };
            data.push(newObj);
        } else {
            alert("asdfghj");
        }
        localStorage.setItem("data", JSON.stringify(data));
        setName("");
        setPrice("");
        setUrl("");
        setDatas(data);
    }
    return (
        <>
            <div className="addTodo">
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
                <button onClick={() => onFinish()} className="btn__input">
                    create product
                </button>
            </div>
        </>
    );
}

export default Push;
