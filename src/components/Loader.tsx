// const Loader = () => {
//     return (
//         <div className="flex justify-center items-center">

//             <div className="relative">
//                 <div className="w-16 h-16 border-t-4 border-b-4 border-blue-600 rounded-full animate-spin">
//                 </div>
//                 <div className="absolute top-1 left-0 w-full h-full flex justify-center items-center hover:top-0">
//                     <div className="w-6 h-6 flex justify-center items-center bg-blue-600 rounded-full animate-bounce hover:animate-none">
//                         <div className="w-5 h-5 bg-blue-800 rounded-full opacity-100 animate-pulse hover:animate-none"></div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Loader;

import { quantum } from 'ldrs'

quantum.register()




const Loader: React.FC = () => {
    return (

        <l-quantum
            size="45"
            speed="1.75"
            color="black"
        ></l-quantum >
    );
};

export default Loader;



