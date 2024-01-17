import { $, component$, useStore } from "@builder.io/qwik";



export default component$(() => {


  const count = useStore({count:0,priyanshuchutiya:1});

  const update_number = $(() => {
    count.count++;
    count.priyanshuchutiya++;
  });
  


  return (
    <>
      <div class="h-screen w-full bg-gray-200 grid place-items-center ">
        <div class="bg-white shadow-lg rounded-md p-4">
          <p class="text-black text-xl text-center font-semibold">
            Count : {count.count}
          </p>
          <p class="text-black text-xl text-center font-semibold">
            Count : {count.priyanshuchutiya}
          </p>
          <button
            onClick$={update_number}
            class="w-full text-center font-semibold text-white bg-indigo-500 my-2 block rounded-md py-2"
          >
            UPDATE
          </button>
        </div>
      </div>
    </>
  );
});


// const Count: React.FC = ():JSX.Element=>{
//   const [count,setCount] = useState<number>(0);
//   const update = ()=>setCount(count+1);
//   return(
//     <>
//           <div class="h-screen w-full bg-gray-200 grid place-items-center ">
//             <div class="bg-white shadow-lg rounded-md p-4">
//               <p class="text-black text-xl text-center font-semibold">
//                 Count : {count}
//               </p>
//               <button
//                 onclick={update}
//                 class="w-full text-center font-semibold text-white bg-indigo-500 my-2 block rounded-md py-2"
//               >
//                 UPDATE
//               </button>
//             </div>
//           </div>
//         </>
//   );
// }

// export default qwikify$(Count);

// Create React component standard way

 
// Specify eagerness to hydrate component on hover event.

// import { component$ } from '@builder.io/qwik';
// import { QCounter } from '~/components/mycount';
 
// export default component$(() => {
//   console.log('Qwik Render');
//   return (
//     <main>
//       <QCounter />
//     </main>
//   );
// });