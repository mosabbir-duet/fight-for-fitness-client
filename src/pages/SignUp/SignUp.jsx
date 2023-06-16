import AOS from "aos";
import "aos/dist/aos.css";
import Lottie from "lottie-react";
import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import login from "../../assets/55776-ninja-kommando-ko.json";
import loginImg from "../../assets/images/footer.jpg";
import Cover from "../../components/Cover";
import PageName from "../../components/PageName";
import { AuthContext } from "../../providers/AuthProvider";
AOS.init();

const SignUp = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const { createUser, updateUserProfile, signInWithGoogle, logOut } =
    useContext(AuthContext);
  const navigate = useNavigate();

  const onSubmit = (data) => {
    createUser(data.email, data.password).then((result) => {
      const loggedUser = result.user;
      if (loggedUser) {
        logOut()
          .then((result) => {})
          .catch((error) => console.log(error.message));
      }
      console.log(loggedUser);

      updateUserProfile(data.name, data.photoURL)
        .then(() => {
          const saveUser = {
            name: data.name,
            email: data.email,
            image: data.photoURL,
          };
          fetch("http://localhost:3000/users", {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(saveUser),
          })
            .then((res) => res.json())
            .then((data) => {
              if (data.insertedId) {
                reset();
                Swal.fire({
                  position: "top-end",
                  icon: "success",
                  title: "User created successfully.",
                  showConfirmButton: true,
                  timer: 1200,
                });
                navigate("/");
              }
            });
        })
        .catch((error) => console.log(error));
    });
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
        // navigate(from, { replace: true });
        navigate("/");
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
    <>
      <PageName pageName={"Register"}></PageName>
      <Cover img={loginImg} title="Please Register!!!"></Cover>

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
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="text-center mb-10">
                <h1 className="text-5xl font-bold">Register</h1>
              </div>
              {/* Name Field  */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-lg font-medium">Name</span>
                </label>
                <input
                  type="text"
                  {...register("name", { required: true })}
                  name="name"
                  placeholder="Name"
                  className="input  border-[#f8ea69]"
                />
                {errors.name && (
                  <span className="text-red-600">Name is required</span>
                )}
              </div>
              {/* Email field  */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-lg font-medium">Email</span>
                </label>
                <input
                  type="email"
                  {...register("email", { required: true })}
                  name="email"
                  placeholder="email"
                  className="input  border-[#f8ea69]"
                />
                {errors.email && (
                  <span className="text-red-600">Email is required</span>
                )}
              </div>
              {/* Photo url field  */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-lg font-medium">
                    Photo URL
                  </span>
                </label>
                <input
                  type="text"
                  {...register("photoURL", { required: true })}
                  placeholder="Photo URL"
                  className="input  border-[#f8ea69]"
                />
                {errors.photoURL && (
                  <span className="text-red-600">Photo URL is required</span>
                )}
              </div>

              {/* password  */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-lg font-medium">
                    Password
                  </span>
                </label>
                <input
                  type="password"
                  {...register("password", {
                    required: true,
                    minLength: 6,
                    maxLength: 28,
                    pattern: /(?=.*[A-Z])(?=.*[!@#$&*])/,
                  })}
                  placeholder="password"
                  className="input input-bordered"
                />
                {errors.password?.type === "required" && (
                  <p className="text-red-600">Password is required</p>
                )}
                {errors.password?.type === "minLength" && (
                  <p className="text-red-600">Password must be 6 characters</p>
                )}
                {errors.password?.type === "maxLength" && (
                  <p className="text-red-600">
                    Password must be less than 28 characters
                  </p>
                )}
                {errors.password?.type === "pattern" && (
                  <p className="text-red-600">
                    Password must have one Uppercase and one special character.
                  </p>
                )}
              </div>
              {/* Confirm password field  */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-lg font-medium">
                    Confirm Password
                  </span>
                </label>
                <input
                  type="password"
                  {...register("confirmPassword", {
                    required: true,
                    minLength: 6,
                    maxLength: 28,
                    pattern: /(?=.*[A-Z])(?=.*[!@#$&*])/,
                  })}
                  placeholder="Confirm password"
                  className="input input-bordered"
                />
                {errors.confirmPassword?.type === "required" && (
                  <p className="text-red-600">Password is required</p>
                )}

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
                Already have an account?
                <Link to="/login" className="text-[#ff0018] font-medium">
                  {""} Login
                </Link>
              </p>
              <p></p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
