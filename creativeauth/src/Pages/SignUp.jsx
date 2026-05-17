import "./SignUp.css";

import LoginSignupToggler from "../components/LogInSignUpToggle";
import PasswordPicker from "../components/PasswordPicker";

function SignUp() {
	return (
		<div className="formContainer">
			<div className="headingLine">
				<h1 className="emblem">◆</h1>
				<h1>InsertWebsiteName</h1>
			</div>
			<LoginSignupToggler></LoginSignupToggler>
			<div className="greeting">
				<span className="welcome-message">Create Your Account</span>
				<span className="extra-info">
					Pick 8 colours in a secret order — that's your password.
				</span>
			</div>
			<div className="signup-form">
				<div className="field">
					<span className="fullname-label">Full Name</span>
					<input
						type="text"
						placeholder="John Doe"
						className="fullname-input"></input>
				</div>
				<div className="field">
					<span className="email-label">Email</span>
					<input
						type="text"
						placeholder="you@example.com"
						className="email-input"></input>
				</div>
				<PasswordPicker />
				<PasswordPicker />
				<button className="signIn">Sign Up</button>
			</div>
			<div className="new-user-option">
				<span className="new-user-prompt">Already a Member?</span>
				<button className="new">Sign in</button>
			</div>
		</div>
	);
}

export default SignUp;
