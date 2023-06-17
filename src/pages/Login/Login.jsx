import AOS from "aos";
import "aos/dist/aos.css";
import Lottie from "lottie-react";
import React, { useContext } from "react";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import login from "../../assets/55776-ninja-kommando-ko.json";
import loginImg from "../../assets/images/footer.jpg";
import Cover from "../../components/Cover";
import PageName from "../../components/PageName";
import { AuthContext } from "../../providers/AuthProvider";
AOS.init();
const Login = () => {
  const { signIn, signInWithGoogle } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location);
  const from = location.state?.from?.pathname || "/";

  // form click handle function
  const handleToLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    // console.log(email, password);

    // signIn context for login user
    signIn(email, password)
      .then((result) => {
        const user = result.user;

        if (user) {
          Swal.fire({
            icon: "success",
            title: "Welcome to Fight For Fitness!!!",
            text: "User has been log in successfully.",
          });
        }
        // navigate to home or desired directory
        navigate(from, { replace: true });
        console.log(user);
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Oops!!!",
          text: error?.message,
        });
      });
    reset();
  };

  const handleToGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        const user = result.user;

        if (user) {
          Swal.fire({
            icon: "success",
            title: "Welcome to Fight For Fitness!!!",
            text: "User has been log in successfully.",
          });
        }
        // navigate to home or desired directory
        navigate(from, { replace: true });
        console.log(user);
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Oops!!!",
          text: error?.message,
        });
      });
  };

  return (
    <div>
      <PageName pageName={"Login"}></PageName>
      <Cover img={loginImg} title="Please Login"></Cover>
      <div className="lg:flex justify-between items-center px-8 my-16 container mx-auto">
        <div className="lg:w-1/2 mb-12 px-8 hover:scale-110 duration-700 ">
          <Lottie animationData={login} loop={true}></Lottie>
        </div>
        <div
          className="card lg:w-1/2 shadow-2xl bg-base-100 mx-auto sm:px-8"
          // data-aos="zoom-in"
          // data-aos-duration="1000"
        >
          <div
            className="card-body sm:px-16 sm:pt-16"
            data-aos="fade-down"
            data-aos-duration="2500"
          >
            <form onSubmit={handleToLogin}>
              <div className="text-center mb-10">
                <h1 className="text-5xl font-bold">Login</h1>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-lg font-medium">Email</span>
                </label>
                <input
                  type="text"
                  placeholder="email"
                  className="input  border-[#f8ea69]"
                  name="email"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-lg font-medium">
                    Password
                  </span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  className="input  border-[#f8ea69]"
                  name="password"
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <input
                  type="submit"
                  value="Log In"
                  className="btn bg-[#ff0018] border-none text-xl capitalize hover:bg-red-600"
                />
              </div>
            </form>
            <div className=" mx-auto text-center space-y-3">
              <h3 className="text-xl font-medium mt-3 ">Or Sign In with</h3>

              <div className="flex justify-center gap-2">
                <span className="hover:bg-[#f8ea69] rounded-full p-2 cursor-pointer">
                  <FaGithub className=" text-2xl"></FaGithub>
                </span>
                <span
                  onClick={handleToGoogleSignIn}
                  className="hover:bg-[#f8ea69] rounded-full p-2 cursor-pointer"
                >
                  <FcGoogle className=" text-2xl"></FcGoogle>
                </span>
              </div>
              <p className="text-xl">
                New on Fight For Fitness?
                <Link to="/signup" className="text-[#ff0018] font-medium">
                  {""} Sign Up
                </Link>
              </p>
              <p></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
