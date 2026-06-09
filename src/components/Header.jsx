import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Header() {
    const [navbar, setNavbar] = useState(false);

    const navItems = [
        {
            name: "Hem",
            link: "/",
        },
        {
            name: "Om oss",
            link: "/about",
        },
        {
            name: "Våra tjänster",
            link: "/services",
        },
        {
            name: "Portfolio",
            link: "/portfolio",
        },
        {
            name: "Kontakt",
            link: "/contact",
        },
    ];

    return (
        <header className="sticky top-0 z-50 border-b border-white/10 bg-black/50 backdrop-blur-xl">
            <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">

                <Link
                    to="/"
                    className="group flex items-center gap-4"
                >
                    <div className="relative">
                        <img
                            src="/logga.png"
                            alt="Reparationer Och Service"
                            className="h-16 md:h-20 lg:h-24 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                        />

                        <div className="absolute inset-0 -z-10 rounded-full bg-orange-500/20 blur-2xl" />
                    </div>

                    <div className="hidden sm:block">
                        <h1 className="text-xl lg:text-2xl font-bold text-white">
                            Reparationer
                            <span className="text-orange-500"> & </span>
                            Service
                        </h1>

                        <p className="text-xs uppercase tracking-[0.3em] text-gray-400">
                            Bilverkstad • Rekond • Service
                        </p>
                    </div>
                </Link>

                {/* Desktop Menu */}
                <nav className="hidden items-center gap-8 md:flex">
                    {navItems.map((item) => (
                        <NavLink
                            key={item.name}
                            to={item.link}
                            end={item.link === "/"}
                            className={({ isActive }) =>
                                `relative text-sm font-medium transition-all duration-300 ${
                                    isActive
                                        ? "text-orange-500"
                                        : "text-gray-300 hover:text-white"
                                }`
                            }
                        >
                            {({ isActive }) => (
                                <div className="relative">
                                    {item.name}

                                    <span
                                        className={`absolute -bottom-2 left-0 h-[2px] bg-orange-500 transition-all duration-300 ${
                                            isActive
                                                ? "w-full"
                                                : "w-0 group-hover:w-full"
                                        }`}
                                    />
                                </div>
                            )}
                        </NavLink>
                    ))}

                    <Link
                        to="/contact"
                        className="rounded-full bg-orange-500 px-2 py-4 text-sm font-semibold text-white transition-all duration-300 hover:scale-105 hover:bg-orange-600"
                    >
                        Skicka för offert
                    </Link>
                </nav>

                {/* Mobile Button */}
                <button
                    onClick={() => setNavbar(!navbar)}
                    className="text-white md:hidden"
                >
                    {navbar ? (
                        <FaTimes size={22} />
                    ) : (
                        <FaBars size={22} />
                    )}
                </button>
            </div>

            {/* Mobile Menu */}
            <div
                className={`overflow-hidden transition-all duration-300 md:hidden ${
                    navbar
                        ? "max-h-[500px] border-t border-white/10"
                        : "max-h-0"
                }`}
            >
                <div className="space-y-6 bg-black/80 px-6 py-6 backdrop-blur-xl">
                    {navItems.map((item) => (
                        <NavLink
                            key={item.name}
                            to={item.link}
                            end={item.link === "/"}
                            onClick={() => setNavbar(false)}
                            className={({ isActive }) =>
                                `block text-base font-medium transition ${
                                    isActive
                                        ? "text-orange-500"
                                        : "text-gray-300 hover:text-white"
                                }`
                            }
                        >
                            {item.name}
                        </NavLink>
                    ))}

                    <Link
                        to="/contact"
                        onClick={() => setNavbar(false)}
                        className="block w-full rounded-full bg-orange-500 py-3 text-center font-semibold text-white transition hover:bg-orange-600"
                    >
                        Free Quote
                    </Link>
                </div>
            </div>
        </header>
    );
}