import { useState } from "react";
import styled from "styled-components";
import ProductForm from "./ProductForm";
import Card from "./Card";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [products, setProducts] = useState([]);

  const addProduct = (product) =>
    setProducts([...products, { ...product, id: uuidv4() }]);

  function deleteProducts(event) {
    event.preventDefault();
    setProducts([]);
  }
  return (
    <Main className="App">
      <ProductForm submitFunction={addProduct} />
      {products.map((item) => (
        <Card product={item} deleteProducts={deleteProducts} />
      ))}
    </Main>
  );
}

export default App;

const Main = styled.div`
  background: url("https://images.unsplash.com/photo-1613859080556-6e1e98c98723?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=60");
  background-size: cover;
  height: 100%;
  min-height: 100vh;
  text-align: center;
  padding: 2rem 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  color: white;
`;
