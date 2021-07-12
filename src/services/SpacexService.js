import axios from 'axios';

const SPACE_X_API_URL = 'https://api.spacexdata.com/v3';

export const getLaunches = async () =>
  axios.get(`${SPACE_X_API_URL}/launches`);

export const getRockets = async () =>
  axios.get(`${SPACE_X_API_URL}/rockets`);
