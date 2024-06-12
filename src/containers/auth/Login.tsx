import { Suspense } from "react";
import { Metadata } from "next";
import UserAuthForm from "./UserAuthForm";

export const metadata: Metadata = {
  title: "Authentication",
  description: "Authentication forms built using the components.",
};

export default function Login() {
  return (
    <div className="relative h-screen">
      <div className="m-auto flex h-full items-center p-4 lg:p-8">
        <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
          <div className="flex flex-col space-y-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">
              Welcome to Dashboard! 👋🏻
            </h1>
            <p className="text-sm text-muted-foreground">
              Please sign-in to your account and start the adventure
            </p>
          </div>
          <Suspense>
            <UserAuthForm />
          </Suspense>
        </div>
      </div>
    </div>
  );
}
