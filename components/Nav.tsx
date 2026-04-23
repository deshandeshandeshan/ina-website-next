"use client";

import Link from "next/link";
import "./Nav.css";
import { useState } from "react";
import "./Nav.css";
import "../app/globals.css";

type NavProps = {
  navSubheading?: string | null;
};

export default function Nav({ navSubheading }: NavProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="nav mobile-padding">
      <div className="nav-content">
        <div className="nav-header">
          <h1 className="nav-title type-body-bold">ZISHUN STUDIOS</h1>
          <p className="nav-sub-heading type-body">
            {navSubheading ??
              "BY MIGRANT MULTIDISCIPLINARY ARTIST ZED XU 榛子瞬"}
          </p>
        </div>
        <div className="nav-links-container">
          <h2 className="nav-links-heading type-body-bold">NAVIGATION</h2>
          <ul className="nav-links type-body">
            <li className="nav-link">
              <Link href="/">HOME,</Link>
            </li>
            <li className="nav-link">
              <Link href="/film">FILM,</Link>
            </li>
            <li className="nav-link">
              <Link href="/paintings">PAINTING,</Link>
            </li>
            <li className="nav-link">
              <Link href="/performance">PERFORMANCE,</Link>
            </li>
            <li className="nav-link">
              <Link href="/about">ABOUT</Link>
            </li>
          </ul>
        </div>
        <button
          className="menu-button type-body-bold text-blend"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "Close" : "Menu"}
        </button>
      </div>

      {menuOpen && (
        <div className="nav-overlay">
          <ul className="nav-overlay-links type-heading">
            <li>
              <Link href="/" onClick={() => setMenuOpen(false)}>
                HOME
              </Link>
            </li>
            <li>
              <Link href="/film" onClick={() => setMenuOpen(false)}>
                FILM
              </Link>
            </li>
            <li>
              <Link href="/paintings" onClick={() => setMenuOpen(false)}>
                PAINTING
              </Link>
            </li>
            <li>
              <Link href="/performance" onClick={() => setMenuOpen(false)}>
                PERFORMANCE
              </Link>
            </li>
            <li>
              <Link href="/about" onClick={() => setMenuOpen(false)}>
                ABOUT
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
