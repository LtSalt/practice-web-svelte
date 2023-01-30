<script>
    import "$lib/styles.css";
    import "@fontsource/source-code-pro/300.css" 
    import "@fontsource/source-code-pro/400.css" 
    import "@fontsource/source-code-pro/600.css" 
    
    import Header from "$lib/components/Header.svelte";
    import Footer from "$lib/components/Footer.svelte";
</script>

<Header></Header>
<slot></slot>
<Footer></Footer>