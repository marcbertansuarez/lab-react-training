import React, {useState} from "react";

const SignupPage = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [nationality, setNationality] = useState('en');

  const handleEmail = (e) => {
    setEmail(e.target.value);
  }

  const handlePassword = (e) => {
    setPassword(e.target.value);
  }

  const handleNationality = (e) => {
    setNationality(e.target.value)
  }

  const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const isPasswordStrong = password.length >= 8;

  let greeting
  switch (nationality) {
    case "en":
      greeting = "Hello"
      break;
    case "de":
      greeting = "Hallo"
      break;
    case "fr":
      greeting = "Bonjour"
      break;
    default:
      break;
  }

  return (
    <div className="signup">
      <label>Email</label>
      <input type="email" value={email} onChange={handleEmail} />
      {isEmailValid && <p>Valid email</p>}
      <label>Password</label>
      <input type="password" value={password} onChange={handlePassword} />
      {isPasswordStrong && <p>Strong password</p>}
      <label>Nationality</label>
      <select name="nationality" value={nationality} onChange={handleNationality}>
        <option value="en">English</option>
        <option value="de">German</option>
        <option value="fr">French</option>
      </select>
      <button>Sign Up</button>
      <p>{greeting}</p>
      <p>Your email address is: {email}</p>

    </div>
  );
};

export default SignupPage;
