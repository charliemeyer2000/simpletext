import Link from "next/link";
import Image from "next/image";
import {ThemeToggle} from "@/components/custom/themeToggle";
import {Button} from "@/components/ui/button";
import {CommandSearchBar} from "@/components/custom/commandSearchBar";
import CopyButton from "@/components/custom/copyButton";
import TypeScript from "@/public/svg/typescript.svg";
import React from "react";

import {CodeBlock} from "@/components/custom/codeBlock";

export default function Home() {

  return (
    <div className="overflow-x-hidden">
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
            <div className="flex flex-grow justify-center items-center gap-x-4 opacity-80">
              <Link href="mailto:contact@simpletext.dev" className="text-sm text-grey hover:text-primary">
                Contact
              </Link>
              <Link href="#pricing" scroll={false} className="text-sm text-grey hover:text-primary">
                Pricing
              </Link>
              <Link href="https://docs.simpletext.dev" target="_blank" rel="noopener noreferrer" className="relative text-sm text-grey hover:text-primary">
                <span>Docs</span>
              </Link>
            </div>
            <div className="flex flex-row ml-auto items-center gap-x-4">
              <CommandSearchBar />
              <Button className="text-sm">Get Started</Button>
              <ThemeToggle />
            </div>
          </nav>
        </header>

        <main className="flex flex-col gap-y-8 flex-grow items-center justify-center overflow-auto">
          <div className="max-w-4xl text-center">
            <h1 className="text-6xl font-black tracking-tight">
              <span className="text-theme-primary">stupidly simple</span>
              <span> sms for the modern app developer.</span>
            </h1>
          </div>
          <div className="flex flex-row items-center justify-center gap-x-4">
            <h2 className="text-2xl font-mono text-center text-grey dark:text-primary">
              ~ npm i simpletext
            </h2>
            <CopyButton text="npm i simpletext" />
          </div>
          <div className="flex flex-row items-center justify-center gap-x-4">
            <Button className="text-md">Get Started</Button>
            <Button className="text-md" variant={"outline"}>Read the Docs</Button>
          </div>
        </main>
      </div >
      <section className="flex flex-col items-center justify-center gap-y-10">
        <div className="fxlex flex-row items-start justify-start gap-x-4">
          <CodeBlock
            code={`import { SimpleText } from 'simpletext';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  
  const stClient = SimpleText.configure({
    apiKey: process.env.SIMPLETEXT_API_KEY,
    apiSecret: process.env.SIMPLETEXT_API_SECRET,
  });

  const { to, message } = req.body;

  await stClient.sendSMS({
    to,
    message,
  });

  return NextResponse.json({ status: 200 });

}`
            }
            language="typescript"
            languageImage={TypeScript}
            fileName="app/api/sms/route.ts"
          />
        </div>
      </section>
    </div>
  );
}