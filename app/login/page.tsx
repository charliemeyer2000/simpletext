
"use client";
import {useSession, signIn} from "next-auth/react";
import {Button} from "@/components/ui/button";
import Link from "next/link";
import { useTheme } from "next-themes";


import GitHub from "@/public/svg/github.svg";
import GitHubWhite from "@/public/svg/github-white.svg";
import Google from "@/public/svg/google.svg";
import Image from "next/image";

export default function Page() {
    const theme = useTheme();
    return (
        <div className="flex flex-col items-center justify-center h-screen w-full gap-y-6">
            <div className="flex flex-col items-start justify-center gap-y-4 max-w-md p-8 rounded-lg shadow-lg w-3/12 min-w-fit dark: bg-card dark: border">
                <h1 className="text-xl font-bold">
                    <span className="text-theme-primary">simple</span>text
                </h1>
                <div className="flex flex-col items-start gap-y-2">
                    <h2 className="text-lg font-semibold">Sign in</h2>
                    <p className="text-sm text-gray-500">
                        to continue to <strong>simpletext</strong>.
                    </p>
                </div>
                <div className="flex flex-col gap-y-4 w-full">
                    <Button variant={"outline"} onClick={() => signIn("github")} className="flex items-center justify-center w-full gap-x-4">
                        <Image src={theme.theme === "dark" ? GitHubWhite : GitHub} alt="GitHub" width={20} height={20} />
                        <span>Sign in with GitHub</span>
                    </Button>
                    <Button variant={"outline"} onClick={() => signIn("google")} className="flex items-center justify-center w-full gap-x-4">
                        <Image src={Google} alt="Google" width={20} height={20} />
                        <span>Sign in with Google</span>
                    </Button>
                </div>
            </div>
            <p className="text-sm text-gray">
                By signing in, you agree to our <Link href="/terms" className="text-[#3B82F6] underline">Terms of Service</Link>.
            </p>
        </div>
    );
}
