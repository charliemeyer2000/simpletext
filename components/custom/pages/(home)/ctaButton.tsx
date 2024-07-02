"use client";

import {useSession} from 'next-auth/react';

import {Button} from '@/components/ui/button';
import {Skeleton} from '@/components/ui/skeleton';
import Link from 'next/link';

interface CTAButtonProps {
    children?: React.ReactNode
    callback?: () => void
}

export default function CTAButton({children, callback}: CTAButtonProps) {
    const {data: session, status} = useSession();

    if (status === "loading") {
        return (
            <Skeleton className="w-24 h-10" />
        )
    }

    if (status === "authenticated") {
        return (
            <Link href="/dashboard">
                <Button onClick={callback} className="w-full">
                    Dashboard
                    {children}
                </Button>
            </Link>
        );
    }

    return (
        <Link href="/login">
            <Button className="w-full">
                Get Started
                {children}
            </Button>
        </Link>
    );
}