import React from 'react';
import { FaArrowRight, FaLaptopCode, FaExchangeAlt } from 'react-icons/fa';
import { SiReact, SiJavascript, SiHtml5, SiCss, SiNodedotjs } from 'react-icons/si';
import Reveal from '../Reveal/Reveal';

const projects = [
    {
        title: 'Personal Portfolio Website',
        icon: FaLaptopCode,
        cover: 'from-blue-500 to-indigo-600',
        desc: 'A fully responsive portfolio website built with React.js, JavaScript, HTML and CSS — with sections for About, Skills, Projects and Contact, smooth navigation and interactive UI elements.',
        tech: [
            { name: 'React', icon: SiReact, color: 'text-cyan-500' },
            { name: 'JavaScript', icon: SiJavascript, color: 'text-yellow-500' },
            { name: 'HTML', icon: SiHtml5, color: 'text-orange-500' },
            { name: 'CSS', icon: SiCss, color: 'text-blue-500' },
        ],
    },
    {
        title: 'Currency Converter Application',
        icon: FaExchangeAlt,
        cover: 'from-emerald-500 to-teal-600',
        desc: 'A real-time currency converter using React.js and a live exchange rate API — instant conversion between multiple currencies with responsive UI updates and state management.',
        tech: [
            { name: 'React', icon: SiReact, color: 'text-cyan-500' },
            { name: 'JavaScript', icon: SiJavascript, color: 'text-yellow-500' },
            { name: 'REST API', icon: SiNodedotjs, color: 'text-green-600' },
        ],
    },
];

const Works = () => {
    return (
        <section id="projects" className="bg-slate-50">
            <div className="container-page section-pad">
                <div className="text-center">
                    <span className="label-sm">My Projects</span>
                    <h2 className="section-title">Featured Projects</h2>
                    <p className="section-subtitle">
                        A selection of projects I have designed, developed and deployed.
                    </p>
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                    {projects.map(({ title, icon: Icon, cover, desc, tech }, i) => (
                        <Reveal key={title} delay={i * 120}>
                            <article className="card-white group overflow-hidden transition hover:-translate-y-1.5 hover:shadow-lg hover:shadow-blue-100">
                                <div className={`relative flex aspect-video items-center justify-center overflow-hidden bg-gradient-to-br ${cover}`}>
                                    <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/15 text-3xl text-white backdrop-blur-sm transition duration-300 group-hover:scale-110">
                                        <Icon />
                                    </span>
                                    <span className="absolute right-4 top-4 rounded-full bg-white/10 px-3 py-1 text-[11px] font-medium text-white backdrop-blur-sm">
                                        Featured
                                    </span>
                                </div>
                                <div className="p-6">
                                    <h3 className="text-lg font-semibold text-navy">{title}</h3>
                                    <p className="mt-2 text-sm leading-relaxed text-slate-500">{desc}</p>
                                    <div className="mt-5 flex flex-wrap gap-2">
                                        {tech.map(({ name, icon: TechIcon, color }) => (
                                            <span
                                                key={name}
                                                className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-medium text-slate-600"
                                            >
                                                <TechIcon className={color} />
                                                {name}
                                            </span>
                                        ))}
                                    </div>
                                    <a
                                        href={`mailto:abbasghaznafar536@gmail.com?subject=${encodeURIComponent(`Project inquiry: ${title}`)}`}
                                        className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-blue-600 transition group-hover:gap-3 hover:text-blue-700"
                                    >
                                        View Project
                                        <FaArrowRight />
                                    </a>
                                </div>
                            </article>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Works;