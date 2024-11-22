<h3>Datos del Siniestro</h3>
<div class="container">

    <select name="siniestroType" id="" placeholder='Tipo de Siniestro' required>
        <option value="Daño Propio" >Daño Propio</option>
        <option value="Daño Propio" >Daño Tercero</option>
        <option value="Daño Propio" >Daño Hurto</option>
        <option value="Daño Propio" >Daño Incendio</option>
    </select>
    <input type="number" placeholder="Nº Pasajeros delanteros" required>
    <input type="number" placeholder="Nº Pasajeros traseros" required>
    <input type="number" placeholder="Nº Vehículos que intervienen" required>
    <input type="text" placeholder="Direccion" required>
    <input type="text" placeholder="Intersección" required>
    <input type="text" placeholder="Denuncia Policial" required>
    <input type="text" placeholder="Localidad" required>
    <input type="text" placeholder="LocalidadDepartamento" required>
    <input type="checkbox" placeholder="Ruita Informe en lugar del siniestro" required>
    <input type="number" placeholder="Cantidad de lesionados en vehículo asegurado" required>
    <textarea name="" id="" placeholder="Cantidad de Fallecidos en Vehículo asegurado">
    </textarea>
    <textarea name="" id="" placeholder="Descripción del hecho">
    </textarea>
    <textarea name="" id="" placeholder="Daños a consecuencia">
    </textarea>
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



