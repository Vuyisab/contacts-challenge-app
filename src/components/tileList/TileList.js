import React from "react";
import { Tile } from "../tile/Tile";

export const TileList = ({tiles}) => {
  if(!tiles){
    tiles = [{}]
    const index = 0;
  }
  return (
    <div>
      {
        tiles.map((tile,index) =><Tile tile={tile} key={index}/>)
      }
    </div>
  );
};


export default TileList;