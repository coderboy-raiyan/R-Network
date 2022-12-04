const { generateAccessToken, generateRefreshToken } = require('../../lib/jwt');
const createAsyncError = require('../../middlewares/createAsyncError');
const User = require('../../models/User.model');

const register = createAsyncError(async (req, res) => {
    const { fullname, username, email, password, gender } = req.body;

    if (!fullname || !username || !email || !password || !gender) {
        res.status(402).json({ message: 'All the fields are required' });
    }

    const userName = await User.findOne({ username });
    const userEmail = await User.findOne({ email });

    if (userName) {
        return res.status(400).json({ message: 'Username already exists' });
    }

    const modifiedUsername = username.toLowerCase().replace(/ /g, '');

    if (userEmail) {
        return res.status(400).json({ message: 'User already exists' });
    }

    const newUser = new User({
        fullname,
        username: modifiedUsername,
        email,
        password,
        gender,
    });

    await newUser.save();

    const createdAccessToken = generateAccessToken({ _id: newUser._doc._id });
    const createdRefreshToken = generateRefreshToken({ _id: newUser._doc._id });

    res.cookie('refreshToken', createdRefreshToken, {
        httpOnly: true,
        path: '/api/refresh_token',
        maxAge: 30 * 24 * 60 * 60 * 1000,
    });

    res.status(200).json({
        message: 'Registration successful',
        createdAccessToken,
        user: { ...newUser._doc, password: null },
    });
});

module.exports = {
    register,
};
