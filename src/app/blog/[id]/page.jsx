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
    author: "Hero Kidz Team",
    image:
      "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=1200&q=80",
    content: [
      "Keeping children active and engaged doesn't always require expensive toys or complicated activities. Sometimes, the simplest ideas can create the most memorable moments.",
      "Outdoor activities are a great way to encourage children to move, explore, and use their imagination. Playing catch, riding a bicycle, drawing with sidewalk chalk, or simply exploring the garden can turn an ordinary afternoon into an adventure.",
      "Indoor activities can be just as exciting. Building blocks, puzzles, drawing, storytelling, and simple craft projects can help children develop creativity and problem-solving skills while having fun.",
      "The most important thing is to choose activities that match your child's interests and age. Let them explore, make mistakes, and enjoy the process.",
    ],
  },
  {
    id: 2,
    title: "How to Choose the Right Toys for Your Child",
    excerpt:
      "Choosing the right toy can make playtime more enjoyable and support your child's creativity, learning, and development.",
    category: "Parenting",
    date: "Sep 06, 2026",
    author: "Hero Kidz Team",
    image:
      "https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?auto=format&fit=crop&w=1200&q=80",
    content: [
      "Choosing a toy for your child can sometimes feel overwhelming because there are so many options available.",
      "A good starting point is to think about your child's age, interests, and developmental stage. Toys that encourage creativity, problem solving, and imaginative play can provide more than just entertainment.",
      "It's also useful to choose toys that allow children to interact with them in different ways. Building blocks, art supplies, puzzles, and pretend-play toys can often be used repeatedly in new and creative ways.",
      "Most importantly, make sure the toy is safe and appropriate for your child's age.",
    ],
  },
  {
    id: 3,
    title: "Why Educational Toys Matter for Growing Kids",
    excerpt:
      "Educational toys can turn everyday play into an exciting learning experience for children of different ages.",
    category: "Learning",
    date: "Sep 02, 2026",
    author: "Hero Kidz Team",
    image:
      "https://images.unsplash.com/photo-1599623560574-39d485900c95?auto=format&fit=crop&w=1200&q=80",
    content: [
      "Children naturally learn through play. Educational toys can make this process even more engaging by combining fun with useful learning experiences.",
      "Puzzles can help children develop problem-solving skills, while building toys can introduce concepts such as balance, shapes, and basic engineering.",
      "Books, drawing materials, and creative toys can also help children improve their communication and imagination.",
      "The goal isn't to make every play session a lesson. Instead, educational toys should make learning feel natural and enjoyable.",
    ],
  },
  {
    id: 4,
    title: "5 Creative Ways to Make Learning More Fun",
    excerpt:
      "Learning doesn't have to feel like work. Try these creative ideas to make learning enjoyable for your little ones.",
    category: "Learning",
    date: "Aug 28, 2026",
    author: "Hero Kidz Team",
    image:
      "https://images.unsplash.com/photo-1504052434569-70ad5836ab65?auto=format&fit=crop&w=1200&q=80",
    content: [
      "Learning becomes much more enjoyable when children can explore ideas through activities that feel like play. With a little creativity, everyday learning can become an exciting experience.",
      "One simple approach is to turn lessons into games. For example, you can use cards, puzzles, or small challenges to help children practice numbers, words, shapes, and other concepts.",
      "Creative activities such as drawing, storytelling, building, and role-playing can also help children understand new ideas while encouraging their imagination.",
      "Another great way to make learning fun is to connect it with everyday life. Cooking can introduce basic measurements, shopping can teach simple mathematics, and nature walks can become an opportunity to learn about plants and animals.",
      "The goal is to create an environment where children feel curious and comfortable asking questions. When learning feels enjoyable, children are more likely to stay interested and explore new ideas.",
    ],
  },
  {
    id: 5,
    title: "The Best Outdoor Games for Kids",
    excerpt:
      "Encourage your children to spend more time outdoors with these exciting and easy-to-organize games.",
    category: "Activities",
    date: "Aug 22, 2026",
    author: "Hero Kidz Team",
    image:
      "https://images.unsplash.com/photo-1472162072942-cd5147eb3902?auto=format&fit=crop&w=1200&q=80",
    content: [
      "Outdoor play is a wonderful way for children to stay active, have fun, and spend quality time with friends and family. You don't need expensive equipment to create an enjoyable outdoor experience.",
      "Classic games such as tag, hide-and-seek, and relay races are easy to organize and can keep children moving for hours. They also encourage children to interact and work together.",
      "Ball games are another great option. Simple games like catch, football, or a friendly throwing competition can help children develop coordination and teamwork.",
      "You can also make outdoor play more creative by organizing a treasure hunt. Hide small objects around a safe area and give children simple clues to help them find them.",
      "Most importantly, outdoor activities should be safe and age-appropriate. Give children enough space to play, keep an eye on them, and let them enjoy exploring and having fun.",
    ],
  },
];

export default async function BlogDetailsPage({ params }) {
  const { id } = await params;

  const blog = blogs.find((item) => item.id === Number(id));

  if (!blog) {
    return (
      <main className="flex min-h-[60vh] items-center justify-center px-5">
        <div className="text-center">
          <h1 className="text-4xl font-bold">Blog Not Found</h1>
          <p className="mt-3 text-base-content/60">
             Sorry, we couldn&apos;t find the blog you&apos;re looking for.
          </p>

          <Link
            href="/blog"
            className="btn btn-primary mt-6 rounded-full px-6"
          >
            ← Back to Blog
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="bg-base-100">
      {/* Hero Image */}
      <section className="relative h-75 md:h-105 lg:h-125">
        <Image
          src={blog.image}
          alt={blog.title}
          className="h-full w-full object-cover"
          height={400}
          width={400}
        />

        <div className="absolute inset-0 bg-black/45" />

        <div className="absolute inset-0 flex items-center">
          <div className="mx-auto w-full max-w-5xl px-5 md:px-8">
            <div className="max-w-4xl">
              <span className="badge badge-primary mb-5 border-none px-4 py-3 text-sm text-white">
                {blog.category}
              </span>

              <h1 className="text-3xl font-bold leading-tight text-white md:text-5xl lg:text-6xl">
                {blog.title}
              </h1>

              <div className="mt-5 flex flex-wrap items-center gap-3 text-sm text-white/85">
                <span>By {blog.author}</span>
                <span>•</span>
                <span>{blog.date}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Article */}
      <section className="mx-auto max-w-4xl px-5 py-12 md:px-8 md:py-16">
        {/* Back Button */}
        <Link
          href="/blog"
          className="mb-10 inline-flex items-center gap-2 font-semibold text-primary hover:underline"
        >
          ← Back to Blog
        </Link>

        {/* Intro */}
        <p className="mb-10 text-lg font-medium leading-8 text-base-content/70 md:text-xl">
          {blog.excerpt}
        </p>

        {/* Article Content */}
        <article className="space-y-7">
          {blog.content.map((paragraph, index) => (
            <p
              key={index}
              className="text-base leading-8 text-base-content/75 md:text-lg"
            >
              {paragraph}
            </p>
          ))}
        </article>

        {/* Share / Bottom Section */}
        <div className="mt-14 border-t border-base-300 pt-8">
          <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-center">
            <div>
              <p className="font-semibold">Enjoyed this article?</p>
              <p className="mt-1 text-sm text-base-content/60">
                Explore more helpful articles from Hero Kidz.
              </p>
            </div>

            <Link
              href="/blog"
              className="btn btn-primary rounded-full px-6"
            >
              Explore More Articles
            </Link>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      <section className="bg-base-200/50">
        <div className="mx-auto max-w-7xl px-5 py-14 md:px-8 lg:py-16">
          <div className="mb-8">
            <p className="text-sm font-semibold uppercase tracking-wider text-primary">
              Keep Reading
            </p>

            <h2 className="mt-2 text-3xl font-bold">
              You May Also Like
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {blogs
              .filter((item) => item.id !== blog.id)
              .slice(0, 3)
              .map((item) => (
                <Link
                  href={`/blog/${item.id}`}
                  key={item.id}
                  className="card overflow-hidden bg-base-100 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
                >
                  <figure className="h-48">
                    <Image
                      src={item.image}
                      alt={item.title}
                      className="h-full w-full object-cover"
                      height={192}
                      width={192}
                    />
                  </figure>

                  <div className="card-body">
                    <span className="badge badge-primary badge-outline w-fit">
                      {item.category}
                    </span>

                    <h3 className="card-title text-lg leading-snug">
                      {item.title}
                    </h3>

                    <p className="text-sm text-base-content/60">
                      {item.date}
                    </p>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </section>
    </main>
  );
}

