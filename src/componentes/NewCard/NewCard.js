import React from "react";
import "./NewCard.css";
import logo from './../../img/01.jpg'
const NewCard = ({ newsItem,categoria }) => {



  return (
    <div className="newsCard">
      <h6 className="titulo">{categoria} </h6>
      <img
        alt={newsItem.title}
        src={
          newsItem.urlToImage
            ? newsItem.urlToImage
            : logo
        }
        className="newsImage"
      />
      <div className="newsText">
        <div>
          <span className="title">{newsItem.title}</span>
          <br />
          <span className="author">
            <a href={newsItem.url} target="__blank">
              <b>short </b>
            </a>{" "}
            <span className="muted">
              {" "}
              By {newsItem.author ? newsItem.author : "unknown"} /{" "}
              {newsItem.publishedAt}
            </span>
          </span>
        </div>
        <div className="lowerNewsText">
          <div className="description">{newsItem.description}</div>
          <span className="readmore">
            leer mas en:{" "}
            <a href={newsItem.url} target="__blank" className="source">
              <b>{newsItem.source.name}</b>
            </a>
          </span>
        </div>
      </div>
    </div>
  );
};

export default NewCard;

