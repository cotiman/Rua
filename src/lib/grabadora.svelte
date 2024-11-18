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

<main>
    <button on:click={startRecording} disabled={isRecording}>Iniciar Grabación</button>
    <button on:click={stopRecording} disabled={!isRecording}>Detener Grabación</button>
    <button on:click={playAudio} disabled={!isRecorded}>Reproducir Audio</button>
    <audio id="audioPlayback" src={audioUrl} controls></audio>
</main>

<style>
    button {
        margin: 5px;
    }
</style>