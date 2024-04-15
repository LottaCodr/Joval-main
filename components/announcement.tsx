import Link from "next/link"
import { ArrowRightIcon } from "@radix-ui/react-icons"
import { Separator } from "./ui/separator"

export function Announcement() {
  return (
    <Link
      href="/docs/changelog"
      className="inline-flex items-center rounded-lg bg-muted px-3 py-1 text-sm font-medium"
    >
      ⚽️<Separator className="mx-2 h-4" orientation="vertical" />{" "}
      <span className="sm:hidden">Pay 7 a side Football.</span>
      <span className="hidden sm:inline">
      Football pitches are available to hire. We have pitches suitable for 5 a-side and 7 a-side
      </span>
      <ArrowRightIcon className="ml-1 h-4 w-4" />
    </Link>
  )
}