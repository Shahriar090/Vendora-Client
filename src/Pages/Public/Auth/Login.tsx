import FormWrapper from "@/Components/Form/FormWrapper";
import InputField from "@/Components/Form/InputField";
import { useState } from "react";
import { Link, useNavigate } from "react-router";
import {
  loginValidationSchema,
  type TLoginUserForm,
} from "./login.validations";
import { loginDefaultValues } from "./auth.constants";
import axios from "axios";
import { toast } from "sonner";
import { getErrorMessage } from "./auth.utils";
import { useAuth } from "@/Hooks/useAuth";

const Login = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const navigate = useNavigate();
  const { setAuthData } = useAuth();

  const handleLogin = async (data: TLoginUserForm) => {
    setIsLoading(true);

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_SERVER_LOCAL_URL}/auth/login`,
        data,
        { withCredentials: true }
      );
      toast.success("Login Successful", {
        duration: 3000,
        position: "top-right",
      });
      if (!response.data?.data) {
        throw new Error("Invalid Response");
      }
      const { user, token } = response.data.data;
      setAuthData({
        user,
        accessToken: token.accessToken,
      });
      navigate(
        user?.role === "Customer"
          ? "/customer/dashboard"
          : user?.role === "Seller"
          ? "/seller/dashboard"
          : "/"
      );
    } catch (error) {
      console.error(error);
      toast.error(getErrorMessage(error), {
        duration: 3000,
        position: "top-right",
      });
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <section className="bg-[var(--color-gray-bg)] min-h-screen flex justify-center items-center p-4">
      <div className="w-full max-w-xs sm:max-w-md md:max-w-2xl mx-auto p-4 sm:p-6 md:p-8 bg-[var(--color-white)] rounded-lg shadow-sm">
        <h1 className="text-lg sm:text-xl font-medium text-[var(--color-red)] pb-4 sm:pb-6">
          Login
        </h1>
        <FormWrapper
          schema={loginValidationSchema}
          defaultValues={loginDefaultValues}
          onSubmit={handleLogin}
          submitButtonLabel={isLoading ? "Logging In..." : "Login Now"}
          submitButtonDisabled={isLoading}
        >
          <div className="grid grid-cols-1 gap-3 sm:gap-4">
            <InputField
              name="email"
              label="Email"
              type="email"
              placeholder="Enter Your Email"
            />
            <InputField
              name="password"
              label="Password"
              type="password"
              placeholder="Choose A Strong Password"
            />
          </div>
        </FormWrapper>
        <div className="">
          <h4 className="text-xs text-[var(--color-gray)] font-medium">
            New Here?{" "}
            <Link to={"/register"}>
              <span className="text-[var(--color-blue)]">Sign Up</span>
            </Link>
          </h4>
        </div>
      </div>
    </section>
  );
};

export default Login;
