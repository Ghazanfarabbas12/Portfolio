import React from 'react';
import { FaArrowRight, FaDownload } from 'react-icons/fa';
import { FaGithub, FaLinkedinIn, FaXTwitter } from 'react-icons/fa6';
import { SiReact, SiJavascript, SiHtml5, SiCss, SiTailwindcss } from 'react-icons/si';

const socials = [
    { icon: FaGithub, label: 'GitHub' },
    { icon: FaLinkedinIn, label: 'LinkedIn' },
    { icon: FaXTwitter, label: 'X (Twitter)' },
];

const codeLines = [
    { text: 'const developer = {', color: 'text-slate-300' },
    { indent: 1,            text: 'name: "Ghazanfar Abbas",', color: 'text-emerald-300' },
    { indent: 1,            text: 'role: "Frontend Developer",', color: 'text-blue-300' },
    { indent: 1,            text: 'stack: ["React", "Tailwind"],', color: 'text-violet-300' },
    { indent: 1,            text: 'hireable: () => true,', color: 'text-amber-300' },
    { text: '};',           color: 'text-slate-300' },
];

const floatIcons = [
    { icon: SiReact, label: 'React', color: 'text-cyan-400', pos: 'right-6 -top-5', delay: '0s' },
    { icon: SiJavascript, label: 'JavaScript', color: 'text-yellow-400', pos: '-left-4 top-10', delay: '0.8s' },
    { icon: SiHtml5, label: 'HTML', color: 'text-orange-500', pos: 'right-0 top-20', delay: '1.4s' },
    { icon: SiCss, label: 'CSS', color: 'text-blue-500', pos: '-left-2 bottom-16', delay: '2s' },
    { icon: SiTailwindcss, label: 'Tailwind', color: 'text-sky-400', pos: 'right-8 -bottom-5', delay: '0.5s' },
];

const Intro = () => {
    return (
        <section id="home" className="relative overflow-hidden bg-navy pt-24">
            <div className="pointer-events-none absolute -left-40 top-10 h-96 w-96 rounded-full bg-blue-600/20 blur-3xl" />
            <div className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl" />

            <div className="container-page relative grid min-h-[calc(100vh-4rem)] items-center gap-14 pb-16 lg:grid-cols-2 lg:gap-10">
                <div className="animate-fade-in-up">
                    <span className="inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-blue-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-blue-300 md:text-[13px]">
                        <span className="h-1.5 w-1.5 rounded-full bg-blue-400" />
                        Frontend Developer
                    </span>

                    <h1 className="mt-6 text-4xl font-bold leading-tight text-white md:text-6xl">
                        Hi, I'm{' '}
                        <span className="bg-gradient-to-r from-blue-400 to-sky-400 bg-clip-text text-transparent">
                            Ghazanfar Abbas
                        </span>
                    </h1>

                    <p className="mt-4 text-lg font-medium text-slate-300 md:text-2xl">
                        Frontend Developer | React Developer
                    </p>

                    <p className="mt-5 max-w-xl text-base leading-relaxed text-slate-400">
                        I build modern, responsive and user-friendly web applications with a
                        focus on clean code, great UI/UX and performance.
                    </p>

                    <div className="mt-8 flex flex-wrap items-center gap-4">
                        <a href="#projects" className="btn-primary">
                            View My Projects
                            <FaArrowRight />
                        </a>
                        <a
                            href="Ghazanfar-Abbas-CV.html"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-outline-light"
                        >
                            <FaDownload />
                            Download CV
                        </a>
                    </div>

                    <div className="mt-10 flex items-center gap-3">
                        <span className="text-xs font-medium uppercase tracking-widest text-slate-500">
                            Find me on
                        </span>
                        <span className="h-px w-8 bg-slate-700" />
                        <div className="flex gap-2.5">
                            {socials.map(({ icon: Icon, label }) => (
                                <span
                                    key={label}
                                    title={label}
                                    aria-label={label}
                                    className="flex h-10 w-10 cursor-default items-center justify-center rounded-lg border border-slate-700 bg-navy-800 text-sm text-slate-300"
                                >
                                    <Icon />
                                </span>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="animate-slide-in-right relative mx-auto w-full max-w-lg lg:max-w-none">
                    <div className="pointer-events-none absolute -inset-6 rounded-3xl bg-blue-500/10 blur-2xl" />

                    {floatIcons.map(({ icon: Icon, label, color, pos, delay }) => (
                        <span
                            key={label}
                            title={label}
                            aria-label={label}
                            className={`absolute z-10 flex h-12 w-12 animate-float items-center justify-center rounded-xl border border-white/10 bg-navy-800 text-2xl shadow-lg shadow-black/40 ${color} ${pos}`}
                            style={{ animationDelay: delay }}
                        >
                            <Icon />
                        </span>
                    ))}

                    <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-navy-800 shadow-2xl shadow-blue-950/60">
                        <div className="flex items-center gap-2 border-b border-white/10 bg-navy-900 px-4 py-3">
                            <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
                            <span className="h-2.5 w-2.5 rounded-full bg-amber-400/80" />
                            <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" />
                            <span className="ml-4 flex-1 rounded-md bg-white/5 px-3 py-1 text-xs text-slate-400">
                                ghazanfarabbas.dev
                            </span>
                        </div>
                        <div className="p-5 font-mono text-[13px] leading-7 md:text-sm">
                            {codeLines.map((line, i) => (
                                <p key={i} className={line.color}>
                                    {line.indent ? '\u00A0\u00A0\u00A0\u00A0' : ''}
                                    {line.text}
                                </p>
                            ))}
                            <p className="mt-2 text-blue-400">{'// Building the web, one commit at a time'}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Intro;