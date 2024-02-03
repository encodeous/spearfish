<script lang="ts">
    import { fly } from 'svelte/transition';
    import seedrandom from 'seedrandom';
    import chroma from 'chroma-js'
    import {Link} from "svelte-routing";
    export let name = "";
    let nameCode = seedrandom(name)() * 360;
    export let image = null;
    export let link;
    export let tags : string[] = []
    export let date;
    function getColor(v){
        return chroma.hsv(nameCode, 0.6, v).hex();
    }
    let color = getColor(0.4);
    let secColor = getColor(0.2);
</script>

<a href="blog/{link}" id="{name}" style="--project-color: {color}; --secondary-color: {secColor}"
     class="blog mt-10 flex flex-col" in:fly={{y: 100, duration: 1000}}>
    {#if image}
        <div class="relative">
            <img src={image} alt="Cover Image">
            <div class="font-black text-2xl px-1 mt-1 bottom-0" style="background-color: {color}; margin-bottom: -12pt;">
                {name}
            </div>
        </div>
    {:else}
        <div class="font-black text-3xl relative">
            <p class="pl-2 mt-1" style="margin-bottom: -12pt">{name}</p>
        </div>
    {/if}

    <div class="title-decor"></div>

    <div class="p-2 flex-grow flex flex-col">
        <div>
            {#if tags.length !== 0}
                <div class="flex">
                    <div>
                        {#each tags as tag}
                            <div class="tag-item mx-0.5 rounded-sm px-1 hover:scale-95 transition cursor-pointer mb-1">
                                {tag}
                            </div>
                        {/each}
                    </div>
                    <div class="flex-grow"></div>
                    <div class="text-gray-400">
                        {date}
                    </div>
                </div>
                <hr>
            {/if}
        </div>
        <div class="p-2 flex-grow">
            <slot/>
        </div>
    </div>
</a>

<style>
    .blog{
        border-radius: 5px;
        background-color: #2a2a2a;
    }
    .tag-item {
        display: inline-block;
        background-color: var(--secondary-color);
    }
    .title-decor{
        background: repeating-linear-gradient(45deg, var(--project-color) 0, var(--project-color) 5px, #0000 5px, #0000 10px);
        height: 16px;
    }
</style>