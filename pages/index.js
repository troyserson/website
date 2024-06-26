import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

import { index } from "../content.js";

export default function Index() {
  const linkedData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Troy Serson",
    "url": "https://www.troyserson.com/",
    "logo": "https://www.troyserson.com/logo.svg",
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "Email",
      "url": "https://www.troyserson.com/contact"
    },
    "sameAs": [
      "https://www.facebook.com/troythemusicteacher/",
      "https://www.instagram.com/troyserson",
      "https://www.tiktok.com/@troyserson"
    ]
  };

  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.svg" />

        <meta name="google-site-verification" content="4xylgkMlLoZMaQb9PuUhhXaqq6dwcIvY20Gs1wExg_s" />

        <link rel="canonical" href={index.link} key="canonical" />
        <title>{index.title}</title>

        <meta name="title" content={index.title} />
        <meta name="description" content={index.description} key="desc" />
        
        <meta property="og:image" content={index.meta.image} />
        <meta property="og:image:alt" content={index.meta.alt} />
        <meta property="og:title" content={index.title} />
        <meta property="og:description" content={index.meta.description} />
        <meta property="og:site_name" content="Troy Serson" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={index.link} />

        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(linkedData) }} />
      </Head>
      
      <div className="h-screen w-full relative overflow-hidden">
        <Image className="absolute inset-0 bg-transparent h-full w-full object-cover object-center" src={index.image} alt={index.alt} priority={true} />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/60 opacity-70" />
        
        <div className="absolute inset-10 sm:pl-6 md:pl-8 lg:pl-10">
          <div className="inset-0 sm:mt-6 md:mt-6 lg:mt-8 justify-between">
            <h1 className="flex flex-col leading-tight text-transparent bg-clip-text whitespace-break-spaces">
              <span className="text-slate-50 font-bold lg:text-6xl text-5xl pb-1">{index.h1.span[0]}</span>
              <span className="text-gray-100 font-semibold mt-1 lg:text-4xl text-3xl">{index.h1.span[1]}</span>
            </h1>
            
            <h2 className="ml-1 lg:pt-6 pt-4 lg:w-screen md:w-2/4 w-4/5 pb-8">
              <span className="text-xl font-medium leading-snug tracking-normal text-white font-rubik">{index.h2}</span>
            </h2>

            <div className="ml-1 md:pl-0 mt-6 md:mt-8 align-baseline gap-1 md:space-x-6 lg:space-x-8">
              <Link href={index.button.href} className="drop-shadow-lg">
                <button className="inline-flex text-slate-50 sm:text-lg text-base font-medium border-0 transition duration-300">
                  <span className="relative rounded-md px-5 py-2.5 transition-all ease-in bg-zinc-900 lg:hover:-translate-y-1 lg:hover:scale-110">
                    {index.button.span}
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