const createAsyncError = require('../../middlewares/createAsyncError');
const User = require('../../models/User.model');

const register = createAsyncError(async (req, res, next) => {
    const { fullname, username, email, password, gender } = req.body;
});

module.exports = {
    register,
};
