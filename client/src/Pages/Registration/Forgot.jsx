import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Forgot = () => {
  const [email, setEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [answer, setAnswer] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "http://localhost:4000/api/v1/auth/forgot-password",
        {
          email,
          newPassword,
          answer,
        }
      );
      if (res && res.data.success) {
        navigate("/login");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <form className="main" onSubmit={handleSubmit}>
        <div className="left-side gradient-custom-2">
          <img
            src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
            className="img-fluid"
            alt="Sample image"
          />
        </div>
        <div className="cn">
          <h1>RESET YOUR PASSWORD</h1>
          <div className="box">
            <input
              className="name"
              placeholder="Enter Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              id="fname"
              name="fname"
              required
            />
          </div>
          <div className="box">
            <input
              className="name"
              placeholder="Enter the best Palce you visit"
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
              type="text"
              id="fname"
              name="fname"
              required
            />
          </div>
          <div className="box">
            <input
              type="password"
              placeholder="Enter New Password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              id="password"
              name="password"
              required
            />
          </div>

          <button type="submit" className="btn btn-primary btn-lg">
            Submit
          </button>

          <br />
          <br />
        </div>
      </form>
    </>
  );
};

export default Forgot;
