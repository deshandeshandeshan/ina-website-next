"use client";

import Link from "next/link";
import Image from "next/image";
import "./Nav.css";
import { useState } from "react";
import "../app/globals.css";
import InaRufinoName from "@/images/InaRufinoName.png";

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="nav mobile-padding">
      <div className="nav-content">
        <ul className="nav-links-left type-body-bold">
          <li className="nav-link">
            <Link href="/">HOME</Link>
          </li>
          <li className="nav-link">
            <Link href="/work">WORK</Link>
          </li>
        </ul>

        <div className="nav-header">
          <Link href="/">
            <Image
              src={InaRufinoName}
              alt="Ina Rufino"
              className="nav-logo"
              priority
            />
          </Link>
        </div>

        <ul className="nav-links-right type-body-bold">
          <li className="nav-link">
            <Link href="/enquire">ENQUIRE</Link>
          </li>
          <li className="nav-link">
            <Link href="/about">ABOUT</Link>
          </li>
        </ul>

        <button
          className="menu-button type-body-bold"
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
