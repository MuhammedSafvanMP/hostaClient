// import { PropertyHomes } from '@/types/properyHomes'
// import { Icon } from '@iconify/react'
// import Image from 'next/image'
// import Link from 'next/link'

// const PropertyCard: React.FC<{ item: PropertyHomes }> = ({ item }) => {
//   const { name, location, rate, beds, baths, area, slug, images } = item

//   const mainImage = images[0]?.src;

//   return (
//     <div>
//       <div className='relative rounded-2xl border border-dark/10 dark:border-white/10 group hover:shadow-3xl duration-300 dark:hover:shadow-white/20'>
//         <div className='overflow-hidden rounded-t-2xl'>
//           <Link href={`/properties/${slug}`}>
//             {mainImage && (
//               <Image
//                 src={mainImage}
//                 alt={name}
//                 width={440}
//                 height={300}
//                 className='w-full rounded-t-2xl group-hover:brightness-50 group-hover:scale-125 transition duration-300 delay-75'
//                 unoptimized={true}
//               />
//             )}
//           </Link>
//           <div className='absolute top-6 right-6 p-4 bg-white rounded-full hidden group-hover:block'>
//             <Icon
//               icon={'solar:arrow-right-linear'}
//               width={24}
//               height={24}
//               className='text-black'
//             />
//           </div>
//         </div>
//         <div className='p-6'>
//           <div className='flex flex-col mobile:flex-row gap-5 mobile:gap-0 justify-between mb-6'>
//             <div>
//               <Link href={`/properties/${slug}`}>
//                 <h3 className='text-xl font-medium text-black dark:text-white duration-300 group-hover:text-primary'>
//                   {name}
//                 </h3>
//               </Link>
//               <p className='text-base font-normal text-black/50 dark:text-white/50'>
//                 {location}
//               </p>
//             </div>
//             <div>
//               <button className='text-base font-normal text-primary px-5 py-2 rounded-full bg-primary/10'>
//                 ${rate}
//               </button>
//             </div>
//           </div>
//           <div className='flex'>
//             <div className='flex flex-col gap-2 border-e border-black/10 dark:border-white/20 pr-2 xs:pr-4 mobile:pr-8'>
//               <Icon icon={'solar:bed-linear'} width={20} height={20} />
//               <p className='text-sm mobile:text-base font-normal text-black dark:text-white'>
//                 {beds} Bedrooms
//               </p>
//             </div>
//             <div className='flex flex-col gap-2 border-e border-black/10 dark:border-white/20 px-2 xs:px-4 mobile:px-8'>
//               <Icon icon={'solar:bath-linear'} width={20} height={20} />
//               <p className='text-sm mobile:text-base font-normal text-black dark:text-white'>
//                 {baths} Bathrooms
//               </p>
//             </div>
//             <div className='flex flex-col gap-2 pl-2 xs:pl-4 mobile:pl-8'>
//               <Icon
//                 icon={'lineicons:arrow-all-direction'}
//                 width={20}
//                 height={20}
//               />
//               <p className='text-sm mobile:text-base font-normal text-black dark:text-white'>
//                 {area}m<sup>2</sup>
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default PropertyCard



import { PropertyHomes } from '@/types/properyHomes';
import { Icon } from '@iconify/react';
import Image from 'next/image';
import Link from 'next/link';

const PropertyCard: React.FC<{ item: PropertyHomes,  textColor: string }> = ({ item,  textColor }) => {
  const { name, location, rate, beds, baths, area, slug, images } = item;

  const mainImage = images[0]?.src;

  return (
    <div>
      <div className="relative rounded-xl border border-dark/10 dark:border-white/10 group hover:shadow-3xl duration-300 dark:hover:shadow-white/20">
        <div className="overflow-hidden rounded-t-xl">
          <Link href={`/properties/${slug}`}>
            {mainImage && (
              <Image
                src={mainImage}
                alt={name}
                width={440}
                height={250}
                className="w-full rounded-t-xl group-hover:brightness-50 group-hover:scale-110 transition duration-300"
                unoptimized
              />
            )}
          </Link>
          <div className="absolute top-3 right-3 p-2 bg-white rounded-full hidden group-hover:block">
            <Icon icon="solar:arrow-right-linear" width={18} height={18} className="text-black" />
          </div>
        </div>

        <div className="p-4">
          <div className="flex flex-col gap-3 justify-between mb-4">
            <div>
              <Link href={`/properties/${slug}`}>
                <h3 className= {`text-base font-semibold ${textColor}  dark:text-white group-hover:text-primary`}>
                  {name}
                </h3>
              </Link>
              <p className={`text-xs font-normal ${textColor}  dark:text-white/50`}>{location}</p>
            </div>
            <div>
              <button className="text-xs font-medium text-primary px-3 py-1 rounded-full bg-primary/10">
                ${rate}
              </button>
            </div>
          </div>

          <div className="flex justify-between">
            <div className="flex flex-col gap-1 border-r border-black/10 dark:border-white/20 pr-2">
              <Icon icon="solar:bed-linear"  className={`${textColor}`} width={16} height={16} />
              <p className={`text-xs font-normal ${textColor} dark:text-white`}>
                {beds} Beds
              </p>
            </div>
            <div className="flex flex-col gap-1 border-r border-black/10 dark:border-white/20 px-2">
              <Icon icon="solar:bath-linear"  className={`${textColor}`} width={16} height={16} />
              <p className={`text-xs font-normal ${textColor} dark:text-white`}>
                {baths} Baths
              </p>
            </div>
            <div className="flex flex-col gap-1 pl-2">
              <Icon icon="lineicons:arrow-all-direction" className={`${textColor}`} width={16} height={16} />
              <p className={`text-xs font-normal ${textColor} dark:text-white`}>
                {area}m<sup>2</sup>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
