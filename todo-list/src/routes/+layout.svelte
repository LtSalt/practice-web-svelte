<script>
    import '../styles.css'
    import Header from './Header.svelte'
    import Footer from './Footer.svelte'
</script>

<Header></Header>
<main>
    <slot></slot>
</main>
<Footer></Footer>



