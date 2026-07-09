import { MapPin, Mail } from "lucide-react";

export default function Contact() {
    return (
        <div className="py-32 text-center text-white">
            <h1 className="mt-8 text-5xl font-bold leading-tight md:text-7xl">
                JLK Power AB
            </h1>

            <h2 className="mt-6 text-5xl font-bold leading-tight md:text-4xl">
                <span className="text-orange-500">Kontakta oss</span>
            </h2>

            <div className="mt-8 flex flex-col items-center gap-4">
                <a
                    href="https://maps.app.goo.gl/B6hg7wSRjint4une8"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-orange-500 px-6 py-3 font-semibold text-white transition hover:bg-orange-600"
                >
                    <MapPin size={18} />
                    Torggatan 2, 34250 Vislanda
                </a>

                <a
                    href="mailto:jlk.power.ab@gmail.com?subject=Förfrågan&body=Hej,%0A%0AJag vill komma i kontakt med er."                    className="inline-flex items-center gap-2 rounded-full bg-orange-500 px-6 py-3 font-semibold text-white transition hover:bg-orange-600"
                >
                    <Mail size={18} />
                    Skicka e-post
                </a>

                <p className="mt-6 text-3xl font-bold">
                    070-0927667
                </p>

                <p className="text-xl">
                    Org.nr 559337-5685
                </p>
            </div>
        </div>
    );
}