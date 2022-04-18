import axios from 'axios';

import {base_url} from './api-urls';
const GltApi = () => {
  const instance = axios.create({
    baseURL: base_url,
  });

  return instance;
};

export {GltApi};
