// import Head from "next/head";
// import Link from "next/link";
// import Image from "next/image";

// import { getAllPostIds, getPostData } from "../../lib/posts.js";
// import { parseISO, format } from "date-fns";

// export async function getStaticProps({ params }) {
//   const postData = await getPostData(params.id);
//   return { props: { postData } };
// }
// export async function getStaticPaths() {
//   const paths = getAllPostIds();
//   return { paths, fallback: false };
// }

// export function Date({ dateString }) {
//   const date = parseISO(dateString);
//   return <time dateTime={dateString}>{format(date, 'LLLL d, yyyy')}</time>;
// }

// export default function Post({ postData }) {
//   const url = `https://www.troyserson.com/blog/${postData.id}`;
//   const linkedData = {
//     "@context": "https://schema.org",
//     "@type": "BlogPosting",
//     "headline": postData.title,
//     "description": postData.description,
//     "image": postData.image,
//     "thumbnail": {
//       "@type": "ImageObject",
//       "url": postData.image,
//     },
//     "author": {
//       "@type": "Person",
//       "name": "Troy Serson",
//       "url": "https://www.troyserson.com/"
//     },
//     "publisher": {
//       "@type": "Organization",
//       "name": "Troy Serson",
//       "logo": {
//         "@type": "ImageObject",
//         "url": "https://www.troyserson.com/logo.svg",
//       }
//     },
//     "datePublished": postData.date,
//     "mainEntityOfPage": {
//       "@type": "WebPage",
//       "@id": url 
//     }
//   };

//   const prose=`prose dark:prose-invert leading-tight
//     prose-h2:text-util prose-h2:leading-tight prose-h2:tracking-wide prose-h2:font-semibold prose-h2:text-zinc-800 dark:prose-h2:text-gray-200
//     prose-p:text-util-2 prose-p:leading-tight prose-p:font-normal prose-p:text-zinc-800 dark:prose-p:text-gray-100
//     prose-li:text-base prose-li:font-medium prose-li:text-zinc-500 dark:prose-li:text-slate-100
//     prose-strong:tracking-wide prose-strong:text-zinc-700 dark:prose-strong:text-slate-50
//     prose-em:tracking-tight prose-em:text-opacity-80 dark:prose-em:text-opacity-80 prose-em:text-neutral-600 dark:prose-em:text-neutral-300
//     prose-blockquote:border-neutral-800 dark:prose-blockquote:border-neutral-400 prose-blockquote:border-opacity-30 dark:prose-blockquote:border-opacity-30 prose-blockquote:font-light prose-blockquote:leading-relaxed
//     prose-a:text-stone-700 dark:prose-a:text-zinc-500
//     prose-img:rounded-full
//   `;

//   return (
//     <>
//       <Head>
//         <link rel="canonical" href={url} key="canonical" />
//         <title>{postData.title}</title>
//         <meta name="title" content={postData.title} />
//         <meta name="description" content={postData.description} key="desc" />
//         <meta property="og:image" content={postData.image} />
//         <meta property="og:image:alt" content={postData.alt} />
//         <meta property="og:title" content={postData.title} />
//         <meta property="og:description" content={postData.description} />
//         <meta property="og:site_name" content="Troy Serson" />
//         <meta property="og:type" content="website" />
//         <meta property="og:url" content={url} />
//         <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(linkedData) }} />
//       </Head>

//       <section className={`${prose} min-w-screen-sm min-h-screen pt-12 p-8 mx-auto`}>
//         <header>
//           <Link href="/blog" className={postData.title === 'Ukulele Lessons Online' ? 'flex flex-col items-center' : 'hidden'}>
//             <Image src={postData.image} alt={postData.alt} height={100} width={100} className="rounded-full mb-10" />
//           </Link>
//           <h1 className="not-prose text text-util-1 font-bold mb-1">{postData.title}</h1>
//           <div className="not-prose pl-0.5 text-util-3 font-light leading-relaxed my-2.5"><Date dateString={postData.date} /></div>
//         </header>

//         <article dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
//       </section>
//     </>
//   );
// }





import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

import { getAllPostIds, getPostData } from "../../lib/posts.js";
import { parseISO, format } from "date-fns";

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);
  return { props: { postData } };
}
export async function getStaticPaths() {
  const paths = getAllPostIds();
  return { paths, fallback: false };
}

export function Date({ dateString }) {
  const date = parseISO(dateString);
  return <time dateTime={dateString}>{format(date, 'LLLL d, yyyy')}</time>;
}

export default function Post({ postData }) {
  const url = `https://www.troyserson.com/blog/${postData.id}`;
  const linkedData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": postData.title,
    "description": postData.description,
    "image": postData.image,
    "thumbnail": {
      "@type": "ImageObject",
      "url": postData.image,
    },
    "author": {
      "@type": "Person",
      "name": "Troy Serson",
      "url": "https://www.troyserson.com/"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Troy Serson",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.troyserson.com/logo.svg",
      }
    },
    "datePublished": postData.date,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": url 
    }
  };

  // const prose=`prose dark:prose-invert leading-tight
  //   prose-h2:text-util prose-h2:leading-tight prose-h2:tracking-wide prose-h2:font-semibold prose-h2:text-zinc-800 dark:prose-h2:text-gray-200
  //   prose-p:text-util-2 prose-p:leading-tight prose-p:font-normal prose-p:text-zinc-800 dark:prose-p:text-gray-100
  //   prose-li:text-base prose-li:font-medium prose-li:text-zinc-500 dark:prose-li:text-slate-100
  //   prose-strong:tracking-wide prose-strong:text-zinc-700 dark:prose-strong:text-slate-50
  //   prose-em:tracking-tight prose-em:text-opacity-80 dark:prose-em:text-opacity-80 prose-em:text-neutral-600 dark:prose-em:text-neutral-300
  //   prose-blockquote:border-neutral-800 dark:prose-blockquote:border-neutral-400 prose-blockquote:border-opacity-30 dark:prose-blockquote:border-opacity-30 prose-blockquote:font-light prose-blockquote:leading-relaxed
  //   prose-a:text-stone-700 dark:prose-a:text-zinc-500
  //   prose-img:rounded-full
  // `;
  const prose=`prose dark:prose-invert leading-tight
    prose-h2:txt-util prose-h2:leading-tight prose-h2:tracking-wide prose-h2:font-semibold prose-h2:text-zinc-800
    prose-p:txt-util-2 prose-p:leading-tight prose-p:font-normal prose-p:text-zinc-800
    prose-li:text-base prose-li:font-medium prose-li:text-zinc-500
    prose-strong:tracking-wide prose-strong:text-zinc-700
    prose-em:tracking-tight prose-em:text-opacity-80 prose-em:text-neutral-600
    prose-blockquote:border-neutral-800 prose-blockquote:border-opacity-30 prose-blockquote:font-light prose-blockquote:leading-relaxed
    prose-a:text-stone-700
  `;

  // prose-img:rounded-full

  return (
    <>
      <Head>
        <link rel="canonical" href={url} key="canonical" />
        <title>{postData.title}</title>
        <meta name="title" content={postData.title} />
        <meta name="description" content={postData.description} key="desc" />
        <meta property="og:image" content={postData.image} />
        <meta property="og:image:alt" content={postData.alt} />
        <meta property="og:title" content={postData.title} />
        <meta property="og:description" content={postData.description} />
        <meta property="og:site_name" content="Troy Serson" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={url} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(linkedData) }} />
      </Head>

      {/* <section className={`${prose} min-w-screen-sm min-h-screen pt-12 p-8 mx-auto`}>
        <header>
          <Link href="/blog" className={postData.title === 'Ukulele Lessons Online' ? 'flex flex-col items-center' : 'hidden'}>
            <Image src={postData.image} alt={postData.alt} height={100} width={100} className="rounded-full mb-10" />
          </Link>
          <h1 className="not-prose text text-util-1 font-bold mb-1">{postData.title}</h1>
          <div className="not-prose pl-0.5 text-util-3 font-light leading-relaxed my-2.5"><Date dateString={postData.date} /></div>
        </header>

        <article dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </section> */}
      <div className="bg-white"> 
        <section className={`${prose} min-w-screen-sm min-h-screen pt-12 p-8 mx-auto`}>
          <header>
            <Link href="/blog" className={postData.title === 'Ukulele Lessons Online' ? 'flex flex-col items-center' : 'hidden'}>
              <Image src={postData.image} alt={postData.alt} height={100} width={100} className="rounded-full mb-10" />
            </Link>
            <h1 className="not-prose txt txt-1 font-bold mb-1">{postData.title}</h1>
            <div className="not-prose pl-0.5 txt-util-3 font-light leading-relaxed my-2.5"><Date dateString={postData.date} /></div>
          </header>

          <article dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
        </section>
      </div>
    </>
  );
}