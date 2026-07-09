import { Link } from "react-router-dom";
import {
    Wrench,
    Sparkles,
    ShieldCheck,
    Car,
    Gauge,
    ArrowRight,
    Palette,
} from "lucide-react";

const services = [
    {
        icon: Wrench,
        title: "Bilservice & Underhåll",
        description:
            "Originalservice enligt tillverkarens rekommendationer för att säkerställa bilens prestanda och garanti.",
    },
    {
        icon: Gauge,
        title: "Felsökning & Diagnostik",
        description:
            "Avancerad datoriserad felsökning för att snabbt identifiera och åtgärda problem.",
    },
    {
        icon: Car,
        title: "Bromsar & Hjul",
        description:
            "Bromsbyte, hjulinställning, däckservice och säkerhetskontroller.",
    },
    {
        icon: Palette,
        title: "Dekaler",
        description:
            "Kontroll, justeringar och offert av storlek på dekal för maximal kundnöjdhet.",
    },
    {
        icon: Sparkles,
        title: "Premium Rekond",
        description:
            "Invändig och utvändig rekonditionering som återställer nybilskänslan.",
    },
    {
        icon: ShieldCheck,
        title: "Lackskydd",
        description:
            "Skydda lacken mot väder, smuts och UV-strålning med professionella behandlingar.",
    },
];

export default function Services() {
    return (
        <main className="bg-neutral-950 text-white">
            {/* Hero */}
            <section className="relative overflow-hidden border-b border-white/10">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 via-transparent to-transparent" />

                <div className="mx-auto max-w-7xl px-6 py-28 lg:px-8">
                    <div className="max-w-3xl">
                        <span className="rounded-full border border-orange-500/30 bg-orange-500/10 px-4 py-2 text-sm text-orange-400">
                            Professionella Verkstadstjänster
                        </span>

                        <h1 className="mt-8 text-5xl font-bold md:text-7xl">
                            Våra
                            <span className="text-orange-500">
                                {" "}
                                Tjänster
                            </span>
                        </h1>

                        <p className="mt-6 text-lg leading-relaxed text-gray-400">
                            Vi erbjuder kompletta lösningar för service,
                            reparation och bilvård. Med modern utrustning och
                            erfarna tekniker ser vi till att din bil alltid är i
                            bästa möjliga skick.
                        </p>
                    </div>
                </div>
            </section>

            {/* Services Grid */}
            <section className="mx-auto max-w-7xl px-6 py-24">
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {services.map((service) => {
                        const Icon = service.icon;

                        return (
                            <div
                                key={service.title}
                                className="group rounded-3xl border border-white/10 bg-white/[0.03] p-8 transition-all duration-300 hover:-translate-y-2 hover:border-orange-500/40"
                            >
                                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-orange-500/10">
                                    <Icon className="h-8 w-8 text-orange-500" />
                                </div>

                                <h3 className="mb-4 text-2xl font-bold">
                                    {service.title}
                                </h3>

                                <p className="leading-relaxed text-gray-400">
                                    {service.description}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="bg-white/[0.02] py-24">
                <div className="mx-auto max-w-7xl px-6">
                    <div className="text-center">
                        <h2 className="text-4xl font-bold">
                            Varför välja oss?
                        </h2>

                        <p className="mx-auto mt-6 max-w-3xl text-gray-400">
                            Vi kombinerar erfarenhet, kvalitet och personlig
                            service för att ge dig en trygg verkstadsupplevelse.
                        </p>
                    </div>

                    <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                        <div className="rounded-3xl border border-white/10 p-6">
                            <h3 className="mb-3 font-semibold text-orange-500">
                                Certifierade Mekaniker
                            </h3>

                            <p className="text-gray-400">
                                Erfaren personal med kunskap om alla bilmärken.
                            </p>
                        </div>

                        <div className="rounded-3xl border border-white/10 p-6">
                            <h3 className="mb-3 font-semibold text-orange-500">
                                Modern Diagnostik
                            </h3>

                            <p className="text-gray-400">
                                Snabb och exakt felsökning med den senaste
                                tekniken.
                            </p>
                        </div>

                        <div className="rounded-3xl border border-white/10 p-6">
                            <h3 className="mb-3 font-semibold text-orange-500">
                                Garanti
                            </h3>

                            <p className="text-gray-400">
                                Garanti på både arbete och reservdelar.
                            </p>
                        </div>

                        <div className="rounded-3xl border border-white/10 p-6">
                            <h3 className="mb-3 font-semibold text-orange-500">
                                Transparenta Priser
                            </h3>

                            <p className="text-gray-400">
                                Fast pris innan arbetet påbörjas.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="mx-auto max-w-7xl px-6 py-24">
                <div className="rounded-[2rem] bg-gradient-to-r from-orange-500 to-orange-600 p-10 text-center">
                    <h2 className="text-4xl font-bold">
                        Redo att boka service?
                    </h2>

                    <p className="mt-4 text-orange-100">
                        Kontakta oss idag för offert eller tidsbokning.
                    </p>

                    <Link
                        to="/contact"
                        className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-8 py-3 font-semibold text-black transition hover:scale-105"
                    >
                        Boka Nu
                        <ArrowRight size={18} />
                    </Link>
                </div>
            </section>
        </main>
    );
}