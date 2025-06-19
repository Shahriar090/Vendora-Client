import FormWrapper from "@/Components/Form/FormWrapper";
import InputField from "@/Components/Form/InputField";
import {
  registerUserSchema,
  type TRegisterUserForm,
} from "./register.validations";
import { registerDefaultValues } from "./auth.constants";
import { useState } from "react";
import axios from "axios";
import { getErrorMessage } from "./auth.utils";
import { toast } from "sonner";
import { Link, useNavigate } from "react-router";

const Register = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const navigate = useNavigate();

  const handleRegister = async (data: TRegisterUserForm) => {
    setIsLoading(true);

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_SERVER_LOCAL_URL}/users/create-user`,
        data
      );
      toast.success("User Registration Successful", {
        duration: 3000,
        position: "top-right",
      });
      console.log(response);
      navigate("/login");
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
      <div className="w-full max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-4xl xl:max-w-5xl mx-auto p-4 sm:p-6 md:p-8 bg-[var(--color-white)] rounded-lg shadow-sm">
        <h1 className="text-lg sm:text-xl font-medium text-[var(--color-red)] pb-4 sm:pb-6">
          Sign Up
        </h1>
        <FormWrapper
          schema={registerUserSchema}
          defaultValues={registerDefaultValues}
          onSubmit={handleRegister}
          submitButtonLabel={isLoading ? "Processing..." : "Register Now"}
          submitButtonDisabled={isLoading}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            <InputField
              name="user.name.firstName"
              label="First Name"
              type="text"
              placeholder="Enter Your First Name"
            />
            <InputField
              name="user.name.middleName"
              label="Middle Name"
              type="text"
              placeholder="Enter Your Middle Name"
            />
            <InputField
              name="user.name.lastName"
              label="Last Name"
              type="text"
              placeholder="Enter Your Last Name"
            />
            <InputField
              name="user.gender"
              label="Gender"
              type="select"
              placeholder="Choose Yours"
              options={[
                { label: "Male", value: "Male" },
                { label: "Female", value: "Female" },
                { label: "Others", value: "Others" },
              ]}
            />
            <InputField
              name="user.age"
              label="Age"
              type="number"
              placeholder="Enter Your Age"
            />
            <InputField
              name="user.contactInfo.mobileNo"
              label="Mobile"
              type="text"
              placeholder="Enter Your Mobile No"
            />
            <InputField
              name="user.contactInfo.email"
              label="Email"
              type="email"
              placeholder="Enter Your Email"
            />
            <InputField
              name="user.password"
              label="Password"
              type="password"
              placeholder="Choose A Strong Password"
            />
          </div>
        </FormWrapper>
        <div className="pt-5 md:pt-0">
          <h4 className="text-xs text-[var(--color-gray)] font-medium">
            Already have an account?{" "}
            <Link to={"/login"}>
              <span className="text-[var(--color-blue)]">Login</span>
            </Link>
          </h4>
        </div>
      </div>
    </section>
  );
};

export default Register;
