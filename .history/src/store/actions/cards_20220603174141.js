import axios from "axios";
import { LOAD_CARDS } from "../types";

export const loadCards = () => async (dispatch) => {
  try {
    // const apiUrl = "https://jsonplaceholder.typicode.com/users";
    const apiUrl = "https://bonus.evotor.tech/api/3rdparty/card";
    // const { data: allCards } = await axios.get(apiUrl);
    const { data: allCards } = await axios({
      method: "get",
      url: apiUrl,
      withCredentials: false,
    });

    dispatch({ type: LOAD_CARDS, payload: allCards });
    console.log(allCards);
  } catch (err) {
    console.error(err);
  }
};
