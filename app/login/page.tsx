"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";

export default function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const router = useRouter();


    const handleLogin = async () => {

        const { data,error } = await supabase.auth.signInWithPassword({

            email,

            password,

        });

        console.log("Login data:", data);
        console.log("Login error:", error);

        if (error) {

            alert(error.message);

            return;

        }

        router.push("/");

    };

    return (
        <main className="min-h-screen bg-slate-100 flex items-center justify-center p-8">

            <div className="w-full max-w-5xl bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row">

                {/* Left Side */}
                <div className="md:w-2/5 bg-blue-700 text-white flex flex-col justify-center items-center p-12">

                    <div className="text-7xl mb-8">
                        📄
                    </div>

                    <h1 className="text-5xl font-bold mb-4">
                        DocuMind
                    </h1>

                    <p className="text-center text-lg opacity-90 leading-8">
                        AI-Powered
                        <br />
                        Knowledge Assistant
                    </p>

                    <div className="mt-10 text-center text-blue-100 space-y-2">

                        <p>📄 Upload Documents</p>

                        <p>🤖 Chat with AI</p>

                        <p>📝 Generate Quizzes</p>

                        <p>🧠 Create Flashcards</p>

                    </div>

                </div>

                {/* Right Side */}

                <div className="md:w-3/5 p-12 flex flex-col justify-center">

                    <h2 className="text-4xl font-bold text-slate-800 mb-2">
                        Welcome Back
                    </h2>

                    <p className="text-slate-500 mb-10">
                        Sign in to continue using DocuMind.
                    </p>

                    <div className="space-y-6">

                        <div>

                            <label className="block mb-2 font-medium text-slate-700">
                                Email
                            </label>

                            <input
                                type="email"
                                placeholder="Enter your email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="
                  w-full
                  border
                  border-gray-300
                  rounded-xl
                  px-4
                  py-3
                  focus:outline-none
                  focus:ring-2
                  focus:ring-blue-500
                "
                            />

                        </div>

                        <div>

                            <label className="block mb-2 font-medium text-slate-700">
                                Password
                            </label>

                            <input
                                type="password"
                                placeholder="Enter your password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="
                  w-full
                  border
                  border-gray-300
                  rounded-xl
                  px-4
                  py-3
                  focus:outline-none
                  focus:ring-2
                  focus:ring-blue-500
                "
                            />

                        </div>

                        <button
                            onClick = {handleLogin}
                            className="
                w-full
                bg-blue-600
                hover:bg-blue-700
                text-white
                py-3
                rounded-xl
                font-semibold
                transition
              "
                        >
                            Login
                        </button>

                    </div>

                    <p className="mt-8 text-center text-slate-600">
                        Don't have an account?{" "}
                        <Link
                            href="/signup"
                            className="text-blue-600 font-semibold hover:underline"
                        >
                            Sign Up
                        </Link>
                    </p>

                </div>

            </div>

        </main>
    );
}