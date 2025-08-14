"use client";

import { useState } from "react";
import { signIn, getSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

export default function SignInPage() {
  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    try {
      const result = await signIn("credentials", {
        identifier,
        password,
        redirect: false,
      });

      if (result?.error) {
        setError("Invalid credentials");
        setIsLoading(false);
        return;
      }

      const session = await getSession();

      if (session?.user?.isAdmin === "admin") {
        router.push("/admin");
      } else {
        router.push("/");
      }
    } catch (error) {
      console.error("Sign-in error:", error);
      setError("An error occurred during sign-in");
    } finally {
      setIsLoading(false);
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
              src="/images/logo.png"
              alt="Seminar hall Logo"
              className="h-[60px] mb-8"
            />
            <div className="flex flex-col">
              <h2 className="text-2xl font-bold text-gray-800 mb-2">
                Welcome Back
              </h2>
              <p className="text-sm text-gray-600 mb-6">
                Don&apos;t have an account?{" "}
                <Link href="/sign-up" className="text-blue-600 hover:underline">
                  Sign Up
                </Link>
              </p>
            </div>
          </div>

          <div className="relative text-center text-sm text-gray-400 mb-6">
            <span className="bg-white px-2 z-10 relative">
              Login to your account
            </span>
            <div className="absolute left-0 right-0 top-1/2 border-t border-gray-200 transform -translate-y-1/2" />
          </div>

          <form onSubmit={handleSignIn} className="space-y-4">
            {error && (
              <div className="bg-red-50 border border-red-200 text-red-600 px-3 py-2 rounded text-sm">
                {error}
              </div>
            )}

            <div>
              <label className="text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                placeholder="you@example.com"
                value={identifier}
                onChange={(e) => setIdentifier(e.target.value)}
                className="block w-full p-2 border border-gray-300 rounded mt-1 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                required
                disabled={isLoading}
              />
            </div>

            <div>
              <label className="text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="block w-full p-2 border border-gray-300 rounded mt-1 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                required
                disabled={isLoading}
              />
            </div>

            <Button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={isLoading}
            >
              {isLoading ? (
                <div className="flex items-center justify-center">
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                  Signing in...
                </div>
              ) : (
                "Sign In"
              )}
            </Button>
          </form>
        </div>
      </div>

      <div className="hidden md:flex w-1/2 bg-[url('/images/loginPic.jpg')] bg-cover bg-center items-center justify-center relative">
        <div className="absolute bottom-10 left-10 text-gray-100 max-w-xs">
          <h3 className="text-xl font-semibold mb-2">
            All your Seminar Hall bookings. One unified experience.
          </h3>
          <p className="text-sm">
            Fast, flexible, and secure - Hall Bookings .
          </p>
        </div>
      </div>
    </div>
  );
}
