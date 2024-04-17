import Link from "next/link"
import { cn } from "@/lib/utils"
import {
  PageActions,
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from "@/components/page-header"
import { Announcement } from "@/components/announcement"
import { buttonVariants } from "@/components/ui/button"
import { ContextProvider } from "./contexts/ContextProvider"


export default function IndexPage() {
  return (
    <ContextProvider>
    <div className="container relative">
      <PageHeader>
        <Announcement />
        <PageHeaderHeading>Joval Investment Limited</PageHeaderHeading>
        <PageHeaderDescription>We offer 7 a side football pitch, based in Lifecamp Abuja with cafe that is fired up to settle any appetite after a match or if you just want to spectate with a good meal and drink.

        </PageHeaderDescription>
        <PageActions>
          <Link href="/auth/login" className={cn(buttonVariants())}>
            Get Started
          </Link>
          
        </PageActions>
      </PageHeader>
      
    </div>
    </ContextProvider>
  )
}