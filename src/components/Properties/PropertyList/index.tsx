import PropertyCard from '@/components/Home/Properties/Card/Card'
import { propertyHomes } from '@/app/api/propertyhomes'

const PropertiesListing: React.FC = () => {
  return (
    <section className='pt-0!'>
      <div className='container max-w-8xl mx-auto px-5 2xl:px-0'>
        {/* <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10'> */}
                  {/* <div className="grid grid-cols-2 lg:grid-cols-3 gap-6"> */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-5">

          {propertyHomes.map((item, index) => (
            <div key={index} className=''>
              <PropertyCard item={item}  textColor = {"text-black"} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default PropertiesListing
