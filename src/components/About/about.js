import React from 'react';
import { FaCode, FaDesktop, FaLightbulb, FaGraduationCap, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaUser, FaFlag } from 'react-icons/fa';
import Reveal from '../Reveal/Reveal';

const features = [
    {
        title: 'Clean Code',
        desc: 'Write maintainable and scalable code',
        icon: FaCode,
    },
    {
        title: 'Responsive Design',
        desc: 'Works on all devices and screen sizes',
        icon: FaDesktop,
    },
    {
        title: 'Problem Solving',
        desc: 'Turn ideas into real solutions',
        icon: FaLightbulb,
    },
    {
        title: 'Continuous Learning',
        desc: 'Always open to new technologies',
        icon: FaGraduationCap,
    },
];

const personalInfo = [
    { icon: FaUser, label: 'Name', value: 'Ghazanfar Abbas' },
    { icon: FaEnvelope, label: 'Email', value: 'abbasghaznafar536@gmail.com' },
    { icon: FaPhoneAlt, label: 'Phone', value: '+92 0317 3040469' },
    { icon: FaMapMarkerAlt, label: 'Location', value: 'Lahore, Punjab, Pakistan' },
];

const About = () => {
    return (
        <section id="about" className="bg-slate-50">
            <div className="container-page section-pad">
                <div className="text-center">
                    <span className="label-sm">About Me</span>
                    <h2 className="section-title">Let me introduce myself</h2>
                    <p className="section-subtitle">
                        A quick look at who I am and what I stand for as a developer.
                    </p>
                </div>

                <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:gap-16">
                    <Reveal>
                        <div>
                            <p className="text-[15px] leading-relaxed text-slate-600">
                                Motivated MERN Stack Developer with a specialization in Frontend
                                Development and hands-on Flutter mobile development skills. Skilled
                                in React.js, JavaScript, HTML, CSS, Bootstrap, Node.js, Express.js,
                                MongoDB, and Flutter/Dart.
                            </p>
                            <p className="mt-4 text-[15px] leading-relaxed text-slate-600">
                                Experienced in building self-driven projects, including a portfolio
                                website and a currency converter application. Passionate about
                                creating responsive, user-friendly interfaces for web and mobile,
                                and continuously improving technical skills.
                            </p>

                            <div className="mt-8 grid gap-4 sm:grid-cols-2">
                                {personalInfo.map(({ icon: Icon, label, value }) => (
                                    <div key={label} className="flex items-start gap-3">
                                        <span className="mt-0.5 flex h-9 w-9 flex-none items-center justify-center rounded-lg bg-blue-50 text-sm text-blue-600">
                                            <Icon />
                                        </span>
                                        <div>
                                            <p className="text-xs font-medium uppercase tracking-wider text-slate-400">
                                                {label}
                                            </p>
                                            <p className="break-all text-sm font-medium text-slate-700">{value}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </Reveal>

                    <Reveal className="lg:my-auto">
                        <div className="grid gap-4 sm:grid-cols-2">
                            {features.map(({ title, desc, icon: Icon }) => (
                                <div
                                    key={title}
                                    className="card-white p-5 transition hover:-translate-y-1 hover:border-blue-300 hover:shadow-md hover:shadow-blue-100"
                                >
                                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-lg text-blue-600">
                                        <Icon />
                                    </span>
                                    <h3 className="mt-4 text-[15px] font-semibold text-navy">{title}</h3>
                                    <p className="mt-1.5 text-sm leading-relaxed text-slate-500">{desc}</p>
                                </div>
                            ))}
                            <div className="card-white flex flex-col items-start p-5 transition hover:-translate-y-1 hover:border-blue-300 hover:shadow-md hover:shadow-blue-100 sm:col-span-2">
                                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-600 text-lg text-white">
                                    <FaFlag />
                                </span>
                                <h3 className="mt-4 text-[15px] font-semibold text-navy">My Goal</h3>
                                <p className="mt-1.5 text-sm leading-relaxed text-slate-500">
                                    To grow as a professional frontend developer, contribute to
                                    real-world products, and help teams ship beautiful, high-quality
                                    web and mobile experiences.
                                </p>
                            </div>
                        </div>
                    </Reveal>
                </div>
            </div>
        </section>
    );
};

export default About;