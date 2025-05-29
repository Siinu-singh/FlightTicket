
import { BlogCard } from "@/components/shared/BlogCard";
import { SectionTitle } from "@/components/shared/SectionTitle";
import { HeroSection } from "@/components/shared/HeroSection";
import blogsData from "@/data/blogs.json";
import Image from "next/image";

export const metadata = {
  title: 'Travel Blogs - Tips, Stories, and Guides',
  description: 'Explore our collection of travel blogs for inspiration, tips, and exciting stories from around the world.',
};

async function getAllBlogPosts() {
  return blogsData;
}

export default async function BlogsPage() {
  const posts = await getAllBlogPosts();
  // New transparent PNG airplane image URL
  const overlappingAirplaneImageUrl = "https://w7.pngwing.com/pngs/391/193/png-transparent-airplane-aircraft-belfast-airport-bus-airplane-mode-of-transport-cargo-flight-thumbnail.png";

  return (
    <>
      <div className="relative"> {/* Wrapper to establish positioning context */}
        <HeroSection
          title="Our Travel Blog"
          paragraph="Get inspired with our latest travel stories, tips, and destination guides."
          imageUrl="https://img.freepik.com/free-photo/airplane_74190-464.jpg?uid=R202168573&ga=GA1.1.1575231207.1748452014&semt=ais_items_boosted&w=740"
          imageAlt="Airplane in the sky" 
          imageHint="airplane sky" 
          heightClassName="h-[50vh]" 
          showButton={false}
          contentAlignment="justify-center text-center"
          textMaxWidth="max-w-3xl"
          overlayOpacity="bg-black/30 dark:bg-black/50"
        />
        
        {/* Overlapping Airplane Element */}
        <div
          className="absolute w-full flex justify-center 
                     bottom-[-30px] sm:bottom-[-40px] md:bottom-[-50px] lg:bottom-[-60px] 
                     left-0 right-0 z-20 pointer-events-none"
        >
          <div className="w-1/2 sm:w-2/5 md:w-1/3 lg:w-1/4 xl:w-1/5 bg-transparent">
            <Image
              src={overlappingAirplaneImageUrl}
              alt="Airplane flying over content"
              width={360} 
              height={203} 
              className="drop-shadow-2xl" 
              data-ai-hint="airplane vehicle png"
            />
          </div>
        </div>
      </div>

      {/* Latest Articles Section */}
      <div className="bg-card text-card-foreground py-12 md:py-16 pt-20 sm:pt-24 md:pt-28 lg:pt-32"> {/* Increased padding-top */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="Latest Articles"
            subtitle="Dive into our fresh content and get inspired for your next adventure."
            className="mb-10 md:mb-16"
          />
          {posts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
              {posts.map((post) => (
                <BlogCard key={post.id} post={post} />
              ))}
            </div>
          ) : (
            <p className="text-center text-muted-foreground">No blog posts available at the moment. Please check back later.</p>
          )}
        </div>
      </div>
    </>
  );
}
