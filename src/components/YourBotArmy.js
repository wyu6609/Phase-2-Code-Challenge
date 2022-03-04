import React from "react";
import BotCard from "./BotCard";
import { v4 as uuid } from "uuid";
function YourBotArmy({ yourRobots, clickHandler, deleteHandler }) {
  //your bot army code here...

  return (
    <div className="ui segment inverted olive bot-army">
      <div className="ui five column grid">
        <div className="row bot-army-row">
          {yourRobots.map((bot, index) => {
            return (
              <BotCard
                key={index}
                bot={bot}
                clickHandler={clickHandler}
                deleteHandler={deleteHandler}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default YourBotArmy;
