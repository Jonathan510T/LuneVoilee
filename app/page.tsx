// app/page.tsx  – SERVER component
import fs   from 'fs/promises';
import path from 'path';
import Image      from 'next/image';
import Link       from 'next/link';

import Navigation from './components/Navigation';
import Footer     from './components/Footer';
import Hero       from './components/Hero';
import Gallery    from './components/Gallery';

/* ------------------------------------------------------------
   Build a list of gallery images from /public/images/gallery/
   ------------------------------------------------------------ */
async function getGalleryImages() {
  const dir   = path.join(process.cwd(), 'public', 'images', 'gallery');
  const files = await fs.readdir(dir);                        // ["DSC_1966.JPG", …]
  return files
    .filter(f => /\.(jpe?g)$/i.test(f))                       // only jpg / jpeg
    .map(f => `/images/gallery/${f}`);                        // browser path
}

/* ------------------------------------------------------------
   Page
   ------------------------------------------------------------ */
export default async function HomePage() {
  
  const gallery = await getGalleryImages();                // e.g. 25+ images

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <Hero />

      {/* ------------- Category tiles ------------------------- */}
      <section className="py-16 bg-black">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">

          <Tile
            href="/products/best-sellers"
            title="Best Sellers"
            src="/images/IMG_6502.jpg"
          />

          <Tile
            href="/products/hoodies"
            title="Hoodies"
            src="/images/IMG_6503.jpg"
          />

          <Tile
            href="/products/shirts"
            title="Shirts"
            src="/images/IMG_6504.jpg"
          />
        </div>
      </section>

      {/* ------------- Gallery section ------------------------ */}
      <section className="py-16 bg-neutral-100">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-lg sm:text-xl font-semibold mb-6 text-black">
            Follow us on Instagram&nbsp;
            <span className="text-yellow-600">@LuneVoilee</span>
          </h2>

          {/* client component with full-screen light-box */}
          <Gallery images={gallery} />
        </div>
      </section>

      <Footer />
    </div>
  );
}

/* ------------------------------------------------------------
   Re-usable tile for Best Sellers / Hoodies / Shirts
   ------------------------------------------------------------ */
function Tile({ href, title, src }: { href: string; title: string; src: string }) {
  return (
    <div className="relative overflow-hidden group h-[38.4rem]">
      <Image
        src={src}
        alt={title}
        fill
        sizes="(max-width: 768px) 100vw, 33vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />
      <div className="absolute bottom-6 left-6">
        <h3 className="text-white text-3xl font-semibold mb-4">{title}</h3>
        <Link
          href={href}
          className="bg-black text-white text-lg px-6 py-3 rounded transition-colors duration-500 hover:bg-yellow-500 hover:text-black"
        >
          View Products
        </Link>
      </div>
    </div>
  );
}
