"use client";
import {useSession, signIn} from "next-auth/react";
import {Button} from "@/components/ui/button";

export default function Page() {

    return (
        <div>
            <h1>Login</h1>
            {/* <Button onClick={() => signIn("google")}>Sign in with Google</Button> */}
            <Button onClick={() => signIn("github")}>Sign in with Github</Button>
            <Button onClick={() => signIn("google")}>Sign in with Google</Button>
        </div>
    )

}