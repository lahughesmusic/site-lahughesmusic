const jsonUrl = "https://song-253.s3.us-east-1.amazonaws.com/songs.json?debug=" + Date.now();



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

        musicList.innerHTML = "";

        data.forEach(song => {
            const songElement = document.createElement("div");
            console.log("AUDIO URL:", song.audio);

            songElement.className = "song";

            let player;
            if (song.type === "piano") {
                player = `
                    <video controls width="300">
                        <source src="${song.audio.replace(/\(/g, "%28").replace(/\)/g, "%29")}" type="video/mp4">
                    </video>
                `;
            } else {
                const extension = song.audio.split(".").pop().toLowerCase();

                let audioType = "audio/*";

                if (extension === "mp3") {
                    audioType = "audio/mpeg";
                } else if (extension === "m4a") {
                    audioType = "audio/mp4";
                }

                const audioUrl = song.audio
                    .replace(/\(/g, "%28")
                    .replace(/\)/g, "%29");

                player = `
                    <audio controls controlsList="nodownload noplaybackrate">
                        <source src="${audioUrl}" type="${audioType}">
                    </audio>
                `;
            }
            songElement.innerHTML = `
                <div class="song-info">
                    <h2>${song.title}</h2>
                </div>

                ${player}
            `;

            musicList.appendChild(songElement);
        });
    })
    .catch(error => {
        console.error(error);

        document.getElementById("music-list").innerHTML =
            "Error loading music: " + error.message;
    });