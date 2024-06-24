"use client";
import {Input} from "@/components/ui/input";

import {CommandDialog} from "@/components/custom/commandDialog";

import {useState} from "react";

export function CommandSearchBar() {

    const [open, setOpen] = useState(false);

    return (
        <>
            <CommandDialog open={open} setOpen={setOpen} />
            <div className="relative flex flex-row items-center gap-x-4">
                <Input
                    className="w-50"
                    placeholder="Search..."
                    type="search"
                    onFocus={() => setOpen(true)}
                />
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                    <kbd className="px-2 py-1 text-xs text-gray bg-[#F2F2F2] rounded dark:bg-[#333] dark:text-white">
                        ⌘k
                    </kbd>
                </div>
            </div>
        </>
    )
}


