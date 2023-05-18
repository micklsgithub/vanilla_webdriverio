const getdateTime = async (value) => {
  let date = new Date();

  //get current date
  let day = ("0" + date.getDate()).slice(-2);
  let month = ("0" + (date.getMonth() + 1)).slice(-2);
  let year = date.getFullYear();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();

  //Convert email into test+yyyymmddhhmmss@test.com format
  var baseEmailArr = value.split("@");
  baseEmailArr.splice(
    1,
    0,
    "+" + year + month + day + hours + minutes + seconds + "@"
  );
  return baseEmailArr.join("");
};

module.exports = {
  getdateTime,
};
