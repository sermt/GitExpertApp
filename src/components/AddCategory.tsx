import React from "react";
import "./styles.css";
import PropTypes from "prop-types";
interface Props {
    setCategories: React.Dispatch<React.SetStateAction<string[]>>;
}
export default function AddCategory({ setCategories }: Props) {
  const [inputValue, SetInput] = React.useState<string>("");
  const changeInput = (e: React.ChangeEvent<HTMLInputElement>) =>
    SetInput(e.target.value);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if(inputValue.trim().length>0){
        setCategories(prev=>[inputValue,...prev]);
        SetInput('');
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        value={inputValue}
        placeholder="Buscar..."
        onChange={changeInput}
        type="text"
      />
    </form>
  );
}


AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired,
}