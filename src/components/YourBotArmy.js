import React from "react";
import BotCard from "./BotCard";

function YourBotArmy({ yourRobots, clickHandler, deleteHandler }) {
  //your bot army code here...
  const personalBots = yourRobots.map((bot, index) => {
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
    <div className="ui segment inverted olive bot-army">
      <div className="ui five column grid">
        <div className="row bot-army-row">{personalBots}</div>
      </div>
    </div>
  );
}

export default YourBotArmy;
