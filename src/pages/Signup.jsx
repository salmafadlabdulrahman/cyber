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
import { signUp } from "@/api/auth.api";
import { useNavigate } from "react-router-dom";

const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  password: z.string().min(6, {
    message: "Password must be at least 6 characters.",
  }),
});

const Signup = () => {
  const navigate = useNavigate();
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
    },
  });

  const onSubmit = async (values) => {
    console.log("Form submitted:", values);
    try {
      const payload = {
        name: values.username,
        email: values.email,
        password: values.password,
      };

      await signUp(payload);
      navigate("/");
    } catch (error) {
      console.log(error.response?.data?.message);
    }
  };

  return (
    <section className="lg:flex ">
      <div className="bg-primary-black w-full lg:w-[45%] h-screen flex items-end justify-center">
        <img src={HeroLg} alt="an image of a phone" />
      </div>

      <div className=" lg:w-[50%] pt-[5em] lg:relative lg:h-auto lg:pt-0 lg:inset-0 rounded-md absolute w-[90%] h-[70%] top-[100px] bg-white inset-0 m-auto">
        <div className="md:w-[70%] px-[2em] m-auto">
          <h1 className="text-3xl font-bold mb-2">Create an account</h1>
          <p className="text-gray-600 mb-8">
            Already have an account?{" "}
            <a href="/login" className="text-purple-600 hover:underline">
              Log in
            </a>
          </p>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Username</FormLabel>
                    <FormControl>
                      <Input placeholder="johndoe" {...field} />
                    </FormControl>
                    <FormDescription>
                      This is your public display name.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

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

              <Button type="submit" className="w-full">
                Create Account
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </section>
  );
};

export default Signup;
