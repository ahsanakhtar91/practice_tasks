import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_ENDPOINTS, authorizationHeader } from "./config/index";
import { FETCH_FOOTBALL_GAMES } from "./redux/actions/types";
import { commonThunk } from "./redux/thunk";
import { FILTER_OPTIONS, GameDetail } from "./types";
import { getFilteredResponse } from "./utils";
import Loader from "react-loader-spinner";
import Card from "./components/Card";
import FiltersContainer from "./components/FiltersContainer";
import MadeBy from "./components/MadeBy";
import "./scss/main.scss";

interface IAppState {
  data: any;
  isLoading: boolean;
  loadedItems: number;
  filterOption: string;
}

const App = () => {
  const dispatch = useDispatch();

  const footballGamesContent = useSelector(
    (state: any) => state?.gamesReducer?.footballGamesContent
  );
  const filterApplied = useSelector(
    (state: any) => state?.gamesReducer?.filterApplied
  );

  const [state, setState] = useState<IAppState>({
    data: null,
    isLoading: true,
    loadedItems: 30,
    filterOption: FILTER_OPTIONS.SHOW_ALL,
  });

  const response: Array<GameDetail> = state?.data?.response ?? [];
  const filteredResponse: Array<GameDetail> = getFilteredResponse(
    response,
    filterApplied
  );

  const lazyLoadMoreData = () => {
    setState((prevState) => ({
      ...prevState,
      loadedItems:
        prevState.loadedItems + 30 <
        (filterApplied ? filteredResponse : response).length
          ? prevState.loadedItems + 30
          : (filterApplied ? filteredResponse : response).length,
    }));
  };

  useEffect(() => {
    dispatch(
      commonThunk({
        actionType: FETCH_FOOTBALL_GAMES,
        options: {
          url: API_ENDPOINTS.fetchFootballGames,
          headers: {
            Authorization: authorizationHeader,
          },
          method: "GET",
        },
      })
    );
  }, []);

  useEffect(() => {
    if (footballGamesContent) {
      setState((prevState: any) => ({
        ...prevState,
        data: footballGamesContent,
        isLoading: false,
      }));
    }
  }, [footballGamesContent]);

  return (
    <div className="football-games-tracker">
      <FiltersContainer />

      {state?.isLoading ? (
        <Loader type="Oval" color="#7359be" height={85} width={85} />
      ) : (
        <>
          <ul className="cards-list">
            {((filterApplied ? filteredResponse : response) ?? [])
              ?.slice(0, state?.loadedItems)
              ?.map((cardData: GameDetail, index: number) => (
                <Card
                  key={`${index}_${filterApplied}`}
                  cardData={cardData}
                  index={index}
                />
              ))}
          </ul>

          <div className="load-more">
            <div className="items-count">
              {"Showing "}
              <span>
                {filterApplied
                  ? filteredResponse.length < state?.loadedItems
                    ? filteredResponse.length
                    : state?.loadedItems
                  : state?.loadedItems}
              </span>
              {" out of total "}
              <span>
                {(filterApplied ? filteredResponse : response).length}
              </span>
              {" games."}
            </div>
            {state?.loadedItems <
              (filterApplied ? filteredResponse : response).length && (
              <button
                className="btn-load-more"
                onClick={() => lazyLoadMoreData()}
              >
                {"Load More"}
              </button>
            )}
          </div>
        </>
      )}

      <MadeBy />
    </div>
  );
};

export default App;
