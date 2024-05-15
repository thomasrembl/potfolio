"use client";
import Image from "next/image";

import Button from "./button";
import { ArrowUpRight } from "lucide-react";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { Link } from "@/../navigation";
import LangueSwitcher from "../app/_components/langueSwitcher";

const Header = () => {
  // Exécutez l'effet chaque fois que l'URL de la page change

  return (
    <>
      <header className=" big-header">
        <div className="left-content">
          <Image src="/logo-creux.png" alt="logo" width={40} height={68} />
          <nav>
            <Link href="https://www.behance.net/thomasremblier" target="_blank">
              <Image src="/behance.svg" alt="behance" width={24} height={24} />
            </Link>
            <Link href="https://twitter.com/Kc_Thomaaas" target="_blank">
              <Image src="/twitter.svg" alt="twitter" width={24} height={24} />
            </Link>
            <Link
              href="https://www.linkedin.com/in/thomas-remblier-a9805a220/"
              target="_blank"
            >
              <Image
                src="/linkedin.svg"
                alt="linkedin"
                width={24}
                height={24}
              />
            </Link>
            <Link href="https://github.com/thomasrembl" target="_blank">
              <Image src="/github.svg" alt="github" width={24} height={24} />
            </Link>
            <Link
              href="https://www.instagram.com/remblier.psd/"
              target="_blank"
            >
              <Image
                src="/instagram.svg"
                alt="instagram"
                width={24}
                height={24}
              />
            </Link>
          </nav>
        </div>
      </header>
      <div className="right-header">
        <LangueSwitcher />
        <Link href="/about">
          <Button
            text="info"
            icon={<ArrowUpRight />}
            iconPosition="right"
            type="ghost"
          />
        </Link>
      </div>

      <header className="mobile-header">
        <Image src="/logo-lt.png" alt="logo" width={34} height={58} />
        <div className="mobile-right">
          <LangueSwitcher />
          <Link href="/about">
            <Button
              text="info"
              icon={<ArrowUpRight />}
              iconPosition="right"
              type="ghost"
            />
          </Link>
        </div>
      </header>
    </>
  );
};

export default Header;
