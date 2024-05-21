"use client";
import { forwardRef } from "react";
import {
    FiBell,
    FiCalendar,
    FiChevronRight,
    FiMenu,
    FiPlus,
    FiSearch,
    FiUser,
} from "react-icons/fi";

const modules = [
    {
        title: "Menu",
        path: "/",
        icon: <FiMenu />,
    },
    {
        title: "Calendário",
        path: "/scheduler",
        icon: <FiCalendar />,
    },
    {
        title: "Adicionar",
        path: "/",
        icon: <FiPlus />,
    },
    {
        title: "Pesquisar",
        path: "/",
        icon: <FiSearch />,
    },
    {
        title: "Usuário",
        path: "/user",
        icon: <FiUser />,
    },
];

const Header = forwardRef((props, ref) => {
    return (
        <header className="w-full h-16 flex items-center">
            <nav className="hidden lg:flex">
                <ol className="flex items-center">
                    <li>App</li> <FiChevronRight />
                    <li>Scheduler</li>
                </ol>
            </nav>
            <div className="relative ml-auto sm:mx-auto">
                <div className="relative mt-1 hidden sm:block">
                    <input
                        placeholder="Pesquisa rápida... (Ctrl+k)"
                        className="w-80 rounded-full pl-3 pr-8 shadow transition"
                    />
                    <FiSearch className="absolute top-0 bottom-0 right-0 mt-auto mb-auto mr-3 h-5 w-5" />
                </div>
                <a className="sm:hidden relative">
                    <FiSearch />
                </a>
            </div>
            <div className="mr-5 sm:mr-6">
                <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
                </span>
                <FiBell />
            </div>
            <div>
                <FiUser />
            </div>
        </header>
    );
});

Header.displayName = "Header";

export { Header };
