// pages/Contact.jsx
import { MapPin } from "lucide-react";
import { Mail } from "lucide-react";
export default function Contact() {
    return (
        <div className="py-32 text-center text-white">

        <h1 className="mt-8 text-5xl font-bold leading-tight md:text-7xl">
            JLK Power AB
            </h1><h1 className="mt-6 text-5xl font-bold leading-tight md:text-4xl">
            <span className="text-orange-500">Kontakta oss </span></h1>
            <h1>
                <a

                    href="https://maps.app.goo.gl/B6hg7wSRjint4une8" class="contact_link1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-orange-500 px-6 py-3 font-semibold text-white transition hover:bg-orange-600"
                >
                    <MapPin size={18} />
                    Torggatan 2, 34250 Vislanda
                </a>&nbsp;
                <a
                    href="mailto:info@dittforetag.se"
                    className="inline-flex items-center gap-2 rounded-full bg-orange-500 px-6 py-3 font-semibold text-white transition hover:bg-orange-600"
                >
                    <Mail size={18} />
                     Skicka E-post
                </a>
                <h1 className="mt-8 text-5xl font-bold leading-tight md:text-3xl">
                    070-0927667
                    <h1></h1>Org.nr 559337-5685<h1/>
                </h1>

        </h1>
        </div>
    );
}