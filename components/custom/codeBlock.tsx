"use client";
import {cn} from "@/lib/utils";
import Image from "next/image";
import {oneLight, oneDark} from 'react-syntax-highlighter/dist/esm/styles/prism';
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter';
import CopyButton from "@/components/custom/copyButton";
import {useTheme} from "next-themes";

interface CodeBlockProps {
    code: string;
    language: string;
    languageImage: string;
    fileName: string;
    className?: string;
}

export const CodeBlock: React.FC<CodeBlockProps> = ({code, language, languageImage, fileName, className}) => {

    const theme = useTheme();

    const CodeExample = () => {

        const codeString = code;

        return (
            <SyntaxHighlighter
                language={language}
                style={theme.theme === 'dark' ? oneDark : oneLight}
                customStyle={{'background': "transparent", 'textAlign': 'left'}}
                codeTagProps={{
                    style: {
                        'background': 'transparent',
                        'fontSize': '14px',   
                    }
                }}
            >
                {codeString}
            </SyntaxHighlighter>
        );
    };

    return (
        <div className={cn("rounded-lg border bg-card text-card-foreground shadow-sm", className)}>
            <div className="flex flex-row items-center justify-between p-6 background-[#FAFAFA]">
                <div className="flex flex-row items-center justify-start gap-x-4">
                    <Image src={languageImage} alt="TypeScript Logo" width={15} height={15} />
                    <p className="text-sm text-grey">{fileName}</p>
                </div>
                <CopyButton text={code} className="w-5 h-5" />
            </div>
            <div className="border-t px-5">
                <CodeExample />
            </div>
        </div>
    )

}