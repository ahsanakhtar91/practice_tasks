import { APPLY_FILTER } from "./types";

export function applyFilter(filter: string | null) {
  return {
    type: APPLY_FILTER,
    payload: filter,
  };
}
