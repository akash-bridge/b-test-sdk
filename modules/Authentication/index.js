const USER_DATA = require("../../constants");

const init = (user, key) => {
  console.log("initialization started 🙌🏻 -->");

  if (!user || !key) return "Either username or key is missing 🙀";

  const userAvailable = USER_DATA.find(({ username }) => username === user);
  if (!userAvailable) return "No user with this username 😞";
  if (userAvailable.key !== key) return "Wrong credentials 🤨";

  return "Authenticated 🫡";
};

module.exports = init;
