const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { generateAccessToken, generateRefreshToken } = require('../../lib/jwt');
const createAsyncError = require('../../middlewares/createAsyncError');
const User = require('../../models/User.model');

// @desc Register
// @routes api/auth/register
// @access for register users

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

    if (password.length < 6) {
        return res.status(400).json({ message: 'Password must be at least 6 characters' });
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
        path: '/api/auth/refresh_token',
        maxAge: 30 * 24 * 60 * 60 * 1000,
    });

    return res.status(200).json({
        message: 'Registration successful',
        access_token: createdAccessToken,
        user: { ...newUser._doc, password: null },
    });
});

// @desc Login
// @routes api/auth/login
// @access for Login users

const login = createAsyncError(async (req, res) => {
    const { email, password } = req.body;

    const foundUser = await User.findOne({ email }).populate('followers following', '-password');

    if (!foundUser) {
        return res.status(400).json({ message: 'User not exits' });
    }

    const isMatch = bcrypt.compare(password, foundUser.password);

    if (!isMatch) {
        return res.status(400).json({ message: 'Password is incorrect' });
    }

    const createdAccessToken = generateAccessToken({ _id: foundUser._doc._id });
    const createdRefreshToken = generateRefreshToken({ _id: foundUser._doc._id });

    res.cookie('refreshToken', createdRefreshToken, {
        httpOnly: true,
        path: '/api/auth/refresh_token',
        maxAge: 30 * 24 * 60 * 60 * 1000,
    });

    return res.status(200).json({
        message: 'Login successful',
        access_token: createdAccessToken,
        user: { ...foundUser._doc },
    });
});

// @desc Logout
// @routes api/auth/logout
// @access for Logout the user and clear cookies

const logout = createAsyncError(async (req, res) => {
    res.clearCookie('refreshToken', { path: '/api/auth/refresh_token' });
    return res.status(200).json({ message: 'Logged out Successfully' });
});

// @desc Refresh
// @routes api/auth/refresh
// @access for refresh the cookie and generate it again

const refresh = createAsyncError(async (req, res) => {
    const rfToken = req.cookies.refreshToken;

    if (!rfToken) {
        return res.status(401).json({ message: 'UnAuthorized' });
    }

    const verifyRefreshToken = jwt.verify(rfToken, process.env.REFRESH_TOKEN_SECRET);

    if (!verifyRefreshToken) {
        return res.status(403).json({ message: 'Forbidden' });
    }

    const findUser = await User.findOne({ _id: verifyRefreshToken._id })
        .select('-password')
        .populate('followers following', '-password');

    if (!findUser) {
        return res.status(400).json({ message: 'User not found' });
    }

    const newAccessToken = generateAccessToken({ _id: findUser._id });

    return res.status(200).json({ access_token: newAccessToken, user: findUser });
});

module.exports = {
    register,
    login,
    logout,
    refresh,
};
