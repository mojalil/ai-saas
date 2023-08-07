"use client";

import Image from "next/image";
import Link from "next/link";
import { Montserrat } from "next/font/google";
import { useAuth } from "@clerk/nextjs";
import { cn } from "@/lib/utils";

import { Button } from "./ui/button";

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
            AI SaaS
          </h1>
            </Link>

        </nav>
    );

};

export default LandingNavbar;