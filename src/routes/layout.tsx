

/*
//context{Level 1}

import { Slot, component$, useContextProvider, useStore } from "@builder.io/qwik";
// import { routeLoader$, type DocumentHead } from "@builder.io/qwik-city";
import { counterState } from "~/states/counter";


export default component$(() => {

    const countr = useStore({ count: 0 });
    useContextProvider(counterState, countr);

    return (
        <>
            <div class="h-screen w-full bg-rose-500">
                <Slot></Slot>
            </div>
        </>
    );
});

*/
/*
//context{level 2 }
import { Slot, component$, useContextProvider, useStore } from "@builder.io/qwik";
import { counterState } from "~/states/counter";


export default component$(() => {

    const counter = useStore({ count: 0 });
    useContextProvider(counterState, counter);
    return (
        <>
            <div class="h-screen w-full bg-rose-500">
                <Slot></Slot>
            </div>
        </>
    );
});
*/