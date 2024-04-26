import React from "react";

const Articles = () => {
    return (
        <section className="pb-4">
            <div className="home-hero min-h-[60vh] flex flex-col justify-center items-center gap-8 bg-slate-200">
                <div className="title text-2xl lg:text-5xl font-extrabold text-center">
                    Unlocking the World of Code: A Journey of Learning
                </div>
                <div className="tagline text-lg lg:text-xl text-center">
                    Follow along as I delve deeper into the realm of
                    programming, sharing insights and discoveries along the way.
                </div>
            </div>

            <div className="max-w-4xl mx-auto">
                <div className="text-4xl px-4 text-center my-4">Posts</div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-4">
                    <a className="border border-black transition duration-300 cursor-pointer hover:shadow-black-8 hover:-translate-x-2 hover:-translate-y-2 rounded-lg">
                        <img
                            src="React1.jpg"
                            alt="React Image"
                            className="w-full"
                        />
                        <div className="card-text py-6 px-4 text-xl">
                            <div className="text-lg">April 26, 2024</div>
                            <div className="text-4xl py-4">
                                Learning the Basics of React with ViteJS
                            </div>
                            <div className="text-xl py-4">
                                Dive into the world of React with ViteJS and
                                embark on a journey to master the fundamentals
                                of building dynamic user interfaces.
                            </div>

                            <div className="font-bold">Read More &rarr;</div>
                        </div>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Articles;
