import FeaturedProperty from '@/components/Home/FeaturedProperty'
import Hero from '@/components/Home/Hero'
import Properties from '@/components/Home/Properties'
import Services from '@/components/Home/Services'
import Testimonial from '@/components/Home/Testimonial'
import BlogSmall from '@/components/shared/Blog'
import GetInTouch from '@/components/Home/GetInTouch'
import FAQ from '@/components/Home/FAQs'
// import FindHostel from '@/components/filter.tsx/page'

export default function Home() {
  return (
    <main>
      <Hero />
      {/* <FindHostel /> */}
      <Services />
      <Properties />
      <FeaturedProperty />
      <Testimonial />
      <BlogSmall />
      <GetInTouch />
      <FAQ />
    </main>
  )
}
