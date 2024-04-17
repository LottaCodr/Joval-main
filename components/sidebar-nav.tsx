"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { SidebarNavItem } from "@/types/nav";

import { cn } from "@/lib/utils";

export interface DocsSidebarNavProps {
  items: SidebarNavItem[];
}

export function DocsSidebarNav({ items }: DocsSidebarNavProps) {
  const pathname = usePathname();

  const activeMenu = true;

  return items.length ? (
    <div className="overflow-y-auto mt-10 ml-5 h-screen overflow-auto md:overflow-hidden md:hover:overflow-auto pb-10">

      
      {items.map((item, index) => (
        <div
          key={index}
          className={cn("pb-4 gap-3 ")}
        >
          <p className="m-3 mt-4 uppercase font-bold text-gray-500   ">{item.title}</p>

          {item?.items?.length && (
            <p className="">
              <DocsSidebarNavItems items={item.items} pathname={pathname} />{" "}
            </p>
          )}
        </div>
      ))}
    </div>
  ) : null;
}

interface DocsSidebarNavItemsProps {
  items: SidebarNavItem[];
  pathname: string | null;
}

export function DocsSidebarNavItems({
  items,
  pathname,
}: DocsSidebarNavItemsProps) {
  return items?.length ? (
    <div className="grid justify-start items-start h-full sticky grid-flow-row auto-rows-max text-sm">
      
      {items.map((item, index) =>
        item.href && !item.disabled ? (
          <Link
            key={index}
            href={item.href}
            className={cn(
              "group flex w-screen items-end rounded border border-transparent px-2 py-1 ",
              item.disabled && "cursor-not-allowed opacity-60",
              pathname === item.href
                ? "dark:bg-red-800 bg-red-500 hover:text-white   text-white dark:hover:bg-red-800 hover:bg-red-800 "
                : " hover:text-white text-xl hover:bg-red-800 "
            )}
            target={item.external ? "_blank" : ""}
            rel={item.external ? "noreferrer" : ""}
          >
            {/* {item.title} */}
            {item.title && (
              <span className=" bg-transparent w-screen h-full rounded-md  px-1.5 py-0.5 text-lg hover:scale-100 transition duration-300 ease-in-out text-white  text-muted-foreground no-underline group-hover:no-underline">
                {item.title}
              </span>
            )}
          </Link>
        ) : (
          <span
            key={index}
            className={cn(
              "flex  cursor-not-allowed items-center rounded-md p-2 text-muted-foreground hover:underline",
              item.disabled && "cursor-not-allowed opacity-60"
            )}
          >
            {item.title}
            {item.label && (
              <span className="ml-2 rounded-md bg-muted px-1.5 py-0.5 text-xs leading-none text-muted-foreground no-underline group-hover:no-underline">
                {item.label}
              </span>
            )}
          </span>
        )
      )}
    </div>
  ) : null;
}
