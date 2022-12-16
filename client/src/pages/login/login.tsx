import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { login } from "redux/auth/authActions";

function Login() {
    const [userData, setUserData] = useState({ email: "", password: "" });
    const dispatch = useDispatch();

    function handelInputData(e: React.ChangeEvent<HTMLInputElement>) {
        const { name, value } = e.target;
        setUserData((prev) => ({
            ...prev,
            [name]: value,
        }));
    }

    function handelSubmit(e: React.FormEvent) {
        e.preventDefault();
        dispatch(login(userData));
    }

    return (
        <section className="bg-gray-100">
            <div className="mx-5 flex min-h-screen items-center justify-center md:mx-0 lg:mx-0">
                <form
                    onSubmit={handelSubmit}
                    className="flex w-full flex-col space-y-4 bg-white p-10 shadow md:w-[50%] lg:w-[60%]"
                >
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
                        className="w-full rounded bg-slate-500 py-3 text-sm font-semibold text-white"
                        type="submit"
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
