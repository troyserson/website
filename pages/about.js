import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";

import { about } from "../content.js";

const Element = dynamic(() => import("react-scroll").then((mod) => mod.Element), { ssr: false });

export default function About() {
  return (
    <>
      <Head>
        <link rel="icon" href="images/favicon.ico" />

        <link rel="canonical" href={about.link} key="canonical" />
        <title>{about.title}</title>
        <meta name="title" content={about.title} />
        <meta name="description" content={about.description} key="desc" />
        <meta property="og:image" content={about.meta.image} />
        <meta property="og:image:alt" content={about.meta.alt} />
        <meta property="og:title" content={about.title} />
        <meta property="og:description" content={about.meta.description} />
        <meta property="og:site_name" content="Troy Serson" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={about.link} />
      </Head>

      <section className="bg-white">
        {about.section.map((props, index) => (
          <div className="mx-auto overflow-hidden flex items-center">
            <div className="relative">
              <div className="w-full">
                <Image className={`${index % 2 === 1 ? "md:w-1/2 md:order-1 float-right ml-10" : "md:w-1/2 md:order-2 float-left mr-10"} rounded-none sm:pb-0 pb-8 sm:mb-8 md:mb-2.5 lg:mb-0 py-2.5 md:py-0`} src={props.image} alt="Alt" priority={true} />
              </div>
              <div className="mx-10 pb-4 p-1.5 lg:p-4 whitespace-pre-line leading-relaxed">
                <h1 className="text-gray-800 dark:text-gray-800 sm:text-2xl text-xl font-semibold md:mt-8 mt-2">{props.h1}</h1>
                <p className="text-slate-500 dark:text-slate-500 sm:text-lg text-base mb:pb-0 pb-3">{props.div.p}{props.div.span[0]}<Link href={props.div.href} className={`href`}>{props.div.span[1]}</Link>{props.div.span[2]}</p>
              </div>
            </div>
          </div>
        ))}
      </section>
    </>
  );
}