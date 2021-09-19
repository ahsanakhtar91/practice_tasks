export function commonThunk(data: any) {
  const { actionType, options } = data;

  return async (dispatch: any) => {
    try {
      const res = await fetch(options?.url ?? "", { ...options });
      const resData = await res.json();

      // Dispatching the desired action from within the thunk after the API gives a response...
      dispatch({
        type: actionType,
        payload: resData ?? {},
      });
    } catch (err) {
      console.log("Error:", err);
    }
  };
}
