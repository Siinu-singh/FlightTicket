
import blogsData from "@/data/blogs.json";
import { notFound } from "next/navigation";
import Image from "next/image";
import { SectionTitle } from "@/components/shared/SectionTitle";
import { CalendarDays, UserCircle } from "lucide-react";

async function getPostBySlug(slug) {
  return blogsData.find(post => post.slug === slug);
}

export async function generateMetadata({ params }) {
  const post = await getPostBySlug(params.slug);

  if (!post) {
    return {
      title: 'Blog Post Not Found | FlightTicket',
    };
  }

  return {
    title: `${post.title} | FlightTicket Blog`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [
        {
          url: post.image,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
  };
}

export default async function BlogPostPage({ params }) {
  const post = await getPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  // Simulate author and date
  const author = "FlightTicket Team";
  const datePublished = new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });


  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
      <article className="max-w-3xl mx-auto">
        <header className="mb-8">
          <SectionTitle title={post.title} className="text-left mb-4" />
          <div className="flex flex-col sm:flex-row sm:items-center text-muted-foreground text-sm space-y-2 sm:space-y-0 sm:space-x-4">
            <div className="flex items-center">
              <UserCircle className="h-4 w-4 mr-1.5 text-primary" />
              <span>By {author}</span>
            </div>
            <div className="flex items-center">
              <CalendarDays className="h-4 w-4 mr-1.5 text-primary" />
              <span>Published on {datePublished}</span>
            </div>
          </div>
        </header>

        {post.image && (
          <div className="relative w-full h-64 sm:h-80 md:h-96 rounded-lg overflow-hidden shadow-xl mb-8">
            <Image
              src={post.image}
              alt={post.title}
              layout="fill"
              objectFit="cover"
              priority
              data-ai-hint={post.dataAiHint || "blog image"}
            />
          </div>
        )}

        <div className="prose prose-lg dark:prose-invert max-w-none mx-auto text-foreground leading-relaxed">
          <p className="text-xl mb-6 font-medium">{post.excerpt}</p>
          
          {post.content && (
            <p>{post.content}</p>
          )}
        </div>
      </article>
    </div>
  );
}

// Add some basic prose styling for Tailwind
// You might want to add @tailwindcss/typography plugin for more extensive prose styling
// If not already added, you can add it to globals.css:
/*
@layer base {
  .prose { @apply text-gray-700 dark:text-gray-300; }
  .prose h1 { @apply text-3xl font-bold mb-4 text-gray-900 dark:text-white; }
  .prose h2 { @apply text-2xl font-semibold mb-3 text-gray-900 dark:text-white; }
  .prose h3 { @apply text-xl font-semibold mb-2 text-gray-900 dark:text-white; }
  .prose p { @apply mb-4; }
  .prose a { @apply text-primary hover:underline; }
  .prose ul { @apply list-disc list-inside mb-4 pl-4; }
  .prose ol { @apply list-decimal list-inside mb-4 pl-4; }
  .prose blockquote { @apply border-l-4 border-gray-300 dark:border-gray-600 pl-4 italic my-4 text-gray-600 dark:text-gray-400; }
}
*/
