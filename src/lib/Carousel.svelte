
  <script>
// @ts-nocheck

  import { onMount,afterUpdate  } from "svelte";

  let currentIndex = 0;
  let lastNumOfIndex 
  let load = false
  // @ts-ignore
  let indecesElements = []
  // @ts-ignore
  let carousel;
    onMount(()=>{
        LoadIndex()
    })

    afterUpdate(()=>{
        indecesElements = indecesElements
        LoadIndex()
    })
    

    function LoadIndex() {
        indecesElements.length = 0
                // @ts-ignore
                let initialIndex = 0
        // @ts-ignore
        for (let index = 0; index < carousel.childNodes.length; index++) {
            // @ts-ignore
            const element = carousel.childNodes[index];
            if(element.nodeType == 1){
                
                indecesElements.push(index)
                
                if(initialIndex>0){
                    element.style.display = 'none'
                }
            }
            initialIndex++
        }
        console.log(currentIndex)
        updateViewWhitIndex(currentIndex)
        indecesElements = indecesElements
    }

    function next() {

        currentIndex++
        if(currentIndex>=indecesElements.length)
        currentIndex = 0;
        updateView()
    }

    function prev() {
        currentIndex--
        if(currentIndex<0)
        currentIndex = indecesElements.length-1;
        updateView()
    }

    // @ts-ignore
    function updateViewWhitIndex(indexClick){

   
            for (let index = 0; index < indecesElements.length; index++) {
            // @ts-ignore
            const element = carousel.childNodes[indecesElements[index]];
            element.style.display = 'none'
        }

        currentIndex = indexClick
        // @ts-ignore

        if(carousel.childNodes[indecesElements[indexClick]]){
            carousel.childNodes[indecesElements[indexClick]].style.display = 'block' 
        }

        indecesElements = indecesElements
    
   
    }

    function updateView(){

        for (let index = 0; index < indecesElements.length; index++) {
            // @ts-ignore
            const element = carousel.childNodes[indecesElements[index]];
            element.style.display = 'none'
        }
        // @ts-ignore
        carousel.childNodes[indecesElements[currentIndex]].style.display = 'block'
    }

  </script>


<div class="container_index">
  <div>
      {#each indecesElements as item,index}
            <div class="index" on:click={()=>{updateViewWhitIndex(index)}}>{index+1}</div>
      {/each}
  </div>
</div>
  <div bind:this={carousel} class="carousel">
    <slot />
  </div>
  <!-- <div class="controls">
    <button on:click={prev}>‹</button>
    <button on:click={next}>›</button>
  </div> -->

  <style>
    .container_index{
        display: grid;
        justify-items: center;
        align-items: center;
    }
    .index{
        display: inline-block;
        margin: 0 5px;
        padding: 5px;
        border-radius: 10px;
        background-color: #121C4E;
        color:white;
        min-width: 20px;
        text-align: center;
        cursor: pointer;
    }
    .index:hover{
        background-color: white;
        color:#121C4E;
    }
  </style>
