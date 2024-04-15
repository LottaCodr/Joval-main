import { cn } from "@/lib/utils";
import { SidebarNavItem } from "@/types/nav";

export interface DocsSidebarNavProps {
  items: SidebarNavItem[]
}

export default function Menu({ items }: DocsSidebarNavProps){
    return  items?.length ?(
      <main className="relative py-6 lg:gap-10 lg:py-8 xl:grid xl:grid-cols-[1fr_300px]">
      <div className="mx-auto w-full min-w-0">
        <div className="mb-4 flex items-center space-x-1 text-sm text-muted-foreground">
        </div>
        {items.map((item, index) => (
        <div key={index} className="space-y-2">
          <h1 className={cn("scroll-m-20 text-4xl font-bold tracking-tight")}>
            {item.title}
          </h1>
          
        </div>
        ))}
       
      </div>
      
    </main>
   
    ): null
}