import React from "react";
import { useProvaider } from "../../Contexts";
import { Card } from "antd";
import Meta from "antd/es/card/Meta";

function OrderDetals() {
    const { basket } = useProvaider();
    console.log(basket);
    return (
        <div className="container">
            <div
                style={{ display: "flex", flexWrap: "wrap" }}
                className="blockMenu"
            >
                {basket?.map((el) => (
                    <Card
                        hoverable
                        style={{
                            width: 240,
                        }}
                        cover={<img alt="example" src={el.url} />}
                    >
                        <Meta title={el.name} description={el.price} />
                    </Card>
                ))}
            </div>
        </div>
    );
}

export default OrderDetals;
