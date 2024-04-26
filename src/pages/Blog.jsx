import { useEffect, useState } from "react";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";

import BlogMD from "../data/React1.md";

const Blog = ({ blogData }) => {
    const [markdown, setMarkdown] = useState("");

    async function fetchMarkdownFile() {
        const res = await fetch(BlogMD);
        const text = await res.text();

        setMarkdown(text);
    }

    useEffect(() => {
        fetchMarkdownFile();
    }, []);

    return (
        <article>
            <div className={`w-full h-[60vh] bg-[url('./React1.jpg')] bg-cover bg-center top-0 left-0 -z-10 sticky`}></div>

            <div className="w-full bg-white border-t-8 border-black">
                <div className="max-w-4xl mx-auto bg-white px-4">
                    <div className="page-header text-lg md:text-2xl leading-none p=4">
                        <h1 className="page-title text-2xl md:text-7xl my-6">
                            Learning the Basics of React with ViteJS
                        </h1>
                        {/* <div className="page-subtitle my-4">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, nostrum.
                        </div> */}
                        <div className="page-details my-4 text-gray-600">
                            Published on: 2024/04/26
                        </div>
                    </div>

                    <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />

                    <div className="content prose md:prose-2xl">
                        <Markdown
                            remarkPlugins={[remarkGfm]}
                            rehypePlugins={[rehypeRaw]}
                        >
                            {markdown}
                        </Markdown>
                    </div>
                </div>
            </div>
        </article>
    );
};

export default Blog;
