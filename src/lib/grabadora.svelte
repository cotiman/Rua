<script>
    // @ts-ignore
    let mediaRecorder;
    // @ts-ignore
    let recordedChunks = [];
    let audioUrl = '';
    let isRecording = false;
    let isRecorded = false;

    async function startRecording() {
        recordedChunks = [];
        try {
            const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
            mediaRecorder = new MediaRecorder(stream);

            mediaRecorder.ondataavailable = event => {
                if (event.data.size > 0) {
                    recordedChunks.push(event.data);
                }
            };

            mediaRecorder.onstop = () => {
                // @ts-ignore
                const audioBlob = new Blob(recordedChunks, { type: 'audio/wav' });
                audioUrl = URL.createObjectURL(audioBlob);
                isRecorded = true;
            };

            mediaRecorder.start();
            isRecording = true;
        } catch (err) {
            console.error('Error accessing microphone', err);
        }
    }

    function stopRecording() {
        // @ts-ignore
        mediaRecorder.stop();
        isRecording = false;
    }

    function playAudio() {
        const audioElement = document.getElementById('audioPlayback');
        // @ts-ignore
        audioElement.play();
    }
</script>

<h3>Grabación</h3>

<div class="container">
    {#if !isRecording}
            <button on:click={startRecording}>Grabar</button>
    {:else}
        <button class="rec" on:click={stopRecording} >Detener</button>
        <!-- <button on:click={playAudio}>Reproducir Audio</button> -->
            <!-- else content here -->
    {/if}
        <audio id="audioPlayback" src={audioUrl} controls></audio>
</div>


<style>
    h3 {
        text-align: center;
        font-size: 25px;
    }

.container{
        display: grid;
        grid-template-columns: min-content auto;
        gap:15px;
        margin:15px;
        justify-items: center;
        justify-content: center;
    }
    button {
        /* margin: 5px; */
        padding: 15px;
        border: none;
        border-radius: 10px;
        width: min-content;
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
            /* margin:2vh 30vw; */
            margin:0;
        }
    }
</style>