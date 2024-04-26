import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";

import { useParams } from "react-router-dom";

const supabase = createClient(import.meta.env.VITE_SUPABASE_URL, import.meta.env.VITE_SUPABASE_KEY);

const Blog = () => {
    const [postData, setPostData] = useState({});
    const { slug } = useParams();

    const formatDate = (stamp) => {
        const date = new Date(stamp);
        const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul","Aug", "Sep", "Oct", "Nov", "Dec"];
        return `${MONTHS[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;
    };

    useEffect(() => {
        async function fetchPostData() {
            const { data } = await supabase.from("posts").select().eq("slug", slug);

            if (data.length === 0) return;

            setPostData(data[0]);
        }

        fetchPostData();
    }, [slug]);

    return (
        <article>
            <div style={{ backgroundImage: `url(${postData.image})` }} className={`w-full h-[60vh] bg-cover bg-center top-0 left-0 -z-10 sticky`}></div>

            <div className="w-full bg-white border-t-8 border-black">
                <div className="max-w-4xl mx-auto bg-white px-4">
                    <div className="page-header text-lg md:text-2xl leading-none p=4">
                        <h1 className="page-title text-2xl md:text-7xl my-6">
                            { postData.title || "<Post Title>" }
                        </h1>
                        <div className="page-subtitle my-4">
                            { postData.description || "<Post Description>" }
                        </div>
                        <div className="page-details my-4 text-gray-600">
                            Published on: { formatDate(postData.created_at || Date.now()) }
                        </div>
                    </div>

                    <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />

                    <div className="content prose md:prose-2xl">
                        <Markdown
                            remarkPlugins={[remarkGfm]}
                            rehypePlugins={[rehypeRaw]}
                        >
                            { postData.content || "# Hello World" }
                        </Markdown>
                    </div>
                </div>
            </div>
        </article>
    );
};

export default Blog;
