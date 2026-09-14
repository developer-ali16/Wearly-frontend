import { createFileRoute } from "@tanstack/react-router";
import { LoginPage } from "../pages/LoginPage";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Login — Moxitask" },
      { name: "description", content: "Sign in to your Moxitask workspace securely." },
      { property: "og:title", content: "Login — Moxitask" },
      { property: "og:description", content: "Sign in to your Moxitask workspace securely." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: LoginPage,
});
