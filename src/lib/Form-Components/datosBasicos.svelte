<h3>Datos basicos</h3>
<div class="container">
    <!-- <select name="siniestroType" id="" required>
        <option value="Seleccione un siniestro" disabled selected>Seleccione un siniestro</option>
        <option value="Vehícular">Vehícular</option>
        <option value="Hogar">Hogar</option>
        <option value="Inspección previa">Inspección previa</option>
    </select> -->
    <input type="number" placeholder="Nº Póliza*" required>
    <input type="text" placeholder="Nombre asegurado*" required>
    <input type="text" placeholder="Matrícula*" required>
    <input type="text" placeholder="Servicio*" required>
    <input type="email" placeholder="Email*" required>
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
