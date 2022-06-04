import axios from "axios";
import { LOAD_CHECKS } from "../types";

export const loadReciepts = (cardId) => async (dispatch) => {
  try {
    const apiUrl = `https://shrouded-tundra-02503.herokuapp.com/https://bonus.evotor.tech/api/3rdparty/receipt`;
    const { data: allReciepts } = await axios.get(apiUrl, {
      headers: {
        Authorization: "b7d5ea70-5290-4d3c-9dd0-722d74ef9960",
        accept: " application/json",
      },
    });
    dispatch({ type: LOAD_CHECKS, payload: allReciepts });
    console.log(allReciepts);
  } catch (err) {
    console.error(err);
  }
};
