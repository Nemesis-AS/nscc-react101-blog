import { createClient } from "@supabase/supabase-js";
import { useEffect, useState } from "react";

import PostCard from "../components/PostCard";

const supabase = createClient(import.meta.env.VITE_SUPABASE_URL, import.meta.env.VITE_SUPABASE_KEY);

const Articles = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        async function fetchPosts() {
            const { data } = await supabase.from("posts").select("id, slug, title, image, description, author, created_at");
            
            setPosts(data);
        }

        fetchPosts();
    }, []);

    return (
        <section className="pb-4">
            <div className="min-h-[60vh] flex flex-col justify-center items-center gap-8 bg-slate-200">
                <div className="text-2xl lg:text-5xl font-extrabold text-center">
                    Unlocking the World of Code: A Journey of Learning
                </div>
                <div className="text-lg lg:text-xl text-center">
                    Follow along as I delve deeper into the realm of
                    programming, sharing insights and discoveries along the way.
                </div>
            </div>

            <div className="max-w-4xl mx-auto">
                <div className="text-4xl px-4 text-center my-4">Posts</div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-4">
                    {
                        posts.map(post => <PostCard key={post.id} data={post} />)
                    }
                </div>
            </div>
        </section>
    );
};

export default Articles;
