const jsonUrl = "https://song-253.s3.us-east-1.amazonaws.com/Piano/piano.json";

fetch(jsonUrl)
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
            const songElement = document.createElement("div");

            songElement.className = "song";

            songElement.innerHTML = `
                <div class="song-info">
                    <h2>${song.title}</h2>
                </div>

                <video controls width="500">
                    <source src="${song.audio}" type="video/mp4">
                    Your browser does not support video.
                </video>
            `;

            musicList.appendChild(songElement);
        });
    })
    .catch(error => {
        console.error("Piano error:", error);

        document.getElementById("music-list").innerHTML =
            "Error loading music: " + error.message;
    }); a