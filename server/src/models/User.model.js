const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = mongoose.Schema(
    {
        fullname: {
            type: String,
            required: true,
            trim: true,
            maxLength: 25,
        },
        username: {
            type: String,
            required: true,
            trim: true,
            maxLength: 25,
            unique: true,
        },
        email: {
            type: String,
            required: true,
            trim: true,
            unique: true,
        },
        password: {
            type: String,
            required: true,
        },
        avatar: {
            type: String,
            default:
                'https://res.cloudinary.com/devatchannel/image/upload/v1602752402/avatar/avatar_cugq40.png',
        },
        role: {
            type: String,
            default: 'user',
        },
        gender: {
            type: String,
            default: 'male',
        },
        mobile: {
            type: String,
            default: '',
        },
        address: {
            type: String,
            default: '',
        },
        story: {
            type: String,
            default: '',
            maxLength: 200,
        },
        website: {
            type: String,
            default: '',
        },
        followers: [{ type: mongoose.Types.ObjectId, ref: 'User' }],
        following: [{ type: mongoose.Types.ObjectId, ref: 'User' }],
    },
    { timestamps: true },
);

userSchema.pre('save', async function (next) {
    if (!this.isModified('password')) {
        next();
    }
    this.password = await bcrypt.hash(this.password, 10);
    next();
});

module.exports = mongoose.model('User', userSchema);
