import Link from "next/link";
import {ThemeToggle} from "@/components/custom/themeToggle";
import { Button } from "@/components/ui/button";


import Image from "next/image";

export default function Home() {
  return (
    <div className="flex h-screen flex-col justify-between">
      <header className="sticky top-0 z-50 w-full bg-background dark:bg-background shadow-sm">
        <nav className="mx-auto flex max-w-7xl items-center justify-between gap-x-6 p-6 lg:px-8">
          <div className="flex lg:flex-1 items-center">
            <Link href="/">
              <h1 className="relative flex flex-row items-baseline text-2xl font-bold">
                <span>simple</span>
                <span className="text-theme-primary">text</span>
              </h1>
            </Link>
          </div>
          <div className="flex flex-row items-center gap-x-4 opacity-80">
            <Link href="mailto:contact@simpletext.dev" className="text-sm text-grey hover:text-primary">
              Contact
            </Link>
            <Link href="#pricing" scroll={false} className="text-sm text-grey hover:text-primary">
              Pricing
            </Link>
            <Link href="https://docs.simpletext.dev" target="_blank" rel="noopener noreferrer" className="text-sm text-grey hover:text-primary">
              <span>Docs</span>
            </Link>
          </div>
          <div className="flex flex-row items-center gap-x-4">

          </div>
          <ThemeToggle />
        </nav>
      </header>
    </div>
  );
}