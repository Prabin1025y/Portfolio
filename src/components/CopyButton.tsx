'use client'
import { CheckCheckIcon, CopyIcon } from 'lucide-react';
import React, { useState } from 'react';

type CopyButtonPropsType = {
    text: string
    className?: string
    size?: number
    successDuration?: number
}

const CopyButton = ({
    text,
    className = '',
    size = 16,
    successDuration = 5000
}: CopyButtonPropsType) => {
    const [isCopied, setIsCopied] = useState(false);

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(text);
            setIsCopied(true);

            // Reset the copied state after the specified duration
            setTimeout(() => {
                setIsCopied(false);
            }, successDuration);
        } catch (err) {
            console.error('Failed to copy text: ', err);
            // Optionally handle the error (show toast, etc.)
        }
    };

    return (
        <button
            onClick={handleCopy}
            className={`inline-flex items-center justify-center p-2 rounded-md transition-colors duration-150 ${className}`}
            title={isCopied ? 'Copied!' : 'Copy to clipboard'}
            disabled={isCopied}
        >
            {isCopied ? (
                <CheckCheckIcon
                    width={size}
                    height={size}
                    className="text-gray-600"
                />
            ) : (
                <CopyIcon
                    width={size}
                    height={size}
                    className="text-gray-600"
                />
            )}
        </button>
    );
};

export default CopyButton;