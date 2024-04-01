
import UserModal from './Modal/scheme.js'
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";



const UserSignup = async(req,res) => {
 try {
        const { email, password, firstname, lastname } = req.body;
        if (!email || !password || !firstname || !lastname) {
            res.status(400).json({
                message: "invaild email & password !",
                data: null,

            })
            return
        }

        const emailExit = await UserModal.findOne({ email })
        if (emailExit !== null) {
            res.status(400).json({
                message: "email is already exit"
            })
            return
        }

        const hashPass = await bcrypt.hash(password, 10)
        const obj = {
            ...req.body,
            password: hashPass
        };

        const respone = await UserModal.create(obj)
        console.log(respone, "respone")
        res.status(200).json({
            message: "user successfully Signup!",

        });

    } catch (error) {
        res.json({
            message: error.message
        });
    }


}

const UserLogin = async(req,res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            res.json({
                message: "required fields are missing!",
                data: null,
                status: false,

            });
            return;
        }

        const checkemail = await UserModal.findOne({ email });
        if (!checkemail) {
            res.status(400).json({
                message: "invaild email & password"
            });
            return;
        }

        const comparepass = await bcrypt.compare(password, checkemail.password);
        if (!comparepass) {
            res.status(400).json({
                message: "invaild email & password"
            });
            return;
        }
        const obj = {
            email: checkemail.email,
            _id: checkemail._id,
            firstname: checkemail.firstname,
            lastname: checkemail.lastname,
        }

      
         const createtoken = jwt.sign({
         id:"66026602f35d411fec8ac4e2",
         email,
         lastname,
        
        
        },"jAWANPK")
            console.log(createtoken, "token")

        

        const token = jwt.sign(obj, "PAK")
        res.json({
            message: "Successfully Login",
            data: checkemail,
            status: true,
            token
        });

    } catch (error) {
        res.json({
            message: error.message
        })
    }
}
 
export  {
    UserSignup,
    UserLogin
}