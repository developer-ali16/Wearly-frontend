import { Button } from "./Button";

function GoogleIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="size-5 shrink-0">
      <path fill="#4285F4" d="M21.6 12.2c0-.7-.1-1.5-.2-2.2H12v4.3h5.4a4.7 4.7 0 0 1-2 3v2.8h3.5c2-1.9 3.2-4.6 3.2-7.9Z" />
      <path fill="#34A853" d="M12 22c2.8 0 5.2-.9 7-2.5l-3.5-2.8c-.9.6-2.1 1-3.5 1a6.1 6.1 0 0 1-5.7-4.2H2.7v2.9A10.5 10.5 0 0 0 12 22Z" />
      <path fill="#FBBC05" d="M6.3 13.5A6.3 6.3 0 0 1 6 12c0-.5.1-1 .3-1.5V7.6H2.7A10.1 10.1 0 0 0 1.6 12c0 1.6.4 3 1.1 4.4l3.6-2.9Z" />
      <path fill="#EA4335" d="M12 6.3c1.5 0 2.9.5 4 1.6L19.1 5A10.2 10.2 0 0 0 2.7 7.6l3.6 2.9A6.1 6.1 0 0 1 12 6.3Z" />
    </svg>
  );
}

export function SocialLoginButton({ onClick, disabled }) {
  return (
    <Button variant="social" onClick={onClick} disabled={disabled} aria-label="Continue with Google">
      <GoogleIcon />
      <span>Continue with Google</span>
    </Button>
  );
}