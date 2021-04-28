import axios from 'axios';
import {apiUrl} from './config';

export const getProducts = async () => {
    try{
        const response = await axios({
            url: `${apiUrl}`,
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'X-API-Key': '562af2c0',
            },
        });
        if (response.statusText !== 'OK') {
            throw new Error(response.data.message);
        }
        return response.data
    } catch (err) {
        console.log(err);
        return { error: err.response.data.message || err.message };
      }
};

export const getProduct = async (id) => {
    try {
      const response = await axios({
        url: `${apiUrl}/${id}`,
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'X-API-Key': '562af2c0',
        },
      });
      if (response.statusText !== 'OK') {
        throw new Error(response.data.message);
      }
      return response.data;
    } catch (err) {
      console.log(err);
      return { error: err.response.data.message || err.message };
    }
  };