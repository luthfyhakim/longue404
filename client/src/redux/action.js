import { getUsers } from "../api/user-api";

export const userActions = {
  getUsers: () => {
    return async (dispatch) => {
      let response = await getUsers();

      if (response.status === "Success") {
        dispatch({
          type: "FETCH_USERS",
          payload: response.data,
        });
      } else {
        // error
      }
    }
  }
}