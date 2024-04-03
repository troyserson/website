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
      
      <div className="bg dark:bg-invert">
        <div className="min-h-screen mx-auto sm:pt-4 pt-1 px-4 -mb-2 overflow-hidden max-w-3xl">
          {allPostsData.map(({ id, image, alt, title, date, description }) => (
            <div className="flex flex-col">
              <div className="py-2 sm:mx-6 mx-4 pl-1 sm:pl-2">
                <div className="txt-util-3 text-sm font-light leading-relaxed mt-3"><Date dateString={date} /></div>
                <h2 className="txt-util font-semibold leading-loose tracking-wide mt-2"><Link href={`/blog/${id}`}>{title}</Link></h2>

                <div className="hidden sm:block">
                  <Link priority={true} href={`/blog/${id}`}>
                    <Image className="float-right w-224 h-224 rounded-none pb-1 pt-1 pr-3" width={320} height={320} src={image} alt={alt} />
                  </Link>
                </div>

                <div className="mb-3">
                  <p className="txt-util-2 pb-3 pt-4">{description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}