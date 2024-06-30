import {cn} from "@/lib/utils";
import Image from "next/image";

import Check from '@/public/svg/check.svg';

interface PricingCardProps {
    name: string;
    description: string;
    cost: string;
    period?: string;
    button: React.ReactNode;
    benefits: string[];
    className?: string;
    nameClassName?: string;
}

export default function PricingCard({
    name,
    description,
    cost,
    period,
    button,
    benefits,
    className,
    nameClassName
}: PricingCardProps) {
    return (
        <div className={cn("rounded-lg border bg-card text-card-foreground shadow-sm p-6 flex flex-col items-start justify-start gap-y-12 max-w-sm", className)}>
            <div className="flex flex-col items-start justify-start gap-y-4">
                <h4 className={cn("text-lg font-semibold leading-none tracking-tight", nameClassName)}>{name}</h4>
                <p className="text-sm text-muted-foreground">{description}</p>
            </div>
            <div className="flex flex-col items-start justify-start gap-y-4 w-full">
                <p className="text-4xl font-bold text-primary">{cost}{period && <span className="text-sm text-muted-foreground">{" "}{period}</span>}</p>
                {button}
            </div>
            <div className="flex flex-col gap-y-2 pb-6">
                {benefits.map((benefit, index) => {
                    return (
                        <div className="flex flex-row items-center justify-start gap-x-4" key={index}>
                            <Image src={Check} width={16} height={16} alt="Checkmark" />
                            <p className="text-sm text-muted-foreground">{benefit}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}