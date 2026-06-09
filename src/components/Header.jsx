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
        <header className="sticky top-0 z-50 border-b border-white/5 bg-black/80 backdrop-blur-2xl">
            <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 lg:px-8">
                {/* Logo */}
                <Link
                    to="/"
                    className="group flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.03] px-3 py-2 backdrop-blur transition hover:border-orange-500/30"
                >
                    <div className="relative">
                        <img
                            src="/logga.png"
                            alt="JLK Power AB"
                            className="h-14 md:h-16 lg:h-20 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                        />

                        <div className="absolute inset-0 -z-10 rounded-full bg-orange-500/20 blur-2xl" />
                    </div>

                    {/* Only show text on desktop */}
                    <div className="hidden xl:block">
                        <h1 className="text-xl font-bold text-white">
                            Reparationer
                            <span className="text-orange-500"> & </span>
                            Service
                        </h1>

                        <p className="text-xs uppercase tracking-[0.25em] text-gray-400">
                            Bilverkstad • Rekond • Service
                        </p>
                    </div>
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden items-center gap-4 xl:gap-6 md:flex">                    {navItems.map((item) => (
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
                                            isActive ? "w-full" : "w-0"
                                        }`}
                                    />
                                </div>
                            )}
                        </NavLink>
                    ))}

                    {/* CTA */}
                    <Link
                        to="/contact"
                        className="hidden md:flex items-center rounded-full bg-orange-500 px-4 lg:px-6 py-2.5 lg:py-3 text-sm font-semibold text-white transition-all duration-300 hover:scale-105 hover:bg-orange-600"
                    >
                        Begär Offert
                    </Link>
                </nav>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setNavbar(!navbar)}
                    className="text-white md:hidden"
                >
                    {navbar ? (
                        <FaTimes size={24} />
                    ) : (
                        <FaBars size={24} />
                    )}
                </button>
            </div>

            {/* Mobile / Tablet Menu */}
            <div
                className={`overflow-hidden transition-all duration-300 lg:hidden ${
                    navbar
                        ? "max-h-[600px] border-t border-white/10"
                        : "max-h-0"
                }`}
            >
                <div className="space-y-5 bg-black/90 px-6 py-6 backdrop-blur-2xl">
                    {navItems.map((item) => (
                        <NavLink
                            key={item.name}
                            to={item.link}
                            end={item.link === "/"}
                            onClick={() => setNavbar(false)}
                            className={({ isActive }) =>
                                `block rounded-xl px-4 py-3 text-base font-medium transition ${
                                    isActive
                                        ? "bg-orange-500/10 text-orange-500"
                                        : "text-gray-300 hover:bg-white/5 hover:text-white"
                                }`
                            }
                        >
                            {item.name}
                        </NavLink>
                    ))}

                    <Link
                        to="/contact"
                        className="hidden md:flex items-center rounded-full bg-orange-500 px-4 lg:px-6 py-2.5 lg:py-3 text-sm font-semibold text-white transition-all duration-300 hover:scale-105 hover:bg-orange-600"
                    >
                        Begär Offert
                    </Link>
                </div>
            </div>
        </header>
    );
}