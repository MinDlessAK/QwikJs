import { Slot, component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";


export default component$(() => {
    return (
    <>
    <div class="h-screen w-full flex p-4">
        <div class="h-full w-72 bg-slate-900 flex flex-col gap-4 pt-4 ">
        <Link href="/dashboard" class=" text-white font-bold bg-indigo-500 text-center p-5  m-2">Dashboard</Link>
        <Link href="/dashboard/help" class=" text-white font-bold bg-indigo-500 text-center p-5 m-2">Help</Link>
        <Link href="/dashboard/about" class=" text-white font-bold bg-indigo-500 text-center p-5 m-2">About</Link>
        </div>

        <div class=" grow bg-pink-400">
            <Slot />
        </div>
    </div>
    </>
  );
  });