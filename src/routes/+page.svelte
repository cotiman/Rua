<script>
    import { onMount } from "svelte";
  import Signature from "$lib/signature.svelte";
  import Geolocalizacion from "$lib/geolocalizacion.svelte";
  import { updatePositionStore,updatePositionTargetStore , updatePathStore} from "../store/functions";
  import Notification from "$lib/notification.svelte";


  let ubicaciones = [
    {
      lat:-31.714519834892926,
      lng:-55.983171224920675
    },
    {
      lat:-31.719064861787945,
      lng:-55.988224506579854
    },
    {
      lat:-31.72147985408644,
      lng:-55.985006698366696
    },
    {
      lat:-31.71556595358558,
      lng:-55.979899772528555
    },
  ]



 //-31.71556595358558, -55.979899772528555
  // import Geolocalizacion from "$lib/geolocalizacion.svelte";
   // @ts-ignore
   let updatePosition, updatePositionTarget, updatePath
   onMount(() => {
    updatePositionStore.subscribe(value => {
      updatePosition = value;
    });
    updatePositionTargetStore.subscribe(value => {
      updatePositionTarget = value;
    });
    updatePathStore.subscribe(value => {
      updatePath = value;
    });
  });

  let index = 0

  function cambiarPosicion() {

    // New York
   // let nuevaLatitud = 40.7128;
   // let nuevaLongitud = -74.0060; 

    //Tacuarembo
   // nuevaLatitud = -31.714516755377733;
   // nuevaLongitud = -55.982518239409416; 
    // @ts-ignore
  
      // @ts-ignore
      updatePosition(ubicaciones[index].lat, ubicaciones[index].lng);

  

      index++;
      if(index>=ubicaciones.length)
        index = 0;
    let endPos = ubicaciones[index];
    
    // @ts-ignore
      updatePositionTarget(ubicaciones[index].lat, ubicaciones[index].lng);
       // @ts-ignore
    updatePath(endPos)
    
  }


 

</script>


  <!-- <Geolocalizacion />
  <button on:click={cambiarPosicion}>
    UpdateMap
</button> -->
<!-- <Signature /> -->



<Notification />
<style >

:global(form){
    display:grid;
    row-gap: 30px;
}

:global(input){
    width: 216px;
    height: 32px;
    border: none;
    border-radius: 2px;
    padding: 5px 12px;
}

:global(.center-btn){
    display: grid;
    place-items: center;
    row-gap: 30px;
}

:global(button){
    padding:10px; 
    border-radius: 10px;
    font-size: medium;
    border: none;
    color:white;
    background-color:#121C4E;
    max-width: max-content;
    text-align: center;
}

:global(a){
    text-decoration: none;
    color: #00000073;
    text-align: left;

}

:global(.font){
    font-family: Roboto;
    font-size: 14px;
    font-weight: 400;
    line-height: 22px;
    src: url('/fonts/roboto/Roboto-Black.ttf') format('ttf');
}
</style>