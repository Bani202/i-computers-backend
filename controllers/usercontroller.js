import User from "../model/User.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken"

export function createUser(req,res){

    const data =  req.body

    const hashpassword = bcrypt.hashSync(data.password,10)

    
  const user = new User({
    email : data.email,
    firstname : data.firstname,
    lastname : data.lastname,
    password : hashpassword,
    role : data.role,
  })

   user.save().then(
        ()=>{
           res.json({
                message: "User created succesfully"
            });
		}
    )
	.catch((error)=>{
		res.status(500).json({
			message : "Error creating user",
			error : error.message
		});
	})
}

export function loginUser(req, res) {
	const email = req.body.email;
	const password = req.body.password;

	User.find({ email: email }).then((users) => {
		if (users[0] == null) {
			res.json({
				message: "User not found",
			});
		} else {
			const user = users[0];

			const isPasswordCorrect = bcrypt.compareSync(password, user.password);

			if (isPasswordCorrect) {
				const payload = {
					email: user.email,
					firstName: user.firstname,
					lastName: user.lastname,
					role: user.role,
					isEmailVerified: user.isemailverified,
					image: user.image,
				};

				const token = jwt.sign(payload, process.env.JWT_SECRET, {
					//expiresIn: "150h",
				});

				res.json({
					message: "Login successful",
					token: token,
					role: user.role
				});
			} else {
				res.status(401).json({
					message: "Invalid password",
				});
			}
		}
	});
}



export function isadmin(req){
    if(req.user == null){
        return false;
    }

    if(req.user.role != "admin"){
        return false;
    }
    return true;
        
}