<script>
    export let num = 1
</script>
<main>

    <p>Datos Testigo {num}</p>

    <div class="container">
        <input type="text" placeholder="Nombre" required>
        <input type="text" placeholder="Apellido" required>
        <input type="text" placeholder="Documento" required>
        <input type="text" placeholder="Domicilio" required>
        <input type="number" placeholder="Teléfono" required>
        <input type="text" placeholder="Parentesco con el conductor" required>
    </div>
</main>
<style>
    .container{
        display: grid;
        grid-template-columns: auto;
        gap:5px;
        margin:5px;
    }

    
    p{
        background-color: white;
        border: none;
        border-radius: 10px;
        padding: 10px;
        color: rgb(92, 92, 92);
        margin: 10px 0 5px 0;
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
            margin: 0 ;
        }
    }
    
</style>
