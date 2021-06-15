import axios from 'axios';
import Jsona from 'jsona';

const url = process.env.VUE_APP_API_BASE_URL;
const jsona = new Jsona();

function get() {
  const options = {
    headers: {
      'Accept': 'application/vnd.api+json',
      'Content-Type': 'application/vnd.api+json',
    }
  };

  return axios.get(`${url}/me?include=roles`, options)
    .then(response => {
      return {
        list: jsona.deserialize(response.data),
        meta: response.data.meta
      };
    });
}

function update(profile) {

  const payload = jsona.serialize({
    stuff: profile,
    includeNames: []
  });

  const options = {
    headers: {
      'Accept': 'application/vnd.api+json',
      'Content-Type': 'application/vnd.api+json',
    }
  };

  return axios.patch(`${url}/me`, payload, options)
    .then(response => {
      return jsona.deserialize(response.data);
    });
}

function saveMyProfile(saveInfo) {
  const options = {
    headers: {
      'Accept': 'application/vnd.api+json',
      'Content-Type': 'application/vnd.api+json',
    }
  };
  return axios.post(
    `${process.env.VUE_APP_API_BASE_URL}/session/account_save`,
    saveInfo,
    options
  ).then(res => {
    return res;
  })
}

export default {
  get,
  update,
  saveMyProfile
};
