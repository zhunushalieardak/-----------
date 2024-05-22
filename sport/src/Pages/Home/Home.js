import { useState } from "react";
import Card from "../Card/Card";
import "./Home.css";
import { products } from "../../data";

function Home() {
  const [product, setProduct] = useState("Adidas");

  const renderProduct = () => {
    switch (product) {
      case "Adidas":
        let p1 = products.filter((products) => {
          return products.category === product;
        });
        return p1.map((pr, id) => {
          return <Card pr={pr} key={id} />;
        });
      case "Puma":
        let p2 = products.filter((products) => {
          return products.category === product;
        });
        return p2.map((pr, id) => {
          return <Card pr={pr} key={id} />;
        });
      case "Nike":
        let p3 = products.filter((products) => {
          return products.category === product;
        });
        return p3.map((pr, id) => {
          return <Card pr={pr} key={id} />;
        });
      case "LiNing":
        let p4 = products.filter((products) => {
          return products.category === product;
        });
        return p4.map((pr, id) => {
          return <Card pr={pr} key={id} />;
        });
        case "TheNorthFace":
          let p5 = products.filter((products) => {
            return products.category === product;
          });
          return p5.map((pr, id) => {
            return <Card pr={pr} key={id} />;
          });

      default:
        break;
    }
  };

  return (
    <>
      <div className="brend_btns">
        <button className="brend_btn" onClick={() => setProduct("Adidas")}>
          Adidas
        </button>
        <button className="brend_btn" onClick={() => setProduct("Puma")}>
          Puma
        </button>
        <button className="brend_btn" onClick={() => setProduct("Nike")}>
          Nike
        </button>
        <button className="brend_btn" onClick={() => setProduct("LiNing")}>
          LiNing
        </button>
        <button className="brend_btn" onClick={() => setProduct("TheNorthFace")}>
        TheNorthFace
        </button>
      </div>
      {renderProduct()}
    </>
  );
}

export default Home;
