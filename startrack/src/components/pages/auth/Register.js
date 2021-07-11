import React, { useState, useContext,useEffect } from 'react';
import AlertContext from '../../../context/alert/alertContext';
import AuthContext from '../../../context/auth/authContext';
import { useSpring, animated } from 'react-spring';

const Register = (props) => {

	const springProps = useSpring({ to: { opacity: 1,translateX:'0' },from: { opacity: 0 ,translateX:'30rem'}, delay:200,
})
	const alertContext = useContext(AlertContext);
	const authContext = useContext(AuthContext);

	const { setAlert } = alertContext;
	const { error,registerUser,clearErrors} = authContext;

useEffect(() => {

	// if (isAuthenticated) {
	// 	props.history.push('/');
	// }
	if (error === 'user already exist') {
		setAlert(error, 'user-exist');
		clearErrors();
	
	}
}, [error, props.history]);  // eslint-disable-line react-hooks/exhaustive-deps

	const [user, setUser] = useState({
		name: '',
		email: '',
		password: '',
		password2: '',
	});
	const { name, email, password, password2 } = user;

	const onChange = (e) => {
		setUser({ ...user, [e.target.name]: e.target.value });
    };
    



	// console.log(e.target.value);

	const userSubmit = (e) => {
		if (name === '' || password === '' || email === '' || password2 === '') {
		setAlert('Please fill all input fields', 'input-fields');
		} else if (password !== password2) {
		setAlert('Password does not match', 'password not match');
		}
	
		registerUser({ name, email, password });
		e.preventDefault();
	};

	return (
		<animated.div style={springProps}>
					<div className="inner-container">
			<form className="reg-container" id="form-reg" onSubmit={userSubmit}>
				<h2>Register User</h2>
				<div className="reg-group">
					<label htmlFor="name">Name</label>
					<input
						type="text"
						name="name"
						className="reg-input"
						placeholder="Enter name"
						value={name}
						onChange={onChange}
					/>
				</div>
				<div className="reg-group">
					<label htmlFor="email">Email</label>
					<input
						type="email"
						name="email"
						className="reg-input"
						value={email}
						placeholder="Enter email"
						onChange={onChange}
					/>
				</div>
				<div className="reg-group">
					<label htmlFor="password">Password</label>
					<input
						type="text"
						name="password"
						className="reg-input"
						onChange={onChange}
						value={password}
						placeholder="Enter password"
					/>
				</div>
				<div className="reg-group">
					<label htmlFor="password2">Confirm Password</label>
					<input
						type="text"
						onChange={onChange}
						name="password2"
						className="reg-input"
						value={password2}
						placeholder="Enter confirm password"
					/>
				</div>
				<input type="submit" value="Register" className="reg-btn" />
			</form>
		</div>
		</animated.div>

	);
};

export default Register;


// const obj1 = {
//     id: 1,
//     b: '123',
//     c:'333'
// }
// console.log(obj1)



// let a = [1,2,3,4,5,5,9,9,9,9,9,2,8,5,8];
// let b = [];
// let len = a.length;
// let temp;
// for (let i = 0; i < len; i++){


	
// 	if (a[i] !== temp) {
// 		b.push(a[i]);
// 		temp = a[i];
// console.log(a[i] !== temp);

// 	}
// }
// console.log(temp);
// console.log(b);




// let c=new Set(a)
// const array1 = [];
// for (let i = 0; i < a.length; i++){
// 	if (!array1.includes(a[i])) {

// 		array1.push(a[i]);
		
// 	}
// }

// console.log(array1);
// console.log(new Array(c));