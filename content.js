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
  name: {
    span: [ `Troy`, `Serson` ],
  },
  navbar: {
    div: [
      { href: `/about`, span: `About` },
      { href: `/calendar`, span: `Calendar` },
      { href: `/reviews`, span: `Reviews` },
      { href: `/contact`, span: `Contact` },
    ],
    button: {
      href: `/sign-up`,
      span: `Sign Up`,
    },
  },
};

/** @note /index */
export const index = {
  meta: {
    image: img[1].image,
    alt: img[1].alt,
    title: `Home | Troy Serson`,
    description: `Learn more about lessons online or sign-up today!`,
    url: `https://troyserson.com`,
  },
  section: {
    image: img[0].image,
    alt: img[0].alt,
    h1: {
      span: [ `Learn to Play Guitar`, `(Without Leaving Your House)` ],
    },
    h2: `Discover why tomorrow's brightest are taking music lessons online`,
    button: { href: `/sign-up`, span: `Free Trial`},
  },
};

/** @note /about */
export const about = {
  meta: {
    image: img[1].image,
    alt: img[1].alt,
    title: `About | Troy Serson`,
    description: `About Troy Serson, the studio policy, and online lessons`,
    url: `https://troyserson.com/about`,
  },
  section: [
    { 
      anchor: `troy`, 
      h1: `Meet Your Teacher`,
      h2: ` `,
      div: {
        p: `
        Troy Serson is a Guitar, Bass, and Ukulele teacher of 12 years who offers weekly online lessons from beginner to advanced. He has hundreds of 5 star reviews, and has taught children as young as 3 years old to play their favorite songs.
        
        Troy helps students all over the world learn musical instruments, nurturing learner confidence, and coaching students to discover their unique musical identity.
        `,
        span: [ ``, ``, `` ],
        href: `/sign-up`,
      },
      image: img[1].image,
      alt: img[1].alt,
    },
    { 
      anchor: `policy`,
      h1: `Studio Policy`,
      h2: ` `,
      div: {
        p: `
        The mission for Troy’s studio is and has always been to Make Music Make Sense.
        
        This means providing learners with multiple ways of understanding each concept and musical idea, in order to find the way that clicks best for them.
        
        This also means having flexible, but fair studio policies that apply to every student in the studio. Policies are updated from time to time, but remain mostly set in stone. 

        `,
        span: [ `Prospective students can view our up to date `, `studio policy`, ` here, and existing students will be notified of any changes by email.` ],
        href: `/policy`,
      },
      image: img[2].image,
      alt: img[2].alt,
    },
    { 
      anchor: `lessons`,
      h1: `Online Lessons`,
      h2: ` `,
      div: {
        p: `
        Long gone are the days of driving across town to drop your kid off at a 30 minute music lesson, while you rush to the other side of town to pick up your other child from another activity, hopefully making it back in time by the end of the lesson so your kid isn’t awkwardly waiting while another family shows up for their music lesson.

        Troy has established a reliable, professional, and effective online experience, allowing students to remain comfortably at home, enjoy the lesson without having to rush from place to place, all while achieving better results than they would at a traditional in person music studio.
        
        `,
        span: [ `For more information about lessons, please use the `, `contact`, ` page, or sign up for a complimentary lesson to see if Music Lessons with Troy is right for your learner.` ],
        href: `/contact`,
      },
      image: img[3].image,
      alt: img[3].alt,
    },
  ],
};

/** @note /policy */
export const policy = {
  meta: {
    image: img[1].image,
    alt: img[1].alt,
    title: `Policy | Troy Serson`,
    description: `Studio policy`,
    url: `https://troyserson.com/policy`,
  },
  section: {
    h1: `Studio Policy`,
    p: [
    `Effective date: January 2, 2024`,
    ],
    div: [
      { 
        a: `teacher-commitments`,
        h2: `Teacher Responsibilities`,
        p: `Troy will teach students the language of music in a positive and enthusiastic environment. It is his goal to inspire each student, and empower them to influence their music education with input based on their interest and long term goals. Troy will tailor the curriculum to match each student’s specific learning needs, and their musical goals.
        `
      },
      { 
        a: `student-expectations`,
        h2: `Student and Family Responsibilities`,
        p: `Students agree to arrive at each lesson punctually, well prepared, and with their instrument. To make good progress, regular quality practice is necessary. While some students perform well with a more flexible (irregular) practice routine, it is encouraged that most students practice daily unless otherwise discussed. Students and parents are expected to ask questions about assignments as needed.

        Note to Parents: If something is happening at home or school that is affecting your child, please let Troy know. The more information he has, the more he can be sensitive to the needs of your child.

        All students are encouraged to perform in studio recitals (in May, August, and December each year), and to audition for local bands, ensembles, and competitions if it is in line with their musical goals. If an opportunity arises, please bring information about the opportunity to your next lesson so Troy can help your student prepare.
        
        Students must have their own instrument to practice at home. If you have questions, or would like input on the purchase of an instrument, please let Troy know, and if it helps, he can make specific recommendations based on what instrument shapes, sizes, and features would work best for your student.
        `
      },
      { 
        a: `tuition-and-payment`,
        h2: `Tuition and Schedule`,
        p: `Please note that tuition reserves the weekly time slot, but may not directly correlate with lessons received if the student does not attend the scheduled lesson times.

        Flat monthly tuition rates are based on the number of lessons guaranteed by the teacher in the calendar year. There will be a minimum of 44 lessons offered throughout the year, and the weeks where lessons are not held (due to holidays etc) will be communicated in advance. There are an additional two weeks built into the studio calendar to accommodate teacher illness. In the case these are not used, lessons may be scheduled at no extra charge. In the case that there is a 5th weekly lesson in the month, this has been factored into the flat-rate tuition.

        Up to date information about studio closures can be found here.

        All payments are non-refundable. After the first payment, invoicing and payment will run automatically on the same day. Tuition will be drawn on the 1st of each month from the method on file. All automatic payments for Canadians will be run through Square. All automatic payments from other countries will be run through Stripe.

        In the event that a payment is returned or declined, you will be contacted by email. Invoices unpaid by the 8th of each month will be charged a 15% late fee. Recurring late payments may result in termination of the student’s enrollment.

        If you are having trouble making payments on invoices, or need to make alternative arrangements, please contact Troy at your earliest convenience.

        Changes to weekly schedules are allowed, subject to availability of desired spots.

        In order to cancel your lessons, written notice must be received via email 7 calendar days prior to the end of the month. In the case that notice is not received by that deadline, the monthly tuition amount will be run automatically on the first of the month, and students have the option to attend all paid lessons that month. Lessons will then cancel for the following month.

        Paid for lessons are transferable to another student, but you must notify Troy of this prior to the lesson with the student the lessons have been transferred to.
        `
      },  
      { 
        a: `schedule-and-cancellations`,
        h2: `Cancellation Policy`,
        p: `Lessons where a student has not arrived within 10 minutes of the start of their scheduled lesson, and you have not contacted Troy about running late will be marked as a no show. Students will be allowed to make up the lesson up to one month after the date of the missed lesson. Makeup lessons are subject to teacher availability and are not guaranteed.

        In the event of Troy canceling a lesson, as much notice as possible given the circumstance will be given. If Troy cancels a lesson outside of the guaranteed 44 annual lessons, he will refund you for that time, or reschedule the lesson within 30 days.
        
        If a student misses three lessons in a row without communicating why they are absent at any point within that three week period, it is assumed they are not coming back, their regular time slot will be offered to wait listed students, and the student will not receive a refund for the calendar month. To avoid this ever happening, please send Troy a quick email or text if you’re going to miss one or more lessons, so he is aware of what’s happening.        
        `
      },  
      { 
        a: `music-and-materials`,
        h2: `Music and Materials`,
        p: `Students are encouraged to bring in outside music related materials that inspire them, or that they have questions about. Otherwise, all sheet music and exercises will be provided by Troy during the lesson.

        In the event that a student finds music they would like to learn that Troy does not already have, if the difficulty level of the piece of music is appropriate, Troy will purchase the music and provide it to the student. When pursuing repertoire in this way, students are encouraged to contact Troy outside of their regular lesson time to give him an opportunity to review the piece and prepare teaching notes on it prior to the lesson.
        `
      },
      { 
        a: `term-commitment`,
        h2: `Term Commitment`,
        p: `When students enroll, they are reserving their place in the studio for the entire term.

        Fall Term: September to December
        Spring Term: January to May
        Summer Term: June to August
        
        Please note that a student’s spot will not be guaranteed for the fall term if they were not enrolled in lessons during the summer term.
        `
      },
      { 
        a: `media-and-privacy`,
        h2: `Media and Privacy`,
        p: `From time to time, Troy will use photos and short videos of students on the studio website, or in social media posts. These videos and posts are encouraging to other students, and helpful for parents of prospective students.

        Photo and Video Release Form (Adult Student)
        Photo and Video Release Form (Child Student)

        If you do not want yours, or your child’s image(s) to be used, please let Troy know. Students will only ever be identified by first name.
        `
      },
      { 
        a: `policy-acknowledgment`,
        h2: `Policy Acknowledgment`,
        p: `By enrolling and paying tuition for myself or my child in Troy Serson’s studio, I certify that I understand and agree to the studio policies for the 2024 calendar year.
        `
      },
    ],
  },
};

/** @note /calendar */
export const calendar = {
  meta: {
    image: img[1].image,
    alt: img[1].alt,
    title: `Calendar | Troy Serson`,
    description: `Important dates`,
    url: `https://troyserson.com/calendar`,
  },
  section: {
    h1: `Important Dates`,
    div: [
      { date: `December 16 - January 1`, description: `Studio Closed for Winter Break ☃️` },
      { date: `Spring TBD`, description: `Studio Closed for Teacher Vacation 🛫` },
      { date: `April 15 - April 19`, description: `Parent Teacher Week 🧑🏻‍🏫` },
      { date: `May 5`, description: `Spring Studio Recital 🌸` },
      { date: `July 22 - July 26`, description: `Parent Teacher Week 🧑🏻‍🏫` },
      { date: `August 11`, description: `Summer Studio Recital ☀️` },
      { date: `August 17 - September 2`, description: `Studio Closed for Summer Break ⛱️` },
      { date: `November 16 - November 20`, description: `Parent Teacher Week 🧑🏻‍🏫` },
      { date: `December 15`, description: `Winter Studio Recital ❄️` },
      { date: `December 21 - January 5`, description: `Studio Closed for Winter Break 🏂` },
    ],
  },
};

/** @note /reviews */
export const reviews = {
  meta: {
    image: img[1].image,
    alt: img[1].alt,
    title: `Reviews | Troy Serson`,
    description: ``,
    url: `https://troyserson.com/reviews`,
  },
  section: {
    h1: `Want to know more?`,
    h2: `Check out these nice things people are saying`,
    div: [
      // { id: `Richard J.`, date: `Feb 9, 2021`, p: `My daughter really enjoyed it.` },
      { id: `Dawn`, date: `Feb 2, 2021`, p: `We really enjoyed this course and Mr. Serson. He takes extra time to ensure every kid is able to follow along. Come with a guitar tuned, that'll help your first day. It was fun watching my son learn real songs right away!` },
      { id: `Teresa C.`, date: `Jun 25, 2020`, p: `Great experience! Excellent teacher.. very engaging and responsive!` },
      { id: `Mrs. S`, date: `Jun 19, 2020`, p: `Absolutely wonderful teacher and class!  Teacher spent time with each student and gave them individual attention.  The song selections were challenging but he walked students through step by step and my son was playing beautifully after just 4 classes!` },
      { id: `Shannon L.`, date: `Jun 18, 2020`, p: `This class was fantastic! My son had barely even ever picked up a guitar, so I was not sure how an online guitar lesson would be but Troy was great at explaining  everything clearly and in a way that was easy for the kids to understand. He was able to give the kids one on one help during the class when they needed it, and offered opportunities for additional help outside of class time if needed.  It was also great to be able to re-watch the lessons after class which enabled me (with zero guitar experience) to help my son with whatever he was practicing between classes. Definitely going to sign my son up for another class with Troy!` },
      // { id: `Margo D.`, date: `May 27, 2020`, p: `Excellent intro. to classical guitar.  My daughter got a lot of good pointers and learned 2 great songs.` },
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
      // { id: `Nicole M.`, date: `May 22, 2020`, p: `My daughter loved this class and came away with a great ukulele foundation!` },
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
      // { id: `Marlyn T.`, date: `Apr 17, 2020`, p: `Troy was able to cover a lot of information in a digestible way for kids. Detailed slides and visuals were helpful.` },
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
    url: `https://troyserson.com/contact`,
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
    url: `https://troyserson.com/sign-up`,
  },
  section: {
    url: `https://calendly.com/lessons-with-troy/new-student-promo`,
  },
};