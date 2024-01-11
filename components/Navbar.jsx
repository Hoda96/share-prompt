"use client";

import Link from "next/link";
import Image from "next/image";
import { signIn, signOut, useSession, getProvider } from "next-auth/react";

function Navbar() {
  const isLoggedIn = true;
  return (
    <nav className="flex-between w-full mb-16 pt-3">
      <Link href={"/"} className="flex flex-center gap-2">
        <Image
          src={"/assets/images/logo.svg"}
          width={30}
          height={30}
          alt="Promptopia Logo"
          className="object-contain"
        />
        <p className="logo_text">Propmtopia</p>
      </Link>
      {/* Desktop Menu */}
      <div className="sm:flex hidden">
        {isLoggedIn ? (
          <div className="flex gap-3 md:gap-5">
            <Link href={"/create-prompt"} className="black_btn">
              Create Post
            </Link>
            <button type="button" className="outline_btn" onClick={signOut}>
              Sign Out
            </button>
            <Link href={"/Profile"}>
              <Image
                src={"/assets/images/logo.svg"}
                width={30}
                height={30}
                alt="Profile Avatar"
                className="object-contain"
              />
            </Link>
          </div>
        ) : (
          <></>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
