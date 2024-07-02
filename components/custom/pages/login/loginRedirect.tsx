"use client";
import {useRouter} from "next/navigation";
import {useSession} from "next-auth/react";

export default function LoginRedirect() {

    const {status} = useSession();
    const router = useRouter();

    if (status === "authenticated") {
        router.push("/dashboard");
    };

    return (
        <></>
    );
}
