import React from 'react';
import Reveal from '../Reveal/Reveal';
import {
    SiHtml5, SiCss, SiJavascript, SiReact, SiTailwindcss, SiBootstrap,
    SiNodedotjs, SiExpress, SiMongodb, SiFlutter, SiDart, SiGit, SiGithub,
} from 'react-icons/si';

const skills = [
    { name: 'HTML', label: 'Markup', icon: SiHtml5, color: 'text-orange-500' },
    { name: 'CSS', label: 'Styling', icon: SiCss, color: 'text-blue-500' },
    { name: 'JavaScript', label: 'Language (ES6+)', icon: SiJavascript, color: 'text-yellow-500' },
    { name: 'React.js', label: 'Frontend Library', icon: SiReact, color: 'text-cyan-500' },
    { name: 'Tailwind CSS', label: 'CSS Framework', icon: SiTailwindcss, color: 'text-sky-500' },
    { name: 'Bootstrap', label: 'CSS Framework', icon: SiBootstrap, color: 'text-purple-500' },
    { name: 'Node.js', label: 'Runtime', icon: SiNodedotjs, color: 'text-green-600' },
    { name: 'Express.js', label: 'Backend Framework', icon: SiExpress, color: 'text-slate-600' },
    { name: 'MongoDB', label: 'NoSQL Database', icon: SiMongodb, color: 'text-green-500' },
    { name: 'Flutter', label: 'Mobile Framework', icon: SiFlutter, color: 'text-sky-500' },
    { name: 'Dart', label: 'Language', icon: SiDart, color: 'text-blue-400' },
    { name: 'Git', label: 'Version Control', icon: SiGit, color: 'text-red-500' },
    { name: 'GitHub', label: 'Repository Hosting', icon: SiGithub, color: 'text-slate-800' },
];

const Skills = () => {
    return (
        <section id="skills" className="bg-white">
            <div className="container-page section-pad">
                <div className="text-center">
                    <span className="label-sm">My Skills</span>
                    <h2 className="section-title">Technologies and tools I work with</h2>
                    <p className="section-subtitle">
                        The core technologies I use to design, build and ship products.
                    </p>
                </div>

                <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
                    {skills.map(({ name, label, icon: Icon, color }, i) => (
                        <Reveal key={name} delay={(i % 4) * 80}>
                            <div className="card-white flex flex-col items-center gap-3 p-6 text-center transition hover:-translate-y-1 hover:border-blue-300 hover:shadow-md hover:shadow-blue-100">
                                <span className={`text-4xl ${color}`}>
                                    <Icon />
                                </span>
                                <div>
                                    <p className="text-[15px] font-semibold text-navy">{name}</p>
                                    <p className="mt-0.5 text-xs text-slate-500">{label}</p>
                                </div>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;