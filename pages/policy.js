import Head from "next/head";
import dynamic from "next/dynamic";

import { policy } from "../content.js";

const Element = dynamic(() => import("react-scroll").then((mod) => mod.Element), { ssr: false });

export default function Policy() {
  return (
    <>
      <Head>
        <link rel="canonical" href={policy.link} key="canonical" />
        <title>{policy.title}</title>
        <meta name="title" content={policy.title} />
        <meta name="description" content={policy.description} key="desc" />
        <meta property="og:image" content={policy.meta.image} />
        <meta property="og:image:alt" content={policy.meta.alt} />
        <meta property="og:title" content={policy.title} />
        <meta property="og:description" content={policy.meta.description} />
        <meta property="og:site_name" content="Troy Serson" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={policy.link} />
      </Head>

      <div className="bg min-h-screen flex flex-col whitespace-pre-line items-center justify-center my-8">
        <h1 className="text-util-1 text-center font-semibold leading-loose tracking-wide mt-2">{policy.h1}</h1>
        <p className="text text-center text-sm font-light leading-relaxed mt-2">{policy.p[0]}</p>
        
        <div className="mt-12 pb-4 sm:w-2/3 w-4/5">
          {policy.div.map((props, index) => (
            <Element id={index} key={index}>
              <h2 className="text-util-2 font-semibold mb-3 text-xl">{props.h2}</h2>
              <p className="text-util-3 mb-8 text-lg">{props.p}</p>
            </Element>
          ))}
        </div>
      </div>
    </>
  );
}