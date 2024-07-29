import axios from "axios";

const apis = axios
  .get("https://ministries.obicbusiness.com/api/v1/app/ministries", {
    headers: {
      api_pass_key: "OzVWJLxQtxf4tOalF",
    },
  })
  .then((res) => console.log(res.data))
  .catch((err) => console.error(err));
