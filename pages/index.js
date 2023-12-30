import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

import { index } from "../content.js";

export default function Index() {
  return (
    <>
      <Head>
        <title>{index.meta.title}</title>
        <meta name="title" content={index.meta.title} />
        <meta name="description" content={index.meta.description} />
        <meta property="og:image" content={index.meta.image} />
        <meta property="og:image:alt" content={index.meta.alt} />
        <meta property="og:title" content={index.meta.title} />
        <meta property="og:description" content={index.meta.description} />
        <meta property="og:site_name" content="Troy Serson" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={index.meta.url} />
      </Head>
      
      <div className="h-screen w-full relative">
        <Image className="absolute inset-0 bg-transparent h-full w-full object-cover object-center" src={index.section.image} alt={index.section.alt} priority />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 opacity-70" />
        
        <div className="absolute inset-10 -ml-1 md:pl-8 lg:pl-10">
          <div className="inset-0 md:w-3/4 mt-8 md:pt-10 justify-between">
            <h1 className="flex flex-col leading-tight font-bold text-transparent bg-clip-text text-white whitespace-break-spaces">
              <span className="lg:text-6xl text-5xl">{index.section.h1.span[0]}</span>
              <span className="mt-0.5 lg:text-4xl text-3xl">{index.section.h1.span[1]}</span>
            </h1>
            
            <h2 className="ml-1 pt-4 md:w-3/4 sm:w-1/2 text-white pb-8 leading-tight">
              <span className="text-xl font-semibold tracking-normal">{index.section.h2}</span>
            </h2>
            
            <div className="ml-1 md:pl-0 mt-6 md:mt-8 align-baseline gap-1 md:space-x-6 lg:space-x-8">
              <Link href={index.section.button.href} className="drop-shadow-lg">
                <button className="inline-flex text-invert text-base font-medium border-0 transition duration-300">
                  <span className="relative rounded-md px-5 py-2.5 transition-all ease-in bg-invert lg:hover:-translate-y-1 lg:hover:scale-110">
                    {index.section.button.span}
                  </span>
                </button>
              </Link>
            </div>
            
          </div>
        </div>
        
      </div>
    </>
  );
}