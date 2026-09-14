import { Eye, EyeOff, Mail } from "lucide-react";
import { Button } from "./Button";

export function InputField({
  id,
  label,
  type,
  value,
  onChange,
  error,
  autoComplete,
  placeholder,
  visible,
  onToggleVisibility,
}) {
  const isPassword = type === "password";
  const inputType = isPassword && visible ? "text" : type;

  return (
    <div className="space-y-2">
      <label htmlFor={id} className="block text-sm font-semibold text-foreground">
        {label}
      </label>
      <div className="relative">
        <span className="pointer-events-none absolute inset-y-0 left-0 grid w-12 place-items-center text-primary">
          {isPassword ? <Eye size={20} strokeWidth={1.8} /> : <Mail size={20} strokeWidth={1.8} />}
        </span>
        <input
          id={id}
          name={id}
          type={inputType}
          value={value}
          onChange={onChange}
          autoComplete={autoComplete}
          placeholder={placeholder}
          aria-invalid={Boolean(error)}
          aria-describedby={error ? `${id}-error` : undefined}
          className="h-12 w-full rounded-xl border border-input bg-input-surface pl-12 pr-12 text-[15px] text-foreground outline-none transition placeholder:text-muted-foreground/70 focus:border-primary focus:ring-4 focus:ring-ring/15 aria-invalid:border-destructive aria-invalid:ring-4 aria-invalid:ring-destructive/10"
        />
        {isPassword ? (
          <Button
            variant="icon"
            className="absolute right-1 top-1"
            onClick={onToggleVisibility}
            aria-label={visible ? "Hide password" : "Show password"}
            aria-pressed={visible}
          >
            {visible ? <EyeOff size={19} /> : <Eye size={19} />}
          </Button>
        ) : null}
      </div>
      <div className="min-h-5">
        {error ? (
          <p id={`${id}-error`} role="alert" className="text-xs font-medium text-destructive">
            {error}
          </p>
        ) : null}
      </div>
    </div>
  );
}