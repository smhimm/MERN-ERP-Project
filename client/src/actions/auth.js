import { AUTH } from "../constans/actionTypes";
import * as api from "../api";

export const signin = (formData, negative) => async (dispatch) => {
  try {
    const { data } = await api.signIn(formData);

    dispatch({ type: AUTH, data });

    negative("/");
  } catch (error) {
    console.log(error);
  }
};

export const signup = (formData, negative) => async (dispatch) => {
  try {
    const { data } = await api.signUp(formData);

    dispatch({ type: AUTH, data });

    negative("/");
  } catch (error) {
    console.log(error);
  }
};
