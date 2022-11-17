const db = require("mongoose");
const Model = require("./model");
// mongodb+srv://elrepapu:Elrepapu2021@cluster0.rminzxu.mongodb.net/?retryWrites=true&w=majority

db.Promise = global.Promise;
db.connect(
  "mongodb+srv://elrepapu:Elrepapu2021@cluster0.rminzxu.mongodb.net/?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
  }
);

function addMessage(message) {
  // list.push(message);
  const myMessage = new Model(message);
  myMessage.save();
}
async function getMessage(filterUser) {
  // return list;
  let filter = {};
  if (filterUser !== null) {
    filter = { user: filterUser };
  }

  const message = await Model.find(filter);
  return message;
}
async function updateText(id, message) {
  const foundMessage = await Model.findOne({ _id: id });
  foundMessage.message = message;
  const newMessage = await foundMessage.save();
  return newMessage;
}
function removeMessage(id) {
  return Model.deleteOne({ _id: id });
}
module.exports = {
  add: addMessage,
  list: getMessage,
  updateText: updateText,
  remove: removeMessage,
};
