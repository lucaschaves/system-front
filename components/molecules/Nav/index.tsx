"use client";
import { forwardRef } from "react";
import { FiCalendar, FiMenu, FiPlus, FiSearch, FiUser } from "react-icons/fi";

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

const Nav = forwardRef((props, ref) => {
    return <nav className="">items</nav>;
});

Nav.displayName = "Nav";

export { Nav };
