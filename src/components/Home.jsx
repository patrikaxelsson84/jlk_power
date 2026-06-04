import { Link } from "react-router-dom";
import {
    Zap,
    Battery,
    Sun,
    ShieldCheck,
    Wrench,
    ArrowRight,
} from "lucide-react";

const services = [
    {
        icon: Sun,
        title: "Solar Panels",
        description:
            "Modern solar installations for homes and businesses.",
    },
    {
        icon: Battery,
        title: "Battery Storage",
        description:
            "Store energy and maximize your savings.",
    },
    {
        icon: Zap,
        title: "EV Charging",
        description:
            "Smart charging solutions for electric vehicles.",
    },
    {
        icon: Wrench,
        title: "Electrical Services",
        description:
            "Certified electricians for all electrical projects.",
    },
];

export default function Home() {
    return (
        <main className="bg-neutral-950 text-white">
            {/* HERO */}
            <section className="relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 via-transparent to-blue-500/20" />

                <div className="mx-auto max-w-7xl px-6 py-32 lg:px-8">
                    <div className="max-w-3xl">
            <span className="rounded-full border border-orange-500/30 bg-orange-500/10 px-4 py-2 text-sm text-orange-400">
              Trusted Energy Solutions
            </span>

                        <h1 className="mt-8 text-5xl font-bold leading-tight md:text-7xl">
                            Powering a
                            <span className="text-orange-500"> Smarter </span>
                            Future
                        </h1>

                        <p className="mt-6 text-lg text-gray-400">
                            Professional solar installations, EV charging,
                            battery storage and electrical services
                            tailored for modern homes and businesses.
                        </p>

                        <div className="mt-10 flex flex-wrap gap-4">
                            <Link
                                to="/contact"
                                className="rounded-full bg-orange-500 px-7 py-3 font-medium transition hover:bg-orange-600"
                            >
                                Get a Quote
                            </Link>

                            <Link
                                to="/services"
                                className="rounded-full border border-white/10 px-7 py-3 font-medium hover:bg-white/5"
                            >
                                Explore Services
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* STATS */}
            <section className="border-y border-white/10 bg-white/[0.02]">
                <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-6 py-12 md:grid-cols-4">
                    <div>
                        <h3 className="text-4xl font-bold text-orange-500">
                            500+
                        </h3>
                        <p className="text-gray-400">Projects Completed</p>
                    </div>

                    <div>
                        <h3 className="text-4xl font-bold text-orange-500">
                            10+
                        </h3>
                        <p className="text-gray-400">Years Experience</p>
                    </div>

                    <div>
                        <h3 className="text-4xl font-bold text-orange-500">
                            24/7
                        </h3>
                        <p className="text-gray-400">Support</p>
                    </div>

                    <div>
                        <h3 className="text-4xl font-bold text-orange-500">
                            100%
                        </h3>
                        <p className="text-gray-400">Customer Focus</p>
                    </div>
                </div>
            </section>

            {/* SERVICES */}
            <section className="mx-auto max-w-7xl px-6 py-24">
                <div className="mb-14 text-center">
                    <h2 className="text-4xl font-bold">
                        Our Services
                    </h2>
                    <p className="mt-4 text-gray-400">
                        Everything you need for modern energy solutions.
                    </p>
                </div>

                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                    {services.map((service) => {
                        const Icon = service.icon;

                        return (
                            <div
                                key={service.title}
                                className="group rounded-3xl border border-white/10 bg-white/[0.03] p-6 transition hover:-translate-y-2 hover:border-orange-500/40"
                            >
                                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-500/10">
                                    <Icon className="h-7 w-7 text-orange-500" />
                                </div>

                                <h3 className="text-xl font-semibold">
                                    {service.title}
                                </h3>

                                <p className="mt-3 text-gray-400">
                                    {service.description}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </section>

            {/* WHY CHOOSE US */}
            <section className="bg-white/[0.02] py-24">
                <div className="mx-auto max-w-7xl px-6">
                    <div className="grid gap-12 lg:grid-cols-2">
                        <div>
                            <h2 className="text-4xl font-bold">
                                Why Choose Us?
                            </h2>

                            <p className="mt-5 text-gray-400">
                                We combine technical expertise with
                                customer-focused service to deliver
                                reliable and future-proof energy solutions.
                            </p>
                        </div>

                        <div className="space-y-6">
                            <div className="flex gap-4">
                                <ShieldCheck className="text-orange-500" />
                                <div>
                                    <h4 className="font-semibold">
                                        Certified Professionals
                                    </h4>
                                    <p className="text-gray-400">
                                        Experienced and licensed installers.
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <Zap className="text-orange-500" />
                                <div>
                                    <h4 className="font-semibold">
                                        Modern Technology
                                    </h4>
                                    <p className="text-gray-400">
                                        Efficient solutions built for the future.
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <Battery className="text-orange-500" />
                                <div>
                                    <h4 className="font-semibold">
                                        Energy Optimization
                                    </h4>
                                    <p className="text-gray-400">
                                        Lower costs and greater independence.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="mx-auto max-w-7xl px-6 py-24">
                <div className="rounded-4xl bg-gradient-to-r from-orange-500 to-orange-600 p-10 text-center">
                    <h2 className="text-4xl font-bold">
                        Ready to Start Your Project?
                    </h2>

                    <p className="mt-4 text-orange-100">
                        Contact us today for a free consultation.
                    </p>

                    <Link
                        to="/contact"
                        className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-7 py-3 font-semibold text-black"
                    >
                        Contact Us
                        <ArrowRight size={18} />
                    </Link>
                </div>
            </section>
        </main>
    );
}