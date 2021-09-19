import { FILTER_OPTIONS, Fixture, GameDetail, STATUS_LONG } from "src/types";

export const setFavouritesInLocalStorage = (
  favouriteFixtureIDs: Array<number>
) => {
  localStorage.setItem(
    "favourite_fixture_ids",
    JSON.stringify(favouriteFixtureIDs)
  );
};

export const getFavouritesFromLocalStorage = () => {
  const favouriteFixtureIDs =
    localStorage.getItem("favourite_fixture_ids") ?? "[]";
  return JSON.parse(favouriteFixtureIDs);
};

export const getIsMatchLive = (fixture: Fixture) => {
  return (
    fixture?.status?.long === STATUS_LONG.FirstHalf ||
    fixture?.status?.long === STATUS_LONG.Halftime ||
    fixture?.status?.long === STATUS_LONG.SecondHalf
  );
};

export const getFilteredResponse = (
  response: Array<GameDetail>,
  filterApplied: string
) => {
  if (filterApplied === FILTER_OPTIONS.SHOW_ALL) {
    return response;
  } else if (filterApplied === FILTER_OPTIONS.FAVOURITES) {
    const favouriteFixtureIDs = getFavouritesFromLocalStorage();

    return (response ?? [])?.filter((cardData: GameDetail, index: number) =>
      favouriteFixtureIDs.indexOf(cardData?.fixture?.id) === -1 ? false : true
    );
  } else if (filterApplied === FILTER_OPTIONS.LIVE_GAMES) {
    return (response ?? [])?.filter((cardData: GameDetail, index: number) =>
      getIsMatchLive(cardData?.fixture)
    );
  } else {
    return response;
  }
};
