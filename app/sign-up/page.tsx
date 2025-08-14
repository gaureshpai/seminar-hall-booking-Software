"use client";

import { useState } from "react";
import { signUpSchema } from "@/schemas/signUpSchema";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import axios from "axios";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { AxiosError } from "axios";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Eye, EyeOff } from "lucide-react";

export default function SignUp() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);

  const form = useForm<z.infer<typeof signUpSchema>>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data: z.infer<typeof signUpSchema>) => {
    try {
      await axios.post("/api/sign-up", data);
      router.push("/sign-in");
    } catch (err: unknown) {
      if (err instanceof AxiosError && err.response?.data?.message) {
        form.setError("username", {
          type: "manual",
          message: err.response.data.message,
        });
      } else {
        console.error("Sign-up error", err);
      }
    }

  };

  return (
    <div className="flex font-poppins min-h-screen">
      <div className="w-full md:w-1/2 bg-white p-10 flex flex-col justify-center">
        <div className="max-w-sm mx-auto w-full">
          <div className="flex flex-row gap-3">
            <Image
              width={60}
              height={60}
              src="/images/logo.jpg"
              alt="Logo"
              className="h-[60px] mb-8"
            />
            <div className="flex flex-col">
              <h2 className="text-2xl font-bold text-gray-800 mb-2">
                Create your account
              </h2>
              <p className="text-sm text-gray-600 mb-6">
                Already have an account?{" "}
                <Link href="/sign-in" className="text-blue-600 hover:underline">
                  Sign In
                </Link>
              </p>
            </div>
          </div>

          <div className="relative text-center text-sm text-gray-400 mb-6">
            <span className="bg-white px-2 z-10 relative">
              Sign-Up an account
            </span>
            <div className="absolute left-0 right-0 top-1/2 border-t border-gray-200 transform -translate-y-1/2" />
          </div>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                name="username"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm">Username</FormLabel>
                    <Input {...field} />
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                name="email"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm">Email Address</FormLabel>
                    <Input type="email" {...field} />
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                name="password"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm">Password</FormLabel>
                    <div className="relative">
                      <Input
                        type={showPassword ? "text" : "password"}
                        {...field}
                        className="pr-10"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword((prev) => !prev)}
                        className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-500"
                      >
                        {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                      </button>
                    </div>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white"
              >
                Sign Up
              </Button>
            </form>
          </Form>
        </div>
      </div>

      <div className="hidden md:flex w-1/2 bg-[url('/images/loginPic.jpg')] bg-cover bg-center items-center justify-center relative">
        <div className="absolute bottom-10 left-10 text-gray-100 max-w-xs">
          <h3 className="text-xl font-semibold mb-2">
            Smart Seminar Hall Booking 2.0 . .{" "}
          </h3>
          <p className="text-sm">
            Say goodbye to manual scheduling! Easily book, manage, and monitor
            seminar halls in real-time — all in one place. Empower your campus
            or organization with a seamless, automated booking experience.
          </p>
        </div>
      </div>
    </div>
  );
}
