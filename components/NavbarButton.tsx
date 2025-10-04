"use client"
import React from "react"
import { AuroraText } from "@/components/ui/aurora-text"
export function NavButton() {
    return (
        <nav className="flex items-center sm:h-16 mb-8 md:mb-0 shadow-sm shadow-gray-100 nata text-md">
            <div className="text-2xl font-bold p-2 ml-1 sm:mx-5 sm:text-3xl">
                <AuroraText speed={2} >Ai Receptionist </AuroraText>
            </div>
        </nav>
    )
}
