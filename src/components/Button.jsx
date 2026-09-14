import { forwardRef } from "react";

const variants = {
  primary:
    "h-12 w-full rounded-xl bg-primary px-5 font-semibold text-primary-foreground shadow-button transition duration-200 hover:bg-primary-hover hover:shadow-button-hover active:translate-y-px disabled:cursor-not-allowed disabled:opacity-65",
  social:
    "h-12 w-full rounded-xl border border-border bg-card px-5 font-semibold text-foreground transition duration-200 hover:border-primary/40 hover:bg-accent active:translate-y-px disabled:cursor-not-allowed disabled:opacity-65",
  icon:
    "grid size-10 place-items-center rounded-lg text-muted-foreground transition-colors hover:bg-accent hover:text-primary focus-visible:text-primary",
  link: "font-semibold text-primary underline decoration-primary/35 underline-offset-4 hover:decoration-primary",
};

export const Button = forwardRef(function Button(
  { className = "", variant = "primary", type = "button", ...props },
  ref,
) {
  return (
    <button
      ref={ref}
      type={type}
      className={`${variants[variant] ?? variants.primary} ${className}`}
      {...props}
    />
  );
});