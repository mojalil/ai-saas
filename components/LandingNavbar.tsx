"use client";

import Image from "next/image";
import Link from "next/link";
import { Montserrat } from "next/font/google";
import { useAuth } from "@clerk/nextjs";
import { cn } from "@/lib/utils";

import { Button } from "./ui/button";
import { APP_NAME } from "@/constants";

const montserrat = Montserrat({
    weight: "600",
    subsets: ["latin"],
  });

const LandingNavbar = () => {
    const {isSignedIn} = useAuth();
    return(

        <nav className="p-4 bg-transparent flex items-center justify-between">
            <Link
            href="/"
            className="flex items-center"
            >
                <div className="relative h-8 w-8 mr-4">
                <Image
                fill
                alt="Logo"
                src="/ai-saas-logo-5.png"
                ></Image>
                </div>

                <h1 className={cn("text-2xl font-bold text-white", montserrat.className)}>
            {APP_NAME}
          </h1>
            </Link>
            <div>
                <Link href={isSignedIn ? "/dashboard" : "/sign-up"}>
                    <Button variant="outline" className=" rounded-full">
                        Get Started
                    </Button>
                </Link>

            </div>
        </nav>
    );

};

export default LandingNavbar;