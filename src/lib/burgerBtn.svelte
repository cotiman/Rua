<script>
// @ts-nocheck

    import { Hamburger } from 'svelte-hamburgers';
    import { fly } from 'svelte/transition';

    let open;
</script>

<Hamburger bind:open />

{#if open}
    <div class="menu" transition:fly={{ x: -300, duration: 1000 }}>
            <a href="">Inicio</a>
            <a href="">Configuración</a>
            <a href="">Cerrar Sesión</a>
    </div>
{/if}


<style>
    .menu{
        position: absolute;
        top:10vh;
        left: 0;
        width: 300px;
        height: 90.7vh;
        background: white;
        z-index: 100;
        display: grid;
        justify-items: left;
        align-content: start;
        grid-template-rows: 50px;
        grid-template-columns: auto;
  
    }

    a{
        padding: 20px;
        text-decoration: none;
        border-bottom: 1px solid rgba(80, 80, 80, 0.171);
        width: 250px;
        text-align: left;
        color: #00000073;
    }

</style>