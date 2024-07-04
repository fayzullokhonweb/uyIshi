import React, { useEffect } from "react";
import { Form, Link, useActionData } from "react-router-dom";
import { FormEmail, FormPassword } from "../components";
import { useLogin } from "../hooks/useLogin";
import { useRegister } from "../hooks/useRegister";

export const action = async ({ request }) => {
  let formData = await request.formData();
  let email = formData.get("email");
  let password = formData.get("password");
  return { email, password };
};

function Login() {
  const userData = useActionData();
  const { loginUser, isPending } = useLogin();
  const { isPending: isPendingUseRegister, registerWithGoogle } = useRegister();

  useEffect(() => {
    if (userData && userData.email && userData.password) {
      loginUser({ email: userData.email, password: userData.password });
    }
  }, [userData, loginUser]);

  return (
    <div className="font-[sans-serif] text-[#333] bg-white flex items-center justify-center md:h-screen p-4">
      <div className="shadow-[0_2px_16px_-5px_rgba(6,81,237,0.3)] max-w-6xl rounded-md p-6">
        <div className="grid md:grid-cols-2 items-center gap-8">
          <div className="max-md:order-1">
            <img
              src="https://readymadeui.com/signin-image.webp"
              className="lg:w-11/12 w-full object-cover"
              alt="login-image"
            />
          </div>
          <div>
            <Form method="post" className="max-w-md w-full mx-auto">
              <div className="mb-12">
                <h3 className="text-4xl font-extrabold text-blue-600">
                  Sign in
                </h3>
              </div>

              <FormEmail name="email" type="text" placeholder="Enter Email" />
              <FormPassword
                name="password"
                type="password"
                placeholder="Enter password"
              />
              <div className="text-right mt-2">
                <Link to="/reset" className=" text-sm text-sky-600 font-medium">
                  Forgot password ?
                </Link>
              </div>
              <div className="mt-10">
                {!isPending && (
                  <button
                    type="submit"
                    className="w-full shadow-xl py-2.5 px-4 mb-5 text-sm font-semibold rounded-full text-white bg-blue-600 hover:bg-blue-700 focus:outline-none"
                  >
                    Sign in
                  </button>
                )}
                {isPending && (
                  <button
                    type="submit"
                    className="w-full shadow-xl py-2.5 px-4 mb-5 text-sm font-semibold rounded-full text-white bg-blue-600 hover:bg-blue-700 focus:outline-none"
                  >
                    Loading
                  </button>
                )}
              </div>
            </Form>
            <div className="max-w-md mx-auto">
              <button
                onClick={registerWithGoogle}
                type="button"
                className="px-8 py-2.5 btn-block flex justify-center mx-auto items-center rounded-full text-[#333] text-sm tracking-wider font-semibold border-none outline-none shadow-lg bg-gray-50 hover:bg-gray-100 active:bg-gray-50"
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
                  />
                  <path
                    fill="#0f9d58"
                    d="m256 392-60 60 60 60c57.079 0 111.297-18.568 155.785-52.823v-86.216h-86.216C305.044 385.147 281.181 392 256 392z"
                  />
                  <path
                    fill="#31aa52"
                    d="m139.131 325.477-86.308 86.308a260.085 260.085 0 0 0 22.158 25.235C123.333 485.371 187.62 512 256 512V392c-49.624 0-93.117-26.72-116.869-66.523z"
                  />
                  <path
                    fill="#3c79e6"
                    d="M512 256a258.24 258.24 0 0 0-4.192-46.377l-2.251-12.299H256v120h121.452a135.385 135.385 0 0 1-51.884 55.638l86.216 86.216a260.085 260.085 0 0 0 25.235-22.158C485.371 388.667 512 324.38 512 256z"
                  />
                  <path
                    fill="#cf2d48"
                    d="m352.167 159.833 10.606 10.606 84.853-84.852-10.606-10.606C388.668 26.629 324.381 0 256 0l-60 60 60 60c36.326 0 70.479 14.146 96.167 39.833z"
                  />
                  <path
                    fill="#eb4132"
                    d="M256 120V0C187.62 0 123.333 26.629 74.98 74.98a259.849 259.849 0 0 0-22.158 25.235l86.308 86.308C162.883 146.72 206.376 120 256 120z"
                  />
                </svg>
                Continue with Google
              </button>
              <p className="text-sm text-center mt-8">
                Don't have an account
                <Link
                  to="/Register"
                  className="text-blue-600 font-semibold hover:underline ml-1 whitespace-nowrap"
                >
                  Register here
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
