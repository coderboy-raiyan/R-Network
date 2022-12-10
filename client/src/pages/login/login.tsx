import React, { useState } from "react";
import { Link } from "react-router-dom";

function Login() {
    const [userData, setUserData] = useState({ email: "", password: "" });

    function handelInputData(e: React.ChangeEvent<HTMLInputElement>) {
        const { name, value } = e.target;
        setUserData((prev) => ({
            ...prev,
            [name]: value,
        }));
    }

    console.log(userData);

    return (
        <section>
            <div className="my-10 flex justify-center">
                <form className="flex w-full flex-col space-y-4 bg-white p-10 shadow md:w-[50%] lg:w-[60%]">
                    <h3 className="text-center text-3xl font-semibold text-gray-500">R-Network</h3>
                    <label className="flex flex-col space-y-2" htmlFor="email">
                        <span className="text-sm font-semibold">Email address</span>
                        <input
                            className="rounded border-2 border-gray-400 text-sm"
                            onChange={handelInputData}
                            autoComplete="off"
                            type="email"
                            name="email"
                            required
                            value={userData?.email}
                            id="email"
                        />
                    </label>
                    <label className="flex flex-col space-y-2" htmlFor="password">
                        <span className="text-sm font-semibold">Password</span>
                        <input
                            className="rounded border-2 border-gray-400 text-sm"
                            onChange={handelInputData}
                            type="password"
                            autoComplete="off"
                            required
                            name="password"
                            id="password"
                            value={userData?.password}
                        />
                    </label>

                    <button
                        className="w-full rounded bg-slate-700 py-3 text-sm font-semibold text-white"
                        type="button"
                    >
                        Login
                    </button>

                    <p className="text-center text-sm">
                        You don't have an account{" "}
                        <Link className="text-red-400" to="/register">
                            Register here
                        </Link>
                    </p>
                </form>
            </div>
        </section>
    );
}

export default Login;
