 import { FaMusic } from "react-icons/fa"
 import { FcFilmReel } from "react-icons/fc";
 import { FaOm } from "react-icons/fa6";
 import { IoNewspaperOutline } from "react-icons/io5";
 const Categories=[
     { 
        id:1,
        name:"Hndi",
        icon:<FaMusic className="w-[60px] h-[60px] text-purple-600 flex items-center jusify-center" />,   
    },
    {
    id:2,
    name:"film",
    icon:   <FcFilmReel className="w-[60px] h-[60px] text-purple-500 flex items-center jusify-center" /> ,
    },
     
    {
    id:3,
    name:"Bhakti",
    icon:   <FaOm className="w-[60px] h-[60px] text-purple-600 flex items-center jusify-center" /> ,
    },
 {
    id:4,
    name:"News",
    icon:   <IoNewspaperOutline className="w-[60px] h-[60px] text-purple-600 flex items-center jusify-center" /> ,
    },

]
export default Categories;