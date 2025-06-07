"use client"

import Link from 'next/link'
import React from 'react'
import { useSession } from 'next-auth/react'

const GetStarted = () => {
    const { data: session } = useSession();

    return (
        <div className="text-white max-w-5xl mx-auto flex flex-col items-center py-60 md:py-40">
            <h5 className="text-lg font-bold">
                Ideal for Seminars, Workshops, and More
            </h5>
            <h2 className="text-5xl md:text-6xl font-bold mt-4">
                Book The Seminar Hall Whenever Needed
            </h2>
            <p className="mt-6 text-lg">
                Memories and lessons from our seminars last long. The seminar
                hall is a place for learning and inspiration.
            </p>
            {!session && (
                <Link
                    href="/sign-up"
                    className="mt-8 bg-yellow-500 text-white py-3 px-10 hover:bg-yellow-600 transition duration-300 font-bold w-fit"
                    aria-label="Get Started"
                >
                    Get Started
                </Link>
            )}
        </div>
    )
}

export default GetStarted