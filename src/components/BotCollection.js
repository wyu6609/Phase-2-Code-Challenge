import React from "react";
import BotCard from "./BotCard";

function BotCollection({ robots, clickHandler, deleteHandler }) {
  // Your code here
  return (
    <div className="ui four column grid">
      <div className="row">
        {robots.map((bot, index) => {
          return (
            <BotCard
              key={index}
              bot={bot}
              clickHandler={clickHandler}
              deleteHandler={deleteHandler}
            />
          );
        })}
        Collection of all bots
      </div>
    </div>
  );
}

export default BotCollection;
