const axios = require("axios");

const findAzureTestCase = async () => {
  try {
    return axios.get(
      `https://dev.azure.com/{organization}/{project}/_apis/test/Plans/{planId}/suites/{suiteId}/testcases/{testCaseIds}?api-version=5.0'`,
      emailConfig
    );
  } catch (e) {
    console.error("exception occurred while POST", e);
    throw e;
  }
};
