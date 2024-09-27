
<form  action="" method="post">
    <input type="text" name="" id="" placeholder="email">
    <input type="password" name="" id="" placeholder="contraseña">
    <div class="center-btn">
        <button class="font" >Iniciar Sesión</button>
        <a class="font" href="/session/sigin">Registrarse</a>
        <a class="font" href="/session/forget-password">Olvidé mi contraseña</a>
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
        padding: 5px 12px;
    }

    .center-btn{
        display: grid;
        place-items: center;
        row-gap: 30px;
    }

    button{
        padding:10px; 
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

