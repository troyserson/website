// import Head from "next/head";
// import Link from "next/link";
// import Image from "next/image";
// import dynamic from "next/dynamic";

// import { about } from "../content.js";

// const Element = dynamic(() => import("react-scroll").then((mod) => mod.Element), { ssr: false });

// export function Img({ src, alt }) {
//   return (
//     <div style={{ display: 'flex', flexDirection: 'column' }}>
//       <Image src={src} alt={alt} style={{ width: '100%', height: 'auto' }} sizes="100vw" priority={true} />
//     </div>
//   );
// }
// export function Href({ span, href }) {
//   return (
//     <>{span[0]}<Link href={href} className={`href`}>{span[1]}</Link>{span[2]}</>
//   );
// }

// export default function About() {
//   return (
//     <>
//       <Head>
//         <link rel="canonical" href={about.link} key="canonical" />
//         <title>{about.title}</title>
//         <meta name="title" content={about.title} />
//         <meta name="description" content={about.description} key="desc" />
//         <meta property="og:image" content={about.meta.image} />
//         <meta property="og:image:alt" content={about.meta.alt} />
//         <meta property="og:title" content={about.title} />
//         <meta property="og:description" content={about.meta.description} />
//         <meta property="og:site_name" content="Troy Serson" />
//         <meta property="og:type" content="website" />
//         <meta property="og:url" content={about.link} />
//       </Head>

//       <section className="flex flex-col bg-white">
//         {about.section.map((props, index) => (
//           <Element key={index} id={index} className={`flex flex-col items-center w-full bg-white ${index % 2 != 1 ? `md:flex-row-reverse` : `md:flex-row`}`}>
            
//             <div className={`object-cover w-full ${index % 2 === 1 ? "md:w-1/2 md:order-2" : "md:w-1/2 md:order-1"}`}>
//               <Img src={props.image} alt={props.alt} />
//             </div>

//             <div className={`flex flex-col whitespace-pre-line md:w-1/2 p-8 lg:pt-12`}>
//               <div className="mx-1.5">
//                 <h1 className="text-black tracking-wide text-xl font-semibold bg-transparent lg:hover:bg-transparent lg:hover:opacity-80 transition-opacity duration-300">{props.h1}</h1>
//                 <h2 className="block text-zinc-900 text-xl leading-tight font-medium mt-1.5">{props.h2}</h2>
//                 <p className="text-slate-500 text-lg mb-2.5">{props.div.p}<Href span={props.div.span} href={props.div.href} /></p>
//               </div>
//             </div>
          
//           </Element>
//         ))}
//       </section>
//     </>
//   );
// }


/**
@note
<div className="max-w-3xl mx-auto overflow-hidden flex items-center w-full">
  <div className="relative">
    <div className="mb-4">
      <Image className="float-right sm:w-96 h-144 sm:h-96 sm:rounded-xl rounded-none m-0 sm:m-8 mb-4 md:mb-0" src={image} alt="Alt" priority={true} />
    </div>
    <div className="m-4">
      <p className="text-util-2 pt-7">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec magna tempor, maximus augue ac, vestibulum elit. Nulla est purus, ullamcorper nec massa nec, imperdiet elementum nisi. Pellentesque et maximus neque. Quisque vestibulum nisl at dignissim ullamcorper. Etiam vulputate mollis tempor. Morbi consequat eget purus ac ultricies. Donec porta est quam, nec elementum erat dapibus id. Suspendisse vel felis nec purus pulvinar pretium quis sit amet elit. Nulla eleifend dapibus dictum. Cras euismod elit orci, vitae vehicula augue feugiat tincidunt. Nulla nec augue rhoncus, lacinia orci ut, accumsan mi. Etiam lorem odio, auctor sodales velit lobortis, tincidunt vehicula tellus.</p>
    </div>
  </div>
</div>
@note
<div className="space-y-2 mx-auto overflow-hidden flex items-center w-full">
  <div className="relative">
    <div className="mb-4">
      <Image className="float-right sm:w-96 h-144 sm:h-96 sm:rounded-xl rounded-none m-0 sm:m-8 mb-2 md:mb-4 lg:mb-6" src={image} alt="Alt" priority={true} />
    </div>
    <div className="m-4">
      <p className="text-util-2 pt-7">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec magna tempor, maximus augue ac, vestibulum elit. Nulla est purus, ullamcorper nec massa nec, imperdiet elementum nisi. Pellentesque et maximus neque. Quisque vestibulum nisl at dignissim ullamcorper. Etiam vulputate mollis tempor. Morbi consequat eget purus ac ultricies. Donec porta est quam, nec elementum erat dapibus id. Suspendisse vel felis nec purus pulvinar pretium quis sit amet elit. Nulla eleifend dapibus dictum. Cras euismod elit orci, vitae vehicula augue feugiat tincidunt. Nulla nec augue rhoncus, lacinia orci ut, accumsan mi. Etiam lorem odio, auctor sodales velit lobortis, tincidunt vehicula tellus.</p>
    </div>
  </div>
</div>

<div className="space-y-2 mx-auto overflow-hidden flex items-center w-full">
  <div className="relative">
    <div className="mb-4">
      <Image className="float-right sm:w-96 h-144 sm:h-96 sm:rounded-xl rounded-none m-0 sm:m-8 mb-2 md:mb-4 lg:mb-6" src={image} alt="Alt" priority={true} />
    </div>
    <div className="m-4">
      <p className="text-util-2 pt-7">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec magna tempor, maximus augue ac, vestibulum elit. Nulla est purus, ullamcorper nec massa nec, imperdiet elementum nisi. Pellentesque et maximus neque. Quisque vestibulum nisl at dignissim ullamcorper. Etiam vulputate mollis tempor. Morbi consequat eget purus ac ultricies. Donec porta est quam, nec elementum erat dapibus id. Suspendisse vel felis nec purus pulvinar pretium quis sit amet elit. Nulla eleifend dapibus dictum. Cras euismod elit orci, vitae vehicula augue feugiat tincidunt. Nulla nec augue rhoncus, lacinia orci ut, accumsan mi. Etiam lorem odio, auctor sodales velit lobortis, tincidunt vehicula tellus.</p>
    </div>
  </div>
</div>

*/


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

      {about.section.map((props, index) => (
        <Element className="grid grid-flow-col" key={index} id={index}>
          <div className="flex items-center w-full bg">
            
            <div className={`md:flex items-center md:items-start
                ${index % 2 === 0 ? `md:flex-row-reverse sm:mr-0 md:mr-8` : `md:flex-row sm:ml-0 md:ml-8`} 
                ${index = 2 ? `lg:mb-10 md:mb-0 sm:mb-0` : `mb-0`}
                ${index = 1 ? `lg:mt-0 md:mt-6 sm:mt-0` : `mb-0`}
              `}
            >
              <div className="md:shrink-0 md:w-1/2">
                <Image className="sm:mt-0 md:mt-8 sm:rounded-none md:rounded-xl" src={props.image} alt={props.alt} style={{ width: '100%', height: 'auto' }} sizes="100vw" priority={true} />
              </div>
              
              <div className={`md:w-1/2 p-8 mx-1.5 ${index % 2 === 0 ? 'md:mt-6 sm:mt-1.5' : 'md:mt-3 sm:mt-1.5'} mb-3 whitespace-pre-line`}>
                <h1 className="text-gray-800 dark:text-slate-50 sm:text-2xl text-xl font-semibold lg:mt-6 md:mt-3 sm:mt-0">{props.h1}</h1>
                <p className="text-slate-500 dark:text-gray-400 sm:text-lg text-base">{props.div.p}{props.div.span[0]}<Link href={props.div.href} className={`href`}>{props.div.span[1]}</Link>{props.div.span[2]}</p>
              </div>
            </div>

          </div>
        </Element>
      ))}
    </>
  );
}