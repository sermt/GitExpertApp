import React from "react";
import "./styles.css";
import GifGrid from "./GifGrid";
import AddCategory from "./AddCategory";
export default function GifExpertApp() {
  const [categories, setCategories] = React.useState<string[]>(["Animals"]);
  return (
    <>
      <h1>Gif Expert App</h1>
      <hr />
      <AddCategory setCategories={setCategories} />
      {categories.map((categorie, index) => (
        <GifGrid category={categorie} key={categorie} />
      ))}
    </>
  );
}
