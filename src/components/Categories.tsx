import cat1 from '../assets/category/category-1.jpg';
import cat2 from '../assets/category/category-2.jpg';
import cat3 from '../assets/category/category-3.jpg';
import cat4 from '../assets/category/category-4.jpg';
import cat5 from '../assets/category/category-5.jpg';
import cat6 from '../assets/category/category-6.jpg';
const callouts = [
    {
      name: 'Desk and Office',
      description: 'Work from home accessories',
      imageSrc: cat1,
      imageAlt: 'Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.',
      href: '#',
    },
    {
      name: 'Self-Improvement',
      description: 'Journals and note-taking',
      imageSrc: cat2,
      imageAlt: 'Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.',
      href: '#',
    },
    {
      name: 'Travel',
      description: 'Daily commute essentials',
      imageSrc: cat3,
      imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',
      href: '#',
    },{
      name: 'Self-Improvement2',
      description: 'Journals and note-taking',
      imageSrc: cat4,
      imageAlt: 'Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.',
      href: '#',
    },{
      name: 'Travel2',
      description: 'Daily commute essentials',
      imageSrc: cat5,
      imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',
      href: '#',
    },{
      name: 'Desk and Office2',
      description: 'Work from home accessories',
      imageSrc: cat6,
      imageAlt: 'Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.',
      href: '#',
    }
  ]
function Categories() {
  return (

    <>
    
    <div className="container py-8 mx-auto ">
    <h2 className="text-2xl font-medium text-gray-800 uppercase pl-4 mb-6">shop by category</h2>
    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3 px-4">

    {callouts.map((callout) => (                
              <div key={callout.name} className="relative overflow-hidden group max-sm:h-40 h-60 rounded-md">
              <img src={callout.imageSrc}
                    alt={callout.imageAlt} className=" w-full " />
              <a href={callout.href}
                className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-xl text-white font-roboto font-medium group-hover:bg-opacity-60 transition">{callout.name}</a>
              </div>
            ))}
      
    </div>
  </div>

  </>
  )
}

export default Categories