<script>
    
</script>

<div class="container">
    <img src="/RUA_LOGO.png" alt="" srcset="">

<slot></slot>
</div>
<style>
    :global(body){
       background: -webkit-linear-gradient(-90deg, #F7C672 0%, #72B5F7 70%);
       margin: 0;
       padding: 0;
       height: 100vh;
    }

    .container{
        padding-top: 15vh;
        display: grid;
        place-items: center;
        row-gap: 30px;
    }

    img{
        width: 294px;
    }

    
</style>