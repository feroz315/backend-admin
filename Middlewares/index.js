
import jwt from "jsonwebtoken";



const authMiddleware = async(req,res,next) => {
    console.log(req.headers["authorization"]);
   try {
       if(req.headers["authorization"]){
           const token = req.headers["authorization"].split(" ");
           console.log(token);

           const isVerify = jwt.verify(token, "PRIVATEKEY");
           console.log("isVerify", isVerify);
           
           if(isVerify){
               next()
           }
       }else{
           res.json({
               message: "UNAUTH"
           });
          
       }
   } catch (error) {
       res.json({
           message: "UNAUTH"
       });
    }
   }


 export { 
    authMiddleware,
   };