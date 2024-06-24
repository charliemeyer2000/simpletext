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

interface CopyButtonProps {
    text: string;
}

export default function CopyButton({text}: CopyButtonProps) {

    const [copied, setCopied] = useState(false);


    return (
        <TooltipProvider>
            <Tooltip>
                <TooltipTrigger>
                    <Image onClick={() => {
                        navigator.clipboard.writeText(text);
                        setCopied(true);
                        setTimeout(() => {
                            setCopied(false);
                        }, 2000);
                    }}
                        src={copied ? Check : Copy} alt="Copy" />
                </TooltipTrigger>
                <TooltipContent>
                    {copied ? "Copied!" : "Copy"}
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>


    )

}
