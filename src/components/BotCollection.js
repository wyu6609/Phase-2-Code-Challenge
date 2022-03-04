import React from "react";
import BotCard from "./BotCard";

function BotCollection({ robots, clickHandler, deleteHandler }) {
  const botCollection = robots.map((bot, index) => {
    return (
      <BotCard
        key={index}
        bot={bot}
        clickHandler={clickHandler}
        deleteHandler={deleteHandler}
      />
    );
  });
  return (
    <div className="ui four column grid">
      <div className="row">
        {botCollection}
        Collection of all bots
      </div>
    </div>
  );
}

export default BotCollection;
