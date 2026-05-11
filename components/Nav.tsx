"use client";

import Link from "next/link";
import "./Nav.css";
import { useState } from "react";
import "./Nav.css";
import "../app/globals.css";

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="nav mobile-padding">
      <div className="nav-content">
        <div className="nav-header">
          <h1 className="nav-title type-body-bold">INA RUFINO</h1>
        </div>
        <div className="nav-links-container">
          <ul className="nav-links type-body">
            <li className="nav-link">
              <Link href="/">HOME,</Link>
            </li>
            <li className="nav-link">
              <Link href="/work">WORK</Link>
            </li>
            <li className="nav-link">
              <Link href="/enquire">ENQUIRE</Link>
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
              <Link href="/work" onClick={() => setMenuOpen(false)}>
                WORK
              </Link>
            </li>
            <li>
              <Link href="/enquire" onClick={() => setMenuOpen(false)}>
                ENQUIRE
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
