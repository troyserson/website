/* @note importing an image automatically sets width and height */
import img0 from "./public/yan-krukau.png";
import img1 from "./public/troy-serson.png";
import img2 from "./public/elmer-canas.png";
import img3 from "./public/mikhail-nilov.png";
export const img = [
  { image: img0, alt: `Boy Sitting on Bed with Acoustic Guitar Smiling at a Laptop by Yan Krukau` },
  { image: img1, alt: `Photo of Troy Serson` },
  { image: img2, alt: `Boy Holding Dreadnought Acoustic Guitar Beside Girl During Daytime by Elmer Cañas` },
  { image: img3, alt: `A Kid Drawing Near a Laptop by Mikhail Nilov` },
];

/* @note components/layout */
export const layout = {
  navbar: {
    icon: {
      span: [ `Troy`, `Serson` ],
    },
    div: [
      { href: `/about`, span: `About` },
      { href: `/calendar`, span: `Calendar` },
      { href: `/policy`, span: `Policy` },
      { href: `/contact`, span: `Contact` },
    ],
    button: {
      href: `/sign-up`,
      span: `Sign-Up`,
    },
  },
  footer: {
    copy: `Troy Serson`,
    icon: [
      { href: `https://www.youtube.com/@troyserson`, label: `YouTube @troyserson` },
      { href: `https://www.tiktok.com/@troyserson`, label: `TikTok @troyserson` },
    ],
  },
};

/** @note /index */
export const index = {
  meta: {
    image: img[1].image,
    alt: img[1].alt,
    title: `Home | Troy Serson`,
    description: `Learn more about lessons online or sign-up today!`,
    url: `https://pages-router-eight.vercel.app`,
  },
  section: [
    {
      image: img[0].image,
      alt: img[0].alt,
      h1: {
        span: [ `Learn.`, `Guitar.`, `Online.` ],
      },
      h2: `Discover why tomorrow's brightest are taking music lessons online`,
      button: [
        { href: `/about`, span: `Learn More` },
        { href: `/sign-up`, span: `Free Trial` },
      ],
    },
    {
      h1: `Want to know more?`,
      h2: `Check out these nice things people are saying`,
      div: [
        // { id: `Richard J.`, date: `Feb 9, 2021`, p: `My daughter really enjoyed it.` },
        { id: `Dawn`, date: `Feb 2, 2021`, p: `We really enjoyed this course and Mr. Serson. He takes extra time to ensure every kid is able to follow along. Come with a guitar tuned, that'll help your first day. It was fun watching my son learn real songs right away!` },
        { id: `Teresa C.`, date: `Jun 25, 2020`, p: `Great experience! Excellent teacher.. very engaging and responsive!` },
        { id: `Mrs. S`, date: `Jun 19, 2020`, p: `Absolutely wonderful teacher and class!  Teacher spent time with each student and gave them individual attention.  The song selections were challenging but he walked students through step by step and my son was playing beautifully after just 4 classes!` },
        { id: `Shannon L.`, date: `Jun 18, 2020`, p: `This class was fantastic! My son had barely even ever picked up a guitar, so I was not sure how an online guitar lesson would be but Troy was great at explaining  everything clearly and in a way that was easy for the kids to understand. He was able to give the kids one on one help during the class when they needed it, and offered opportunities for additional help outside of class time if needed.  It was also great to be able to re-watch the lessons after class which enabled me (with zero guitar experience) to help my son with whatever he was practicing between classes. Definitely going to sign my son up for another class with Troy!` },
        { id: `Margo D.`, date: `May 27, 2020`, p: `Excellent intro. to classical guitar.  My daughter got a lot of good pointers and learned 2 great songs.` },
        { id: `Amanda T.`, date: `May 20, 2020`, p: `My son really enjoyed this class. Already signed him up for other classes offered by Troy!` },
        { id: `Jenner S.`, date: `May 14, 2020`, p: `This class was very educational and the teacher is very very nice and he will work on a subject for however long it takes too get it through to someone that does not understand.` },
        { id: `Tianyi Z.`, date: `Feb 5, 2022`, p: `Perfect introduction to playing the ukulele. Troy teaches a level that is fun, thorough and  confidence building. Outschool tools are excellent. This is our first experience with outschool and we will continue. We liked Troy's teaching so much we will continue on past the group intro class!` },
        { id: `Dionne G.`, date: `May 25, 2021`, p: `The instruction is extremely clear and well-organized. The instructor starts with agenda and ends up with a summary. The instructor posts class notes after each class and communicates with parents for any questions learners or parents may have. The instructor provides between classes support! The pace of the class is excellent and the instructor really watches learners' responses during each class and want to make sure everyone is following. I am very impressed by the instructor's great work and my son really loves this class!` },
        { id: `Tianyi Z.`, date: `Feb 16, 2021`, p: `This was a great beginner class for my 5 year old.  The instructor was very engaging and taught the kids a short simple song in the very first class, which gave them some confidence that they could play the ukulele.  I love the video recording for the class only so that we can practice and see the music after class ended, pausing and repeating as necessary.  Even though this was a 4-week intro class, the instructor built up each class and kept the kids engaged.  My child loved it so much, we are taking 1:1 class from this instructor (which this intro class is a great option to see if you're a good fit for the teacher too)!` },
        { id: `Cindy C.`, date: `Feb 11, 2021`, p: `Troy made the class fun and engaging. My daughter said he made it easy to understand how to play. I will be signing my other daughter up as well.` },
        { id: `Jackie`, date: `Feb 7, 2021`, p: `This class was wonderful - my daughter learned a lot and Troy is a really patient teacher and great with kids. The length of the class was good because it gave him time to teach something in detail and check in with each child to make sure they were doing it correctly (as opposed to a half-hour group class that has to move quickly). We also really appreciated that Troy was available for quick check-ins outside of the class time, especially since my daughter missed a class and we wanted to make sure she learned things properly from the recording. We would definitely recommend this class and teacher!` },
        { id: `Anita P.`, date: `Feb 2, 2021`, p: `My kids loved the class and Troy. They would often end class and say, "That was the best ever!" They walked away with the basics and they are ready to learn more songs.` },
        { id: `Kelly`, date: `Jan 25, 2021`, p: `This class was great for beginners. This was my daughter's first time ever holding a musical instrument and the pace was just right. She felt accomplished after each lesson and she wants to keep going. I like that there was written notes so parents can help out as well :)` },
        // { id: `Hawra A.`, date: `Dec 21, 2020`, p: `My daughter loved this class- it was a great intro into ukulele!` },
        { id: `Christine B.`, date: `Oct 3, 2020`, p: `My daughter really enjoyed this class! This was better than learning from YouTube videos online. She could ask questions, and she picked up on the lessons quickly.` },
        { id: `Heather M.`, date: `Oct 1, 2020`, p: `I had one student (age 8g) who enjoys Mr. Serson's Beginning Ukulele (Age 5-9) class.  Mr. Serson is patient and is a caring teacher.  He is very good at keeping in contact with student and parent throughout the music class. He is always willing and able to help!  Highly recommend his class.  My student said, "I want to take more classes with Mr. Troy S"!` },
        { id: `Carmen E.`, date: `Jul 24, 2020`, p: `Troy is an excellent teacher. He is very patient with all the kids and my daughter was able to play a few songs by the second class. Troy teaches them the fundamentals of the instrument and a few chords. Awesome beginner's class.` },
        { id: `Teresa Y.`, date: `Jul 8, 2020`, p: `This was a great introductory course for this age. I was impressed with how much my son learned! The teacher is also very helpful and supportive.` },
        { id: `Sumayya G.`, date: `Jun 23, 2020`, p: `Troy is fantastic!  My daughter enjoyed this class so much that she wants to do private lessons.` },
        // { id: `Hiranda D.`, date: `Jun 20, 2020`, p: `Wonderfully patient instructor! Lots of fun and informative` },
        { id: `Elena R.`, date: `Jun 19, 2020`, p: `My daughter (almost 8yr old) enjoyed the class! It was amazing to watch her play the ukulele in just a few weeks! Teacher was very helpful and patient. Highly recommend it. I’m definitely signing up for the next class when it is available.` },
        { id: `Jihae Y.`, date: `Jun 19, 2020`, p: `Troy was patient and noticed when kids needed a break to stretch and share.  He went at a nice pace for my seven-year-old and checked in with everyone often.` },
        { id: `Molly F.`, date: `Jun 18, 2020`, p: `Troy is a fabulous instructor, and great with kids (even with an obstinate 6-year-old). He recognizes when kids need a break to stretch, finds fun songs to share, and takes time to do individual help as much as possible in a group setting.` },
        { id: `Ashley U.`, date: `Jun 18, 2020`, p: `My daughter loved this class. Troy went above and beyond to help her learn the basics of guitar playing. In four weeks of classes, she’s attempting her favorite tunes without assistance.` },
        { id: `Nicole M.`, date: `May 22, 2020`, p: `My daughter loved this class and came away with a great ukulele foundation!` },
        { id: `Todd B.`, date: `May 21, 2020`, p: `My daughter is a bit immature for her age (8 years old) she was engaged and very excited for the class! I’d hear her play the ukulele off and on throughout the week until it was time for her to take class again.` },
        { id: `Diana W.`, date: `May 21, 2020`, p: `Troy is very patient and works well with kids. My granddaughter received an excellent startup on her ukulele! She will be taking some private classes from Troy next.` },
        { id: `Allison B.`, date: `May 19, 2020`, p: `Troy was fantastic with my son. Very patient, and helped my son to love playing his Ukulele. Would definitely recommend this class!` },
        { id: `Karen`, date: `May 18, 2020`, p: `This was very organized. Troy was also encouraging, very prepared, kind. I wish he offered more uke classes because we would take them.` },
        { id: `Luke`, date: `May 18, 2020`, p: `Luke learned more in this class than we thought he would. We are going to continue. Yay!` },
        { id: `Dabney L.`, date: `May 17, 2020`, p: `Excellent class! Troy does a fantastic job with virtual classroom management while teaching beginner ukulele in a very clear & understandable way. Being available outside of class for a quick meet up outside of class was a huge help clearing up a little confusion. I highly recommend Troy and this class!` },
        { id: `Sarah M.`, date: `May 15, 2020`, p: `My daughter really enjoyed this class. She learned how to play a few songs. We just wish the course was longer not just 4 classes!` },
        { id: `Magda J.`, date: `May 15, 2020`, p: `Very fun & well planned out for progressive difficulty as well as enough repetition for wholistic class practice :)` },
        { id: `San-san`, date: `Jun 15, 2020`, p: `My son is inspired and that says a lot about Troy! Troy is patient and very accommodating.` },
        { id: `Tan`, date: `May 21, 2020`, p: `Troy went overtime to make sure everyone understood and had it down. You can tell he enjoys his craft!` },
        { id: `Trudy S.`, date: `May 18, 2020`, p: `My 9-year-old son enjoyed the class a lot.  Just bought him his guitar, so  very new to it and has had very little other music instruction. This was a great starter class. My son also broke a string right before class and the instructor was able to work around that and he was still able to participate.  Communication and flexibility was great.` },
        { id: `Ascheman`, date: `May 16, 2020`, p: `My daughter enjoyed the class.  She has been practicing the song he taught her.` },
        { id: `Kelly K.`, date: `May 16, 2020`, p: `Great intro to guitar for someone who has never picked one up.` },
        { id: `Courtney L.`, date: `Apr 23, 2020`, p: `Troy was able to cover a lot of information in a digestible way for kids. Detailed slides and visuals were helpful.` },
        { id: `Marlyn T.`, date: `Apr 17, 2020`, p: `Troy was able to cover a lot of information in a digestible way for kids. Detailed slides and visuals were helpful.` },
      ],
    },
  ],
};

/** @note /about */
export const about = {
  meta: {
    image: img[1].image,
    alt: img[1].alt,
    title: `About | Troy Serson`,
    description: `About Troy Serson, the studio policy, and online lessons`,
    url: `https://pages-router-eight.vercel.app/about`,
  },
  section: [
    { 
      a: `troy`, 
      h1: `About Troy`,
      h2: `Guitar & Ukulele Teacher Since 2011`,
      div: {
        p: `
        Troy Serson, a seasoned musician and educator, specializes in personalized online guitar and ukulele lessons.
        
        With over a decade of experience, he's helped countless students develop musical skills and gain confidence through his teaching.
        `,
        span: [ ``, ``, `` ],
        href: `/sign-up`,
      },
      image: img[1].image,
      alt: img[1].alt,
    },
    { 
      a: `policy`,
      h1: `Studio Policy`,
      h2: `Music Made Accessible & Enjoyable`,
      div: {
        p: `
        Our studio's mission is to make music make sense. We offer multiple ways of understanding, ensuring each student finds what clicks best for them.
        
        Our flexible and fair policies apply to every student.`,
        span: [ ` For detailed information, check our studio `, `policy`, `.` ],
        href: `/policy`,
      },
      image: img[2].image,
      alt: img[2].alt,
    },
    { 
      a: `lessons`,
      h1: `Online Lessons`,
      h2: `Music Lessons Anywhere with Troy`,
      div: {
        p: `
        In-person lessons are available for local students, but online classes are the preferred choice due to their quality and convenience.

        `,
        span: [ `For more info on lessons, visit our `, `contact`, ` page or schedule a free trial.
        
        ` ],
        href: `/contact`,
      },
      image: img[3].image,
      alt: img[3].alt,
    },
  ],
};

/** @note /calendar */
export const calendar = {
  meta: {
    image: img[1].image,
    alt: img[1].alt,
    title: `Calendar | Troy Serson`,
    description: `Important dates`,
    url: `https://pages-router-eight.vercel.app/calendar`,
  },
  section: {
    h1: `Important Dates`,
    div: [
      { date: `December 24 - January 2`, description: `Studio Closed for Winter Break ☃️` },
      { date: `February 28 - March 4`, description: `Parent Teacher Week 🧑🏻‍🏫` },
      { date: `March 5 - March 22`, description: `Studio Closed for Teacher Vacation 🇮🇹` },
      { date: `May 7`, description: `Spring Studio Recital 🌸` },
      { date: `July 25 - July 29`, description: `Parent Teacher Week 🧑🏻‍🏫` },
      { date: `August 13`, description: `Summer Studio Recital ☀️` },
      { date: `August 19 - September 4`, description: `Studio Closed for Summer Break ⛱️` },
      { date: `November 7 - November 11`, description: `Parent Teacher Week 🧑🏻‍🏫` },
      { date: `December 10`, description: `Winter Studio Recital ❄️` },
      { date: `December 16 - January 1`, description: `Studio Closed for Winter Break 🏂` },
    ],
  },
};

/** @note /policy */
export const policy = {
  meta: {
    image: img[1].image,
    alt: img[1].alt,
    title: `Policy | Troy Serson`,
    description: `Studio policy`,
    url: `https://pages-router-eight.vercel.app/policy`,
  },
  section: {
    h1: `Studio Policy`,
    p: [
    `Last updated on January 16, 2023`,
    `This policy outlines the commitments of our teachers, expectations from students, details regarding tuition and payment, our approach to scheduling and cancellations, handling of music and materials, term commitments, privacy in media sharing, and the acknowledgment of our policy by students and parents. It is essential to familiarize yourself with these guidelines to ensure a positive and productive experience in our music studio.`,
    ],
    div: [
      { 
        a: `teacher-commitments`,
        h2: `Teacher Commitments`,
        p: `We're dedicated to providing a positive and inspiring learning experience for every student. Our goal is to motivate and empower each student to drive their music education and achieve their unique musical aspirations. We tailor our curriculum to cater to each student's individual learning needs and interests.
        `
      },
      { 
        a: `student-expectations`,
        h2: `Student Expectations`,
        p: `To maximize progress, students are encouraged to attend lessons promptly, well-prepared, and with their instruments. While some flexibility is allowed in practice routines, daily practice is recommended unless otherwise discussed. Questions about assignments are encouraged to ensure clear comprehension of goals.

        Parents, please share anything at home or school affecting your child's learning for better support.

        Students of all ages are encouraged to participate in studio recitals and explore musical opportunities, and we're here to help with preparation when such opportunities arise.
        
        Students should have their own instrument for practice at home. If you need advice on selecting an instrument, don't hesitate to ask. Recommendations can be made based on what would work best for you or your child.
        `
      },
      { 
        a: `tuition-and-payment`,
        h2: `Tuition and Payment`,
        p: `Monthly tuition secures your weekly slot, though it may not align precisely with attended lessons.

        Tuition rates are based on a minimum of 44 lessons annually, with advanced notice of holiday-related closures. Two additional weeks accommodate teacher illness or extra lessons.

        Payments are non-refundable and billed automatically on the 1st of each month. Payments are late after one week; incurring a 15% fee and may affect enrollment. Contact us for payment issues or alternative arrangements.

        Changes to weekly schedules are feasible subject to availability.

        To cancel lessons, notify us via email 7 days before the month's end. Late cancellations result in automatic billing, with the option to attend paid lessons that month, followed by cancellations in the next month. Paid lessons are transferable with prior notification to your teacher.
        `
      },  
      { 
        a: `schedule-and-cancellations`,
        h2: `Schedule and Cancellations`,
        p: `Life can get busy. If you're running late or miss a lesson, let us know; you can make up missed lessons between the missed one and your next regular session.

        Cancellations with advance notice allow for makeup lessons in the same month, subject to teacher availability.
        
        If we need to cancel a lesson, we'll provide notice and arrange refunds or rescheduling within 30 days.
        
        Open communication is vital; if you miss three lessons without a quick message, we'll assume you won't continue, and your slot will open for a waitlist student, with no refunds for that month.
        `
      },  
      { 
        a: `music-and-materials`,
        h2: `Music and Materials`,
        p: `Feel free to bring any music-related materials that inspire you or raise questions. Otherwise, your teacher will provide all sheet music and exercises.

        If you discover music you'd like to learn that we don't have, and it's suitable for your level, we'll purchase it for you. In such cases, get in touch with your teacher outside of your regular lesson time, giving them a chance to review and prepare teaching notes on the piece before your lesson.
        `
      },
      { 
        a: `term-commitment`,
        h2: `Term Commitment`,
        p: `When you enroll, you secure your spot for the entire term:

        Fall Term: September to December
        Spring Term: January to May
        Summer Term: June to August
        
        Please note, to guarantee a spot for the fall term, you should enroll in lessons during the summer term.
        `
      },
      { 
        a: `media-and-privacy`,
        h2: `Media and Privacy`,
        p: `Occasionally, we share photos and short videos of our students on our website and social media. These posts encourage and assist other students and teachers.

        If you'd prefer not to have yours, or your child's image used, please let us know. We identify students only by their first names.
        `
      },
      { 
        a: `policy-acknowledgment`,
        h2: `Policy Acknowledgment`,
        p: `By enrolling and paying tuition for yourself or your child in Troy Serson's studio, you confirm your understanding and agreement with the studio policies for the 2023 calendar year.
        `
      },
    ],
  },
};

/** @note /contact */
export const contact = {
  meta: {
    image: img[1].image,
    alt: img[1].alt,
    title: `Contact | Troy Serson`,
    description: `Get in touch through our email form!`,
    url: `https://pages-router-eight.vercel.app/contact`,
  },
  section: {
    h1: `Get in touch`,
    div: {
      p: `Regular studio hours are Tuesday to Friday, 10am-7pm PST.`,
      span: [ `
      Check our`, `calendar`, `for holiday hours and schedule changes.`],
      href: `/calendar`,
    },
  },
};

/** @note /sign-up */
export const signUp = {
  meta: {
    image: img[1].image,
    alt: img[1].alt,
    title: `Sign Up | Troy Serson`,
    description: `Information regarding studio hours and availability`,
    url: `https://pages-router-eight.vercel.app/sign-up`,
  },
  section: {
    url: `https://calendly.com/tannertanner1/trial`,
  },
};