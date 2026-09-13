import ContactForm from "@/components/home/ContactForm";
import Link from "next/link";

export default function ContactPage() {

  return (
    <main className="bg-base-100">
      {/* Hero Section */}
      <section className="bg-primary">
        <div className="mx-auto max-w-7xl px-5 py-16 md:px-8 lg:py-20">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-4 inline-flex items-center rounded-full bg-white/20 px-4 py-2 text-sm font-semibold text-white">
              💬 Get in Touch
            </div>

            <h1 className="text-4xl font-bold leading-tight text-white md:text-5xl">
              We&apos;d Love to Hear From You
            </h1>

            <p className="mt-5 text-base leading-7 text-white/90 md:text-lg">
              Have a question about our products or need some help? Our team
              is here to help you.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="mx-auto max-w-7xl px-5 py-14 md:px-8 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-5">
          {/* Contact Information */}
          <div className="lg:col-span-2">
            <p className="text-sm font-semibold uppercase tracking-wider text-primary">
              Contact Us
            </p>

            <h2 className="mt-2 text-3xl font-bold md:text-4xl">
              Let&apos;s Talk
            </h2>

            <p className="mt-5 max-w-lg leading-7 text-base-content/65">
              Whether you have a question about a product, an order, or
              anything else, feel free to reach out. We&apos;re always happy to
              help.
            </p>

            <div className="mt-8 space-y-5">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-xl">
                  ✉️
                </div>

                <div>
                  <p className="font-semibold">Email</p>
                  <p className="mt-1 text-sm text-base-content/60">
                    hello@herokidz.com
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-xl">
                  📞
                </div>

                <div>
                  <p className="font-semibold">Phone</p>
                  <p className="mt-1 text-sm text-base-content/60">
                    +880 1234-567890
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-xl">
                  📍
                </div>

                <div>
                  <p className="font-semibold">Address</p>
                  <p className="mt-1 text-sm leading-6 text-base-content/60">
                    Chattogram, Bangladesh
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-xl">
                  🕐
                </div>

                <div>
                  <p className="font-semibold">Business Hours</p>
                  <p className="mt-1 text-sm leading-6 text-base-content/60">
                    Saturday - Thursday
                    <br />
                    9:00 AM - 6:00 PM
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3">
            <div className="rounded-3xl border border-base-200 bg-base-100 p-6 shadow-sm md:p-8">
              <h3 className="text-2xl font-bold">Send Us a Message</h3>

              <p className="mt-2 text-sm text-base-content/60">
                Fill out the form below and we&apos;ll get back to you soon.
              </p>

              <ContactForm/>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-base-200/50">
        <div className="mx-auto max-w-7xl px-5 py-14 text-center md:px-8">
          <h2 className="text-3xl font-bold">
            Looking for something special?
          </h2>

          <p className="mx-auto mt-3 max-w-xl text-base-content/60">
            Explore our collection of products made for little ones.
          </p>

          <Link
            href="/products"
            className="btn btn-primary mt-6 rounded-full px-7"
          >
            Shop Now →
          </Link>
        </div>
      </section>
    </main>
  );
}

