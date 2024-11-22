<h3>Datos del Conductor</h3>
<div class="container">
    <input type="text" placeholder="Conductor" required>
    <input type="number" placeholder="CI" required>

    <div class="marco">
        <h4>Genero</h4>
        <label for="">Hombre</label>
        <input type="checkbox" name="" id="">
        <label for="">Mujer</label>
        <input type="checkbox" name="" id="">
        <label for="">Otro</label>
        <input type="checkbox" name="" id="">
    </div>
    <br>
    <div>
        <h4>Fecha de nacimiento</h4>
        <input type="date" placeholder="Fecha de nacimiento" required>
    </div>
    <br>
    <input type="text" placeholder="Domicilio" required>
    <input type="number" placeholder="Nº Puerta" required>
    <input type="number" placeholder="Nº Apartamento" required>
    <input type="text" placeholder="Departamento" required>
    <input type="text" placeholder="Estados Civil" required>
    <input type="number" placeholder="Nº Teléfono" required>
    <input type="email" placeholder="Email" required>
    <input type="number" placeholder="Nº Libreta" required>
    <input type="text" placeholder="Departamento Libreta" required>
    <input type="text" placeholder="Categoría Libreta" required>
    <input type="text" placeholder="Vencimiento Libreta" required>
    <!-- <input type="text" placeholder="Sexo" required> -->
    <div class="marco">
        <h4>Test Alcoholemia</h4>
        <div>
            <label for="">Positivo</label>
            <input type="checkbox" name="" id="">
            <label for="">Negativo</label>
            <input type="checkbox" name="" id="">
            <label for="">Se Nego</label>
            <input type="checkbox" name="" id="">
        </div>
    </div>
</div>
<style>
    .container{
        display: grid;
        grid-template-columns: auto;
        gap:5px;
        margin:5px;
    }

    .marco{
        background-color: white;
        border: none;
        border-radius: 10px;
        padding: 10px;
        color: rgb(92, 92, 92);
        margin: 0;
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
