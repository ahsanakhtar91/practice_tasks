import React from "react";
import { Fixture, Goals, Teams } from "src/types";

interface ICardBodyProps {
  teams: Teams;
  fixture: Fixture;
  goals: Goals;
}

const CardBody = (props: ICardBodyProps) => {
  const { teams, fixture, goals } = props;

  const date: any = new Date(fixture?.date);
  const MONTH_NAME: any = {
    "0": "Jan",
    "1": "Feb",
    "2": "Mar",
    "3": "Apr",
    "4": "May",
    "5": "Jun",
    "6": "July",
    "7": "Aug",
    "8": "Sep",
    "9": "Oct",
    "10": "Nov",
    "11": "Dec",
  };

  return (
    <div className="card-body">
      <div className="team-home">
        <div className="logo">
          <img alt="Team Logo" src={teams?.home?.logo} />
        </div>
        <div className="name">{teams?.home?.name}</div>
      </div>

      <div className="score-section">
        <div className="date-time">
          <span className="date">
            {`${
              date?.getDate().toString()?.length === 1
                ? "0" + date?.getDate()
                : date?.getDate()
            } ${MONTH_NAME[date?.getMonth()?.toString()]}, ${date
              ?.toLocaleDateString("gb-UK")
              ?.split("/")
              ?.pop()}`}
            {" at "}
          </span>
          <span className="time">{`${
            date?.getHours().toString()?.length === 1
              ? "0" + date?.getHours()
              : date?.getHours()
          }:${
            date?.getMinutes().toString()?.length === 1
              ? "0" + date?.getMinutes()
              : date?.getMinutes()
          }`}</span>
        </div>

        <div className="score">
          {!goals?.home && !goals?.away ? (
            <></>
          ) : (
            <>
              <div className={`score-home ${goals?.home ? "" : "score-zero"}`}>
                {goals?.home}
              </div>
              <span>{":"}</span>
              <div className={`score-away ${goals?.away ? "" : "score-zero"}`}>
                {goals?.away}
              </div>
            </>
          )}
        </div>

        <div className="time-elapsed">
          {fixture?.status?.elapsed ? (
            <>
              <span>{fixture?.status?.elapsed}</span>
              {"'"}
            </>
          ) : (
            <></>
          )}
        </div>

        <div className="referee">
          <div className="label">{fixture?.referee ? "Referee: " : ""}</div>
          <div className="name">{fixture?.referee ? fixture?.referee : ""}</div>
        </div>
      </div>

      <div className="team-away">
        <div className="logo">
          <img alt="Team Logo" src={teams?.away?.logo} />
        </div>
        <div className="name">{teams?.away?.name}</div>
      </div>
    </div>
  );
};

export default CardBody;
