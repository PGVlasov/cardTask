import axios from "axios";
import { LOAD_CARDS } from "../types";

export const loadCards = () => async (dispatch) => {
  try {
    const apiUrl = "https://bonus.evotor.tech/api/3rdparty/card";
    const { data: allCards } = await axios.get(apiUrl);
    dispatch({ type: LOAD_CARDS, payload: allCards });
  } catch (err) {
    console.error(err);
  }
};
