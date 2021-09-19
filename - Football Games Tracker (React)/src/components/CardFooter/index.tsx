import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { Fixture } from "src/types";

interface ICardFooterProps {
  fixture: Fixture;
}

const CardFooter = (props: ICardFooterProps) => {
  const { fixture } = props;

  return (
    <div className="card-footer">
      <div className="venue">
        <div className="icon">
          <FontAwesomeIcon color="#f0f" icon={faMapMarkerAlt} />
        </div>
        <div className="label">{fixture?.venue?.name}</div>
      </div>
    </div>
  );
};

export default CardFooter;
