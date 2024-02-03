<script>
    import Page from "../components/Page.svelte";
    import {loadBlog, loadBlogs} from "../ts/api"
    import {navigate} from "svelte-routing";
    import {writable} from "svelte/store";
    import BlogPost from "../components/BlogPost.svelte";

    export let page = "";
    export const title = writable("Adam's Blog");
    export const pagePath = writable("home/blog");
    export const shownResults = writable(null);
    export const searchQuery = writable("");
    let blogs = null;
    async function loadPage(){
        let blog = await loadBlog(page)
        title.set(blog.title)
        pagePath.set("home/blog/" + page)
        return blog
    }

    async function filterPage(){
        if(blogs === null){
            blogs = await loadBlogs()

            const urlParams = new URLSearchParams(window.location.search);
            searchQuery.subscribe(value => {
                if($searchQuery === ""){
                    history.replaceState({}, null, "blog");
                }else{
                    history.replaceState({}, null, "blog?query=" + $searchQuery);
                }

                filterPage();
            })
            searchQuery.set(urlParams.get('query'));
        }

        if($searchQuery === null)
            searchQuery.set("")

        let shown = []

        for(let blog of blogs){
            let title = blog.title;
            if(title.toLowerCase().indexOf($searchQuery.toLowerCase()) !== -1
                || blog.description.toLowerCase().indexOf($searchQuery.toLowerCase()) !== -1
                || blog.permalink.toLowerCase().indexOf($searchQuery.toLowerCase()) !== -1){
                shown.push(blog)
            }
            else if(blog.tags !== null){
                for(let tag of blog.tags){
                    if(tag.toLowerCase().indexOf($searchQuery.toLowerCase()) != -1){
                        shown.push(blog)
                        break;
                    }
                }
            }
        }

        shownResults.set(shown)

        return shown;
    }
</script>

<svelte:head>
    <title> {$title} </title>
</svelte:head>

<Page pagePath={"home/blog" + (page === "" ? "" : "/" + page)}>
    <div class="h-100 p-5 md:w-4/5 mx-auto">
        {#if page !== ""}
            <!-- render page -->
            <link href="/public/prism.css" rel="stylesheet" />
            <script src="/public/prism.js"></script>
            {#await loadPage()}
                Loading Blog Post
            {:then blog}
                <link href="/public/blog-layouts/{blog.layout}.css" rel="stylesheet" />
                {#each Object.entries(blog.meta) as [key, value]}
                    <meta name="{key}" content="{value}">
                {/each}
                <div class="text-3xl md:text-5xl fira">
                    {blog.title}
                </div>
                <hr>
                <div class="flex flex-row space-x-2 text-gray-300 f-body-1">
                    {#if blog.meta.author !== null}
                        <div class="flex-grow">
                            Author: {blog.meta.author}
                        </div>
                    {/if}
                    {#if blog.date !== null}
                        <div>
                            {new Date(blog.date).toDateString()}
                        </div>
                    {/if}
                </div>
                <div id="blog-content">
                    {@html blog.rendered}
                </div>
            {:catch ex}
                {navigate("/notfound")}
            {/await}
        {:else}
            <!-- show all visible blogs -->
            {#await filterPage()}
                Loading Blogs
            {:then blogs}
                <div class="info relative">
                    <input bind:value={$searchQuery} placeholder="Search for a blog post" class="p-2 flex flex-row w-full focus:border-0 outline-0"/>
                    <div class="absolute info-stripe"/>
                </div>
                <div class="w-full justify-center justify-items-center gap-x-5">
                    {#each $shownResults as blog}
                        <div>
                            <BlogPost name="{blog.title}" link="{blog.permalink}" tags="{blog.tags}" date="{new Date(blog.date).toDateString()}">
                                {blog.description}
                            </BlogPost>
                        </div>
                    {/each}
                </div>
            {/await}
        {/if}
    </div>
</Page>

<style>
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