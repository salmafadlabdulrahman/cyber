import HeroLg from "/assets/hero-img-desktop.png";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";
import { login } from "@/api/auth.api";
import { useState } from "react";

const formSchema = z.object({
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  password: z.string().min(6, {
    message: "Password must be at least 6 characters.",
  }),
});

const Login = () => {
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (values) => {
    console.log("Form submitted:", values);
    try {
      const payload = {
        email: values.email,
        password: values.password,
      };
      const data = await login(payload);
      console.log(data);
      if (data.success) {
        navigate("/");
      } else {
        // Handle backend success: false
        setError(data.message || "Login failed");
      }
    } catch (error) {
      console.log(error);
      const message = error.response?.data?.message || "Login failed";
      setError(error.response?.data?.message || "Invalid credentials");

      console.error(message);
    }
  };

  return (
    <section className="lg:flex ">
      <div className="bg-primary-black w-full lg:w-[45%] h-screen flex items-end justify-center">
        <img src={HeroLg} alt="an image of a phone" />
      </div>

      <div className=" lg:w-[50%] pt-[5em] lg:relative lg:h-auto lg:pt-0 lg:inset-0 rounded-md absolute w-[90%] h-[70%] top-[100px] bg-white inset-0 m-auto">
        <div className="md:w-[70%] px-[2em] m-auto">
          <Form {...form}>
            <h1 className="text-3xl font-bold mb-2">Welcome Back</h1>
            <p className="text-gray-600 mb-8">
              Create a new account?{" "}
              <Link to="/signup" className="text-purple-600 hover:underline">
                Sign up
              </Link>
            </p>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input
                        type="email"
                        placeholder="john@example.com"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input
                        type="password"
                        placeholder="••••••••"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" className={"cursor-pointer"}>
                Login
              </Button>
              {error && <p className="text-red-500">{error}</p>}
            </form>
          </Form>
        </div>
      </div>
    </section>
  );
};

export default Login;
