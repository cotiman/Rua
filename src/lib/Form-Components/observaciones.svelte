<h3>Obsevaciones</h3>
<div class="container">
    <textarea name="" id="">
    </textarea>
</div>
<style>
    textarea{
        height: 150px;
        width: 300px;
        border: none;
        border-radius: 5px;
        resize: none;
        padding: 10px;
    }
    .container{
        display: grid;
        grid-template-columns: auto;
        justify-items: center;
        gap:5px;
        margin:5px;
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
            margin: 0 30vw;
        }
    }
</style>
