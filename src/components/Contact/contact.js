import React, { useState } from 'react';
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt, FaPaperPlane, FaArrowRight } from 'react-icons/fa';
import Reveal from '../Reveal/Reveal';

const contactInfo = [
    { label: 'Email', value: 'abbasghaznafar536@gmail.com', href: 'mailto:abbasghaznafar536@gmail.com', icon: FaEnvelope },
    { label: 'Phone', value: '+92 0317 3040469', href: 'tel:+923173040469', icon: FaPhoneAlt },
    { label: 'Location', value: 'Lahore, Punjab, Pakistan', icon: FaMapMarkerAlt },
];

const Contact = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const sendEmail = (e) => {
        e.preventDefault();
        const subject = encodeURIComponent(`Portfolio contact from ${formData.name}`);
        const body = encodeURIComponent(`${formData.message}\n\nRegards,\n${formData.name}\n${formData.email}`);
        window.location.href = `mailto:abbasghaznafar536@gmail.com?subject=${subject}&body=${body}`;
        setFormData({ name: '', email: '', message: '' });
    };

    return (
        <section id="contact" className="relative overflow-hidden bg-navy">
            <div className="pointer-events-none absolute -left-40 top-0 h-96 w-96 rounded-full bg-blue-600/15 blur-3xl" />
            <div className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl" />

            <div className="container-page section-pad relative">
                <div className="grid gap-14 lg:grid-cols-2 lg:gap-16">
                    <Reveal>
                        <div>
                            <span className="label-sm !text-blue-400">Contact</span>
                            <h2 className="mb-4 mt-3 text-3xl font-bold text-white md:text-4xl">
                                Let's Work Together
                            </h2>
                            <p className="max-w-md text-base leading-relaxed text-slate-400">
                                Have a project in mind or want to discuss an opportunity? Feel free
                                to reach out — I usually respond within a day.
                            </p>

                            <div className="mt-10 space-y-4">
                                {contactInfo.map(({ label, value, href, icon: Icon }) => {
                                    const inner = (
                                        <>
                                            <span className="flex h-11 w-11 flex-none items-center justify-center rounded-xl bg-blue-600/15 text-lg text-blue-400">
                                                <Icon />
                                            </span>
                                            <div>
                                                <p className="text-xs font-medium uppercase tracking-wider text-slate-500">
                                                    {label}
                                                </p>
                                                <p className="break-all text-sm font-medium text-slate-200">{value}</p>
                                            </div>
                                        </>
                                    );
                                    return href ? (
                                        <a
                                            key={label}
                                            href={href}
                                            className="card-dark flex items-center gap-4 p-5 transition hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-950/50"
                                        >
                                            {inner}
                                        </a>
                                    ) : (
                                        <div key={label} className="card-dark flex items-center gap-4 p-5">
                                            {inner}
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </Reveal>

                    <Reveal delay={120}>
                        <form onSubmit={sendEmail} className="card-dark p-6 md:p-8">
                            <h3 className="mb-6 text-lg font-semibold text-white">Send Me a Message</h3>
                            <div className="space-y-4">
                                <div>
                                    <label htmlFor="contact-name" className="mb-1.5 block text-sm font-medium text-slate-300">
                                        Name
                                    </label>
                                    <input
                                        id="contact-name"
                                        type="text"
                                        name="name"
                                        placeholder="Your name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        className="w-full rounded-xl border border-white/10 bg-navy-900 px-4 py-3 text-sm text-white placeholder-slate-500 outline-none transition focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="contact-email" className="mb-1.5 block text-sm font-medium text-slate-300">
                                        Email
                                    </label>
                                    <input
                                        id="contact-email"
                                        type="email"
                                        name="email"
                                        placeholder="you@example.com"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className="w-full rounded-xl border border-white/10 bg-navy-900 px-4 py-3 text-sm text-white placeholder-slate-500 outline-none transition focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="contact-message" className="mb-1.5 block text-sm font-medium text-slate-300">
                                        Message
                                    </label>
                                    <textarea
                                        id="contact-message"
                                        name="message"
                                        placeholder="Write your message..."
                                        rows={5}
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        className="w-full resize-none rounded-xl border border-white/10 bg-navy-900 px-4 py-3 text-sm text-white placeholder-slate-500 outline-none transition focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                                    ></textarea>
                                </div>
                                <button type="submit" className="btn-primary w-full">
                                    Send Message
                                    <FaArrowRight className="text-sm" />
                                </button>
                                <p className="flex items-center justify-center gap-2 text-center text-xs text-slate-500">
                                    <FaPaperPlane className="text-blue-400" />
                                    Opens your email app — no data is stored anywhere.
                                </p>
                            </div>
                        </form>
                    </Reveal>
                </div>
            </div>
        </section>
    );
};

export default Contact;