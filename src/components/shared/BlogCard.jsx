
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function BlogCard({ post }) {
  if (!post) {
    return null;
  }

  return (
    <Link href={`/blogs/${post.slug}`} passHref>
      <div className="relative group aspect-w-16 aspect-h-9 sm:aspect-h-10 lg:aspect-h-11 overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out cursor-pointer">
        <Image
          src={post.image}
          alt={post.title}
          layout="fill"
          objectFit="cover"
          className="transition-transform duration-300 ease-in-out group-hover:scale-105"
          data-ai-hint={post.dataAiHint || "blog topic"}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out"></div>
        <div className="absolute inset-0 flex flex-col justify-end p-4 sm:p-6 text-white transform translate-y-1/2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out delay-100">
          <h3 className="text-lg sm:text-xl font-semibold mb-1 sm:mb-2 line-clamp-2">
            {post.title}
          </h3>
          <p className="text-xs sm:text-sm text-slate-200 mb-2 sm:mb-3 line-clamp-2 sm:line-clamp-3">
            {post.excerpt}
          </p>
          <div className="text-primary font-medium text-sm flex items-center group-hover:underline">
            Read More
            <ArrowRight className="ml-1 h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
          </div>
        </div>
      </div>
    </Link>
  );
}
