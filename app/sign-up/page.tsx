"use client";

import { signUpSchema } from "@/schemas/signUpSchema";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import axios from "axios";
import { useRouter } from "next/navigation";
import Link from "next/link";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function SignUp() {
  const router = useRouter();
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
      const res = await axios.post("/api/sign-up", data);
      router.push("/sign-in");
    } catch (err) {
      console.error("Sign-up error", err);
    }
  };

  return (
    <div className="flex font-poppins min-h-screen">
      <div className="w-full md:w-1/2 bg-white p-10 flex flex-col justify-center">
        <div className="max-w-sm mx-auto w-full">
          <div className="flex flex-row gap-3">
            <img
              src="/images/logo.png"
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
            <span className="bg-white px-2 z-10 relative">Sign-Up an account</span>
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
                    <Input type="password" {...field} />
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                Sign Up
              </Button>
            </form>
          </Form>
        </div>
      </div>

      <div className="hidden md:flex w-1/2 bg-[url('/images/loginPic4.avif')]  bg-cover bg-center items-center justify-center relative">

        <div className="absolute bottom-10 left-10 text-gray-100  max-w-xs">
          <h3 className="text-xl font-semibold mb-2">Smart Seminar Hall Booking 2.0 . . </h3>
          <p className="text-sm">
            Say goodbye to manual scheduling! Easily book, manage, and monitor seminar halls in real-time — all in one place. Empower your campus or organization with a seamless, automated booking experience.
          </p>
        </div>
      </div>
    </div>
  );
}