import { useState } from "react";
import styled from "styled-components";
import Tags from "./Tags";

export default function ProductForm({ submitFunction }) {
  const initialProduct = {
    product_name: "",
    price: "",
    currency: "€",
    categories: "",
    package_size: "",
    contact: "",
    tags: [],
    sale: false,
  };

  const [product, setProduct] = useState(initialProduct);

  const clickHandler = (event) => {
    const field = event.target;
    const value = field.type === "checkbox" ? field.checked : field.value;

    setProduct({ ...product, [field.name]: value });
  };

  function submitForm(event) {
    event.preventDefault();
    setProduct(initialProduct);
    submitFunction(product);
  }

  function resetForm(event) {
    event.preventDefault();
    setProduct(initialProduct);
  }
  /* 
  function deleteAllProducts(event) {
    event.preventDefault();
    deleteProducts(deleteProducts);
  } */

  const addTags = (tag) => {
    setProduct({
      ...product,
      tags: [...product.tags, tag],
    });
  };

  return (
    <>
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
          <option value="">[please select]</option>
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

      <Tags onCreateTag={addTags} tags={product.tags} />

      <Label>
        on Sale
        <input
          type="checkbox"
          name="sale"
          onChange={clickHandler}
          checked={product.sale}
        />
      </Label>
      <Flexbox>
        <button type="submit" onClick={submitForm}>
          Add product
        </button>
        <button type="reset" onClick={resetForm}>
          Cancel
        </button>
        {/*   <button onClick={deleteAllProducts}>delete all products</button> */}
      </Flexbox>
    </>
  );
}

const Label = styled.label`
  margin: 0 0;
`;

const Flexbox = styled.div`
  display: flex;
  gap: 0.5rem;
`;
