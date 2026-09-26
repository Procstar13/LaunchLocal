import Image from 'next/image'
import Link from 'next/link'

export default function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-line">
      <div className="page-shell grid min-h-[760px] min-w-0 items-center gap-12 py-16 lg:grid-cols-[1.02fr_0.98fr] lg:py-24">
        <div className="relative z-10 min-w-0 max-w-2xl">
          <div className="eyebrow">For Arizona service businesses</div>
          <h1 className="font-display text-[clamp(2.7rem,7vw,6.6rem)] font-extrabold leading-[0.93] tracking-[-0.065em] text-text-primary">
            <span className="block">Get found locally.</span>
            <span className="mt-1 block text-rust">Turn searches into customers.</span>
          </h1>
          <p className="mt-8 max-w-xl text-xl leading-8 text-text-secondary sm:text-2xl sm:leading-9">
            We help Arizona service businesses get found and turn local searches into customers. We build and manage your website, Google presence, local SEO, and reviews for $399/month with a $750 initial setup.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link href="/?plan=Growth#contact" className="btn-primary w-full sm:w-auto">
              Grow my business
              <span aria-hidden="true" className="ml-2">↗</span>
            </Link>
            <Link href="/pricing" className="btn-secondary w-full sm:w-auto">See plans and pricing</Link>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-x-5 gap-y-3 border-t border-line pt-6 text-sm font-semibold text-text-secondary sm:flex sm:flex-wrap sm:gap-x-8">
            <span>Website</span>
            <span>Google presence</span>
            <span>Local SEO</span>
            <span>Reviews</span>
          </div>
        </div>

        <div className="relative min-w-0 lg:pl-8">
          <div className="absolute -right-20 -top-24 h-64 w-64 rounded-full border border-rust/25" />
          <div className="absolute -right-7 -top-11 h-32 w-32 rounded-full bg-sun/70" />
          <div className="relative rotate-[1.5deg] overflow-hidden rounded-[2rem] border border-text-primary/15 bg-white p-3 shadow-[0_30px_80px_rgba(25,38,33,0.16)]">
            <Image
              src="/Images/Carousel/desert-air.png"
              alt="Desert Air Heating & Cooling website"
              width={1024}
              height={547}
              priority
              className="h-auto w-full rounded-[1.35rem]"
            />
          </div>
          <div className="relative -mt-4 ml-5 max-w-sm -rotate-1 rounded-2xl border border-line bg-background px-5 py-4 shadow-lg sm:ml-10">
            <p className="font-display text-sm font-extrabold text-text-primary">Show up when locals search.</p>
            <p className="mt-1 text-sm text-text-secondary">Website, Google, local search, and reviews — managed for you.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
