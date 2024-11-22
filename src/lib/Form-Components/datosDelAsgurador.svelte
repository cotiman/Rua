<h3>Datos del Asegurador</h3>
<div class="container">
    <div class="date-container">
        <div>
            <h4>Fecha del Siniestro</h4>
            <input type="date" placeholder="Fecha del Siniestro" required>
        </div>
        <div>
            <h4>Fecha de la Denuncia</h4>
            <input type="date" placeholder="Fecha de la Denuncia" required>
        </div>
    </div>
    <br>
    <input type="text" placeholder="Nombre Asegurado" required>
    <input type="number" placeholder="Nº Póliza" required>
    <input type="text" placeholder="Diurno o Nocturno" required>
    <input type="email" placeholder="Email" required>
</div>

<style>
    .container{
        display: grid;
        grid-template-columns: auto;
        gap:5px;
        margin:5px;
    }

    .date-container{
        display: grid;
        grid-template-columns: auto auto;
        justify-items: center;
    }

    input{
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
            margin: 0 30vw;
        }
    }
    
</style>
