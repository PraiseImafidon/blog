import User from '../models/User';

export const getAllUser = async (req, res, next ) => {
    let users;
    try{
        users = await User.find();
    }
    catch(err) {
        console.log(err);
    }
    if (!users) {
        res.status(404).json({ message: "Users not found"});
    }
    return res.status(200).json({ users });
}

export const signup = async (req, res, next ) => {
    let users;
}