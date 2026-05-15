// import styling
import "./PasswordPicker.css";

function PasswordPicker() {
	return (
		<div className="password-picker">
			<div className="password-label">
				<h3>Password</h3>
				<div className="character-count">
					<h3>0 / 8</h3>
					<h3>eye</h3>
				</div>
			</div>
			<div className="colours">
				<button className="colour c-purple"></button>
				<button className="colour c-pink"></button>
				<button className="colour c-blue"></button>
				<button className="colour c-orange"></button>
			</div>
			<div className="password-display">
				<div className="colour-input active"></div>
				<div className="colour-input"></div>
				<div className="colour-input"></div>
				<div className="colour-input"></div>
				<div className="colour-input"></div>
				<div className="colour-input"></div>
				<div className="colour-input"></div>
				<div className="colour-input"></div>
			</div>
			<div className="info-actions">
				<p>Pick 8 colors in your secret order</p>
				<div className="password-actions">
					<button className="undo">
						<span className="undo-text">Undo</span>
					</button>
					<button className="clear">Clear</button>
				</div>
			</div>
		</div>
	);
}

export default PasswordPicker;
