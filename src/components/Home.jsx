import { Link } from "react-router-dom";
import {
    Zap,
    Battery,
    Sun,
    ShieldCheck,
    Wrench,
    ArrowRight, Sparkles, Gauge,
} from "lucide-react";

const services = [
    {
        icon: Sun,
        title: "Bromsar & Hjul",
        description:
            "Bromsbyte, hjulinställning, däckservice och säkerhetskontroller.",
    },
    {
        icon: Gauge,
        title: "Felsökning & Diagnostik",
        description:
            "Avancerad datoriserad felsökning för att snabbt identifiera och åtgärda problem.",
    },
    {
        icon: Sparkles,
        title: "Rekond",
        description:
            "Invändig och utvändig rekonditionering som återställer nybilskänslan.",
    },
    {
        icon: Wrench,
        title: "Bilservice & Underhåll",
        description:
            "Originalservice enligt tillverkarens rekommendationer för att säkerställa bilens prestanda och garanti.",
    },
];

export default function Home() {
    return (
        <main className="bg-neutral-950 text-white">
            {/* HERO */}
            <section className="relative min-h-[85vh] overflow-hidden">
                {/* Background Image */}
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                        backgroundImage: "url('/hero-bg.jpg')",
                    }}
                />

                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-black/70" />

                {/* Orange Accent Gradient */}
                <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent" />

                {/* Content */}
                <div className="relative z-10 mx-auto flex min-h-[85vh] max-w-7xl items-center px-6 lg:px-8">
                    <div className="max-w-3xl">
            <span className="rounded-full border border-orange-500/30 bg-orange-500/10 px-4 py-2 text-sm text-orange-400 backdrop-blur">
                Professionell Bilservice & Rekond
            </span>

                        <h1 className="mt-8 text-5xl font-bold leading-tight md:text-7xl">
                            Din Trygga
                            <span className="text-orange-500"> Bilpartner </span>
                            i Vislanda
                        </h1>

                        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-gray-300">
                            Vi erbjuder bilservice, felsökning, reparationer,
                            rekonditionering och professionell bilvård.
                            Snabb service, transparenta priser och högsta kvalitet.
                        </p>

                        <div className="mt-10 flex flex-wrap gap-4">
                            <Link
                                to="/contact"
                                className="rounded-full bg-orange-500 px-8 py-4 font-semibold transition hover:bg-orange-600"
                            >
                                Boka Tid
                            </Link>

                            <Link
                                to="/services"
                                className="rounded-full border border-white/20 bg-white/5 px-8 py-4 font-semibold backdrop-blur transition hover:bg-white/10"
                            >
                                Våra Tjänster
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
                        <p className="text-gray-400">Gjorda tjänster</p>
                    </div>

                    <div>
                        <h3 className="text-4xl font-bold text-orange-500">
                            10+
                        </h3>
                        <p className="text-gray-400">Års erfarenhet</p>
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
                        <p className="text-gray-400">Kund Focus</p>
                    </div>
                </div>
            </section>

            {/* SERVICES */}
            <section className="mx-auto max-w-7xl px-6 py-24">
                <div className="mb-14 text-center">
                    <h2 className="text-4xl font-bold">
                        Våra tjänster
                    </h2>
                    <p className="mt-4 text-gray-400">
                        Inga reparationer är för stora
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
                                Varför välja oss?
                            </h2>

                            <p className="mt-5 text-gray-400">
                                Vi kombinerar teknisk expertis med kundfokuserad
                                service för att leverera pålitliga och framtidssäkra tjänster.
                            </p>
                        </div>

                        <div className="space-y-6">
                            <div className="flex gap-4">
                                <ShieldCheck className="text-orange-500" />
                                <div>
                                    <h4 className="font-semibold">
                                        Professionella
                                    </h4>
                                    <p className="text-gray-400">
                                        Erfarna och kundfokus.
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <Zap className="text-orange-500" />
                                <div>
                                    <h4 className="font-semibold">
                                        Lösningsorienterade
                                    </h4>
                                    <p className="text-gray-400">
                                        effektiva och snabb hjälp.
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <Battery className="text-orange-500" />
                                <div>
                                    <h4 className="font-semibold">
                                        Konkurrenskraftiga priser
                                    </h4>
                                    <p className="text-gray-400">
                                        Lägre kostnader och större oberoende.
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