
<script>
    import FrontPage from "./lib/pages/FrontPage.svelte";
    import NotFound from "./lib/pages/NotFound.svelte";
    import { Router, Link, Route } from "svelte-routing";

    export let url = "";
</script>

<Router url="{url}">
    <Route path="/" component="{FrontPage}"/>
<!--    <Route path="/about"></Route>-->
<!--    <Route path="/projects" ></Route>-->
<!--    <Route path="/stuff-i-have-done" ></Route>-->
    <Route path="/*" component="{NotFound}"/>
</Router>