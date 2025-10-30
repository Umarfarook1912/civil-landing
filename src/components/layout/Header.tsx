import React from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '../common/Button';

export const Header: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    const navLinks = [
        { label: 'Home', href: '#' },
        { label: 'Features', href: '#' },
        { label: 'Apps', href: '#' },
        { label: 'Pricing', href: '#' },
        { label: 'Reviews', href: '#' },
        { label: 'FAQ', href: '#' },
        { label: 'Contact', href: '#' },
    ];

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-pink-50 px-4 lg:px-8 border-b border-pink-100 h-20">
            <nav className="max-w-7xl mx-auto flex items-center justify-between h-full">
                {/* Logo */}
                <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-red-600 rounded-lg flex items-center justify-center">
                        <div className="w-5 h-5 border-2 border-white rounded-full"></div>
                    </div>
                    <span className="text-red-600 font-bold text-xl tracking-tight">
                        GAMA AGANCY
                    </span>
                </div>

                {/* Desktop Navigation */}
                <div className="hidden lg:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.label}
                            href={link.href}
                            className="text-gray-700 hover:text-red-600 transition-colors"
                        >
                            {link.label}
                        </a>
                    ))}
                </div>

                {/* CTA Button */}
                <div className="hidden lg:block">
                    <Button>Buy Now Instantly</Button>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="lg:hidden text-gray-700"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </nav>

            {/* Mobile Menu (renders below header) */}
            {isMenuOpen && (
                <div className="lg:hidden mt-16 pb-4 bg-pink-50 border-b border-pink-100">
                    <div className="flex flex-col gap-4 p-4">
                        {navLinks.map((link) => (
                            <a
                                key={link.label}
                                href={link.href}
                                className="text-gray-700 hover:text-red-600 transition-colors"
                            >
                                {link.label}
                            </a>
                        ))}
                        <Button className="w-full">Buy Now Instantly</Button>
                    </div>
                </div>
            )}
        </header>
    );
};