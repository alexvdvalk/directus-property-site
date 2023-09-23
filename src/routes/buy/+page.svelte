<script lang="ts">
  import type { PageData } from "./$types";
  import SearchBar from "./SearchBar.svelte";

  export let data: PageData;
</script>

<SearchBar />
<pre>
  {JSON.stringify(data, null, 2)}
</pre>
