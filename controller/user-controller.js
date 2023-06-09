import User from "../model/user.schema.js";

export const userSignup = async (req, res) => {
  try {
    const exist = await User.findOne({ username: req.body.username});
    const existEmail= await User.findOne({ email:req.body.email});
    
    if (exist) {
      return res.status(401).json({ message: "User already exists" });
    }
    if(existEmail){
      return res.status(401).json({ message: "User already exists" });
    }
    const user = req.body;
    const newUser = new User(user);
    await newUser.save();

    res.status(200).json({ message: user });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const userLogin = async (req, res) => {
  try {
    const username = req.body.username;
    const password = req.body.password;
    let user = await User.findOne({ username: username, password: password });
    if (user) {
      return res.status(200).json({ data: user });
    } else {
      return res.status(401).json("invalid login");
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

export const getAllUsers = async (req, res) => {
  try {
    const users = await User.find({})
    res.status(200).json(users)
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}