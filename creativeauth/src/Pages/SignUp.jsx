import LoginSignupToggler from "../components/LogInSignUpToggle";

function SignUp() {
	return (
		<div className="formContainer">
			<LoginSignupToggler />
			<div className="greeting">
				<h2>Create account</h2>
				<p>Sign up with your colour sequence.</p>
			</div>
			<div className="signin-form">
				<p>Sign up form goes here.</p>
			</div>
		</div>
	);
}

export default SignUp;
