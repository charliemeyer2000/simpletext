"use client";
import {useSession} from "next-auth/react";
import {useRouter} from "next/navigation";

export default function DashboardRedirect() {

    const {status} = useSession();
    const router = useRouter();

    if (status !== "authenticated") {
        router.push("/login");
    };

    return (
        <></>
    );
}