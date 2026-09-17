import React from 'react';
import { FaEnvelope, FaPhoneAlt, FaArrowUp } from 'react-icons/fa';
import { FaGithub, FaLinkedinIn, FaXTwitter } from 'react-icons/fa6';

const links = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Experience', href: '#experience' },
    { label: 'Contact', href: '#contact' },
];

const socials = [
    { icon: FaGithub, label: 'GitHub' },
    { icon: FaLinkedinIn, label: 'LinkedIn' },
    { icon: FaXTwitter, label: 'X (Twitter)' },
];

const Footer = () => {
    const year = new Date().getFullYear();
    return (
        <footer className="border-t border-white/10 bg-navy-950">
            <div className="container-page py-12">
                <div className="grid gap-10 md:grid-cols-3">
                    <div>
                        <a href="#home" className="flex items-center gap-2.5">
                            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-base font-bold text-white">
                                GA
                            </span>
                            <span className="text-lg font-bold text-white">Ghazanfar Abbas</span>
                        </a>
                        <p className="mt-4 max-w-xs text-sm leading-relaxed text-slate-400">
                            Frontend Developer | React Developer building modern, responsive web
                            experiences.
                        </p>
                    </div>

                    <div>
                        <h4 className="text-sm font-semibold uppercase tracking-wider text-white">
                            Quick Links
                        </h4>
                        <ul className="mt-4 grid grid-cols-2 gap-x-6 gap-y-2.5">
                            {links.map(({ label, href }) => (
                                <li key={label}>
                                    <a
                                        href={href}
                                        className="text-sm text-slate-400 transition hover:text-blue-400"
                                    >
                                        {label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-sm font-semibold uppercase tracking-wider text-white">
                            Get In Touch
                        </h4>
                        <ul className="mt-4 space-y-3">
                            <li>
                                <a
                                    href="mailto:abbasghaznafar536@gmail.com"
                                    className="flex items-center gap-3 text-sm text-slate-400 transition hover:text-blue-400"
                                >
                                    <FaEnvelope className="text-blue-500" />
                                    abbasghaznafar536@gmail.com
                                </a>
                            </li>
                            <li>
                                <a
                                    href="tel:+923173040469"
                                    className="flex items-center gap-3 text-sm text-slate-400 transition hover:text-blue-400"
                                >
                                    <FaPhoneAlt className="text-blue-500" />
                                    +92 0317 3040469
                                </a>
                            </li>
                        </ul>
                        <div className="mt-5 flex gap-2.5">
                            {socials.map(({ icon: Icon, label }) => (
                                <span
                                    key={label}
                                    title={label}
                                    aria-label={label}
                                    className="flex h-9 w-9 cursor-default items-center justify-center rounded-lg border border-white/10 text-sm text-slate-400"
                                >
                                    <Icon />
                                </span>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 md:flex-row">
                    <p className="text-sm text-slate-500">
                        Copyright &copy; {year}{' '}
                        <span className="font-medium text-slate-300">Ghazanfar Abbas</span>. All rights reserved.
                    </p>
                    <p className="text-sm text-slate-500">Built with React.js &amp; Tailwind CSS</p>
                    <a
                        href="#home"
                        aria-label="Back to top"
                        className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 text-slate-300 transition hover:border-blue-500 hover:text-blue-400"
                    >
                        <FaArrowUp />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;