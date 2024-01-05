<script>
    import Page from "../components/Page.svelte";
    import Project from "../components/Project.svelte";
    import Delayed from "../components/Delayed.svelte";
    import { fly } from 'svelte/transition';
    import { cubicInOut } from 'svelte/easing';
    import { portfolio } from "../ts/store";
    import { get } from 'svelte/store';
    import {Link} from "svelte-routing";
    export let tag = "";
</script>

<Page pagePath="home/portfolio">
    <div class="h-100 p-5 md:w-4/5 mx-auto">
        {#if tag !== ""}
            <div class="info relative">
                <div class="p-2 flex flex-row">
                    Showing items for filter "{tag}"
                    <Link to="/portfolio" class="pl-2">
                        <div class="tangerine px-1 hover:bg-black hover:text-white transition rounded-sm">
                            Clear Filter
                        </div>
                    </Link>
                </div>
                <div class="absolute info-stripe">
                </div>
            </div>
        {/if}
        <div class="w-full justify-center project-grid grid justify-items-center gap-x-5">
            {#each $portfolio as item}
                {#if tag === "" || item.tags.includes(tag)}
                    <Project {...item}>
                        {@html item.content}
                    </Project>
                {/if}
            {/each}
        </div>
    </div>
</Page>

<style>
    .project-grid{
        grid-template-columns: repeat(auto-fit, minmax(calc(min(400px, 90vw)), 1fr));
    }
    .info{
        background-color: #2a2a2a;
    }
    .info-stripe{
        height: 5px;
        width: 100%;
        bottom: 0;
        --stripe-color: #00a4ff;
        background: repeating-linear-gradient(45deg, var(--stripe-color) 0, var(--stripe-color) 5px, #0000 5px, #0000 10px);
    }
</style>