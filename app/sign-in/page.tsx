"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function SignInPage() {
  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    const result = await signIn("credentials", {
      identifier,
      password,
      redirect: false,
    });

    if (result?.error) {
      setError("Invalid credentials");
    } else {
      router.push("/");
    }
  };

  return (
    <div className="flex font-poppins min-h-screen">
      <div className="w-full md:w-1/2 bg-white p-10 flex flex-col justify-center">
        <div className="max-w-sm mx-auto w-full">
          <div className="flex flex-row gap-3">
            <img
              src="/images/logo.png"
              alt="Seminar hall Logo"
              className="h-[60px] mb-8"
            />
            <div className="flex flex-col">
              <h2 className="text-2xl font-bold text-gray-800 mb-2">
                Welcome Back
              </h2>
              <p className="text-sm text-gray-600 mb-6">
                Don't have an account?{" "}
                <Link href="/sign-up" className="text-blue-600 hover:underline">
                  Sign Up
                </Link>
              </p>
            </div>
          </div>

          <div className="relative text-center text-sm text-gray-400 mb-6">
            <span className="bg-white px-2 z-10 relative">Login to your account</span>
            <div className="absolute left-0 right-0 top-1/2 border-t border-gray-200 transform -translate-y-1/2" />
          </div>

          <form onSubmit={handleSignIn} className="space-y-4">
            {error && <p className="text-red-500 text-sm">{error}</p>}

            <div>
              <label className="text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                placeholder="you@example.com"
                value={identifier}
                onChange={(e) => setIdentifier(e.target.value)}
                className="block w-full p-2 border border-gray-300 rounded mt-1 text-sm"
                required
              />
            </div>

            <div>
              <label className="text-sm font-medium text-gray-700">Password</label>
              <input
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="block w-full p-2 border border-gray-300 rounded mt-1 text-sm"
                required
              />
            </div>

            <Button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white"
            >
              Sign In
            </Button>
          </form>
        </div>
      </div>

      <div className="hidden md:flex w-1/2 bg-[url('/images/loginPic4.avif')] bg-cover bg-center items-center justify-center relative">
        <div className="absolute bottom-10 left-10 text-gray-100 max-w-xs">
          <h3 className="text-xl font-semibold mb-2">All your Seminar Hall bookings. One unified experience.</h3>
          <p className="text-sm">
            Fast, flexible, and secure - Hall Bookings .
          </p>
        </div>
      </div>
    </div>
  );
}