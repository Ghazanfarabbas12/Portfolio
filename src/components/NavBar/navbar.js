import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes, FaDownload } from 'react-icons/fa';

const links = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Experience', href: '#experience' },
    { label: 'Education', href: '#education' },
    { label: 'Contact', href: '#contact' },
];

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const [active, setActive] = useState('home');
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 10);
        onScroll();
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    useEffect(() => {
        if (typeof IntersectionObserver === 'undefined') return;
        const sectionIds = links.map((l) => l.href.slice(1));
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActive(entry.target.id);
                    }
                });
            },
            { rootMargin: '-45% 0px -50% 0px', threshold: 0 }
        );
        sectionIds.forEach((id) => {
            const el = document.getElementById(id);
            if (el) observer.observe(el);
        });
        return () => observer.disconnect();
    }, []);

    const closeMenu = () => setOpen(false);

    return (
        <nav
            className={`fixed top-0 z-50 w-full border-b bg-navy transition-colors ${
                scrolled ? 'border-slate-800/80 shadow-lg shadow-black/20' : 'border-slate-800/40'
            }`}
        >
            <div className="container-page flex h-16 items-center justify-between">
                <a href="#home" aria-label="Go to home" className="flex items-center gap-2.5">
                    <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-sm font-bold text-white">
                        GA
                    </span>
                    <span className="text-[15px] font-semibold text-white">Ghazanfar Abbas</span>
                </a>

                <div className="hidden items-center gap-6 lg:flex">
                    {links.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            aria-current={active === link.href.slice(1) ? 'page' : undefined}
                            className={`text-sm font-medium transition-colors ${
                                active === link.href.slice(1)
                                    ? 'text-blue-400'
                                    : 'text-slate-300 hover:text-blue-300'
                            }`}
                        >
                            {link.label}
                        </a>
                    ))}
                    <a
                        href="Ghazanfar-Abbas-CV.html"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary !px-4 !py-2 !text-[13px]"
                    >
                        <FaDownload className="text-sm" />
                        Download CV
                    </a>
                </div>

                <button
                    onClick={() => setOpen(!open)}
                    aria-label="Toggle navigation menu"
                    aria-expanded={open}
                    className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-700 text-lg text-slate-200 transition hover:border-blue-500 hover:text-blue-400 lg:hidden"
                >
                    {open ? <FaTimes /> : <FaBars />}
                </button>
            </div>

            {open && (
                <div className="border-t border-slate-800 bg-navy lg:hidden">
                    <div className="container-page flex flex-col gap-1 py-3">
                        {links.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                onClick={closeMenu}
                                className={`rounded-lg px-3 py-2.5 text-sm font-medium transition ${
                                    active === link.href.slice(1)
                                        ? 'bg-blue-500/10 text-blue-400'
                                        : 'text-slate-300 hover:bg-slate-800/60 hover:text-blue-300'
                                }`}
                            >
                                {link.label}
                            </a>
                        ))}
                        <a
                            href="Ghazanfar-Abbas-CV.html"
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={closeMenu}
                            className="btn-primary mt-2 w-full"
                        >
                            <FaDownload className="text-sm" />
                            Download CV
                        </a>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;