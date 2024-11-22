

<script>
    import DatosDeTeceros from "$lib/Form-Components/datosDeTeceros.svelte";
    import DatosBasicos from "$lib/Form-Components/datosBasicos.svelte";
    import DatosDelAsgurador from "$lib/Form-Components/datosDelAsgurador.svelte";
    import DatosAutomotor from "$lib/Form-Components/datosAutomotor.svelte";
    import DatosDelConductor from "$lib/Form-Components/datosDelConductor.svelte";
    import DatosTestigo from "$lib/Form-Components/datosTestigo.svelte";
    import Observaciones from "$lib/Form-Components/observaciones.svelte";
    import Signature from "$lib/signature.svelte";
    import Grabadora from "$lib/grabadora.svelte";


</script>


<form action="">

    <DatosBasicos />
    <DatosDeTeceros />
    <DatosDelAsgurador />
    <DatosAutomotor />
    <DatosDelConductor />
    <DatosTestigo />
    <Grabadora />
    <Observaciones />
    <Signature />
    <!-- 
    <DatosDeTeceros />
    <DatosDeTeceros />
    <DatosTestigo />
     -->
    <div class="container">
        <button type="submit">Enviar</button>
    </div>




</form>

<style>
      /* form{
        background-color: red;
       background: -webkit-linear-gradient(-90deg, #FFFFFF 0%, #72B5F7 70%);
       margin: 0;
       padding: 0;
        height: 200vh;
    } */
    .container{
        display: grid;
        grid-template-columns: auto;
        justify-items: center;
        gap:5px;
        margin:5px;
    }
    button {
        /* margin: 5px; */
        padding: 15px;
        border: none;
        border-radius: 10px;
        width: min-content;
    }

    @media only screen and (min-width: 600px) {
        /* For tablets: */
        .container {
            margin: 0 15vw;
        }
    }

    @media only screen and (min-width: 768px) {
        /* For desktop: */
        .container {
            margin: 0 30vw;
        }
    }
</style>