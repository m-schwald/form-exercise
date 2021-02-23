import { useState } from "react";
import styled from "styled-components";

const active = "";

export default function Tags({
  onCreateTag,
  tags,
  onDeleteTag,
  onDeleteLastTag,
  active,
}) {
  const [value, setValue] = useState([]);

  const handleChange = (event) => setValue(event.target.value);

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      onCreateTag(value);
      setValue([]);
    } else if (event.key === "Backspace") {
      event.preventDefault();
      onDeleteLastTag();
    }
  };

  return (
    <>
      <Label>
        product tags
        <br />
      </Label>
      <Flexbox>
        {tags.map((tag, index) => (
          <TagElement key={index}>
            {tag}
            <i onClick={() => onDeleteTag(tag)}>&times;</i>
          </TagElement>
        ))}
        <NewInput
          type="text"
          name="tag"
          onKeyDown={handleKeyDown}
          onChange={handleChange}
          value={value}
        />
      </Flexbox>
    </>
  );
}

const Label = styled.label`
  margin: 0 0;
`;

const Flexbox = styled.div`
  align-items: center;
  background: white;
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
  justify-content: center;
  width: auto;
  height: 2rem;
  padding: 0.3rem;
`;

const TagElement = styled.span`
  background: #fa7a55;
  border-radius: 3px;
  padding: 0.3rem;
`;

const NewInput = styled.input`
  border: none;
  outline: none;
`;
