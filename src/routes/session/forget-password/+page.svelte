
<form  action="" method="post">
    <input type="email" name="" id="" placeholder="email">
    <div class="center-btn">
        <button class="font" >Enviar</button>
        <a class="font" href="/session/sigin">Registrarse</a>
        <a class="font" href="/session/login">Iniciar Sesión</a>
    </div>
</form>

<style>

    form{
        display:grid;
        row-gap: 20px;
    }

    input{
        width: 216px;
        height: 32px;
        border: none;
        border-radius: 2px;
        padding: 3px 12px;
    }

    .center-btn{
        margin-top: 20px;
        display: grid;
        place-items: center;
        row-gap: 20px;
    }

    button{
  
        padding:5px 15px; 
        border-radius: 10px;
        font-size: medium;
        border: none;
        color:white;
        background-color:#121C4E;
        max-width: max-content;
        text-align: center;
    }

    a{
        text-decoration: none;
        color: #00000073;
        text-align: left;

    }

    

    .font{
        font-family: Roboto;
        font-size: 14px;
        font-weight: 400;
        line-height: 22px;
        src: url('/fonts/roboto/Roboto-Black.ttf') format('ttf');
    }


</style>

