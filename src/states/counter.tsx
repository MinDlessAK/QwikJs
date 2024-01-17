import { createContextId } from "@builder.io/qwik";

export const counterState = createContextId<{ count: number }>("counter");