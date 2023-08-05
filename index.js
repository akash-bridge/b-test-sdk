const init = require("./modules/Authentication");

const {
  subscribeToservice1,
  subscribeToservice2,
  subscribeToservice3,
  subscribeToservice4,
} = require("./modules/subscriptions");

const {
  add,
  substract,
  divide,
  multiply,
} = require("./modules/mathematical-functions");

module.exports = {
  init,
  subscribeToservice1,
  subscribeToservice2,
  subscribeToservice3,
  subscribeToservice4,
  add,
  substract,
  divide,
  multiply,
};
