import Head from "next/head"
import Script from "next/script";
import dynamic from "next/dynamic";

import { signUp } from "../content.js";

const InlineWidget = dynamic(() => import("react-calendly").then((mod) => mod.InlineWidget), { ssr: false });

export default function SignUp() {
  return (
    <>
      <Head>
        <link rel="canonical" href={signUp.link} key="canonical" />
        <title>{signUp.title}</title>
        <meta name="title" content={signUp.title} />
        <meta name="description" content={signUp.description} key="desc" />
        <meta property="og:image" content={signUp.meta.image} />
        <meta property="og:image:alt" content={signUp.meta.alt} />
        <meta property="og:title" content={signUp.title} />
        <meta property="og:description" content={signUp.meta.description} />
        <meta property="og:site_name" content="Troy Serson" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={signUp.link} />
        
        <Script src={signUp.url} strategy="lazyOnload" />
      </Head>

      <div className="bg-white min-h-screen px-6 py-6 justify-center items-center z-0">
        <InlineWidget url={signUp.url} />
      </div>
    </>
  );
}