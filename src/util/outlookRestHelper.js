const axios = require("axios");

require("dotenv").config();
const outlookVariables = require("../../config").outlookVariables;

const bodyFormData = new URLSearchParams();
bodyFormData.append("grant_type", "client_credentials");
bodyFormData.append("client_id", outlookVariables.CLIENT_ID);
bodyFormData.append("client_secret", outlookVariables.CLIENT_SECRET);
bodyFormData.append("scope", outlookVariables.SCOPE);
bodyFormData.append("password", outlookVariables.PASSWORD);
bodyFormData.append("username", outlookVariables.GRANTED_USERNAME);

//the below code is used to intercept the http request and responses
//Using this can output http requests to the log
/*axios.interceptors.request.use((x) => {
    console.log(x);
    return x;
  });
  axios.interceptors.response.use((x) => {
    console.log(x);
    return x;
  });*/

const getOutlookSecret = async () => {
  //store ms graph access token header
  const tokenConfig = {
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
  };

  //send POST http request for ms graph access token request
  try {
    return axios.post(
      `https://login.microsoft.com/${outlookVariables.TENANT}/oauth2/v2.0/token`,
      bodyFormData,
      tokenConfig
    );
  } catch (e) {
    console.error("exception occurred while POST", e);
    throw e;
  }
};

const getOutlookVerificationEmail = async (accessToken, subject) => {
  //store ms graph request header for drupal verification email
  const emailConfig = {
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      authorization: "Bearer " + accessToken,
    },
  };

  try {
    //send GET http request for for drupal verification email
    return axios.get(
      `https://graph.microsoft.com/v1.0/users/${outlookVariables.GRANTED_USER_ID}/messages?$filter=subject eq '${subject}'`,
      emailConfig
    );
  } catch (e) {
    console.error("exception occurred while POST", e);
    throw e;
  }
};

const getOutlookEmailWithLink = async (accessToken, subject) => {
  //store ms graph request header for drupal reset password email
  const emailConfig = {
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      authorization: "Bearer " + accessToken,
    },
  };

  try {
    //send GET http request for for drupal reset password email
    return axios.get(
      `https://graph.microsoft.com/v1.0/users/${outlookVariables.GRANTED_USER_ID}/messages?$filter=subject eq '${subject}'`,
      emailConfig
    );
  } catch (e) {
    console.error("exception occurred while POST", e);
    throw e;
  }
};

const getAllOutlookEmail = async (accessToken) => {
  //store ms graph request header for drupal verification email
  const emailConfig = {
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      authorization: "Bearer " + accessToken,
    },
  };

  try {
    //send GET http request for for drupal verification email
    return axios.get(
      `https://graph.microsoft.com/v1.0/users/${outlookVariables.GRANTED_USER_ID}/messages`,
      emailConfig
    );
  } catch (e) {
    console.error("exception occurred while POST", e);
    throw e;
  }
};

const getOutlookEmail = async (accessToken, value) => {
  //store ms graph request header for email message
  const emailConfig = {
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      authorization: "Bearer " + accessToken,
    },
  };

  try {
    //send GET http request for for email message
    return axios.get(
      `https://graph.microsoft.com/v1.0/users/${outlookVariables.GRANTED_USER_ID}/messages?$filter=subject eq '${value}'`,
      emailConfig
    );
  } catch (e) {
    console.error("exception occurred while POST", e);
    throw e;
  }
};

const deleteOutlookEmail = async (accessToken, emailId) => {
  //store ms graph request header for email deletion
  const emailConfig = {
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      authorization: "Bearer " + accessToken,
    },
  };

  try {
    //send GET http request for for email deletion
    return axios.delete(
      `https://graph.microsoft.com/v1.0/users/${outlookVariables.GRANTED_USER_ID}/mailFolders/inbox/messages/${emailId}`,
      emailConfig
    );
  } catch (e) {
    console.error("exception occurred while POST", e);
    throw e;
  }
};

module.exports = {
  getOutlookVerificationEmail,
  getOutlookEmail,
  getOutlookSecret,
  deleteOutlookEmail,
  getAllOutlookEmail,
  getOutlookEmailWithLink,
};
