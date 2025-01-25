"use client";

import Image from 'next/image';
import Link from 'next/link';
import { Link as LinkIcon } from 'lucide-react'; // Renamed to avoid conflict with Next.js Link

function BlogCard({ blog }) {
  return (
    <div className="border border-[#1d293a] hover:border-[#464c6a] transition-all duration-500 bg-[#1b203e] rounded-lg relative group">
      <div className="h-44 lg:h-52 w-auto cursor-pointer overflow-hidden rounded-t-lg">
        <Image
          src={blog.cover_image} // Adjust path based on your project structure
          height={1080}
          width={1920}
          alt={blog.title} // Added alt for better accessibility
          className="h-full w-full group-hover:scale-110 transition-all duration-300"
        />
      </div>
      <div className="p-2 sm:p-3 flex flex-col relative">
        <Link target="_blank" href={blog.url}>
          <p
            className="my-2 lg:my-3 cursor-pointer text-lg text-white sm:text-xl font-medium hover:text-violet-500 flex items-center group"
          >
            {blog?.title}
            <LinkIcon className="ml-2 h-5 w-5 text-white group-hover:text-violet-500 transition-all duration-300" />
          </p>
        </Link>
        <p className="text-sm lg:text-base text-[#d3d8e8] pb-3 lg:pb-6 line-clamp-3">
          {blog?.summary}
        </p>
        {/* Hover hint */}
        <span className="absolute top-full mt-2 text-xs text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          Click to view the Certificate
        </span>
      </div>
    </div>
  );
}

export default BlogCard;
