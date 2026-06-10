import { Link } from "wouter";
import PageHero from "@/components/PageHero";

export default function Testimonials() {
  return (
    <div>
      <PageHero label="Client Reviews" title="What Our Clients Say" subtitle="Real reviews from real clients. We are proud of the relationships we build and the results we deliver." />
      <section className="section-cream py-20 md:py-28">
        <div className="container">
          <div className="max-w-3xl mx-auto space-y-8">
            <div className="border border-[oklch(0.88_0.01_80)] bg-white p-8 rounded-sm">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (<svg key={i} className="w-5 h-5 text-[oklch(0.62_0.12_75)]" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>))}
              </div>
              <p className="text-[oklch(0.30_0.01_260)] leading-relaxed italic text-lg mb-6">"Susan did an outstanding job on my taxes. Professional, efficient, and highly knowledgeable. I'm impressed with their service. Highly recommend!"</p>
              <p className="text-[oklch(0.15_0.01_260)] font-medium">Andre Eguigure</p>
              <p className="text-[oklch(0.50_0.01_260)] text-sm mt-1">Verified Google Review</p>
            </div>
            <div className="border border-[oklch(0.88_0.01_80)] bg-white p-8 rounded-sm">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (<svg key={i} className="w-5 h-5 text-[oklch(0.62_0.12_75)]" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>))}
              </div>
              <p className="text-[oklch(0.30_0.01_260)] leading-relaxed italic text-lg mb-6">"Highly recommend Susan she handled my taxes professionally, saving me time and is knowledgeable!"</p>
              <p className="text-[oklch(0.15_0.01_260)] font-medium">The Feminine Development</p>
              <p className="text-[oklch(0.50_0.01_260)] text-sm mt-1">Verified Google Review</p>
            </div>
          </div>
          <div className="text-center mt-12">
            <p className="text-[oklch(0.50_0.01_260)] mb-6">5.0 rating on Google Business Profile</p>
            <Link href="/book" className="btn-gold rounded-sm inline-block">Become Our Next Success Story</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
