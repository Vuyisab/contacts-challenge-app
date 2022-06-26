import React from "react";

export const Tile = ({tile}) => {
  if(!tile){
    tile={}
  }
 // console.log(tile);
  return (
    <div className="tile-container">
      {
        Object.values(tile).map((val,index)=>
          (<p className={index === 0 ? "title-title":"title"}>{val}</p>)
        )
      }
    </div>
  );
};
