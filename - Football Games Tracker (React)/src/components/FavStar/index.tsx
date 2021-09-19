import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  getFavouritesFromLocalStorage,
  setFavouritesInLocalStorage,
} from "src/utils";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FILTER_OPTIONS, Fixture } from "src/types";
import { useSelector } from "react-redux";

interface IFavStarProps {
  fixture: Fixture;
}

const FavStar = (props: IFavStarProps) => {
  const { fixture } = props;

  const filterApplied = useSelector(
    (state: any) => state?.gamesReducer?.filterApplied
  );

  const [isFavourite, setIsFavourite] = useState<boolean>(false);

  useEffect(() => {
    const favouriteFixtureIDs = getFavouritesFromLocalStorage();

    if (favouriteFixtureIDs.indexOf(fixture?.id) !== -1) {
      setIsFavourite(true);
    }
  }, []);

  const onMarkAsFavourite = (fixture: Fixture) => {
    setIsFavourite(!isFavourite);
    updateLocalStorage(fixture);
  };

  const updateLocalStorage = (fixture: Fixture) => {
    const favouriteFixtureIDs = getFavouritesFromLocalStorage();

    const existingIndex = favouriteFixtureIDs.indexOf(fixture?.id);

    if (existingIndex === -1 && !isFavourite) {
      favouriteFixtureIDs.push(fixture?.id);
    } else {
      favouriteFixtureIDs.splice(existingIndex, 1);
    }

    setFavouritesInLocalStorage(favouriteFixtureIDs);
  };

  return (
    <div
      key={new Date().getTime()}
      className={`fav-star ${
        filterApplied === FILTER_OPTIONS.FAVOURITES ? "disabled" : ""
      }`}
      onClick={
        filterApplied === FILTER_OPTIONS.FAVOURITES
          ? () => {}
          : () => onMarkAsFavourite(fixture)
      }
    >
      <FontAwesomeIcon color={isFavourite ? "#7359be" : "#bbb"} icon={faStar} />
    </div>
  );
};

export default FavStar;
