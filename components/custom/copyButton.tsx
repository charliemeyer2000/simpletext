"use client";
import Copy from "@/public/svg/copy.svg";
import Check from "@/public/svg/check.svg";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip";
import Image from "next/image";
import {useState} from "react";
import {cn} from "@/lib/utils";

interface CopyButtonProps {
    text: string;
    className?: string;

}

export default function CopyButton({text, className}: CopyButtonProps) {

    const [copied, setCopied] = useState(false);


    return (
        <Image onClick={() => {
            navigator.clipboard.writeText(text);
            setCopied(true);
            setTimeout(() => {
                setCopied(false);
            }, 2000);
        }}
            src={copied ? Check : Copy} alt="Copy"
            className={cn("cursor-pointer", className)}
        />
    )
}
