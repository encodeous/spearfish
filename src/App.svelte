
<script>
    import FrontPage from "./lib/pages/FrontPage.svelte";
    import NotFound from "./lib/pages/NotFound.svelte";
    import { Router, Link, Route } from "svelte-routing";
    import { fly } from 'svelte/transition';
    export let url = "";
</script>

<Router url="{url}">
    <Route path="/" >
       <div in:fly={{y: -20, duration: 100}} class="overflow-clip">
           <FrontPage/>
       </div>
    </Route>
<!--    <Route path="/about"></Route>-->
<!--    <Route path="/projects" ></Route>-->
<!--    <Route path="/stuff-i-have-done" ></Route>-->
    <Route path="/*">
        <div in:fly={{y: -20, duration: 100}} class="overflow-clip">
            <NotFound/>
        </div>
    </Route>
</Router>