"use client"

import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";
import * as React from "react"

export default function SignInWithGoogle(){
    const [isLoading, setIsLoading] = React.useState<boolean>(false)

    const supabase = createClientComponentClient()
    const router = useRouter()
    const handelSignIn = async () => {
        await supabase.auth.signInWithOAuth({
            provider: 'google',
            options: {
                redirectTo: "http://localhost:3000/auth/v1/callback",
            },
        }); 
      }
      const handelSignOut = async () => {
        await supabase.auth.signOut();
        router.refresh();
      }
     return (
        <Button variant="outline" type="button" disabled={isLoading} onClick={handelSignIn}>
        {isLoading ? (
          <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
        ) : (
          <Icons.google className="mr-2 h-4 w-4" />
        )}{" "}
        Google
      </Button>
     )
}