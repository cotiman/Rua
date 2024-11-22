<script>
  import { onMount } from "svelte";


  const COLOR = "black";
  const BG_COLOR = "white";
  const BORDER_SIZE = 1;
// @ts-ignore
  let context;

  // @ts-ignore
  let canvas;

  // @ts-ignore
  let loadSignature;


  let startDraw = false;
  // @ts-ignore
  let data;

  let xLater = 0,
    yLater = 0,
    xCurrent = 0,
    yCurrent = 0;
  // @ts-ignore
  const realXPositionCanvas = (clientX) => clientX - canvas.getBoundingClientRect().left;

  // @ts-ignore
  const realYPositionCanvas = (clientY) => clientY - canvas.getBoundingClientRect().top;

  onMount(() => {
    // @ts-ignore
    context = canvas.getContext("2d");
  });

  function MouseUp() {
    startDraw = false;
  }
// @ts-ignore
  function MouseDown(e) {

    xLater = xCurrent;
    yLater = yCurrent;

    let target = e

    console.log(e.type)

  if(e.type.includes("touch")){
    target = e.touches[0]
  }

    xCurrent = realXPositionCanvas(target.clientX);
    yCurrent = realYPositionCanvas(target.clientY);

    // @ts-ignore
    context.beginPath();
    // @ts-ignore
    context.fillStyle = COLOR;
    // @ts-ignore
    context.fillRect(xCurrent,yCurrent,BORDER_SIZE,BORDER_SIZE);
    // @ts-ignore
    context.closePath();

    startDraw = true;
  }
  // @ts-ignore
  function MouseMove(e) {
    if (!startDraw) return;

     // @ts-ignore
  
  

    xLater = xCurrent;
    yLater = yCurrent;

    let target = e

    console.log(e.type)

    if(e.type.includes("touch")){
      target = e.touches[0]
    }

    xCurrent = realXPositionCanvas(target.clientX);
    yCurrent = realYPositionCanvas(target.clientY);

    // @ts-ignore
    context.beginPath();
    // @ts-ignore
    context.moveTo(xLater, yLater);
    // @ts-ignore
    context.lineTo(xCurrent, yCurrent);
    // @ts-ignore
    context.strokeStyle = COLOR;
    // @ts-ignore
    context.lineWidth = BORDER_SIZE;
    // @ts-ignore
    context.stroke();
    // @ts-ignore
    context.closePath();


  }

  function Clear(){
    // @ts-ignore
    context.fillStyle = BG_COLOR;
    // @ts-ignore
    context.fillRect(0,0,canvas.width,canvas.height);

  }

  function Save(){
    // @ts-ignore

    data = canvas.toDataURL()

    console.log(data.length)
   
  }

  
  function Load(){
  // @ts-ignore
    loadSignature.src = data;

  }



</script>

<div class="container">
  <h3>Firma</h3>
  <canvas
    bind:this={canvas}
    on:mouseup={MouseUp}
    on:mousedown={MouseDown}
    on:mousemove={MouseMove}
    
    on:touchstart={MouseDown}
    on:touchmove={MouseMove}
    on:touchend={MouseUp}
  >
  </canvas>

</div>
<!-- <div>
    <button on:click={Clear}>
        Clear
    </button>
    <button on:click={Save}>
        Save
    </button>
    <button on:click={Load}>
        Load
    </button>

</div> -->
<!-- <div>
    <img bind:this={loadSignature} src="" alt="">
</div> -->

<style>
  canvas {
    border: 1px solid black;
    background-color: white;
    border: none;
    border-radius: 10px;
    
  }
  h3 {
        text-align: center;
        font-size: 25px;
    }

.container{
        display: grid;
        grid-template-columns: auto;
        gap:5px;
        margin:15px;
        justify-items: center;
    }
    button {
        /* margin: 5px; */
        padding: 15px;
        border: none;
        border-radius: 10px;
    }

    .rec{
        color:white;
        background-color: red;

    }

    @media only screen and (min-width: 600px) {
        /* For tablets: */
        .container {
            margin: 2vh 15vw;
        }
    }

    @media only screen and (min-width: 768px) {
        /* For desktop: */
        .container {
            margin:2vh 30vw;
            margin:0;
        }
    }
</style>
