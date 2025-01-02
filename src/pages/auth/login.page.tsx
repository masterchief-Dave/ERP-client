import SignInForm from "@/components/sign-in-form";
import LoginPageImage from "../../assets/img/behnam-norouzi-8lPsHVz55qE-unsplash.webp";

const LoginPage = () => {
  return (
    <main className="font-geist">
      <div className="flex">
        <div className="w-2/4 h-screen flex flex-col justify-between">
          <div className="max-h-screen">
            <img
              src={LoginPageImage}
              width={1000}
              height={1000}
              className="w-full h-full object-cover"
              alt="img"
            />
          </div>
        </div>
        <div className="w-1/2 h-screen flex flex-col justify-center items-center">
          <div className="px-16 pt-16 flex w-full flex-col">
            <div className="w-[60%] mx-auto space-y-12">
              <h1 className="font-medium text-4xl ">Welcome Back </h1>
              <SignInForm />
            </div>
          </div>{" "}
        </div>
      </div>
    </main>
  );
};

export default LoginPage;
