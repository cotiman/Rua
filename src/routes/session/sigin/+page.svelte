
<form  action="" method="post">
    <input type="email" name="" id="" placeholder="email">
    <input type="text" name="" id="" placeholder="nombre">
    <input type="text" name="" id="" placeholder="apellido">
    <select name="documentType" id="" placeholder="tipo documento">
        <option value="" disabled selected>tipo documento</option>
        <option value="ci">ci</option>
        <option value="pasaporte">pasaporte</option>
    </select>
    <input type="number" name="" id="" placeholder="documento">
    <input type="password" name="" id="" placeholder="contraseña">
    <input type="password" name="" id="" placeholder="repetir contraseña">

    <div class="center-btn">
        <button class="font" >Registrarse</button>
        <a class="font" href="/session/login">Iniciar Sesión</a>
    </div>
</form>

<style>

    form{
        display:grid;
        row-gap: 20px;
    }

    input,select{
        width: 216px;
        height: 32px;
        border: none;
        border-radius: 2px;
        padding: 5px 12px;
    }

    select{
        width: 240px;
        height: 42px;
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

