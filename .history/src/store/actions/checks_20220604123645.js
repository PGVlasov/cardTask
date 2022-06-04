import axios from "axios";
import { LOAD_CHECKS } from "../types";

export const loadCards = () => async (dispatch) => {
  try {
    const apiUrl = `https://shrouded-tundra-02503.herokuapp.com/https://bonus.evotor.tech/api/3rdparty/card/${userId}/reciept`;
    const { data: allChecks } = await axios.get(apiUrl, {
      headers: {
        Authorization: "b7d5ea70-5290-4d3c-9dd0-722d74ef9960",
      },
    });
    dispatch({ type: LOAD_CHECKS, payload: allChecks });
    console.log(allChecks);
  } catch (err) {
    console.error(err);
  }
};
