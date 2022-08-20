<script>
    import {Link} from "svelte-routing";
    import Page from "../components/Page.svelte";
</script>
<Page pagePath="home/notfound">
    <div class="flex h-100">
        <div class="m-auto">
            <div class="flex flex-col rounded-2xl bg-gray-700 p-5 drop-shadow-2xl">
                <div class="m-auto animate-bounce text-7xl font-black">?</div>
                <p class="text-2xl font-bold pt-4">
                    oi, where do you think you're going?
                </p>
                <p class="text-xl pt-3">
                    it seems that i haven't made this page yet.
                    <br/>
                    you should probably head back
                    <Link to="/" class="text-green-400">home.</Link>
                </p>
            </div>
        </div>
    </div>
</Page>