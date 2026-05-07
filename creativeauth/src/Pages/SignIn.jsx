function SignIn() {
	return (
		<div className="formContainer">
			<div className="headingLine">
				<h1 className="emblem">◆</h1>
				<h1>InsertWebsiteName</h1>
			</div>
			<div className="signInSignUpToggle">
				<button className="signInToggle">Sign In</button>
				<button className="signUpToggle">Sign Up</button>
			</div>
			<div className="greeting">
				<h2>Welcome back</h2>
				<p>Sign in with your colour sequence.</p>
			</div>
			<div className="form">
				<div className="field">
					<h3>Email</h3>
					<input></input>
				</div>
				<div>
					<h3>Password</h3>
					<div className="colours">
						<div className="colour1"></div>
						<div className="colour2"></div>
						<div className="colour3"></div>
						<div className="colour4"></div>
					</div>
					<div className="passwordDisplay">
						<div className="colourInput"></div>
						<div className="colourInput"></div>
						<div className="colourInput"></div>
						<div className="colourInput"></div>
						<div className="colourInput"></div>
						<div className="colourInput"></div>
						<div className="colourInput"></div>
						<div className="colourInput"></div>
					</div>
					<p>pick 8 colours in you secret order</p>
				</div>
			</div>
			<div className="signIn">
				<button>Sign In</button>
			</div>
			<div className="paragraph">
				<p>Don't have an account?</p>
				<a>Sign In</a>
			</div>
		</div>
	);
}
export default SignIn;
