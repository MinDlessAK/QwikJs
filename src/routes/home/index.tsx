import { component$, useContext } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import { counterState } from "~/states/counter";



export default component$(() => {
    const homecounter = useContext(counterState)
    return (
        <>
            <div class="h-screen w-full bg-blue-500 grid place-items-center">
                <button class="text-white text-3xl" onClick$={() => homecounter.count++}>inc</button>
                <h1 class="text-white text-3xl">{homecounter.count}</h1>
                <Link href="/" >go to index</Link>
            </div>
        </>
    );
});