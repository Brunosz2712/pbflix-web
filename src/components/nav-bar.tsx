import Link from "next/link";

interface NavBarProps {
    active: "inicio" | "categorias" | "conta" | "cadastro";
}

export default function NavBar(props: NavBarProps) {
    const { active } = props;
    const activeClass = "border-b-4 border-primary text-red-600 pb-2";

    const links = [
        { text: "inicio", href: "/dashboard" },
        { text: "categorias", href: "/categories" },
        { text: "conta", href: "/account" },
    ];

    return (
        <nav className="flex justify-between items-center p-6">
            <h1 className="text-3xl font-bold text-red-600">PBFlix</h1>
            <ul className="flex gap-4">
                {links.map(link => (
                    <li key={link.text} className={active === link.text ? activeClass : ""}>
                        <Link href={link.href}>{link.text}</Link>
                    </li>
                ))}
            </ul>
            <img 
                className="size-12 rounded-full" 
                src="https://github.com/Brunosz2712.png" 
                alt="Bruno-IMG" 
            />
        </nav>
    );
}
