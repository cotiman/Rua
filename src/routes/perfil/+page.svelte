

<!-- <div class="marco"> -->

<script>
  import { onMount } from "svelte";


    let tablet = false

onMount(()=>{
    let tabletView = window.matchMedia("(min-width: 600px)")
   let desktopView = window.matchMedia("(min-width: 760px)")


   tablet = tabletView.matches
    tabletView.addEventListener("change", function() {
        //console.log('vista tablet', tabletView.matches)
        tablet = tabletView.matches
    });

    desktopView.addEventListener("change", function() {
        //console.log('vista desktop', desktopView.matches)
    });
    console.log({tablet})

})


    let servicios = [
    {
        socio:'Juan Perez',
        ci: '1.234.567-8',
        servicio: 'Siniestro Hogar',
        estado: 'ACEPTADO',
        id_servicio : 'DS123GH345'
    },
    {
        socio:'Juan Perez',
        ci: '1.234.567-8',
        servicio: 'Siniestro Vehículo',
        estado: 'EN_CAMINO',
        id_servicio : 'DS123GH345'
    },
    {
        socio:'Juan Perez',
        ci: '1.234.567-8',
        servicio: 'Auxilio Mecánico',
        estado: 'PENDIENTE',
        id_servicio : 'DS123GH345'
    },
    {
        socio:'Juan Perez',
        ci: '1.234.567-8',
        servicio: 'Inspección vehicular',
        estado: 'FINALIZADO',
        id_servicio : 'DS123GH345'
    },
    {
        socio:'Juan Perez',
        ci: '1.234.567-8',
        servicio: 'Siniestro Hogar',
        estado: 'ACEPTADO',
        id_servicio : 'DS123GH345'
    },
    {
        socio:'Juan Perez',
        ci: '1.234.567-8',
        servicio: 'Siniestro Vehículo',
        estado: 'EN_CAMINO',
        id_servicio : 'DS123GH345'
    },
    {
        socio:'Juan Perez',
        ci: '1.234.567-8',
        servicio: 'Auxilio Mecánico',
        estado: 'PENDIENTE',
        id_servicio : 'DS123GH345'
    },
    {
        socio:'Juan Perez',
        ci: '1.234.567-8',
        servicio: 'Inspección vehicular',
        estado: 'FINALIZADO',
        id_servicio : 'DS123GH345'
    },
    {
        socio:'Juan Perez',
        ci: '1.234.567-8',
        servicio: 'Siniestro Hogar',
        estado: 'ACEPTADO',
        id_servicio : 'DS123GH345'
    },
    {
        socio:'Juan Perez',
        ci: '1.234.567-8',
        servicio: 'Siniestro Vehículo',
        estado: 'EN_CAMINO',
        id_servicio : 'DS123GH345'
    },
    {
        socio:'Juan Perez',
        ci: '1.234.567-8',
        servicio: 'Auxilio Mecánico',
        estado: 'PENDIENTE',
        id_servicio : 'DS123GH345'
    },
    {
        socio:'Juan Perez',
        ci: '1.234.567-8',
        servicio: 'Inspección vehicular',
        estado: 'FINALIZADO',
        id_servicio : 'DS123GH345'
    },
    {
        socio:'Juan Perez',
        ci: '1.234.567-8',
        servicio: 'Siniestro Hogar',
        estado: 'ACEPTADO',
        id_servicio : 'DS123GH345'
    },
    {
        socio:'Juan Perez',
        ci: '1.234.567-8',
        servicio: 'Siniestro Vehículo',
        estado: 'EN_CAMINO',
        id_servicio : 'DS123GH345'
    },
    {
        socio:'Juan Perez',
        ci: '1.234.567-8',
        servicio: 'Auxilio Mecánico',
        estado: 'PENDIENTE',
        id_servicio : 'DS123GH345'
    },
    {
        socio:'Juan Perez',
        ci: '1.234.567-8',
        servicio: 'Inspección vehicular',
        estado: 'FINALIZADO',
        id_servicio : 'DS123GH345'
    },
    {
        socio:'Juan Perez',
        ci: '1.234.567-8',
        servicio: 'Siniestro Hogar',
        estado: 'ACEPTADO',
        id_servicio : 'DS123GH345'
    },
    {
        socio:'Juan Perez',
        ci: '1.234.567-8',
        servicio: 'Siniestro Vehículo',
        estado: 'EN_CAMINO',
        id_servicio : 'DS123GH345'
    },
    {
        socio:'Juan Perez',
        ci: '1.234.567-8',
        servicio: 'Auxilio Mecánico',
        estado: 'PENDIENTE',
        id_servicio : 'DS123GH345'
    },
    {
        socio:'Juan Perez',
        ci: '1.234.567-8',
        servicio: 'Inspección vehicular',
        estado: 'FINALIZADO',
        id_servicio : 'DS123GH345'
    }

    ]

    // @ts-ignore
    function SetState(state) {

        let reult = "Check-aceptado.svg"
        switch (state) {
            case "ACEPTADO":
            reult = "Check-aceptado.svg";
                break;
            case "PENDIENTE":
            reult = "wtach-pending.svg";
                break;
            case "EN_CAMINO":
            reult = "en-camino.svg";
                break;
            case "FINALIZADO":
            reult = "Check-finalizado.svg";
                break;
        }

        return reult
    }


    // <img class="icono-2" src="home-accident.svg" alt="" srcset="">
    // <img class="icono-2" src="car-accident.svg" alt="" srcset="">
    // <img class="icono-2" src="mechanic-help.svg" alt="" srcset="">
    // <img class="icono-2" src="Inspection-car.svg" alt="" srcset="">
    // @ts-ignore
    function SetServices(service) {

        let reult = "home-accident.svg"
        switch (service) {
            case "Siniestro Hogar":
            reult = "home-accident.svg";
                break;
            case "Siniestro Vehículo":
            reult = "car-accident.svg";
                break;
            case "Auxilio Mecánico":
            reult = "mechanic-help.svg";
                break;
            case "Inspección vehicular":
            reult = "Inspection-car.svg";
                break;
        }

    return reult
}

</script>

<div class="nav">

    <img class="icono" src="Check-aceptado.svg"  alt="" srcset="">
    <img class="icono" src="wtach-pending.svg"  alt="" srcset="">
    <img class="icono" src="en-camino.svg"  alt="" srcset="">
    <img class="icono" src="Check-finalizado.svg"  alt="" srcset="">

    <div>Aceptado</div>
    <div>Pendiente</div>
    <div>En camino</div>
    <div>Finalizado</div>
        

</div>
    <div class="container">
        <div class="titel">
            ID
        </div>
        <div class="titel">
            Socio
        </div>
        <div class="titel">
            CI
        </div>
        <div class="titel">
            Servicio
        </div>
        <div class="titel">
            Estado
        </div>
    </div>
    <div class="container scroll">
    


            {#each servicios as servicio}
            <div class="item id-servicio">
                 {servicio.id_servicio}
            </div>
            <div class="item"> 
                {servicio.socio}
            </div>
            <div class="item">
                {servicio.ci}
            </div>   
            <div class="item">
                <img class="icono-3" src={SetServices(servicio.servicio)} alt="" srcset="">
                {#if tablet}
                     {servicio.servicio}
                {/if}
            </div>
            <div class="item">       
                <img class="icono" src={SetState(servicio.estado)} alt="" srcset="">
                {#if tablet}
                    {servicio.estado}
                {/if}
            </div>
            {/each}
    </div>
<!-- </div> -->

<div class="nav footer">
    <img class="icono-2" src="home-accident.svg" alt="" srcset="">
    <img class="icono-2" src="car-accident.svg" alt="" srcset="">
    <img class="icono-2" src="mechanic-help.svg" alt="" srcset="">
    <img class="icono-2" src="Inspection-car.svg" alt="" srcset="">

    <div>Siniestro hogar</div>
    <div>Siniestro vehiculo</div>
    <div>Auxilio mecánico</div>
    <div>Inspección vehicular</div>
</div>


<style>

    .scroll{
        height: 63.9vh;
        overflow: auto;
        align-content:start;
    }

    .nav{
        display: grid;
        place-items: center;
        justify-content: center;
        
        font-weight: 800;
    
        grid-template-columns: repeat(4,auto);
        column-gap: 30px;
        row-gap: 10px;
        padding: 15px 0;
        background-color: rgba(96, 96, 96, 0.291);
    }

    .container{
        display: grid;
        grid-template-columns: 23% 23% 23% 17% 14%;
        /* grid-template-columns: repeat(5,auto); */
        row-gap: 5px;

        text-align: center;

    }
    .titel{
        /* width: 100%; */
        padding: 10px 0;
        color: white;
        background-color: #121C4E;
    }
    .id-servicio{
        font-size: 12px;
        /* padding-top:20px; */
        /* height: 20px; */
    }

    .item{
        width: 100%;
        
        background-color: white;
        height: 100%;
        height: 50px;
        display: grid;
        align-items: center;
        padding: 4px 0;
    }

    .icono{
        width:25px; 
        height:25px;
        justify-self: center;
    }

    .icono-2{
        width:45px; 
        height:45px;
        justify-self: center;
    }

    .icono-3{
        width:35px; 
        height:35px;
        justify-self: center;
    }

    .footer{
        position: absolute;
        bottom: 0;
        background-color: rgb(229, 229, 229);

        width: 100%;
        text-align: center;
    }

</style>


