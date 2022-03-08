import React from "react";
import { Gif } from "./GifGrid";
import "./styles.css";
export default function GridItem({ url, title, id }: Gif): JSX.Element {
  return (
    <div className="card animate__animated animate__fadeInDown">
      <div className="image">
        <img src={url} alt={title} />
      </div>
      <div className="content">
        <h3>{title}</h3>
        <p>
          Lorem ipsum is a placeholder text commonly used to demonstrate the
          visual form of a document or a typeface without relying on meaningful
          content.
        </p>
      </div>
    </div>
  );
}
