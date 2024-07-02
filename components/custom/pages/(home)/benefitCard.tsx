import {cn} from "@/lib/utils";
import Image from "next/image";

interface BenefitCardProps {
    title: string;
    icon: string;
    description: string;
    className?: string;
    children?: React.ReactNode;

}

export const BenefitCard: React.FC<BenefitCardProps> = ({
    title, icon, description, className, children, ...props
}) => {
    return (
        <div className={cn("flex flex-col items-start justify-start gap-y-4 p-6 bg-card text-grey", className)} {...props}>
            <div className="flex flex-row items-center gap-x-4">
                <Image src={icon} width={16} height={16} alt={title} />
                <p className="text-sm">{title}</p>
            </div>
            <p className="text-md text-primary">{description}</p>
            {children}
        </div>
    )
}