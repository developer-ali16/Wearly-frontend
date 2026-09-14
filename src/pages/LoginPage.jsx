import illustration from "../assets/moxitask-character.jpg";
import { BrandMark } from "../components/BrandMark";
import { LoginForm } from "../components/LoginForm";

function LeafCluster({ className }) {
  return (
    <div className={`pointer-events-none absolute ${className}`} aria-hidden="true">
      <span className="leaf leaf-one" />
      <span className="leaf leaf-two" />
      <span className="leaf leaf-three" />
      <span className="leaf-stem" />
    </div>
  );
}

export function LoginPage() {
  return (
    <main className="relative min-h-dvh overflow-hidden bg-background px-4 py-6 sm:px-8 sm:py-10 lg:grid lg:place-items-center lg:px-12">
      <div className="page-wash wash-top" aria-hidden="true" />
      <div className="page-wash wash-bottom" aria-hidden="true" />
      <LeafCluster className="-bottom-18 -left-8 rotate-[-18deg]" />
      <LeafCluster className="-right-10 -top-16 rotate-[145deg]" />

      <div className="relative z-10 mx-auto grid w-full max-w-login overflow-hidden rounded-card border border-card-border bg-card p-3 shadow-card md:grid-cols-[1.03fr_1fr] lg:min-h-card lg:p-4">
        <section className="relative min-h-80 overflow-hidden rounded-panel bg-illustration md:min-h-full" aria-label="Moxitask illustration">
          <img
            src={illustration}
            alt="Cheerful Moxitask helper holding a green task device"
            width={1024}
            height={1280}
            className="absolute inset-0 size-full object-cover object-center"
          />
          <div className="absolute inset-x-0 top-0 h-28 bg-illustration-fade" aria-hidden="true" />
          <div className="absolute left-5 top-5 rounded-lg bg-brand-badge/92 px-3 py-2 shadow-brand sm:left-7 sm:top-7">
            <BrandMark />
          </div>
        </section>

        <LoginForm />
      </div>
    </main>
  );
}