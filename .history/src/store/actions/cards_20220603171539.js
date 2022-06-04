import axios from "axios";
import { LOAD_CARDS } from "../types";

export const loadCards = () => async (dispatch) => {
  try {
    // const apiUrl = "https://jsonplaceholder.typicode.com/users";
    const apiUrl = "/api/3rdparty/card";
    const { data: allCards } = await axios.get(apiUrl, {
      code: "b7d5ea70-5290-4d3c-9dd0-722d74ef9960",
    });
    dispatch({ type: LOAD_CARDS, payload: allCards });
    console.log(allCards);
  } catch (err) {
    console.error(err);
  }
};
