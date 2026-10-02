const jsonUrl = "https://song-253.s3.us-east-1.amazonaws.com/Piano/piano.json?v=" + Date.now();

fetch(jsonUrl, { cache: "no-store" })
    .then(response => {
        if (!response.ok) {
            throw new Error("Could not load JSON");
        }


        return response.json();
    })
    .then(data => {

        const musicList = document.getElementById("music-list");

        musicList.innerHTML = "";

        data.forEach(song => {

            const pianoCard = document.createElement("details");
            pianoCard.className = "piano-card";

            pianoCard.innerHTML = `
            <summary>${song.title}</summary>

            <div class="piano-video">
                <video controls>
                    <source src="${song.audio.replace(/\(/g, "%28").replace(/\)/g, "%29")}" type="video/mp4">
                </video>
            </div>
        `;

            musicList.appendChild(pianoCard);
        });

    })
    .catch(error => {

        console.error(error);

        document.getElementById("music-list").innerHTML =
            "Error loading piano videos: " + error.message;

    });

