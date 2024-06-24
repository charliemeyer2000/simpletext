"use client";
import {Input} from "@/components/ui/input";

import {CommandDialog} from "@/components/custom/commandDialog";

import {useState} from "react";

export function CommandSearchBar() {

    const [open, setOpen] = useState(false);

    return (
        <>
            <CommandDialog open={open} setOpen={setOpen} />
            <Input
                className="w-50"
                placeholder="Search..."
                type="search"
                onFocus={() => setOpen(true)}
            >
            </Input>
        </>
    )
}


