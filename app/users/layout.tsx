import { docsConfig } from "@/config/docs";
import { DocsSidebarNav } from "@/components/sidebar-nav";
import Topnav from "./components/Topnav";
import Image from "next/image";


interface DocsLayoutProps {
  children: React.ReactNode;
}

export default function DocsLayout({ children }: DocsLayoutProps) {
  return (
    // <div className="border-b container flex items-start md:grid md:grid-cols-[220px_minmax(0,1fr)] md:gap-4 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-2  ">
    <div className=" ">
      {" "}
     <Topnav />
      <div className="  ">
      <main className=" flex justify-center sticky">
        <div className="   mb-10 sticky  pl-10 pt-10 h-full w-[300px] border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
         <aside> <DocsSidebarNav items={docsConfig.sideNav} /> 
          {/* Hamburger Menu */}
        <Image
          src="menu.svg"
          alt="menu"
          width={32}
          height={32}
          className=" cursor-pointer lg:hidden"
        /></aside>
        </div>
        {children}</main>
      </div>
    </div>
  );
}

// container flex flex-wrap
//className="container flex items-start md:grid md:grid-cols-[220px_minmax(0,1fr)] md:gap-4 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-2"
//fixed top-14 z-30 -ml-2 hidden h-[calc(100vh-3.5rem)] w-full shrink-0 md:sticky md:block FROM THE <ASIDE>
