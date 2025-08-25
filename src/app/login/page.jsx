"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai"; // React icons import

export default function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false); // Toggle password

    const handleSubmit = async (e) => {
        e.preventDefault();
        const result = await signIn("credentials", {
            redirect: false,
            email,
            password,
        });
        if (result?.ok) {
            window.location.href = "/products";
        } else {
            alert("Invalid credentials");
        }
    };

    return (
        <div className="py-16">
            <div className="flex bg-white rounded-lg shadow-lg overflow-hidden mx-auto max-w-5xl min-h-[600px] lg:min-h-[700px]">
                {/* Left Image */}
                <div
                    className="hidden lg:block lg:w-1/2 bg-cover"
                    style={{
                        backgroundImage:
                            "url('https://images.unsplash.com/photo-1546514714-df0ccc50d7bf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=667&q=80')",
                    }}
                ></div>

                {/* Right Form */}
                <div className="w-full p-8 lg:w-1/2 flex flex-col justify-center">
                    <h2 className="text-2xl font-semibold text-gray-700 text-center">Brand</h2>
                    <p className="text-xl text-gray-600 text-center">Welcome back!</p>

                    {/* OR divider */}
                    <div className="mt-4 flex items-center justify-between">
                        <span className="border-b w-1/5 lg:w-1/4"></span>
                        <span className="text-xs text-center text-gray-500 uppercase">or login with email</span>
                        <span className="border-b w-1/5 lg:w-1/4"></span>
                    </div>

                    {/* Email/Password Form */}
                    <form onSubmit={handleSubmit} className="mt-4">
                        <div>
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                                Email Address
                            </label>
                            <input
                                id="email"
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
                                required
                            />
                        </div>

                        <div className="mt-4 relative">
                            <div className="flex justify-between">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                                    Password
                                </label>
                                <button type="button" className="text-xs text-gray-500">Forget Password?</button>
                            </div>
                            <input
                                id="password"
                                type={showPassword ? "text" : "password"}
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none pr-10"
                                required
                            />
                            {/* Eye icon */}
                            <div
                                className="absolute right-2 top-[38px] text-gray-600 cursor-pointer"
                                onClick={() => setShowPassword(!showPassword)}
                            >
                                {showPassword ? <AiOutlineEye size={20} /> : <AiOutlineEyeInvisible size={20} />}
                            </div>
                        </div>

                        <div className="mt-8">
                            <button
                                type="submit"
                                className="bg-gray-700 text-white font-bold py-2 px-4 w-full rounded hover:bg-gray-600"
                            >
                                Login
                            </button>
                        </div>
                    </form>

                    {/* Sign Up divider */}
                    <div className="mt-4 flex items-center justify-between">
                        <span className="border-b w-1/5 md:w-1/4"></span>
                        <button className="text-xs text-gray-500 uppercase">or sign up</button>
                        <span className="border-b w-1/5 md:w-1/4"></span>
                    </div>
                </div>
            </div>
        </div>
    );
}
