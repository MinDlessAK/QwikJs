import { component$, Slot } from "@builder.io/qwik";



export default component$(() => {
  return (
    <>
     <div class="w-full p-4 gap-4 h-full bg-red-500">
        <div class="w-56 bg-green-500 rounded-md p-3">
            this is custom heading
        </div>
        <div class="p-6 grow bg-orange-500">
        <Slot />        
        </div>
      </div>
    </>
  );
});
