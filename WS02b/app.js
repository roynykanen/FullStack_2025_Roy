const axios = require("axios");

axios
  .get("https://randomuser.me/api/")
  .then((res) => {
    console.log(res.data);
  })
  .catch((error) => {
    console.log(error);
  });
