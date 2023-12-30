import Head from "next/head";
import { calendar } from "../content.js";

export default function Calendar() {  
  return (
    <>
      <Head>
        <title>{calendar.meta.title}</title>
        <meta name="title" content={calendar.meta.title} />
        <meta name="description" content={calendar.meta.description} key="desc" />
        <meta property="og:image" content={calendar.meta.image} />
        <meta property="og:image:alt" content={calendar.meta.alt} />
        <meta property="og:title" content={calendar.meta.title} />
        <meta property="og:description" content={calendar.meta.description} />
        <meta property="og:site_name" content="Troy Serson" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={calendar.meta.url} />
      </Head>

      <div className="flex flex-col bg-white text min-h-screen p-10 bg">
        <h1 className="sm:text-center sm:justify-center sm:ml-0.5 ml-5 text-util-1 font-bold leading-relaxed tracking-wide my-5 pb-1.5">{calendar.h1}</h1>
        <div className="flex sm:items-center sm:justify-center sm:pt-1.5">
          <div className="sm:-ml-1 ml-5 sm:mb-2">
            {calendar.div.map((props, index) => (
              <div key={index} className="mb-2 whitespace-nowrap py-2">
                <div className="text-util-2 font-bold leading-loose tracking-wide">{props.date}</div>
                <div className="text-util-3">{props.description}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}