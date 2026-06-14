"use client";

import { useActionState } from "react";
import { authenticate } from "./actions";

export default function LoginForm() {
  const [error, formAction, pending] = useActionState(authenticate, undefined);

  return (
    <form action={formAction} className="login__form">
      <div className="afield">
        <label htmlFor="email">Email</label>
        <input id="email" name="email" type="email" autoComplete="email" required placeholder="you@example.com" />
      </div>
      <div className="afield">
        <label htmlFor="password">Password</label>
        <input id="password" name="password" type="password" autoComplete="current-password" required placeholder="••••••••" />
      </div>
      {error ? <p className="login__error">{error}</p> : null}
      <button type="submit" className="abtn abtn--primary abtn--block" disabled={pending}>
        {pending ? "Signing in…" : "Sign in"}
      </button>
    </form>
  );
}
