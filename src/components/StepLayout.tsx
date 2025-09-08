import type React from "react"

type StepLayoutProps = {
    name: string;
    children: React.ReactNode;
    footer?: React.ReactNode;
}

export default function StepLayout({name, children, footer}: StepLayoutProps) {
    return (
        <div className="min-h-screen bg-blue-50 flex items-center justify-center p-4">
            <div className="w-full max-w-md">
                <div className="bg-white shadow-lg rounded-xl p-8">
                    <h1 className="text-xl font-bold mb-4 text-blue-400">{name}</h1>
                    <div className="space-y-4">
                        {children}
                    </div>
                    {footer && <div className="mt-6">{footer}</div>}
                </div>
            </div>
        </div>
    )
}