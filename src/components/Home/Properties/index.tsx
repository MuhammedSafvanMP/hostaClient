import { Icon } from '@iconify/react'
import PropertyCard from './Card/Card'
import { propertyHomes } from '@/app/api/propertyhomes'
import Link from 'next/link'

const Properties: React.FC = () => {
  return (
    <section className='bg-dark'>
      <div className='container max-w-8xl mx-auto px-5 2xl:px-0'>
        <div className='mb-16 flex flex-col gap-3'>
          <div className='flex gap-2.5 items-center justify-center'>
            {/* Optional icon if you want */}
            {/* <Icon icon="ph:house-simple-fill" className="text-2xl text-primary" /> */}
          </div>
          <h2 className='text-40 lg:text-52 font-medium text-white text-center tracking-tight leading-11 mb-2'>
            Discover inspiring designed homes.
          </h2>
          <p className='text-xm font-normal text-white/50 text-center'>
            Curated homes where elegance, style, and comfort unite.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-5">
          {propertyHomes.slice(0, 6).map((item, index) => (
            <div key={index}>
              <PropertyCard item={item} textColor={"text-white"} />
            </div>
          ))}
        </div>

        {/* ✅ Added Explore Button */}
        <div className="flex justify-center mt-10">
          <Link
            href="/properties"
            className="inline-block bg-primary hover:bg-white text-white hover:text-dark font-semibold px-6 py-3 rounded-full transition duration-300"
          >
            Explore More
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Properties
