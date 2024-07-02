"use client";
import {useSession, signOut} from "next-auth/react";
import {Skeleton} from "@/components/ui/skeleton";
import { Button } from "@/components/ui/button";


export default function Page() {
    const {data: session, status} = useSession();

    if (status === "loading") {
        return (
            <div className="flex flex-col gap-8">
                <Skeleton className="h-[14.5rem]" />
                {Array.from({length: 3}).map((_, index) => (
                    <Skeleton key={index} className="h-[7.7rem]" />
                ))}
            </div>
        );
    }

    return (
        <div>
            <h1 className="text-3xl font-semibold">Dashboard</h1>
            <p>Welcome {session?.user?.name}!</p>
            <p>Your email is {session?.user?.email}</p>
            <Button onClick={() => signOut()}>Sign out</Button>
        </div>
    )
}
