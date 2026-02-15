import { getPostData, getAllPostIds } from '@/lib/mdx';
import { MDXRemote } from 'next-mdx-remote/rsc';

export async function generateStaticParams() {
    const paths = getAllPostIds();
    return paths.map((path) => ({
        slug: path.params.slug,
    }));
}

export default async function Post({ params }: { params: { slug: string } }) {
    const postData: any = await getPostData(params.slug);

    return (
        <div className="container mx-auto px-4 py-8">
            <article className="prose lg:prose-xl dark:prose-invert mx-auto">
                <h1 className="text-3xl font-bold mb-4">{postData.title}</h1>
                <div className="text-gray-500 mb-8">{postData.date}</div>
                <MDXRemote source={postData.content} />
            </article>
        </div>
    );
}
