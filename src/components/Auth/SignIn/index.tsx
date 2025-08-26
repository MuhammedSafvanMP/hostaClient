"use client";
import { signIn, useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useContext, useState, useEffect } from "react";
import toast from "react-hot-toast";
import AuthDialogContext from "@/app/context/AuthDialogContext";
import Logo from "@/components/Layout/Header/BrandLogo/Logo";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Eye, EyeOff } from "lucide-react";
import { userSignin } from "@/api/Api";

const Signin = ({ signInOpen }: { signInOpen?: any }) => {
  const { data: session } = useSession();
  const router = useRouter();
  const authDialog = useContext(AuthDialogContext);

  const [showPassword, setShowPassword] = useState(false);

  // ✅ Validation Schema
  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
  });

  // ✅ Handle login
  const handleSubmit = async (values: any, { setSubmitting }: any) => {
    try {
      const res: any = await userSignin(values);

      if (res?.error) {
        toast.error("Invalid email or password");
      } else {
        toast.success("Login successful!");
        router.push("/"); // redirect after login
      }
    } catch (error) {
      console.error("Error logging in:", error);
      toast.error("Something went wrong");
    } finally {
      setSubmitting(false);
    }
  };

  // ✅ Redirect if already logged in
  useEffect(() => {
    if (session?.user) {
      router.push("/");
    }
  }, [session, router]);

  return (
    <>
      <div className="mb-10 text-center flex justify-center">
        <Logo />
      </div>

      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form>
            {/* Email */}
            <div className="mb-[22px]">
              <Field
                type="email"
                name="email"
                placeholder="Email"
                className="w-full rounded-2xl border placeholder:text-gray-400 border-black/10 dark:border-white/20 border-solid bg-transparent px-5 py-3 text-base text-dark outline-none transition focus:border-primary focus-visible:shadow-none dark:border-border_color dark:text-white dark:focus:border-primary"
              />
              <ErrorMessage
                name="email"
                component="div"
                className="text-red-500 text-sm mt-1"
              />
            </div>

            {/* Password */}
            <div className="mb-[22px] relative">
              <Field
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Password"
                className="w-full rounded-2xl border placeholder:text-gray-400 border-black/10 dark:border-white/20 border-solid bg-transparent px-5 py-3 pr-10 text-base text-dark outline-none transition focus:border-primary focus-visible:shadow-none dark:border-border_color dark:text-white dark:focus:border-primary"
              />
              <button
                type="button"
                className="absolute right-3 top-3 text-gray-500"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
              <ErrorMessage
                name="password"
                component="div"
                className="text-red-500 text-sm mt-1"
              />
            </div>

            {/* Submit Button */}
            <div className="mb-9">
              <button
                type="submit"
                disabled={isSubmitting}
                className="flex w-full cursor-pointer items-center justify-center rounded-2xl border border-primary bg-primary hover:bg-transparent hover:text-primary px-5 py-3 text-base text-white transition duration-300 ease-in-out disabled:opacity-50"
              >
                {isSubmitting ? "Signing in..." : "Sign In"}
              </button>
            </div>
          </Form>
        )}
      </Formik>

      {/* Forgot password */}
      <div className="text-center">
        <Link
          href="/forgot-password"
          className="mb-2 text-base text-dark hover:text-primary dark:text-white dark:hover:text-primary"
        >
          Forget Password?
        </Link>
      </div>

      {/* Footer */}
      <p className="text-body-secondary text-base text-center">
        Not a member yet?{" "}
        <Link href="/signup" className="text-primary hover:underline">
          Sign Up
        </Link>
      </p>
    </>
  );
};

export default Signin;
