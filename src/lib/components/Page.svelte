<script lang="ts">
    import {Link} from "svelte-routing";
    import Typewriter from 'svelte-typewriter'

    export let pagePath;
    function getPaths() : Array<[string, string, boolean]>{
        let splitVal = pagePath.split("/");
        let val : Array<[string, string, boolean]> = [];
        let curPath = "/";
        for(let [i, path] of splitVal.entries()){
            if(path != "home"){
                val.push([path, curPath + path, i == splitVal.length - 1])
                curPath += path;
            }else{
                val.push([path, curPath, i == splitVal.length - 1])
            }
        }
        return val;
    }
</script>
<div class="grid nav-bar min-h-screen">
    <div class="bg-black fira flex flex-row">
        <Link to="/" class="hover:bg-gray-700 p-2 duration-150">
            <Typewriter mode="scramble" scrambleDuration="400">
                🢤 return home.
            </Typewriter>
        </Link>
        <div class="flex-grow"></div>
        <span class="p-2">
            {#each getPaths() as path}
                <div class="inline-block pl-2">
                    <div class="inline-block">></div>
                    {#if path[2]}
                        <div class="inline-block text-gray-300">{path[0]}</div>
                    {:else}
                        <Link class="text-blue-200 hover:text-orange-200 duration-150" to="{path[1]}">{path[0]}</Link>
                    {/if}
                </div>
            {/each}
        </span>
    </div>
    <slot/>
</div>

<style>
    :global(html, body, #app){
        height: 100%;
    }
    .nav-bar{
        grid-template-rows: auto 1fr;
    }
</style>