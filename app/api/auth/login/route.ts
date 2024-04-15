import { Database } from "@/lib/database.types"
import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs"
import { cookies } from "next/headers"
import { NextResponse } from "next/server"

export async function POST(request: Request){
    const requestUrl = new URL(request.url)
    const formData = await request.formData()
    const email = formData.get("email")
    const password = formData.get("password")
    const cookiesStore = cookies()
    const supabase = createRouteHandlerClient<Database>({cookies: () => cookiesStore})
    await supabase.auth.signInWithPassword({
        email: email as string,
        password: password as string
    })
    return NextResponse.redirect(requestUrl.origin, {
        status: 301,
    })
}