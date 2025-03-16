// @flow strict

import BlogCard from "../components/homepage/blog/blog-card";

// Define static blog data
const staticBlogs = [
  {
    id: 1,
    title: 'Google Cloud',
    cover_image: '/image/GC.png',
    url: 'https://drive.google.com/file/d/148YOsN4Q7kDKmeshA73jaOeKdcMVCL2m/view?usp=sharing', // Example URL for the first blog
    summary: 'Google cloud career readlines cloud digital Leader track',
  },{
    id: 2,
    title: 'Cisco',
    cover_image: '/image/CI.png',
    url: 'https://drive.google.com/file/d/16-BCC-kzFjPi2MyoG_Z1xWIy0C_EP7oR/view?usp=sharing', // Example URL for the second blog
    summary: 'Cisco Training Course on Networking Essentials',
  },
  {
    id: 3,
    title: 'Infosys Springboard',
    cover_image: '/image/IS.png',
    url: 'https://drive.google.com/file/d/16BdDVNpi6uOG0gF5xlg3sgf12WrbgxXH/view?usp=sharing', // Example URL for the second blog
    summary: 'Certificates that are gained as an acknowledgement for my skills',
  },
  {
    id: 4,
    title: 'Guvi',
    cover_image: '/image/Gu.png',
    url: 'https://drive.google.com/file/d/1LIWJphQj2yCiIMi2t69C54OfBy3Q-gUQ/view?usp=sharing', // Example URL for the second blog
    summary: 'Certificates that are gained as an acknowledgement for my skills',
  },
  {
    id: 5,
    title: 'Meta',
    cover_image: '/image/Meta.png',
    url: 'https://drive.google.com/file/d/1l5MbNKr09IVFb6GgoPYmRmu30O2pfJ7F/view?usp=sharing', // Example URL for the second blog
    summary: 'Participated in the two Phase workshops conducted by Metaverse and done Hands-on-training sessions',
  },
  {
    id: 6,
    title: 'LinkedIn',
    cover_image: '/image/Lin.png',
    url: 'https://drive.google.com/file/d/1nQQ2rPlHUM3cAb40dmOR2aT29CfrhV-B/view?usp=sharing', // Example URL for the second blog
    summary: 'Certificates that are gained as an acknowledgement for my skills',
  },
  {
    id: 7,
    title: 'Great Learning',
    cover_image: '/image/GL.png',
    url: 'https://drive.google.com/file/d/1dC5hN6GrQimKhP7HmL32-H-Die2MuJ2E/view?usp=sharing', // Example URL for the second blog
    summary: 'Certificates that are gained as an acknowledgement for my skills',
  },
  {
    id: 8,
    title: 'Ambassador',
    cover_image: '/image/IIST.png',
    url: 'https://drive.google.com/file/d/1WdtseTKSBbrchmeUbpYqpYB6OvyFU5zt/view?usp=sharing', // Example URL for the second blog
    summary: 'I had actively worked as an IIST ambassador for one month ',
  },
  {
    id: 9,
    title: 'Coding in SkillRack',
    cover_image: '/image/SR.png',
    url: 'https://drive.google.com/file/d/1jO1mPdyP4F-jH6xnNMMEGqz1m7rUQLxS/view?usp=sharing', // Example URL for the second blog
    summary: 'Certificates that are gained as an acknowledgement for my skills in Coding',
  },
  {
    id: 10,
    title: 'Workshop',
    cover_image: '/image/Bevy.png',
    url: 'https://drive.google.com/file/d/1-k75s38esTj39antullacdACr9vzg0KQ/view?usp=sharing', // Example URL for the second blog
    summary: 'Participated in IOT workshop conducted by Bevywise',
  },
  {
    id: 11,
    title: 'Forage',
    cover_image: '/image/forage.jpeg',
    url: 'https://drive.google.com/file/d/1oCm-KY3TqzbzhyEktK7oeBfB8NBmjON3/view?usp=sharing', // Example URL for the second blog
    summary: 'Certificates that are gained as an acknowledgement for my skills from MNC Companies',
  },
  {
    id: 12,
    title: 'Amphisoft',
    cover_image: '/image/java.png',
    url: 'https://drive.google.com/file/d/1jUWsWd_hcVx5MRImWG89DHYk9Jj0oL8k/view?usp=sharing', // Example URL for the second blog
    summary: 'Had a one week value added course on Java and hands-on-training sessions',
  }
  // Add more blog objects as needed
];

async function page() {
  return (
    <div className="py-8">
      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex items-center">
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
          <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-2xl rounded-md rounded-md hover:text-pink-600">
            All Certificates
          </span>
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 md:gap-5 lg:gap-8 xl:gap-10">
        {staticBlogs.map((blog, i) => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </div>
    </div>
  );
}

export default page;
