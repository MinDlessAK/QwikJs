

/* Loader */
/*


import { component$ } from "@builder.io/qwik";
import { routeLoader$, routeAction$, Form } from "@builder.io/qwik-city";



export const useMycustomloader = routeLoader$(async () => {
  console.log("loader function");
  return ({ name: "erika", age: 20 });

});


export const useShowUser = routeAction$(async (data) => {
  console.log("action function");
  console.log(data);

  return { success: true, userID: 123 };
});



export default component$(() => {
  console.log("main function");
  const loaderdata = useMycustomloader();


  const action = useShowUser();
  console.log("Action: ", action);

  return (
    <>
      <div class="h-screen w-full bg-rose-500 grid place-items-center">
        <p class="text-center text-white text-3xl">{loaderdata.value.name}</p>


        <button
          onClick$={async () => {
            const { value } = await action.submit({ name: 'John' });
            console.log(value);
          }}
          class="text-sm text-center text-white font-medium rounded-md shadow-md py-1 bg-blue-500">Show data</button>

        <Form action={action} class="bg-white shadow-xl w-80 rounded-md grid place-content-center p-4">
          <p class="text-slate text-black text-xl font-semibold">Enter your details</p>
          <input name="firstName" class="bg-[#eeeeee] rounded-md outline-none my-2 p-2" placeholder="First name" />
          <input name="lastName" class="bg-[#eeeeee] rounded-md outline-none my-2 p-2" placeholder="Last name" />
          <button type="submit" class="text-sm text-center text-white font-medium rounded-md shadow-md py-1 bg-blue-500">Show user</button>
        </Form>

        {action.value?.success && (
          // When the action is done successfully, the `action.value` property will contain the return value of the action
          <p class="my-4 text-center text-xl font-semibold text-white">User {action.value.userID} added successfully</p>
        )}
      </div>
    </>
  );
});

*/







/*action*/

/*

import { component$ } from '@builder.io/qwik';
import { routeAction$, Form, routeLoader$ } from '@builder.io/qwik-city';

export const useMycustomloader = routeLoader$(async () => {
  console.log("loader function");
  return ({ name: "erika", age: 20 });

});
 
export const useAddUser = routeAction$(async (data) => {
  // This will only run on the server when the user submits the form (or when the action is called programmatically)
  console.log("action function");
 console.log(data);
  return { success: true , userID:20989038098190 };
});
 
export default component$(() => {
  const action = useAddUser();
 
  return (
    <>
    <div class="h-screen w-full bg-rose-500 grid place-items-center">
       //routeaction with form 
       //u have to trigger action with "action.submit()" methode 
    //  <Form action={action} class="flex flex-col gap-4">
    //     <input name="firstName" class="block border-2 border-black" />
    //     <input name="lastName" class="block border-2 border-black " />
    //     <button type="submit" class="block bg-yellow-200 rounded-xl p-2">Add user</button>
    //   </Form> 


      <button class="bg-slate-600 p-5"
        onClick$={async () => {
          const { value } = await action.submit({ name: 'John' , age:22 });
          console.log(value);
        }}
      >
        Add user
      </button>

      {action.value?.success && (
        // When the action is done successfully, the `action.value` property will contain the return value of the action
        <p>User {action.value.userID} added successfully</p>
      )}
      </div>
      
    </>
  );
});

*/


  /* endpoint */
/*

// import { type RequestHandler } from '@builder.io/qwik-city';
 
// export const onGet: RequestHandler = async ({ json }) => {
//   json(200, { hello: 'world' });
// };


// import type { RequestHandler } from '@builder.io/qwik-city';
 
// export const onGet: RequestHandler = async (requestEvent) => {
//   const writableStream = requestEvent.getWritableStream();
//   const writer = writableStream.getWriter();
//   const encoder = new TextEncoder();
 
//   writer.write(encoder.encode('Hello World\n'));
//   await wait(50);
//   writer.write(encoder.encode('After 100ms\n'));
//   await wait(50);
//   writer.write(encoder.encode('After 200ms\n'));
//   await wait(50);
//   writer.write(encoder.encode('END'));
//   writer.close();
// };
 
// const wait = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

*/



/*

//state
import {$,component$, useSignal} from "@builder.io/qwik";

// import { component$ } from "@builder.io/qwik";


//  state 

 //useSignal
 //useSignal only take one value  it is similar to useState in react.js
 // to access the use signal value 
    //const count = useSignal(0);
    //"count.value"
export default component$(() => {
    const ishow =useSignal<boolean>(false)

    const update =$(()=>{
         ishow.value = !ishow.value
    })

    return (
    <>
        <div class=" relative bg-gradient-to-t from-green-400 via-lime-400 to-lime-400 h-14 w-full p-2">

          <div class=" flex justify-between ">
            <div class=" text-white  font-extrabold text-2xl">Akash</div>
            <button onClick$={update} class=" bg-orange-500 rounded-full  h-10 w-10" ></button>
          </div>
{
     ishow.value?
          <div class=" bg-slate-600 h-72 w-56 rounded-lg flex flex-col gap-4 pt-4 absolute right-2 top-16">
             <div class="text-white font-bold p-2 border-4   border-lime-400">This is Priyandhu</div>
             <div class="text-white font-bold p-2 border-4   border-lime-400"> This is Akash</div>
             <div class="text-white font-bold p-2 border-4   border-lime-400"> This is Myanak </div>
             <div class="text-white font-bold p-2 border-4   border-lime-400"> This is Chaka</div>
          </div>
          :null
}

        </div>
    </>
  );
});

*/

/*


// context{Level 1}


//createContextId()
//This method is used to create a new ContextId.



//useContextProvider()
//This method is used to create a Context for a specific component and its descendants, 
//using the ContextId as the key identifier of the context.


//useContext()
//This method is used to get the value of Context which is provided by Parent Component.

import { component$, useContext, useContextProvider, useStore } from "@builder.io/qwik";
import { counterState } from "~/states/counter";

export default component$(() => {
  
  const counter = useStore({ count: 0 });

  useContextProvider(counterState, counter);

  return (
    <>
    <button class="text-white text-3xl" onClick$={() => counter.count++}>inc</button>
      <h1 class="text-white text-3xl">{counter.count}</h1>
      <div class="bg-white w-full h-2"></div>
       < NewCounter />
    </>
  );
});




const NewCounter = component$(() => {

  const userData = useContext(counterState)


  return (
    <>

      <button class="text-white text-3xl" onClick$={() => userData.count++}>inc</button>
      <h1 class="text-white text-3xl">{userData.count}</h1>
    </>
  );
});


*/


/*

//context{level 2 }

import { component$, useContext } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import { counterState } from "~/states/counter";

const index = component$(() => {

  const counter = useContext(counterState)

  return (
    <>
      <button class="text-white text-3xl" onClick$={() => counter.count++}>inc</button>
      <h1 class="text-white text-3xl">{counter.count}</h1>
      <div class="bg-white w-full h-2"></div>
      <NewCounter />

      <Link href="/home" >go to home</Link>
    </>
  );
});

export default index;




const NewCounter = component$(() => {

  const userData = useContext(counterState)


  return (
    <>

      <button class="text-white text-3xl" onClick$={() => userData.count++}>inc</button>
      <h1 class="text-white text-3xl">{userData.count}</h1>
    </>
  );
});

*/



/*

//prisma

import { component$ } from "@builder.io/qwik";
// import { routeLoader$ } from "@builder.io/qwik-city";
// import {get,set} from "~/database";


// export const useProductDetails = routeLoader$(async () => {
//     console.log("working");
//     await set({name:"akash",email:"ag39@gmail.com"})
//      await get()

//     return null;
//   });

export default component$(() => {
  return (
    <>
       <div class=" bg-slate-600 h-screen w-full"></div>
    </>
  );
});


*/

