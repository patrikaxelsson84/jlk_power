// pages/Portfolio.jsx

const images = [
    "lykta.jpg",
    "wica.jpg",
    "bild3.jpg",
    "bilservice.jpg",
    "rekond.jpg",
];

export default function Portfolio() {
    return (
        <main className="bg-neutral-950 min-h-screen text-white">
            <section className="mx-auto max-w-7xl px-6 py-24">
                <div className="text-center">
                    <h1 className="text-5xl font-bold">
                        Våra Projekt
                    </h1>

                    <p className="mt-4 text-gray-400">
                        Ett urval av våra senaste arbeten.
                    </p>
                </div>

                <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {images.map((image, index) => (
                        <div
                            key={index}
                            className="group overflow-hidden rounded-3xl border border-white/10"
                        >
                            <img
                                src={`/portfolio/${image}`}
                                alt={`Projekt ${index + 1}`}
                                className="h-80 w-full object-cover transition duration-500 group-hover:scale-110"
                            />
                        </div>
                    ))}
                </div>
            </section>
        </main>
    );
}