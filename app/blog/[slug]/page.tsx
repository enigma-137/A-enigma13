import { getPostData, getAllPostIds } from '@/lib/mdx';
import { MDXRemote } from 'next-mdx-remote/rsc';
import Image from 'next/image';

const components = {
    Image,
    img: (props: any) => (
        <figure className="my-8">
            <img {...props} className="rounded-lg shadow-md mx-auto w-full h-auto object-cover" />
            {props.alt && (
                <figcaption className="text-center text-sm text-muted-foreground mt-2 italic">
                    {props.alt}
                </figcaption>
            )}
        </figure>
    ),
};

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
                <MDXRemote source={postData.content} components={components} />
            </article>
        </div>
    );
}
