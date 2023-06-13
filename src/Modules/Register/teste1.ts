import { Registers } from "../../Entity/Database";

function getUser(req, res, next) {
    var { name } = req.query;
    return Registers.find(item => item.name == name);
};

const getUsers = (req, res, next) => {
    res.send(Registers);
};

module.exports = {
    getUser,
    getUsers
};