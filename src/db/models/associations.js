const { Boards } = require("./boards");
const { Users } = require("./users");

Users.hasMany(Boards);
Boards.belongsTo(Users);
