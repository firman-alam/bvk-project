import React, { useState } from "react";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import "./Post.scss";

const Post = ({ cat }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="post">
      <div className="post__desc" onClick={() => setIsActive(!isActive)}>
        <div className="post__title">
          <h1>{cat.name}</h1>
          {isActive ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}
        </div>

        {isActive && (
          <>
            <div className="post__item">
              <span>Description:</span>
              <p>{cat.description}</p>
            </div>
            <div className="post__item">
              <span>Weight:</span>
              <p>{cat.weight.metric} kg</p>
            </div>
            <div className="post__item">
              <span>Temperament: </span>
              <p>{cat.temperament}</p>
            </div>
            <div className="post__item">
              <span>Life Span: </span>
              <p>{cat.life_span} years</p>
            </div>
            <div className="post__item">
              <span>Origin: </span>
              <p>{cat.origin}</p>
            </div>
            <div className="post__item">
              <p>
                <a href={cat.wikipedia_url}>More information...</a>
              </p>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Post;
