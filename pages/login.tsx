import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

interface UsernameState {
  value: string;
}

interface PasswordState {
  value: string;
}

export default function LoginForm() {
  const [userName, setUserName] = useState<UsernameState>({ value: "" });
  const [password, setPassword] = useState<PasswordState>({ value: "" });
  const router = useRouter();

  const handleSignup = () => {};

  return (
    <section className="h-screen flex items-center justify-center bg-violet-950 pb-5">
      <section className="md:w-1/4 rounded bg-indigo-950 p-5 border border-dark">
        <h2 className="text-center text-darkGreen font-bold">Login</h2>
        <form className="signUpForm" onSubmit={handleSignup}>
          <div className="mb-3">
            <label className="text-oliveGreen" htmlFor="userName">
              Username
            </label>
            <input
              type="text"
              className="form-input darkColor border border-dark yellow"
              id="userName"
              value={userName.value}
              onChange={(e) => setUserName({ value: e.target.value })}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="text-oliveGreen">
              Password
            </label>
            <input
              type="password"
              className="form-input darkColor border border-dark yellow"
              id="password"
              value={password.value}
              onChange={(e) => setPassword({ value: e.target.value })}
            />
          </div>
          <div className="flex justify-center">
            <button type="submit" id="signup" className="flex items-center btn border border-">
              <h1 className="font-bold text-slate-400 yellow">Submit</h1>
            </button>
          </div>
          <p className="mb-0 pt-3 text-center text-darkGreen">
            Don't have an account? Click here to{" "}
            <Link href="/signup" className="yellow">
              Signup.
            </Link>
          </p>
        </form>
      </section>
    </section>
  );
}
