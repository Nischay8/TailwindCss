import React from "react";

export const Navbar = () => {
  const links = [
    {
      title: "Guide",
      href: "#",
    },
      {
      title: "Price",
      href: "#",
    },
      {
      title: "login",
      href: "#",
    },
  ];

  return (
    <div className="navbar-root">
      <div className="logo">Finta</div>
      <div className="links">
        {links.map((link,idx)=> <a className="link-items" href={link.href} key={idx}>{link.title}</a>)}
        <button className="btn">Start Free Trial</button>
      </div>
    </div>
  );
};
