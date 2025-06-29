<script lang="ts">
    import {onMount} from 'svelte';
    import {page} from '$app/stores';

    let currentPage = $state<string>();

    onMount(() => {
        currentPage = $page.url.pathname;
    });
</script>

<div>
    <h2>This is from dashboard!</h2>
    <p>Experimenting</p>
    <strong>This is the current page route:</strong> {currentPage}
</div>