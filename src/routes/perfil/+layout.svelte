<script>
    import BurgerBtn from "$lib/burgerBtn.svelte";
</script>

<div class="container">
    <img src="/RUA_LOGO.png" alt="" srcset="">
    <div class="buregerBtn">
        <BurgerBtn />
    </div>
</div>

<slot></slot>

<style>
    :global(body){
       background: -webkit-linear-gradient(-90deg, #FFFFFF 0%, #72B5F7 70%);
       margin: 0;
       padding: 0;
       height: 100vh;
    }

    .container{
        display: grid;
        grid-template-columns: 30% 30%;
        justify-content: space-between;
        margin: 10px;
    }

    .buregerBtn{
        text-align: right;
    }

    img{
        width: 174px;
    }

    
</style>