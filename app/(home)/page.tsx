import Link from "next/link";
import Image from "next/image";
import {ThemeToggle} from "@/components/custom/themeToggle";
import {Button} from "@/components/ui/button";
import {CommandSearchBar} from "@/components/custom/commandSearchBar";
import CopyButton from "@/components/custom/copyButton";
import {BenefitCard} from "@/components/custom/benefitCard";
import TypeScript from "@/public/svg/typescript.svg";
import React from "react";
import {CodeBlock} from "@/components/custom/codeBlock";
import PricingCard from "@/components/custom/pricingCard";


import DollarSign from "@/public/svg/dollar-sign.svg";
import Clock from "@/public/svg/timer-reset.svg";
import Smile from "@/public/svg/smile.svg";
import Chart from "@/public/svg/bar-chart-4.svg";
import Scale from "@/public/svg/scale-3d.svg";
import Phone from "@/public/svg/phone.svg";

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <div className="flex h-screen flex-col justify-center items-center">
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
              <Link href="#pricing" scroll={true} className="text-sm text-grey hover:text-primary">
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
      </div>
      <div className="flex flex-col items-center justify-center gap-y-20">
        <section className="flex flex-col items-center justify-center gap-y-10">
          <div className="flex flex-row items-start justify-start gap-x-10 h-full">
            <CodeBlock
              code={
`import { SimpleText } from 'simpletext';
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
            <div className="flex flex-col justify-between gap-y-10 max-w-lg flex-1">
              <h3 className="text-4xl font-semibold">
                API's <span className="text-theme-primary">so easy</span>, you'd think they're stupid.
              </h3>
              <div className="flex flex-col gap-y-10 flex-grow">
                <p className="text-lg text-grey">
                  <strong className="text-primary">Ship apps with SMS at its core</strong>, using our simple APIs designed for the modern developer.
                  <strong className="text-primary"> Works with NextJS and other modern frameworks</strong>, while also exposing lower-level HTTPS APIs for any web or mobile use case.
                </p>
                <p className="text-lg text-grey">
                  <strong className="text-primary"> Avoid costly SMS providers</strong> and vendor lock-in with Twilio or Firebase Messaging by using our simple, transparent pricing.
                </p>
                <Button variant="outline" className="self-start">Check out our demo apps</Button>
              </div>
            </div>
          </div>
        </section>
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 p-5 max-w-6xl">
          <BenefitCard
            title="Fair pricing"
            icon={DollarSign}
            description="$0 upfront to test that MVP or new app idea - just get coding."
          />
          <BenefitCard
            title="Send later"
            icon={Clock}
            description="Schedule send 1000s of messages or schedule batch jobs easily."
          />
          <BenefitCard
            title="Simple APIs"
            icon={Smile}
            description="APIs that remove the bloat from doing simple communication."
          />
          <BenefitCard
            title="Analytics"
            icon={Chart}
            description="Gain valuable insights about sms delivery rates, user feedback, & pricing."
          />
          <BenefitCard
            title="Elastic Scalability"
            icon={Scale}
            description="From sending 0 to 1000 messages a day, we scale to your needs."
          />
          <BenefitCard
            title="Personalization"
            icon={Phone}
            description="Work with our team to reserve your own phone number & special rates."
          />
        </section>
        <section className="flex flex-col items-flex- justify-center gap-y-4" id="pricing">
          <h2 className="text-4xl font-semibold text-center">
            Worry about your app, <span className="text-theme-primary">not your wallet.</span>
          </h2>
          <div className="flex flex-row items-start justify-center gap-x-8">
            <PricingCard
              name="free dev"
              description="Everything you need for that quick idea, hackathon project, or MVP to present."
              cost="$0"
              period="/month"
              button={
                <Button variant={"outline"} className="w-full">Get Started</Button>
              }
              benefits={["100 sms texts/day across all apps", "literally it’s free."]}
            />
            <PricingCard
              name="simple dev"
              className="border-2 border-theme-primary" 
              description="For that long-term application that needs an extra level of communication."
              cost="$10"
              period="/month"
              button={
                <Button variant={"default"} className="w-full bg-theme-primary">Get Started</Button>
              }
              benefits={["5000 texts/day across all apps", "batch jobs for messages", "dark mode"]}
            />
            <PricingCard
              name="expert dev"
              description="Get every solution you’ll need for sms, along with 1-1 support from the development team."
              cost="Custom"
              button={
                <Button variant={"outline"} className="w-full">Schedule a Call</Button>
              }
              benefits={["personal short-code number", "usage-based pricing"]}
            />
          </div>


        </section>
      </div>
    </div>
  );
}