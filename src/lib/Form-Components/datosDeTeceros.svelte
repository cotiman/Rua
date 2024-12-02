<script>
    export let num = 1


</script>


<main>


<p>Datos de terceros {num}</p>
<!-- <div class="container" style="margin-bottom: 5px;">
    <input type="text" placeholder="cantidad de terceros">
</div> -->
<div class="container">
    <div class="marco">
            <label for="">Vehículo Dañado</label>
            <input type="checkbox" name="" id="">
    </div> 
    <input type="text" placeholder="Matricula" required>
    <input type="text" placeholder="Marca" required>
    <input type="text" placeholder="Modelo" required>
    <input type="text" placeholder="Color" required>
    <div class="marco">
        <label for="">Lesionados</label>
        <input type="checkbox" name="" id="">
    </div>
    <input type="text" placeholder="Nombre Conductor o lesionado" required>
    <input type="text" placeholder="CI" required>
    <input type="number" placeholder="Telefono" required>
    <input type="text" placeholder="Domicilio" required>
    <input type="number" placeholder="Nº Puerta" required>
    <input type="number" placeholder="Nº Apartamento" required>
    <input type="text" placeholder="Localidad" required>
    <input type="text" placeholder="Departamento" required>
    <div class="marco">
        <h4>Examen de Alcoholemia</h4>
        <div>
            <label for="">Positivo</label>
            <input type="checkbox" name="" id="">
            <label for="">Negativo</label>
            <input type="checkbox" name="" id="">
            <label for="">Se Nego</label>
            <input type="checkbox" name="" id="">
        </div>
    </div>
    <input type="number" placeholder="Nº Póliza" required>
    <input type="number" placeholder="Cantidad de lesionados" required>
    <input type="number" placeholder="Cantidad de Fallecidos" required>
    <input type="text" placeholder="Nombre de Aseguradora" required>
    <h4>Daños</h4>
    <textarea name="" id="" placeholder="Daños">
    </textarea>
</div>
</main>

<style>

    .container{
        display: grid;
        grid-template-columns: auto;
        gap:5px;
        margin:5px;
    }

    .container-checkbox{
        display: grid;
        grid-template-columns: auto auto;
        justify-items: center;

    }

    textarea{
        height: 150px;
        border: none;
        border-radius: 5px;
        resize: none;
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

    h4{
        font-size: 15px;
        margin: 0.3vh 0;
        padding: 0;
    }

    p{
        background-color: white;
        border: none;
        border-radius: 10px;
        padding: 10px;
        color: rgb(92, 92, 92);
        margin: 10px 0 5px 0;
    }

    .marco{
        background-color: white;
        border: none;
        border-radius: 10px;
        padding: 10px;
        color: rgb(92, 92, 92);
        margin: 0;
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