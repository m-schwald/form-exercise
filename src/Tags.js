import { useState } from "react";
import styled from "styled-components";

export default function Tags({ onCreateTag, tags }) {
  const [value, setValue] = useState("");

  const handleChange = (event) => setValue(event.target.value);

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      onCreateTag(value);
      setValue("");
    }
  };

  return (
    <>
      <Label>
        product tags
        <br />
        <input
          type="text"
          name="tag"
          onKeyDown={handleKeyDown}
          onChange={handleChange}
          value={value}
        />
      </Label>
      <Flexbox>
        {tags.map((tag, index) => (
          <TagElement key={index}>{tag}</TagElement>
        ))}
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
  width: 80%;
  flex-wrap: wrap;
  justify-content: center;
`;

const TagElement = styled.span`
  border-radius: 3px;
  background: #fa7a55;
  padding: 0.2rem;
`;
