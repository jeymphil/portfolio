'use client'
import Image from "next/image";
import { Card } from "../ui/card";
import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Postcard({ heading, content, date, pin }:any) {
    const heroInfiniteRef = useRef(null);

    useEffect(() => {
        const tl = gsap.timeline({ defaults: { duration: 1 } });

        tl.to(
            heroInfiniteRef.current,
            {
                marginLeft: 0,
                marginRight: 0,
                opacity: 1,
                ease: "power1.out",
            },
            1.2
        );

        return () => {};
    }, []);

    return (
        <div className="mb-5">
            <Card
                ref={heroInfiniteRef}
                className="opacity-0 p-5 relative overflow-hidden"
            >
                <div className="absolute top-2 right-2 ">
                    {pin}
                </div>
            
                <div className="useritem flex items-center gap-2 rounded-[25px] p-1">
                    <div className="avatar rounded-full min-h-12 min-w-12 bg-red-500 flex items-center justify-center font-[700] text-white">
                        <Image
                            className="rounded-full h-[50px] w-[50px] object-cover object-top"
                            src="/engraciass.png"
                            width={100}
                            height={100}
                            alt="Picture of the author"
                        />
                    </div>
                    <div className="grow">
                        <p className="font-bold">Jay Mar Phill Engracia</p>
                        <p className="text-[12px] text-neutral-500 dark:text-neutral-400">
                            Frontend Developer & UI/UX Designer
                        </p>
                    </div>
                </div>

                {/* heading post */}
                <p className="pl-2 text-neutral-600 dark:text-neutral-300">
                    {heading}
                </p>
                <div className="p-3 text-neutral-600 dark:text-neutral-300 border rounded-md dark:border-zinc-800 min-h-[300px]">
                    {content}
                </div>

                <div className="mt-3 flex justify-end text-neutral-600">
                    {date}
                </div>
            </Card>
        </div>
    );
}
