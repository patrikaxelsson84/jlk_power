export default function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className="border-t border-white/5 bg-black/80 backdrop-blur-2xl">
            <div className="mx-auto max-w-7xl px-4 py-8 lg:px-8">
                <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-between">
                    <p className="text-xs uppercase tracking-[0.25em] text-gray-500">
                        © {year} JLK Power AB. Alla rättigheter förbehållna.
                    </p>

                    <p className="text-xs text-gray-600 tracking-wide">
                        Designed &amp; developed by{" "}
                        <span className="text-orange-500/80 font-medium">
                            Patrik Axelsson
                        </span>
                    </p>
                </div>
            </div>
        </footer>
    );
}
