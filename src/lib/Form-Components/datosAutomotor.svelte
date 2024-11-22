<script>
  import { onMount } from "svelte";

  let currentYear
  // @ts-ignore
  let yearsArr = []
    onMount(()=>{

        currentYear = new Date().getFullYear()
        for (let index = currentYear; index > currentYear - (currentYear - 1900); index--) {
      
            yearsArr.push(index)
        }

        // @ts-ignore
        yearsArr = yearsArr
    })


</script>


<h3>Datos del Automotor</h3>

<div class="container">
    <input type="text" placeholder="Matrícula" required>
    <input type="text" placeholder="Marca" required>
    <input type="text" placeholder="Modelo" required>
    <select name="siniestroType" id="" required>
        <option value="Año" disabled selected>Año</option>
        {#each yearsArr as year}
            <option value="{year}">{year}</option>
        {/each}
    </select>
    <input type="text" placeholder="Color" required>
    <input type="text" placeholder="Departamento empadronado" required>
    <input type="text" placeholder="Padrón" required>
    <input type="text" placeholder="Chasis" required>
    <input type="text" placeholder="Nº Motor" required>
</div>

<style>
    .container{
        display: grid;
        grid-template-columns: auto;
        gap:5px;
        margin:5px;
    }

    input,select{
        padding: 10px;
        border: none;
        border-radius: 5px;
    }
    h3 {
        text-align: center;
        font-size: 25px;
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
            /* margin: 0 40vw; */
            margin: 0;
        }
    }
    
</style>
