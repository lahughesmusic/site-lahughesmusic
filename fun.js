const jsonUrl = "https://song-253.s3.us-east-1.amazonaws.com/Fun/fun.json";

fetch(jsonUrl, { cache: "no-store" })
    .then(response => {
        if (!response.ok) {
            throw new Error("Could not load JSON");
        }

        return response.json();
    })
    .then(data => {
        console.log("JSON loaded:", data);

        const musicList = document.getElementById("music-list");

        data.forEach(song => {
            const songElement = document.createElement("div");

            songElement.className = "song";

            songElement.innerHTML = `
                <div class="song-info">
                    <h2>${song.title}</h2>
                </div>

                <audio controls src="${song.audio}"></audio>
            `;

            musicList.appendChild(songElement);
        });
    })
    .catch(error => {
        console.error(error);

        document.getElementById("music-list").innerHTML =
            "Error loading music: " + error.message;
    });