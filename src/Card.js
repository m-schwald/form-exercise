import styled from "styled-components";

export default function Card({ product }) {
  return (
    <Wrapper>
      <h2>You entered the following:</h2>
      <Text>Product: {product.product_name}</Text>
      <Text>
        Price: {product.price}
        {product.currency}
      </Text>
      <Text>On Sale: {product.sale ? "yes" : "no"}</Text>
      <Text>Package Size: {product.package_size}</Text>
      <Text>Email: {product.contact}</Text>
    </Wrapper>
  );
}

const Text = styled.p`
  margin: 0;
  padding: 0.5rem 0;
`;

const Wrapper = styled.section`
  padding: 1rem;
  background: url("https://images.unsplash.com/photo-1548685913-fe6678babe8d?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mzl8fHRleHR1cmV8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=60");
  border: inset 2px black;
  color: darkslategray;
`;
