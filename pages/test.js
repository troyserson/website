import Link from "next/link";
import Image from "next/image";

import { index } from "../content.js";

export default function Test() {
  return (
    <>

      <div className="h-screen w-full relative overflow-hidden">
        <Image
          className="absolute inset-0 h-full w-full object-cover object-center"
          src={index.image}
          alt={index.alt}
          priority={true}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/60 opacity-70" />

        <div className="absolute inset-0 flex flex-col justify-center items-center">
          <h1 className="text-center text-transparent bg-clip-text whitespace-break-spaces">
            <span className="text-slate-50 font-bold lg:text-6xl text-5xl pb-1">
              {index.h1.span[0]}
            </span>
            <span className="text-gray-100 font-semibold mt-1 lg:text-4xl text-3xl">
              {index.h1.span[1]}
            </span>
          </h1>

          <h2 className="text-center mt-4 lg:w-2/4 w-4/5 pb-8">
            <span className="text-xl font-medium leading-snug tracking-normal text-white font-rubik">
              {index.h2}
            </span>
          </h2>

          <div className="mt-6 md:mt-8 space-y-4">
            <Link href={index.button.href}>

            </Link>
          </div>
        </div>
      </div>

    </>
  );
}