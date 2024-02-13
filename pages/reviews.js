import Head from "next/head";

import { reviews } from "../content.js";

export function Star() {
  return (
    <svg className="w-5 h-5 stroke-0 stroke-yellow-300 hover:stroke-yellow-300/90 fill-yellow-300 hover:fill-yellow-300/90 hover:opacity-80 transition-opacity ease-in duration-300" viewBox="0 0 22 20" xmlns="http://www.w3.org/2000/svg">
      <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
    </svg>
  );
}

export function Rating() {
  return (
    <div className="flex flex-row mr-1 p-0.5 space-x-1">
      <Star /><Star /><Star /><Star /><Star />
    </div>
  );
}

export const Testimonial = ({ id, date, p }) => (
  <div className="flex flex-col items-center justify-evenly">
    <div className="min-h-full max-w-sm bg-white text-black text-sm rounded-xl shadow-md p-3.5 space-x-2 mb-0.5">
      <div className="flex flex-row justify-between text-sm text-black font-semibold leading-relaxed tracking-wide ml-2">{id}<Rating /></div>
      <div className="grid grid-flow-col text-xs text-slate-500 font-light leading-relaxed mb-1">{date}</div>
      <div className="text-gray-500 leading-relaxed mt-0.5">{p}</div>
    </div>
  </div>
);

export default function Reviews() {
  return (
    <>
      <Head>
        <link rel="canonical" href={reviews.link} key="canonical" />
        <title>{reviews.title}</title>
        <meta name="title" content={reviews.title} />
        <meta name="description" content={reviews.description} key="desc" />
        <meta property="og:image" content={reviews.meta.image} />
        <meta property="og:image:alt" content={reviews.meta.alt} />
        <meta property="og:title" content={reviews.title} />
        <meta property="og:description" content={reviews.meta.description} />
        <meta property="og:site_name" content="Troy Serson" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={reviews.link} />
      </Head>

      <div className="text bg text-center pt-12 pb-4">
        <h1 className="text-2xl font-semibold leading-normal tracking-wide mx-auto">{reviews.h1}</h1>
        <h2 className="text-base font-light leading-loose">{reviews.h2}</h2>
      </div>

      <div className="flex flex-wrap place-content-center gap-5 pl-4 pr-4 pt-6 pb-8">
        {reviews.div.map((props, reviews) => (
          <Testimonial key={reviews} {...props} />
        ))}
      </div>
    </>
  );
}