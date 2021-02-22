import { useState } from "react";
import styled from "styled-components";

function App() {
  const [product, setProduct] = useState({
    product_name: "",
    price: 0,
    currency: "",
    categorie: "",
    package_size: "",
    contact: "",
    tags: "",
    sale: false,
  });

  const clickHandler = (event) => {
    const field = event.target;
    const value = event.target.value;

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
          value={product.categorie}
        >
          <option value="clothing">clothing</option>
          <option value="birth control">birth control</option>
          <option value="electronics">electronics</option>
        </select>
      </Label>
      <br />
      <Label>
        package size
        <input
          type="radio"
          name="radio"
          onChange={clickHandler}
          value={product.package_size}
        />
        S
        <input
          type="radio"
          name="radio"
          onChange={clickHandler}
          value={product.package_size}
        />
        M
        <input
          type="radio"
          name="radio"
          onChange={clickHandler}
          value={product.package_size}
        />
        L
      </Label>
      <br />
      <Label>
        support contact
        <br />
        <input
          type="email"
          name="support"
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
          checked={product.sale}
        />
      </Label>
    </Main>
  );
}

export default App;

const Main = styled.div`
  text-align: center;
  padding: 0 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
`;

const Label = styled.label`
  margin: 0 0;
`;

const Flexbox = styled.div`
  display: flex;
  gap: 0.5rem;
`;
