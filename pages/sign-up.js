import Head from "next/head"
import Script from "next/script";
import dynamic from "next/dynamic";

import { signUp } from "../content.js";

const InlineWidget = dynamic(() => import("react-calendly").then((mod) => mod.InlineWidget), { ssr: false });

export default function SignUp() {
  const linkedData = {
    "@context": "https://schema.org",
    "@type": "Course",
    "name": "Guitar, Bass, and Ukulele Lessons Online",
    "description": "Try 1 on 1 guitar, bass, or ukulele lessons risk free...",
    "provider": {
      "@type": "Organization",
      "name": "Troy Serson",
      "sameAs": "https://www.troyserson.com/"
    },
    "hasCourseInstance": [
      {
        "@type": "CourseInstance",
        "name": "Complimentary Trial Lesson",
        "description": "Schedule your 1 on 1 complimentary trial lesson with Troy to explore the basics or any topic on your instrument",
        // "provider": {
        //   "@type": "Organization",
        //   "name": "Troy Serson",
        //   "sameAs": "https://www.troyserson.com/sign-up"
        // },
        "courseMode": "online",
        "courseSchedule": {
          "@type": "Schedule",
          "repeatFrequency": "Weekly",
          "repeatCount": 12
        }
      }
    ],
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD",
      "url": "https://www.troyserson.com/sign-up",
      "validFrom": "2024-01-01",
      "validThrough": "2024-12-31",
      "category": "Music Course"
    }
  };

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
        
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(linkedData) }} />
        <Script src={signUp.url} strategy="lazyOnload" />
      </Head>

      <div className="bg-white min-h-screen px-6 py-6 justify-center items-center z-0">
        <InlineWidget url={signUp.url} />
      </div>
    </>
  );
}