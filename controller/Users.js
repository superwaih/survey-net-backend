require("dotenv").config();
const cloudinary = require("../cloudinary/cloudinary");
const { UnauthenticatedError, BadRequestError } = require("../errors");
const User = require("../model/User");
const { StatusCodes } = require("http-status-codes");
const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "zwingerfx@gmail.com",
    pass: "gpvgnuuqnvnsngyy",
  },
});

const getAllUsers = async (req, res) => {
  const users = await User.find({});
  res.status(200).json(users);
};

const createUser = async (req, res) => {
  const { email } = req.body;
  const userExists = await User.findOne({ email });
  if (userExists) {
    res
      .status(StatusCodes.BAD_REQUEST)
      .json({
        payload: "user already exists",
        status: StatusCodes.BAD_REQUEST,
      });
  }
  const user = await User.create({ ...req.body });

  res
    .status(StatusCodes.CREATED)
    .json({ payload: user, status: StatusCodes.CREATED });
};
const submitInformation = async (req, res) => {
  const email = req.params.email;
  const { images } = req.body;

  const uploadedImgs = images?.map(async image=>{
    const upload =  await cloudinrary.uploader.upload(image,
         { 
           upload_preset: 'unsigned_upload',
           allowed_formats : ['png', 'jpg', 'jpeg', 'svg', 'ico', 'jfif', 'webp'],
       }, 
         function(error, result) {
             if(error){
                 console.log(error)
             }
              });
     return upload
   })
 
  try {
    const fulfilled = await Promise.all(uploadedImgs).then((values) => {
      return values;
    });
    const publicIds = fulfilled.map((image) => {
      return image.url;
    });
    const currentUser = await User.findOneAndUpdate(
      { email: email },
      { ...req.body, document: publicIds },
      { returnOriginal: false }
    );
    if (currentUser) {
      const mailOptions = {
        from: "sheriffhardewale@gmail.com",
        to: "sheriffhardewale@gmail.com",
        subject: "New Verification Request",
        html: `<h5>Someone just submitted  in with the following info </h5>
        <p>with the following information </p> 
        <p>firstname:${currentUser.firstname} </p>
        <p>email:${currentUser.email} </p>
  
        <p>lastname:${currentUser.lastname} </p>
        <p>verification Method:${currentUser.verification_type} </p>
  
  
        
  
        please visit the admin page to verify their document `,
      };
      res.status(200).json({ msg: "done", payload: currentUser });
      transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
          console.log(error);
        } else {
        }
      });
    } else {
      res.status(404).json({
        msg: "User not found",
      });
    }
  } catch (err) {
    res.status(500).json(err);
  }
};

const getSingleUser = async (req, res) => {
  const userid = req.params.id;
  const currentUser = await User.findById(userid);
  res.json(currentUser);
};

module.exports = {
  getAllUsers,
  createUser,
  submitInformation,
};
