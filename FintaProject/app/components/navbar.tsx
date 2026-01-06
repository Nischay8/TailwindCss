import Image from "next/image";
import Link from "next/link";
const navLinks = [
  { href: "/guide", title: "Guide" },
  { href: "/pricing", title: "Pricing" },
  { href: "/login", title: "Login" },
];

export const Navbar = () => {
  return (
    <div className="flex items-center justify-between">
      <Link href="/">
        <Image src="/logo.svg" height={50} width={50} alt="logo" />
      </Link>
      <div className="flex items-center gap-8">
        {navLinks.map((link, index) => (
          <Link
            href={link.href}
            key={index}
            className="text-neutral-800 font-medium hover:text-neutral-500 transition duration-200"
          >
            {link.title}
          </Link>
        ))}

        <button className="bg-[#2579f4] px-4 py-2 rounded-lg text-white text-shadow-lg tracking-wide">Start Free trail</button>
      </div>
    </div>
  );
};
