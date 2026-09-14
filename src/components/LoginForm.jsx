import { LoaderCircle } from "lucide-react";
import { useState } from "react";
import { useLoginForm } from "../hooks/useLoginForm";
import { Button } from "./Button";
import { InputField } from "./InputField";
import { SocialLoginButton } from "./SocialLoginButton";

export function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);
  const {
    email,
    password,
    errors,
    isLoading,
    status,
    setEmail,
    setPassword,
    handleLogin,
    handleGoogleLogin,
    handleSignUp,
  } = useLoginForm();

  return (
    <section className="flex min-w-0 items-center px-6 py-9 sm:px-12 lg:px-14 xl:px-17" aria-labelledby="login-title">
      <div className="mx-auto w-full max-w-form">
        <h1 id="login-title" className="font-display text-4xl font-bold text-brand sm:text-[2.65rem]">
          Login
        </h1>

        <form className="mt-9" onSubmit={handleLogin} noValidate>
          <InputField
            id="email"
            label="Email"
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            error={errors.email}
            autoComplete="email"
            placeholder="you@example.com"
          />
          <InputField
            id="password"
            label="Password"
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            error={errors.password}
            autoComplete="current-password"
            placeholder="Enter your password"
            visible={showPassword}
            onToggleVisibility={() => setShowPassword((current) => !current)}
          />

          <Button type="submit" disabled={isLoading} className="mt-2">
            {isLoading ? (
              <>
                <LoaderCircle className="size-5 animate-spin" aria-hidden="true" />
                Logging in…
              </>
            ) : (
              "Log In"
            )}
          </Button>
        </form>

        <div className="my-7 flex items-center gap-4" aria-hidden="true">
          <span className="h-px flex-1 bg-divider" />
          <span className="text-sm text-muted-foreground">Or Continue With</span>
          <span className="h-px flex-1 bg-divider" />
        </div>

        <SocialLoginButton onClick={handleGoogleLogin} disabled={isLoading} />

        <p className="mt-7 text-center text-sm text-muted-foreground">
          Don&apos;t have an account?{" "}
          <Button variant="link" onClick={handleSignUp} className="text-sm">
            Sign Up here
          </Button>
        </p>

        <p aria-live="polite" className="mx-auto mt-4 min-h-10 max-w-sm text-center text-xs leading-5 text-status">
          {status}
        </p>
      </div>
    </section>
  );
}