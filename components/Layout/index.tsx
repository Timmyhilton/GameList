"use client"

import {Gamepad2} from "lucide-react";

export function Header() {
    return (
        <header className="bg-white/80 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-10">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="p-2 bg-blue-600 rounded-lg">
                            <Gamepad2 className="w-6 h-6 text-white"/>
                        </div>
                        <div>
                            <h1 className="text-2xl font-bold text-gray-800">GameHub</h1>
                            <p className="text-sm text-gray-600 hidden sm:block">Discover and play amazing games</p>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export function Footer() {
    const currentYear = new Date().getFullYear();
    return (
        <footer className="bg-white border-t border-gray-200 mt-12">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                <div className="text-center text-gray-600">
                    <p>&copy; {currentYear} GameHub. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}

type SectionHeaderProps = {
    title?: string;
    text?: string;
};

export function SectionHeader({title = "Featured Games", text = "Play instantly or download to enjoy"}: SectionHeaderProps) {
    return (
        <div className="mb-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-2">{title}</h2>
            <p className="text-gray-600">{text}</p>
        </div>
    );
}

