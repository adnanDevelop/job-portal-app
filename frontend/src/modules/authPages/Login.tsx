import axios from "axios";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";

// Types
import { ILoginUser } from "./type";
import { userApiEndPoint } from "../../utils/apiEndPoints";

// Redux
import { useDispatch } from "react-redux";
import { login } from "../../redux/features/authSlice";
import { useState } from "react";

const Login = () => {
  const navigate = useNavigate();
  const disptach = useDispatch();
  const [loading, setLoading] = useState<boolean>(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ILoginUser>();

  // Submit data
  const submitData = async (data: ILoginUser) => {
    try {
      const response = await axios.post(`${userApiEndPoint}/login`, data, {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      });

      console.log(response?.data?.data);

      if (response.status === 200) {
        navigate("/");
        disptach(login(response?.data?.data));
        toast.success(response?.data?.message);
      }
    } catch (error) {
      console.log("error while login user", error);
    } finally {
      setLoading(true);
    }
  };

  return (
    <main className="w-full relaive z-[1] h-screen bg-[url('/image/auth-bg.jpg')] bg-no-repeat bg-center bg-cover">
      <div className="fixed top-0  left-0 w-full h-full bg-gradient-to-b from-transparent to-[#161c2d]" />
      <div className="relative z-[1] flex items-center justify-center w-full h-full  px-[20px]">
        {/* Form section */}
        <form
          className="max-w-[400px] w-full p-4 bg-dark-blue rounded-lg"
          onSubmit={handleSubmit(submitData)}
        >
          <img
            src="/image/logo-light.png"
            className="w-[120px] xl:w-[150px] h-auto object-cover mx-auto"
            alt=""
          />
          <h1 className="!text-white font-poppin font-medium my-2 xl:text-[25px]">
            Login
          </h1>

          {/* email input */}
          <div className="mb-2">
            <label className="text-xs text-white xl:text-sm font-poppin">
              Your Email:
            </label>
            <input
              type="email"
              className="mt-1 w-full h-[40px] placeholder:text-slate text-slate rounded-md px-2 border text-xs focus:outline-none border-[#94a3b857] bg-transparent focus:border-green"
              placeholder="Testing@gmail.com"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                  message: "Invalid email address",
                },
              })}
            />
            {errors.email && (
              <p className="mt-1 text-xs text-red-500">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* password input */}
          <div className="mb-2">
            <label
              htmlFor="password"
              className="text-xs text-white xl:text-sm font-poppin"
            >
              Password:
            </label>
            <input
              type="password"
              className="mt-1 w-full h-[40px] placeholder:text-slate text-slate rounded-md px-2 border text-xs focus:outline-none border-[#94a3b857] bg-transparent focus:border-green"
              placeholder="Harry"
              {...register("password", { required: "Name is required" })}
              onFocus={(e) => (e.target.type = "text")}
              onBlur={(e) => (e.target.type = "password")}
            />
            {errors.password && (
              <p className="mt-1 text-xs text-red-500">
                {errors.password.message}
              </p>
            )}
          </div>

          {/* Select role */}
          <div>
            <span className="text-xs text-white font-poppin xl:text-sm">
              Select Role:
            </span>
            <div className="flex mt-2 gap-x-4">
              <div className="flex items-center text-xs text-white gap-x-1">
                <input
                  type="radio"
                  className="radio radio-xs radio-accent"
                  value="student"
                  {...register("role", { required: "Role is required" })}
                />
                <span>Student</span>
              </div>
              <div className="flex items-center text-xs text-white gap-x-1">
                <input
                  type="radio"
                  className="radio radio-xs radio-accent"
                  value="recruitor"
                  {...register("role", { required: "Role is required" })}
                />
                <span>Recruitor</span>
              </div>
            </div>
            {errors.role && (
              <p className="mt-1 text-xs text-red-500">{errors.role.message}</p>
            )}
          </div>

          {/* Submit button */}
          <div className="mt-3">
            <button
              type="submit"
              className="flex items-center justify-center w-full primary-btn"
              disabled={loading}
            >
              {loading ? (
                <span className="loading loading-dots loading-md"></span>
              ) : (
                "Login"
              )}
            </button>
            <p className="mt-2 text-xs text-center text-white">
              Don't have an account?{" "}
              <Link to="/register" className="font-semibold text-green">
                Register
              </Link>
            </p>
          </div>
        </form>
      </div>
    </main>
  );
};

export default Login;
