import CategoryFilter from "@/components/home/CategoryFilter";
import Image from "next/image";
import Link from "next/link";

const blogs = [
  {
    id: 1,
    title: "10 Fun Activities to Keep Your Kids Happy and Active",
    excerpt:
      "Discover simple and fun activities that can keep your little ones entertained while helping them learn and grow.",
    category: "Activities",
    date: "Sep 10, 2026",
    image:
      "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 2,
    title: "How to Choose the Right Toys for Your Child",
    excerpt:
      "Choosing the right toy can make playtime more enjoyable and support your child's creativity, learning, and development.",
    category: "Parenting",
    date: "Sep 06, 2026",
    image:
      "https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 3,
    title: "Why Educational Toys Matter for Growing Kids",
    excerpt:
      "Educational toys can turn everyday play into an exciting learning experience for children of different ages.",
    category: "Learning",
    date: "Sep 02, 2026",
    image:
      "https://images.unsplash.com/photo-1599623560574-39d485900c95?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 4,
    title: "5 Creative Ways to Make Learning More Fun",
    excerpt:
      "Learning doesn't have to feel like work. Try these creative ideas to make learning enjoyable for your little ones.",
    category: "Learning",
    date: "Aug 28, 2026",
    image:
      "https://images.unsplash.com/photo-1504052434569-70ad5836ab65?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 5,
    title: "The Best Outdoor Games for Kids",
    excerpt:
      "Encourage your children to spend more time outdoors with these exciting and easy-to-organize games.",
    category: "Activities",
    date: "Aug 22, 2026",
    image:
      "https://images.unsplash.com/photo-1472162072942-cd5147eb3902?auto=format&fit=crop&w=900&q=80",
  },
];

// const categories = [
//   "All",
//   "Parenting",
//   "Learning",
//   "Activities",
//   "Toys",
//   "Tips & Guides",
// ];

export default function BlogPage() {
  return (
    <main className="bg-base-100">
      {/* Hero Section */}
      <section className="bg-primary">
        <div className="mx-auto max-w-7xl px-5 py-20 md:px-8 lg:py-24">
          <div className="max-w-3xl">
            <div className="mb-4 inline-flex items-center rounded-full bg-white/20 px-4 py-2 text-sm font-semibold text-white">
              ✨ Hero Kidz Blog
            </div>

            <h1 className="text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl">
              Ideas, Tips & Inspiration for Happy Kids
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-7 text-white/90 md:text-lg">
              Discover helpful parenting tips, fun activities, learning ideas,
              and everything you need to make childhood even more wonderful.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Blog */}
      <section className="mx-auto max-w-7xl px-5 py-14 md:px-8 lg:py-20">
        <div className="mb-8 flex items-end justify-between gap-4">
          <div>
            <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-primary">
              Featured Article
            </p>

            <h2 className="text-3xl font-bold text-base-content md:text-4xl">
              Latest from Hero Kidz
            </h2>
          </div>
        </div>

        <div className="grid overflow-hidden rounded-3xl bg-base-200 shadow-sm lg:grid-cols-2">
          <div className="h-72 lg:h-full">
            <Image
              src={blogs[0].image}
              alt={blogs[0].title}
              className="h-full w-full object-cover"
              height={280}
              width={300}
            />
          </div>

          <div className="flex flex-col justify-center p-7 md:p-10 lg:p-12">
            <div className="mb-4">
              <span className="badge badge-primary badge-outline">
                {blogs[0].category}
              </span>
            </div>

            <h3 className="text-2xl font-bold leading-tight text-base-content md:text-3xl">
              {blogs[0].title}
            </h3>

            <p className="mt-4 leading-7 text-base-content/70">
              {blogs[0].excerpt}
            </p>

            <div className="mt-5 text-sm text-base-content/50">
              {blogs[0].date}
            </div>

            <Link
              href={`/blog/${blogs[0].id}`}
              className="btn btn-primary mt-7 w-fit rounded-full px-6"
            >
              Read Article →
            </Link>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="bg-base-200/50">
        <div className="mx-auto max-w-7xl px-5 py-14 md:px-8 lg:py-20">
          <div className="mb-10">
            <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-primary">
              Explore Our Articles
            </p>

            <h2 className="text-3xl font-bold text-base-content md:text-4xl">
              Latest Stories
            </h2>
          </div>

          <CategoryFilter blogs={blogs} />
        </div>
      </section>

      {/* Newsletter */}
      <section className="mx-auto max-w-7xl px-5 py-14 md:px-8 lg:py-20">
        <div className="rounded-3xl bg-primary px-6 py-12 text-center md:px-12">
          <div className="mx-auto max-w-2xl">
            <h2 className="text-3xl font-bold text-white md:text-4xl">
              Stay in the Kidz Loop!
            </h2>

            <p className="mt-4 leading-7 text-white/90">
              Get the latest parenting tips, fun activities, product ideas,
              and special updates from Hero Kidz.
            </p>

            <div className="mx-auto mt-7 flex max-w-lg flex-col gap-3 sm:flex-row">
              <input
                type="email"
                placeholder="Enter your email"
                className="input w-full rounded-full bg-white text-base-content"
              />

              <button className="btn rounded-full px-7">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}