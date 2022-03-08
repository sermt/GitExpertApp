import React from "react";
import GridItem from "./GridItem";
import "./styles.css";
import useFetchGifs from "../hooks/useFetchGifs";

interface Props {
  category: string;
}
export interface Gif {
  id: string;
  title: string;
  url?: string;
}
function GifGrid({ category }: Props): JSX.Element {
  const { data: images, loading } = useFetchGifs(category);
  return (
    <>
      <h2>{category}</h2>
      {loading && <p>Loading...</p>}
      <div className="container">
        {images.map(({ title, id, url }) => (
          <GridItem id={id} key={id} title={title} url={url} />
        ))}
      </div>
    </>
  );
}
export default GifGrid;
