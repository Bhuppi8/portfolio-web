const posts = [
  {
    img: "/images/blog-abstract-1.jpg",
    tag: "MARKETING",
    read: "5 min read",
    title: "Conducting in-depth research and usability testing",
  },
  {
    img: "/images/blog-abstract-1.jpg",
    tag: "MARKETING",
    read: "5 min read",
    title: "Designing cohesive strategies and visual identities",
  },
  {
    img: "/images/blog-abstract-2.jpg",
    tag: "MARKETING",
    read: "5 min read",
    title: "Providing expert advice and strategic guidance",
  },
];

export default function Blog() {
  return (
    <section id="blog" className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 text-center sm:px-10">
        <p className="mb-4 flex items-center justify-center gap-2 text-sm text-neutral-500">
          <span className="h-1.5 w-1.5 rounded-full bg-neutral-900" /> Blogs
        </p>
        <h2 className="text-4xl font-medium tracking-tight text-neutral-900 sm:text-5xl">
          Design Insights &amp; Trends
        </h2>

        <div className="mt-14 grid grid-cols-1 gap-6 text-left sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((p, i) => (
            <article key={i} className="group cursor-pointer">
              <div className="h-56 overflow-hidden rounded-3xl bg-neutral-200">
                <img
                  src={p.img}
                  alt={p.title}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
              </div>
              <div className="mt-4 flex items-center gap-3 text-xs text-neutral-500">
                <span className="rounded-full bg-neutral-900 px-3 py-1 text-[10px] font-medium tracking-wide text-white">
                  {p.tag}
                </span>
                <span>{p.read}</span>
              </div>
              <p className="mt-3 text-base text-neutral-800">{p.title}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
