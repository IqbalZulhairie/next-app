"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";

export default function LoginPage() {
  const [signedIn, setSignedIn] = useState(false);
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");
    setIsSubmitting(true);

    const formData = new FormData(event.currentTarget);
    const response = await fetch("/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: formData.get("email"),
        password: formData.get("password"),
      }),
    });

    const result = await response.json();
    setIsSubmitting(false);

    if (!response.ok) {
      setError(result.message ?? "Unable to sign in.");
      return;
    }

    setSignedIn(true);
  }

  return (
    <main className="login-page">
      <section className="login-panel login-panel--intro" aria-label="Nexora Labs introduction">
        <div>
          <p className="eyebrow">Nexora Labs workspace</p>
          <h1>Build what&apos;s next.</h1>
          <p className="login-intro__copy">
            Sign in to access your projects, updates, and the people helping
            bring your product to life.
          </p>
        </div>
        <div className="login-mark" aria-hidden="true">
          <span>NX</span>
          <strong>01 / 24</strong>
        </div>
      </section>

      <section className="login-panel login-panel--form">
        <div className="login-form-heading">
          <p className="eyebrow">Welcome back</p>
          <h2>Sign in to your account.</h2>
        </div>

        {signedIn ? (
          <div className="login-success" role="status">
            <span className="login-success__number">01</span>
            <h3>You&apos;re signed in.</h3>
            <p>Your workspace is ready for you.</p>
            <Link href="/" className="login-success__link">Return home <span aria-hidden="true">↗</span></Link>
          </div>
        ) : (
          <form className="login-form" onSubmit={handleSubmit}>
            <label>
              <span>Email address</span>
              <input name="email" type="email" placeholder="you@company.com" autoComplete="email" required />
            </label>
            <label>
              <span>Password</span>
              <input name="password" type="password" placeholder="Enter your password" autoComplete="current-password" required />
            </label>
            <div className="login-options">
              <label className="login-checkbox">
                <input type="checkbox" name="remember" />
                <span>Remember me</span>
              </label>
              <a href="mailto:support@nexoralabs.dev?subject=Password%20reset">Forgot password?</a>
            </div>
            {error && <p className="login-error" role="alert">{error}</p>}
            <button className="login-submit" type="submit" disabled={isSubmitting}>
              <span>{isSubmitting ? "Signing in..." : "Sign in"}</span>
              <span aria-hidden="true">↗</span>
            </button>
          </form>
        )}

        <p className="login-footer">
          Don&apos;t have an account? <Link href="/about/contact">Talk to our team</Link>
        </p>
      </section>
    </main>
  );
}
