import { useState } from "react";
import styled from "styled-components";
import "./styles.css";

function App() {
  const [product, setProduct] = useState({
    product_name: "",
    price: 0,
    currency: "",
    categories: "",
    package_size: "",
    contact: "",
    tags: [],
    sale: false,
  });

  const clickHandler = (event) => {
    const field = event.target;
    const value =
      field.type === "radio" || field.type === "checkbox"
        ? field.checked
        : field.value;

    setProduct({ ...product, [field.name]: value });

    console.log(product);
  };

  return (
    <Main className="App">
      <h1>new product</h1>
      <Label>
        product name
        <br />
        <input
          type="text"
          name="product_name"
          onChange={clickHandler}
          value={product.product_name}
        />
      </Label>
      <Flexbox>
        <Label>
          price <br />
          <input
            type="number"
            name="price"
            onChange={clickHandler}
            value={product.price}
          />
        </Label>
        <Label>
          currency <br />
          <select
            name="currency"
            onChange={clickHandler}
            value={product.currency}
          >
            <option value="€">Euro</option>
            <option value="$">Dollar</option>
            <option value="¥">Yen</option>
          </select>
        </Label>
      </Flexbox>
      <Label>
        categories <br />
        <select
          name="categories"
          onChange={clickHandler}
          value={product.categories}
        >
          <option value="clothing">clothing</option>
          <option value="birth control">birth control</option>
          <option value="electronics">electronics</option>
        </select>
      </Label>
      <br />
      <Label>
        package size <br />
        <input
          type="radio"
          name="package_size"
          onChange={clickHandler}
          value="small"
          checked={product.package_size === "small"}
        />
        S
        <input
          type="radio"
          name="package_size"
          onChange={clickHandler}
          value="medium"
          checked={product.package_size === "medium"}
        />
        M
        <input
          type="radio"
          name="package_size"
          onChange={clickHandler}
          value="large"
          checked={product.package_size === "large"}
        />
        L
      </Label>
      <br />
      <Label>
        support contact
        <br />
        <input
          type="email"
          name="contact"
          onChange={clickHandler}
          value={product.contact}
        />
      </Label>
      <br />
      <Label>
        product tags
        <br />
        <input
          type="text"
          name="tags"
          onChange={clickHandler}
          value={product.tags}
        />
      </Label>
      <Label>
        on Sale
        <input
          type="checkbox"
          name="sale"
          onChange={clickHandler}
          value={1}
          checked={product.sale}
        />
      </Label>
    </Main>
  );
}

export default App;

const Main = styled.div`
  text-align: center;
  padding: 3rem 1rem 0 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  background: linear-gradient(lightgrey, whitesmoke);
  height: 100vh;
  width: 100vw;
`;

const Label = styled.label`
  margin: 0 0;
`;

const Flexbox = styled.div`
  display: flex;
  gap: 0.5rem;
`;
