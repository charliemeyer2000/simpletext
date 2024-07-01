
"use client";
import {useSession, signIn} from "next-auth/react";
import {Button} from "@/components/ui/button";

export default function Page() {
    return (
        <div className="flex flex-col items-center justify-center h-screen w-full">
            <div className="flex flex-col items-center justify-center gap-y-4 max-w-md p-8 border-2 rounded-lg shadow-lg">
                <h1 className="text-3xl font-bold">
                    <span className="text-theme-primary">simple</span>text
                </h1>
                <div className="flex flex-col items-center gap-y-2">
                    <h2 className="text-lg font-semibold">Sign in</h2>
                    <p className="text-sm text-gray-500">
                        to continue to <strong>simpletext</strong>.
                    </p>
                </div>
                <div className="flex flex-col gap-y-4 w-full">
                    <Button
                        className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                        onClick={() => signIn("github")}
                    >
                        Sign in with Github
                    </Button>
                    <Button
                        className="w-full bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                        onClick={() => signIn("google")}
                    >
                        Sign in with Google
                    </Button>
                </div>
                <p className="text-xs text-gray-500 mt-4">
                    By signing in, you agree to our{" "}
                    <a href="/terms" className="text-theme-primary">
                        Terms of Service
                    </a>
                    .
                </p>
            </div>
        </div>
    );
}
