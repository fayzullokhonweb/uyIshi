import React, { useEffect } from "react";
import { Form, Link, useActionData } from "react-router-dom";
import { FormEmail, FormPassword } from "../components";
import { useRegister } from "../hooks/useRegister";

export const action = async ({ request }) => {
  let formData = await request.formData();
  let email = formData.get("email");
  let password = formData.get("password");
  let displayName = formData.get("displayName");
  return { email, password, displayName };
};

function Register() {
  const userData = useActionData();
  const { register, isPending } = useRegister();

  useEffect(() => {
    if (userData) {
      register(userData);
    }
  }, [userData]);

  return (
    <div className="font-[sans-serif] bg-white text-[#333] md:h-screen flex items-center justify-center py-10 rounded-lg">
      <div className="grid md:grid-cols-2 items-center gap-8 h-full max-w-6xl shadow-[0_2px_16px_-5px_rgba(6,81,237,0.3)]">
        <div className="max-md:order-1 h-full">
          <img
            src="https://readymadeui.com/signin-image.webp"
            className="lg:max-w-[90%] w-full h-full object-contain block mx-auto"
            alt="login-image"
          />
        </div>
        <div className="flex flex-col items-center p-6 h-full w-full">
          <Form method="post" className="max-w-lg w-full mx-auto">
            <div className="mb-10">
              <h3 className="text-blue-500 md:text-3xl text-2xl font-extrabold max-md:text-center">
                Create an account
              </h3>
            </div>
            <div>
              <label className="text-xs block mb-2">Full Name</label>
              <div className="relative flex items-center">
                <input
                  name="displayName"
                  type="text"
                  required
                  className="w-full bg-transparent text-sm border-b border-gray-300 focus:border-blue-500 px-2 py-3 outline-none"
                  placeholder="Enter name"
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#bbb"
                  stroke="#bbb"
                  className="w-[18px] h-[18px] absolute right-2"
                  viewBox="0 0 24 24"
                >
                  <circle cx="10" cy="7" r="6" data-original="#000000"></circle>
                  <path
                    d="M14 15H6a5 5 0 0 0-5 5 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 5 5 0 0 0-5-5zm8-4h-2.59l.3-.29a1 1 0 0 0-1.42-1.42l-2 2a1 1 0 0 0 0 1.42l2 2a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42l-.3-.29H22a1 1 0 0 0 0-2z"
                    data-original="#000000"
                  ></path>
                </svg>
              </div>
            </div>
            <div className="mt-5">
              <label className="text-xs block mb-2">Email</label>
              <FormEmail name="email" placeholder="Enter Email" type="text" />
            </div>
            <div className="mt-5">
              <label className="text-xs block -mb-6">Password</label>
              <FormPassword
                name="password"
                type="password"
                placeholder="Enter Password"
              />
            </div>
            <div className="mt-5">
              <button
                type="submit"
                className="w-full py-2.5 px-8 text-sm font-semibold mb-5 shadow-2xl rounded bg-blue-500 hover:bg-blue-600 text-white border focus:outline-none"
              >
                Create an account
              </button>
            </div>
          </Form>
          <div className="max-w-lg w-full mx-auto">
            <button
              type="button"
              className="px-8 py-2.5 btn-block flex justify-center mx-auto items-center rounded text-[#333] text-sm tracking-wider font-semibold border-none outline-none shadow-lg bg-gray-50 hover:bg-gray-100 active:bg-gray-50"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22px"
                fill="#fff"
                className="inline mr-3"
                viewBox="0 0 512 512"
              >
                <path
                  fill="#fbbd00"
                  d="M120 256c0-25.367 6.989-49.13 19.131-69.477v-86.308H52.823C18.568 144.703 0 198.922 0 256s18.568 111.297 52.823 155.785h86.308v-86.308C126.989 305.13 120 281.367 120 256z"
                  data-original="#fbbd00"
                />
                <path
                  fill="#0f9d58"
                  d="m256 392-60 60 60 60c57.079 0 111.297-18.568 155.785-52.823v-86.216h-86.216C305.044 385.147 281.181 392 256 392z"
                  data-original="#0f9d58"
                />
                <path
                  fill="#31aa52"
                  d="m139.131 325.477-86.308 86.308a260.085 260.085 0 0 0 22.158 25.235C123.333 485.371 187.62 512 256 512V392c-49.624 0-93.117-26.72-116.869-66.523z"
                  data-original="#31aa52"
                />
                <path
                  fill="#3c79e6"
                  d="M512 256a258.24 258.24 0 0 0-4.192-46.377l-2.251-12.299H256v120h121.452a135.385 135.385 0 0 1-51.884 55.638l86.216 86.216a260.085 260.085 0 0 0 25.235-22.158C485.371 388.667 512 324.38 512 256z"
                  data-original="#3c79e6"
                />
                <path
                  fill="#cf2d48"
                  d="m352.167 159.833 10.606 10.606 84.853-84.852-10.606-10.606C388.668 26.629 324.381 0 256 0l-60 60 60 60c36.326 0 70.479 14.146 96.167 39.833z"
                  data-original="#cf2d48"
                />
                <path
                  fill="#eb4132"
                  d="M256 120V0C187.62 0 123.333 26.629 74.98 74.98a259.849 259.849 0 0 0-22.158 25.235l86.308 86.308C162.883 146.72 206.376 120 256 120z"
                  data-original="#eb4132"
                />
              </svg>
              Continue with Google
            </button>
            <p className="text-sm mt-8 text-center">
              Already have an account?
              <Link
                to="/Login"
                className="text-blue-500 font-semibold hover:underline ml-1"
              >
                Login here
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
