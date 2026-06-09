// pages/About.jsx

export default function About() {
    return (
        <section className="bg-white/[0.02] py-24">
            <div className="mx-auto max-w-5xl px-6 text-center">
        <span className="rounded-full border border-orange-500/30 bg-orange-500/10 px-4 py-2 text-sm text-orange-400">
            Om Företaget
        </span>

                <h2 className="mt-6 text-4xl font-bold text-white md:text-5xl">
                    Vilka är vi?
                </h2>

                <p className="mx-auto mt-8 max-w-3xl text-lg leading-relaxed text-gray-400">
                    Vi är <span className="font-semibold text-white">JLK Power AB</span>
                    {" "}och{" "}
                    <span className="font-semibold text-white">
                JJ Dekor & Fordonsvård
            </span>
                    , ett modernt företag i Vislanda med passion för fordon,
                    service och kvalitet.
                </p>

                <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-gray-400">
                    Bakom verksamheten står Jonas och Julia – två engagerade
                    entreprenörer som brinner för att leverera professionella
                    lösningar och skapa långsiktiga relationer med våra kunder.
                    Genom noggrannhet, personlig service och ett starkt fokus på
                    kvalitet strävar vi alltid efter att överträffa förväntningarna.
                </p>
            </div>
        </section>
    );
}