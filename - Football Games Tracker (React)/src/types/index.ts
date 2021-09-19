// General response from API
export interface GamesAPIResponse {
  get: string;
  parameters: Parameters;
  errors: any[];
  results: number;
  paging: Paging;
  response: Response[];
}

export interface Paging {
  current: number;
  total: number;
}

export interface Parameters {
  date: string;
  timezone: Timezone;
}

// Defines the timezone on which the date calculation is made
export enum Timezone {
  EuropeBucharest = "Europe/Bucharest",
}

// Game definition information
export interface GameDetail {
  fixture: Fixture;
  league: League;
  teams: Teams;
  goals: Goals;
  score: Score;
}

// Information related to the soccer game
export interface Fixture {
  id: number; // The unique ID of the match
  referee: null | string; // Referee of the game
  timezone?: Timezone; // Used to adjust the date to the user's timezone
  date: string; // Used to calculate the date of the event
  timestamp: number;
  periods: Periods;
  venue: Venue; // Location of the game
  status: Status; // Status of the game - used to retrive the minute of the game
  isFavourite?: boolean; // is the fixture marked as favourite or
}

export interface Periods {
  first: number | null;
  second: number | null;
}

export interface Status {
  long: string;
  short: string;
  elapsed: number | null; // minute of the game
}

export const STATUS_LONG = {
  FirstHalf: "First Half",
  Halftime: "Halftime",
  MatchCancelled: "Match Cancelled",
  MatchFinished: "Match Finished",
  MatchPostponed: "Match Postponed",
  NotStarted: "Not Started",
  SecondHalf: "Second Half",
  TimeToBeDefined: "Time to be defined",
};

export const STATUS_SHORT = {
  Aet: "AET",
  Canc: "CANC",
  Ft: "FT",
  HT: "HT",
  NS: "NS",
  Pen: "PEN",
  Pst: "PST",
  Tbd: "TBD",
  The1H: "1H",
  The2H: "2H",
};

export const FILTER_OPTIONS = {
  SHOW_ALL: "SHOW_ALL",
  FAVOURITES: "FAVOURITES",
  LIVE_GAMES: "LIVE_GAMES",
};

// Information about the location of the game
export interface Venue {
  id: number | null;
  name: null | string;
  city: null | string;
}

// Information of the game score

export interface Goals {
  home: number | null;
  away: number | null;
}

// Information about the league

export interface League {
  id: number;
  name: string;
  country: string;
  logo: string;
  flag: null | string;
  season: number;
  round: string;
}

// Score separated on the halftime / fulltime and extra time - use the goals object
export interface Score {
  halftime: Goals;
  fulltime: Goals;
  extratime: Goals;
  penalty: Goals;
}

// Information on the teams
export interface Teams {
  home: Away;
  away: Away;
}

// information on the away team
export interface Away {
  id: number;
  name: string;
  logo: string;
  winner: boolean | null;
}
