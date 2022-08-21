<script lang="ts">
    import Maze from "../components/Maze.svelte";
    import { fade, fly } from 'svelte/transition';
    import { elasticOut } from 'svelte/easing';
    import {onMount} from "svelte";
    import {Link} from "svelte-routing";
    import {agentCount} from "../ts/store";
    import chroma from "chroma-js";
    import seedrandom from 'seedrandom';
    import {userAgent} from '../ts/user-agent.js'

    let ready = false;
    onMount(() => {
        ready = true;
        if (userAgent.isIos()) {
            document.querySelector('#maze').classList.add('is-ios');
        }
    });
    let color;
    agentCount.subscribe(num => {
        color = chroma.hsv(seedrandom(num + "c")() * 360, 0.5, 0.7).hex();
    })
</script>

<div id="maze" class="fp-back hidden md:block">
    <Maze></Maze>
</div>
<div class="absolute bottom-0 right-0 text-xl m-3 hidden md:block flex flex-col" style="color: {chroma(color).brighten(2).hex()}">
    {$agentCount}
    <div class="text-white inline-block text-xs">
        {#if (userAgent.isIos() || userAgent.isOldIos() || userAgent.isIosSafari() || userAgent.isIpados())}
            | it looks like you're on ios... the maze won't work properly. :(
        {/if}
    </div>
</div>
<div class="min-h-screen min-w-screen flex items-center justify-center flex-col">
    {#if ready}
        <div class="text-7xl md:text-8xl">
            <div class="md:inline-block" in:fade>
                adam
            </div>
            <div class="md:inline-block" in:fly={{x: 50, duration: 2000, easing: elasticOut, delay: 1000}}>
                chen
            </div>
        </div>
        <div class="flex flex-col md:flex-row text-2xl" style="--hover-color: {color}">
            <div in:fly={{y: 200, duration: 500, delay: 100}}>
                <Link to="about">
                    <div class="page-link">
                        about.
                    </div>
                </Link>
            </div>
            <div in:fly={{y: 200, duration: 500, delay: 150}}>
                <Link to="projects">
                    <div class="page-link">
                        projects.
                    </div>
                </Link>
            </div>
            <div in:fly={{y: 200, duration: 500, delay: 200}}>
                <Link to="things-i-have-done">
                    <div class="page-link">
                        stuff i've done.
                    </div>
                </Link>
            </div>
            <div in:fly={{y: 200, duration: 500, delay: 250}}>
                <a href="https://github.com/encodeous">
                    <div class="page-link">
                        github.
                    </div>
                </a>
            </div>
        </div>
    {/if}
</div>

<style>
    .fp-back {
        position: absolute;
        z-index: -1;
    }
    .is-ios * {
        cursor: pointer;
    }
    .page-link{
        @apply p-2 duration-200 ease-in-out font-black cursor-pointer;
        animation: pulse 5s cubic-bezier(0.4, 0, 0.6, 1) infinite;
    }
    .page-link:hover{
        @apply text-opacity-100;
        padding: 0.2rem 0.5rem 0.8rem 0.5rem;
        background: repeating-linear-gradient(45deg, var(--hover-color) 0, var(--hover-color) 5px, #0000 5px, #0000 10px);
    }
    @keyframes pulse {
        0%, 100% {
            opacity: 1;
        }
        50% {
            opacity: .75;
        }
    }
</style>