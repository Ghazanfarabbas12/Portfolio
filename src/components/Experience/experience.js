import React from 'react';
import { FaBriefcase, FaGraduationCap, FaHourglassHalf } from 'react-icons/fa';
import Reveal from '../Reveal/Reveal';

const education = [
    {
        icon: FaGraduationCap,
        date: '2022 - 2026',
        title: 'Bachelor of Computer Science (BSCS)',
        org: 'Government College University, Faisalabad',
        points: [
            'Focus on programming, web development and software engineering fundamentals',
            'Built hands-on projects with React, Node.js, Express and MongoDB',
        ],
    },
    {
        icon: FaGraduationCap,
        date: '2020 - 2022',
        title: 'Intermediate (Pre-Medical)',
        org: 'Government Graduate College, Jampur',
        points: [
            'Developed strong analytical, problem-solving and self-learning skills',
        ],
    },
];

const currentStage = {
    icon: FaHourglassHalf,
    date: 'Present',
    title: 'Open to Opportunities',
    org: 'Frontend / React Developer roles',
    points: [
        'Currently completing my BSCS degree (2026)',
        'Looking for internships and entry-level frontend roles',
    ],
};

const ExperienceSection = ({ title, data, id, neutral }) => (
    <div id={id}>
        <h3 className="mb-8 flex items-center gap-3 text-xl font-bold text-navy md:text-2xl">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-white">
                <FaBriefcase />
            </span>
            {title}
        </h3>

        <div className="relative border-l-2 border-blue-200 pl-6 md:pl-8">
            {data.map(({ icon: Icon, date, title: t, org, points }) => (
                <div key={`${title}-${org}`} className="relative pb-10 last:pb-0">
                    <span className="absolute -left-[35px] top-0 flex h-6 w-6 items-center justify-center rounded-full border-2 border-blue-200 bg-white md:-left-[45px]">
                        <span className={`h-2.5 w-2.5 rounded-full ${neutral ? 'bg-slate-300' : 'bg-blue-600'}`} />
                    </span>
                    <div className="card-white p-5 transition hover:border-blue-300 hover:shadow-md hover:shadow-blue-100 md:p-6">
                        <div className="flex flex-wrap items-center justify-between gap-2">
                            <span className="flex items-center gap-2 font-semibold text-navy">
                                <Icon className="text-blue-600" />
                                {t}
                            </span>
                            <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">
                                {date}
                            </span>
                        </div>
                        <p className="mt-2 text-sm font-medium text-slate-500">{org}</p>
                        <ul className="mt-3 space-y-1.5">
                            {points.map((point) => (
                                <li key={point} className="flex gap-2 text-sm leading-relaxed text-slate-600">
                                    <span className="mt-1.5 h-1.5 w-1.5 flex-none rounded-full bg-blue-400" />
                                    {point}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            ))}
        </div>
    </div>
);

const Experience = () => {
    return (
        <section id="experience" className="bg-white">
            <div className="container-page section-pad">
                <div className="text-center">
                    <span className="label-sm">Experience &amp; Education</span>
                    <h2 className="section-title">My journey so far</h2>
                    <p className="section-subtitle">
                        The academic foundation and practical skills behind my development work.
                    </p>
                </div>

                <div className="grid gap-14 lg:grid-cols-2 lg:gap-16">
                    <Reveal>
                        <ExperienceSection title="Work Experience" data={[currentStage]} neutral />
                    </Reveal>
                    <Reveal delay={120}>
                        <ExperienceSection title="Education" data={education} id="education" />
                    </Reveal>
                </div>
            </div>
        </section>
    );
};

export default Experience;