import { useState } from "react";
import Head from "next/head";
import Link from "next/link";

import { contact } from "../content.js";

export function Form() {
  const [name, setName] = useState('');
  const [subject, setSubject] = useState('General');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [emailError, setEmailError] = useState('');
  const [messageError, setMessageError] = useState('');

  const sendEmail = async () => {
    const data = {
      name: name,
      subject: subject,
      email: email,
      message: message,
    };

    try {
      // send data to API route
      const response = await fetch('/api/email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      // get response from server 
      if (response.status === 200) {
        console.log('Sent');
        setName('');
        setSubject('General');
        setEmail('');
        setMessage('');
        setEmailError('');
        setMessageError('');
      } else {
        console.error('Error');
      }
    } catch (error) {
      console.error('Error', error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setEmailError('');
    setMessageError('');
  
    const emailFormat = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.trim()) {
      setEmailError('Email is required');
    } else if (!emailFormat.test(email)) {
      setEmailError('Please enter a valid email address');
      return;
    }
    if (!message.trim()) {
      setMessageError('Message is required');
      return;
    }

    await sendEmail();
    console.log({ name, subject, email, message });
  };
  
  return (
    <form onSubmit={handleSubmit} className="md:w-1/2 w-full max-w-md text-sm h-5/6 md:h-3/4 md:pr-8">
      <input
        placeholder="Name"
        className="mb-2.5 w-full rounded p-2 text-zinc-900 bg-opacity-90 shadow-md pl-4 pr-4 focus:outline-none"
        id="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <select
        className="mb-2.5 w-full rounded p-2 text-zinc-900 bg-opacity-90 shadow-md pl-4 pr-4 focus:outline-none font-medium appearance-none"
        id="subject"
        value={subject}
        onChange={(e) => setSubject(e.target.value)}
      >
        <option disabled defaultValue="">Subject</option>
        <option value="General">General</option>
        <option value="Lessons">Lessons</option>
        <option value="Billing">Billing</option>
      </select>

      <div className="mb-3">
        <input 
          placeholder="Email"
          className={`${emailError ? '' : 'mb-4'} w-full rounded p-2 text-zinc-900 bg-opacity-90 shadow-md pl-4 pr-4 focus:outline-none`}
          id="email"
          value={email}
          onChange={(e) => { setEmail(e.target.value); setEmailError(''); }}
        />
        <div className="pl-2 text-xs pt-1.5 mb-1 text-red-500">{emailError}</div>
      </div>

      <div className="mb-3">
        <textarea
          placeholder="Message"
          className={`${messageError ? '' : 'mb-4'} h-28 w-full rounded p-2 text-zinc-900 bg-opacity-90 shadow-md pl-4 pr-4 resize-none focus:outline-none`}
          id="message"
          value={message}
          onChange={(e) => { setMessage(e.target.value); setMessageError(''); }}
        />
        <div className="pl-2 text-xs pt-0.5 mb-2 text-red-500">{messageError}</div>
      </div>

      <button type="submit" className="font-medium rounded-md w-full py-2 px-4 mb-6 text-invert bg-invert hover:bg-zinc-900/90 active:bg-zinc-900/95 dark:hover:bg-white/95 dark:active:bg-white/90 focus:outline-none transition-opacity ease-in duration-300">
        <span className="">Submit</span>
      </button>
    </form>
  );
}

export function Href({ span, href }) {
  return (
    <>{span[0]}<Link href={href} className={`ml-1 mr-1 href`}>{span[1]}</Link>{span[2]}</>
  );
}
export function Icon() {
  return (
    <svg className="w-10 h-10 stroke-zinc-900 dark:stroke-white fill-zinc-900 dark:fill-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400">
      <path fill="none" strokeLinecap="round" strokeLinejoin="round"  strokeMiterlimit="10" strokeWidth="11.8" d="M31.02 314.6c.76-2.79-.91-6.66-2.51-9.45a25.91 25.91 0 0 0-1.61-2.41 127 127 0 0 1-21-69.93c-.2-71.36 59-129.27 132.12-129.27 4.87 0 74.53-10.64 86.78-3.27 23.07 13.87 1.54 45.78 23.54 66.4 14.19 13.33 17.68 32.33 19.23 39.76a125.94 125.94 0 0 1 2.81 26.47c0 71.46-56.89 130.28-130.06 130.28-11.64 0-27.34-2.92-35.9-5.32s-17.11-5.58-19.32-6.43a19.92 19.92 0 0 0-7.08-1.31 19.52 19.52 0 0 0-7.69 1.54l-43.1 15.56a10.06 10.06 0 0 1-3 .78 6.1 6.1 0 0 1-6.08-6.12h0v-.07a9.86 9.86 0 0 1 .38-2.09Z"/>
      <path d="M77.93 105a128.45 128.45 0 0 0-2.91 27.08 132.44 132.44 0 0 0 131.88 133h.88c12.64 0 28.83-3.25 36.59-5.42 9.33-2.59 18.18-6 19.2-6.38a8.6 8.6 0 0 1 3.25-.6 9.92 9.92 0 0 1 3.49.66l.54.18 40.62 14.68a17.18 17.18 0 0 0 6.32 1.39 15.48 15.48 0 0 0 15.41-15.47 19.1 19.1 0 0 0-.72-4.57l-11.26-40.14a5.21 5.21 0 0 1 .73-4.15l.12-.24c.06-.06.24-.37.42-.61l.54-.72.12-.18a130.29 130.29 0 0 0-16.77-163.73A135 135 0 0 0 210.02 0a137.34 137.34 0 0 0-85.58 30 132 132 0 0 0-46.51 75Zm170.43 29.8a19.26 19.26 0 1 1 19.26 19.26 19.23 19.23 0 0 1-19.26-19.2Zm-57.77 0a19.26 19.26 0 1 1 19.26 19.26 19.23 19.23 0 0 1-19.26-19.2Zm-57.77 0a19.26 19.26 0 1 1 19.26 19.26 19.23 19.23 0 0 1-19.26-19.2Z"/>
    </svg>
  );
}

export default function Contact() {
  return (
    <>
      <Head>
      <link rel="canonical" href={contact.link} key="canonical" />
        <title>{contact.title}</title>
        <meta name="title" content={contact.title} />
        <meta name="description" content={contact.description} key="desc" />
        <meta property="og:image" content={contact.meta.image} />
        <meta property="og:image:alt" content={contact.meta.alt} />
        <meta property="og:title" content={contact.title} />
        <meta property="og:description" content={contact.meta.description} />
        <meta property="og:site_name" content="Troy Serson" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={contact.link} />
      </Head>

      <div className="flex flex-col md:flex-row items-center justify-center h-screen p-4 overflow-y-auto">
        
        <div className="inline-flex md:mt-0 mt-5 md:w-1/2 md:h-3/6 md:pl-4">
          <div className="text text-center md:text-left md:w-5/6 h-fit md:h-1/2">
            <div className="inline-flex align-baseline">
              <Icon />
              <h1 className="text-2xl font-semibold ml-2 mr-1 md:mr-0 mt-2">{contact.h1}</h1>
            </div>
            <div className="px-8 md:px-0 mt-0.5">
              <p className="md:max-w-sm min-w-full space-y-0 md:space-y-1.5 pb-8 leading-tight md:leading-normal">
                <span className="md:w-full text-sm font-light">{contact.div.p}</span>
                <span className="whitespace-pre-line items-center w-full text-sm font-light"><Href span={contact.div.span} href={contact.div.href} /></span>
              </p>
            </div>
          </div>
        </div>

        <Form />
      </div>
    </>
  );
}