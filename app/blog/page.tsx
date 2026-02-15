
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card"

import { Button } from '@/components/ui/button';
import Link from "next/link";
import { getSortedPostsData } from "@/lib/mdx";

// This is a Server Component by default in App Router
export default function BlogPage() {
  const allPostsData = getSortedPostsData() as { id: string; date: string; title: string; intro?: string; description?: string }[];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center font-sans">My Blog</h1>
      <div className="grid grid-cols-1  gap-6">
        {allPostsData.length > 0 ? (
          allPostsData.map((post) => (
            <Card key={post.id} className=" rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105">
              <CardContent className="p-6 font-sans">
                <CardTitle className="text-xl font-semibold ">{post.title}</CardTitle>
                <CardDescription className="text-gray-400 mb-4">{post.description || post.intro}</CardDescription>
                <div className="text-sm text-gray-500 mb-4">{post.date}</div>
                <Button className="mt-4" asChild>
                  <Link href={`/blog/${post.id}`}>
                    Read More
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))
        ) : (
          <p className="text-center text-gray-500">No blog posts found.</p>
        )}
      </div>
    </div>

  );
}
