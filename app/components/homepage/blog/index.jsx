// @flow strict
import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa';
import BlogCard from './blog-card';

// Define static blog data
const staticBlogs = [
  {
    id: 1,
    title: 'Google Cloud',
    cover_image: '/image/GC.png',
    url: 'https://drive.google.com/file/d/148YOsN4Q7kDKmeshA73jaOeKdcMVCL2m/view', // Example URL for the first blog
    summary: 'Google cloud career readlines cloud digital Leader track',
  },
  {
    id: 2,
    title: 'Cisco',
    cover_image: '/image/CI.png',
    url: 'https://drive.google.com/file/d/16-BCC-kzFjPi2MyoG_Z1xWIy0C_EP7oR/view', // Example URL for the second blog
    summary: 'Cisco Training Course on Networking Essentials',
  },
  {
    id: 3,
    title: 'Infosys Springboard Certificates',
    cover_image: '/image/IS.png',
    url: 'https://drive.google.com/file/d/16BdDVNpi6uOG0gF5xlg3sgf12WrbgxXH/view', // Example URL for the second blog
    summary: 'Certificates that are gained as an acknoledgement for my skills',
  },
  {
    id: 4,
    title: 'Guvi',
    cover_image: '/image/Gu.png',
    url: 'https://drive.google.com/file/d/1LIWJphQj2yCiIMi2t69C54OfBy3Q-gUQ/view', // Example URL for the second blog
    summary: 'Certificates that are gained as an acknoledgement for my skills',
  },
  {
    id: 5,
    title: 'Meta',
    cover_image: '/image/Meta.png',
    url: 'https://drive.google.com/file/d/1l5MbNKr09IVFb6GgoPYmRmu30O2pfJ7F/view', // Example URL for the second blog
    summary: 'Certificates that are gained as an acknoledgement for my skills',
  },
  {
    id: 6,
    title: 'LinkedIn',
    cover_image: '/image/Lin.png',
    url: 'https://drive.google.com/file/d/1nQQ2rPlHUM3cAb40dmOR2aT29CfrhV-B/view', // Example URL for the second blog
    summary: 'Certificates that are gained as an acknoledgement for my skills',
  },
  // Add more blog objects as needed
];

function Blog() {
  return (
    <div id='blogs' className="relative z-50 border-t my-12 lg:my-24 border-[#25213b]">
      <div className="w-[100px] h-[100px] bg-violet-100 rounded-full absolute top-6 left-[42%] translate-x-1/2 filter blur-3xl  opacity-20"></div>

      <div className="flex justify-center -translate-y-[1px]">
        <div className="w-3/4">
          <div className="h-[1px] bg-gradient-to-r from-transparent via-violet-500 to-transparent  w-full" />
        </div>
      </div>

      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex  items-center">
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
          <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-xl rounded-md hover:text-pink-600">
            Certificates
          </span>
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 md:gap-5 lg:gap-8 xl:gap-10">
        {
          staticBlogs.map((blog) => (
            <BlogCard key={blog.id} blog={blog} />
          ))
        }
      </div>

      <div className="flex justify-center  mt-5 lg:mt-12">
        <Link
          className="flex items-center gap-1 hover:gap-3 rounded-full bg-gradient-to-r from-pink-500 to-violet-600 px-3 md:px-8 py-3 md:py-4 text-center text-xs md:text-sm font-medium uppercase tracking-wider text-white no-underline transition-all duration-200 ease-out hover:text-white hover:no-underline md:font-semibold"
          role="button"
          href="/blog"
        >
          <span>View More</span>
          <FaArrowRight size={16} />
        </Link>
      </div>
    </div>
  );
}

export default Blog;
