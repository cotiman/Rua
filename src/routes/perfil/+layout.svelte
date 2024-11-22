<script>
    import BurgerBtn from "$lib/burgerBtn.svelte";
</script>

<div class="container">
    <img class="logo" src="/RUA_LOGO.png" alt="" srcset="">
    <div class="buregerBtn">
        <BurgerBtn />
    </div>
</div>


<slot></slot>


<style>
    :global(body){
       background: -webkit-linear-gradient(-90deg, #e3e3e3 0%, #72B5F7 70%);
       margin: 0;
       padding: 0;
       /* height: 100vh; */
       margin-bottom: 2vh;
    }

 

    .container{
        display: grid;
        grid-template-columns: 30% 30%;
        justify-content: space-between;
        padding: 10px;
    }

    .buregerBtn{
        text-align: right;
    }

    .logo{
        width: 174px;
    }


    
</style>