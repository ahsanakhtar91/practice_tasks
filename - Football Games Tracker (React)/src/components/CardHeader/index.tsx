import React from "react";
import { formatDistance } from "date-fns";
import { Fixture, League, STATUS_LONG } from "src/types";
import FavStar from "../FavStar";
import { getIsMatchLive } from "src/utils";

interface ICardHeaderProps {
  fixture: Fixture;
  league: League;
}

const CardHeader = (props: ICardHeaderProps) => {
  const { fixture, league } = props;

  const isMatchLive = getIsMatchLive(fixture);

  return (
    <div className="card-header">
      <div
        className="status"
        title={new Date(fixture?.date).toLocaleString("gb-UK")}
      >
        {isMatchLive ? (
          <div className="status-red">
            <span>{"."}</span>
            {"Live"}
          </div>
        ) : (
          <div className="status-green">
            {formatDistance(new Date(fixture?.date), new Date(), {
              addSuffix: true,
            })}
          </div>
        )}
      </div>

      <div className="title">
        <div className="image">
          <img src={league?.logo} />
        </div>
        <div className="label" title={league?.name ?? ""}>
          {league?.name ?? ""}
        </div>
      </div>

      <FavStar fixture={fixture}></FavStar>
    </div>
  );
};

export default CardHeader;
