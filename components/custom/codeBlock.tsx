import {cn} from "@/lib/utils";
import Image from "next/image";
import {oneLight} from 'react-syntax-highlighter/dist/esm/styles/prism';
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter';
import CopyButton from "@/components/custom/copyButton";

interface CodeBlockProps {
    code: string;
    language: string;
    languageImage: string;
    fileName: string;
    className?: string;
}

export const CodeBlock: React.FC<CodeBlockProps> = ({code, language, languageImage, fileName, className}) => {

    const CodeExample = () => {

        const codeString = code;

        return (
            <SyntaxHighlighter
                language={language}
                style={oneLight}
                customStyle={{'background': "transparent", 'textAlign': 'left'}}
                codeTagProps={{
                    style: {
                        'background': 'transparent',
                        'fontSize': '14px',   
                    }
                }}
                showLineNumbers
                
            >
                {codeString}
            </SyntaxHighlighter>
        );
    };

    return (
        <div className={cn("rounded-lg border bg-card text-card-foreground shadow-sm", className)}>
            <div className="flex flex-row items-center justify-between p-6 background-[#FAFAFA]">
                <div className="flex flex-row items-center justify-start gap-x-4">
                    <Image src={languageImage} alt="TypeScript Logo" width={20} height={20} />
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