import Link from "next/link";
import { UserAuthForm } from "./components/user-auth-form";
import Image from "next/image";
import Logo from '@/components/logo/joval.png'
import Logo_dark from '@/components/logo/joval_dark.png';



export default function AuthenticationPage(){
    return(
        <>

      <div>
        <div className="lg:p-8">
          <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
            <div className="flex flex-col space-y-2 text-center">
            <center>
            <Image
              src={Logo}
              width={80}
              height={843}
              alt="Logo"
              quality={100}
              className="block dark:hidden"

            />
              <Image
                src={Logo_dark}
                width={80}
                height={843}
                alt="Logo"
                quality={100}
                className="hidden dark:block"
              />
              </center>
              <h1 className="text-2xl font-semibold tracking-tight">
                Welcome to Joval
              </h1>
              <p className="text-sm text-muted-foreground">
                Enter your email below to signIn your account
              </p>
            </div>
            <UserAuthForm/>
            <p className="px-8 text-center text-sm text-muted-foreground">
              By clicking continue, you agree to Joval's{" "}
              <Link
                href="/terms"
                className="underline underline-offset-4 hover:text-primary"
              >
                Terms of Service
              </Link>{" "}
              and{" "}
              <Link
                href="/privacy"
                className="underline underline-offset-4 hover:text-primary"
              >
                Privacy Policy
              </Link>
              .
            </p>
          </div>
        </div>
        </div>
    </>
    )
}