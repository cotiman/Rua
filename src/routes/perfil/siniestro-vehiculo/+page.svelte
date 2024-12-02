

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
    import Carousel from "$lib/Carousel.svelte";

    // @ts-ignore
    let cantidadDeTerceros
    // @ts-ignore
    let cantidadDeTestigos

    let arrayIndex = [1]
    let arrayIndex2 = [1]

    let num = 1
    let num2 = 1

    function ChangeNumber() {
        // @ts-ignore
        arrayIndex = Array.from({ length: cantidadDeTerceros.value }, (_, i) => i + 1);

        arrayIndex = arrayIndex
        // @ts-ignore
        if(arrayIndex!=null){
            num =  arrayIndex.length;
        }

    }

    function ChangeNumber2() {
        // @ts-ignore
        arrayIndex2 = Array.from({ length: cantidadDeTestigos.value }, (_, i) => i + 1);

        arrayIndex2 = arrayIndex2
        // @ts-ignore
        if(arrayIndex2!=null){
            num2 =  arrayIndex2.length;
        }
    
    }

</script>

<h1>
    Siniestro Vehiculo
</h1>

<form action="">
    
    <div class="container_datos">
        <div>
            <DatosBasicos />
            <h3>Datos de terceros</h3>
            <div class="container" style="margin-bottom: 5px;">
                <input bind:this={cantidadDeTerceros} on:change={()=>{ChangeNumber()}} type="range" min="1" max="6" value="1">
            </div>
            <Carousel>
                    {#each arrayIndex as index}
                        <DatosDeTeceros num={index} />
                    {/each}
            </Carousel>
            <h3>Datos Testigo</h3>
            <div class="container" style="margin-bottom: 5px;">
                <input bind:this={cantidadDeTestigos} on:change={()=>{ChangeNumber2()}} type="range" min="1" max="4" value="1">
            </div>
            <Carousel>
                {#each arrayIndex2 as index}
                    <DatosTestigo num={index}/>
                {/each}
            </Carousel>
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
    h3 {
        text-align: center;
        font-size: 25px;
        margin-bottom: 10px;
    }
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
        margin-top: 5px;
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