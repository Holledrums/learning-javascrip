const axios = require("axios");
//console.log(axios);

axios
  .get("https://jsonplaceholder.typicode.com/users")
  .then((res) =>
    res.data.map(({ name, address, phone }) =>
      console.log(
        `This person ${name}, lives in ${address.city}, you can call ${phone}`
      )
    )
  )
  .catch((err) => console.log(err));
