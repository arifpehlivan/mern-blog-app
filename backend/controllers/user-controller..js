import User from "../model/User";
import bcrypt from "bcryptjs";

export const getAllUser = async(req,res,next) => {
    let users;
    try {
        users = await User.find();
    } catch (err) {
        console.log(err);
    }
    if(!users){
        return res.status(404).json({message: "No user found"});
    }
    return res.status(200).json({users});
}
export const signup = async(req,res,next) => {
    const {name, email, password} = req.body;
    let currentUser;
    try {
        currentUser = await User.findOne({email});
    } catch (err) {
        return console.log(err);
    }
    if(currentUser){
        return res.status(400).json({message: "User already exists! Login instead"})
    }
    const hashedPassword = bcrypt.hashSync(password);
    const user = new User({
        name,
        email,
        password: hashedPassword,
        blogs: []
    })
    try {
        await user.save();
    } catch (err) {
        return console.log(err);
    }
    return res.status(201).json({user});
}

export const login = async(req,res,next) => {
    const { email, password} = req.body;
    let currentUser;
    try {
        currentUser = await User.findOne({email});
    } catch (err) {
        return console.log(err);
    }
    if(!currentUser){
        return res.status(404).json({message: "Couldn't find user by this email"});
    }
    const checkPassword = bcrypt.compareSync(password, currentUser.password);
    if(!checkPassword){
        return res.status(400).json({message: "Incorrect password"});
    }
    return res.status(200).json({message: "Login succesfull"});
}
