

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

<h1>
    Siniestro Vehiculo
</h1>

<form action="">
    
    <div class="container_datos">
        <div>
            <DatosBasicos />
            <DatosDeTeceros />
            <!-- <DatosDeTeceros /> -->
            <!-- <DatosDeTeceros /> -->
            <DatosTestigo />
            <DatosDelAsgurador />
            
        </div>
        <div>
            <DatosDelConductor />
            <DatosAutomotor />
            <!-- <DatosTestigo /> -->
            <Grabadora />
            <Observaciones />
            <Signature />
            <div class="container">
                <button type="submit">Enviar</button>
            </div>
        </div>
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
    
    input{
        padding: 10px;
        border: none;
        border-radius: 5px;
    }

    h1{
        text-align: center;
        margin: 50px 0  20px 0;
    }
    .container{
        display: grid;
        grid-template-columns: auto;
        margin-top: 20px;
    }

    .container_datos{
        display: grid;
        grid-template-columns: auto;
    }
    button {
        /* margin: 5px; */
        padding:10px; 
        border-radius: 10px;
        font-size: medium;
        border: none;
        color:white;
        background-color:#121C4E;
        width: 50%;
        max-width: 50%;
        text-align: center;
        justify-self: center;
        align-self: center;
    }

    @media only screen and (min-width: 600px) {
        /* For tablets: */

    }

    @media only screen and (min-width: 768px) {
        /* For desktop: */
        h1{

        margin-bottom: 50px;
    }

        .container_datos{
       
        grid-template-columns: auto auto;
        column-gap: 150px;
        margin: 2vh 20vw;
    }
    }
</style>