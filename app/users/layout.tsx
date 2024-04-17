import { docsConfig } from "@/config/docs";
import { DocsSidebarNav } from "@/components/sidebar-nav";
import Topnav from "./components/Topnav";
import Image from "next/image";
import Link from "next/link";

interface DocsLayoutProps {
  children: React.ReactNode;
}

export default function DocsLayout({ children }: DocsLayoutProps) {
  return (
    <div className=" ">
      {" "}
      {/* Side Bar */}
      <div className=" flex">
        <div
          className=" w-72  fixed top-0 border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
          style={{ zIndex: 1000 }}
        >
          <Link href="/users">
            <div className="ml-5 mt-10 flex   justify-start items-center gap-3">
              <Image
                src="/favicon.png"
                alt="logo"
                width={50}
                height={50}
                className="object-top"
              />

              <Image
                src="/jkc2.png"
                width={100}
                height={100}
                alt="logo"
                className="   "
              />
            </div>
          </Link>
          <DocsSidebarNav items={docsConfig.sideNav} />

          {/* Hamburger Menu */}
          <Image
            src="menu.svg"
            alt="menu"
            width={32}
            height={32}
            className=" cursor-pointer lg:hidden"
          />
        </div>
        <div className="   ">
          {" "}
          <Topnav />
        </div>
        <main className=" ml-[305px]  mt-28">{children}</main>
      </div>
    </div>
  );
}

// container flex flex-wrap
//className="container flex items-start md:grid md:grid-cols-[220px_minmax(0,1fr)] md:gap-4 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-2"
//fixed top-14 z-30 -ml-2 hidden h-[calc(100vh-3.5rem)] w-full shrink-0 md:sticky md:block FROM THE <ASIDE>
