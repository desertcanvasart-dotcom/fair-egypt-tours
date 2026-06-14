import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { auth } from "@/auth";
import { LogoMark } from "@/components/icons";
import LoginForm from "./LoginForm";
import "../admin/admin.css";

export const metadata: Metadata = {
  title: "Sign in — Dashboard",
  robots: { index: false, follow: false },
};

export default async function LoginPage() {
  const session = await auth();
  if (session?.user) redirect("/admin");

  return (
    <div className="login">
      <div className="login__card">
        <div className="login__brand">
          <LogoMark size={48} />
          <div>
            <b>Fair Egypt Tours</b>
            <span>Content Dashboard</span>
          </div>
        </div>
        <h1>Welcome back</h1>
        <p className="login__sub">Sign in to manage your site content.</p>
        <LoginForm />
      </div>
    </div>
  );
}
