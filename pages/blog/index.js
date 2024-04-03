import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

// import { blog } from "../../content.js";
import img from "/public/troy-serson.png";
export const blog = {
  link: `https://www.troyserson.com/blog/`,
  title: `Blog | Troy Serson`,
  description: ``,
  image: img,
  alt: `Photo of Troy Serson`,
};

import { parseISO, format } from "date-fns";
import { getSortedPostsData } from "../../lib/posts.js";

export function Date({ dateString }) {
  const date = parseISO(dateString);
  return <time dateTime={dateString}>{format(date, 'LLLL d, yyyy')}</time>;
}
export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return { props: { allPostsData } };
}

export default function Blog({ allPostsData }) {
  // const url = `https://www.troyserson.com/blog/${allPostsData.id}`;
  return (
    <>
      <Head>
        <link rel="canonical" href={blog.link} key="canonical" />
        <title>{blog.title}</title>
        <meta name="title" content={blog.title} />
        <meta name="description" content={blog.description} key="desc" />
        <meta property="og:image" content={blog.image} />
        <meta property="og:image:alt" content={blog.alt} />
        <meta property="og:title" content={blog.title} />
        <meta property="og:description" content={blog.description} />
        <meta property="og:site_name" content="Troy Serson" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={blog.link} />
      </Head>

      {/* <div className="max-w-screen-sm min-h-screen mx-auto pt-8 px-4">
        {allPostsData.map(({ id, image, alt, title, date, description }) => (
          <div className="flex pb-6 justify-between pl-3 md:pl-0 gap-x-4" key={id}>
            
            <div className="flex flex-col">
              <div className="text text-sm font-light leading-relaxed mt-2"><Date dateString={date} /></div>
              <h2 className="text-util font-semibold leading-loose tracking-wide mt-2"><Link href={`/blog/${id}`}>{title}</Link></h2>
              <div className="pl-0.5"><p className="text-util-3 my-2.5">{description}</p></div>
            </div>

            <div className="flex-none mr-3 md:ml-3 py-2 hidden sm:block">
              <Link priority={true} href={`/blog/${id}`}>
                <Image src={image} alt={alt} width={160} height={160} className="rounded-none mt-4" />
              </Link>        
            </div>

          </div>
        ))}
      </div> */}
      <div className="bg dark:bg-invert">

        <div className="max-w-screen-sm min-h-screen mx-auto pt-8 px-4">
          {allPostsData.map(({ id, image, alt, title, date, description }) => (
            <div className="flex pb-6 justify-between pl-3 md:pl-0 gap-x-4" key={id}>
              
              <div className="flex flex-col">
                <div className="text text-sm font-light leading-relaxed mt-2"><Date dateString={date} /></div>
                <h2 className="text-util font-semibold leading-loose tracking-wide mt-2"><Link href={`/blog/${id}`}>{title}</Link></h2>
                <div className="pl-0.5"><p className="text-util-3 my-2.5">{description}</p></div>
              </div>

              <div className="flex-none mr-3 md:ml-3 py-2 hidden sm:block">
                <Link priority={true} href={`/blog/${id}`}>
                  <Image src={image} alt={alt} width={160} height={160} className="rounded-none mt-4" />
                </Link>        
              </div>

            </div>
          ))}
        </div>
      </div>
    </>
  );
}