const songs = [
    {
        title: "My First Song",
        artist: "Lea McShan",
        audio: "https://your-bucket.s3.amazonaws.com/3_6.mp3",
    },
    {
        title: "My Second Song",
        artist: "Lea McShan",
        audio: "https://your-bucket.s3.amazonaws.com/Afterthought.mp3",
    },
    {
        title: "My Second Song",
        artist: "Lea McShan",
        audio: "https://your-bucket.s3.amazonaws.com/ambient_loop.m4a",
    },
    {
        title: "My Second Song",
        artist: "Lea McShan",
        audio: "https://your-bucket.s3.amazonaws.com/ambient_tension.m4a",
    },
    {
        title: "My Second Song",
        artist: "Lea McShan",
        audio: "https://your-bucket.s3.amazonaws.com/ambitious_piano.mp3",
    },
    {
        title: "My Second Song",
        artist: "Lea McShan",
        audio: "https://your-bucket.s3.amazonaws.com/anchor(novox).m4a",
    },
    {
        title: "My Second Song",
        artist: "Lea McShan",
        audio: "https://your-bucket.s3.amazonaws.com/anchor(wvox).m4a",
    },
    {
        title: "My Second Song",
        artist: "Lea McShan",
        audio: "https://your-bucket.s3.amazonaws.com/anticipating_storm.m4a",
    },
    {
        title: "My Second Song",
        artist: "Lea McShan",
        audio: "https://your-bucket.s3.amazonaws.com/anyone_listening?.m4a",
    },
    {
        title: "My Second Song",
        artist: "Lea McShan",
        audio: "https://your-bucket.s3.amazonaws.com/battle_chase.m4a",
    },
    {
        title: "My Second Song",
        artist: "Lea McShan",
        audio: "https://your-bucket.s3.amazonaws.com/battle_vocals.m4a",
    },
    {
        title: "My Second Song",
        artist: "Lea McShan",
        audio: "https://your-bucket.s3.amazonaws.com/be_still.m4a",
    },
    {
        title: "My Second Song",
        artist: "Lea McShan",
        audio: "https://your-bucket.s3.amazonaws.com/be.m4a",
    },
    {
        title: "My Second Song",
        artist: "Lea McShan",
        audio: "https://your-bucket.s3.amazonaws.com/beep_boop_beat.m4a",
    },
    {
        title: "My Second Song",
        artist: "Lea McShan",
        audio: "https://your-bucket.s3.amazonaws.com/behind_the_curtain.m4a",
    },
    {
        title: "My Second Song",
        artist: "Lea McShan",
        audio: "https://your-bucket.s3.amazonaws.com/BigBand.m4a",
    },
    {
        title: "My Second Song",
        artist: "Lea McShan",
        audio: "https://your-bucket.s3.amazonaws.com/bouncy_morning.m4a",
    },
    {
        title: "My Second Song",
        artist: "Lea McShan",
        audio: "https://your-bucket.s3.amazonaws.com/breakTweaker_loop.m4a",
    },
    {
        title: "My Second Song",
        artist: "Lea McShan",
        audio: "https://your-bucket.s3.amazonaws.com/BRIDGE.m4a",
    },
    {
        title: "My Second Song",
        artist: "Lea McShan",
        audio: "https://your-bucket.s3.amazonaws.com/build_a_life.m4a",
    },
    {
        title: "My Second Song",
        artist: "Lea McShan",
        audio: "https://your-bucket.s3.amazonaws.com/CASE.m4a",
    },
    {
        title: "My Second Song",
        artist: "Lea McShan",
        audio: "https://your-bucket.s3.amazonaws.com/castle.m4a",
    },
    {
        title: "My Second Song",
        artist: "Lea McShan",
        audio: "https://your-bucket.s3.amazonaws.com/chasing_a_thought.m4a",
    },
    {
        title: "My Second Song",
        artist: "Lea McShan",
        audio: "https://your-bucket.s3.amazonaws.com/color_(NOVOX).m4a",
    },
    {
        title: "My Second Song",
        artist: "Lea McShan",
        audio: "https://your-bucket.s3.amazonaws.com/color_(WVOX).m4a",
    },
    {
        title: "My Second Song",
        artist: "Lea McShan",
        audio: "https://your-bucket.s3.amazonaws.com/COURT_(RO).m4a",
    },
    {
        title: "My Second Song",
        artist: "Lea McShan",
        audio: "https://your-bucket.s3.amazonaws.com/darling.m4a",
    },
    {
        title: "My Second Song",
        artist: "Lea McShan",
        audio: "https://your-bucket.s3.amazonaws.com/Delta.mp3",
    },
    {
        title: "My Second Song",
        artist: "Lea McShan",
        audio: "https://your-bucket.s3.amazonaws.com/distorted_view.mp3",
    },
    {
        title: "My Second Song",
        artist: "Lea McShan",
        audio: "https://your-bucket.s3.amazonaws.com/DISTORTION_NOVOX.m4a",
    },
    {
        title: "My Second Song",
        artist: "Lea McShan",
        audio: "https://your-bucket.s3.amazonaws.com/DISTORTION_W:VOX.m4a",
    },
    {
        title: "My Second Song",
        artist: "Lea McShan",
        audio: "https://your-bucket.s3.amazonaws.com/Don't_Go.m4a",
    },
    {
        title: "My Second Song",
        artist: "Lea McShan",
        audio: "https://your-bucket.s3.amazonaws.com/dots.m4a",
    },
    {
        title: "My Second Song",
        artist: "Lea McShan",
        audio: "https://your-bucket.s3.amazonaws.com/drama_in_the_castle.m4a",
    },
    {
        title: "My Second Song",
        artist: "Lea McShan",
        audio: "https://your-bucket.s3.amazonaws.com/Dream.m4a",
    },
    {
        title: "My Second Song",
        artist: "Lea McShan",
        audio: "https://your-bucket.s3.amazonaws.com/dreamer.mp3",
    },
    {
        title: "My Second Song",
        artist: "Lea McShan",
        audio: "https://your-bucket.s3.amazonaws.com/dreaming_in_strings.m4a",
    },
    {
        title: "My Second Song",
        artist: "Lea McShan",
        audio: "https://your-bucket.s3.amazonaws.com/EDM_SUBMISSION_You_Said_My_Name.m4a",
    },
    {
        title: "My Second Song",
        artist: "Lea McShan",
        audio: "https://your-bucket.s3.amazonaws.com/ever.m4a",
    },
    {
        title: "My Second Song",
        artist: "Lea McShan",
        audio: "https://your-bucket.s3.amazonaws.com/experimental_loops.m4a",
    },
    {
        title: "My Second Song",
        artist: "Lea McShan",
        audio: "https://your-bucket.s3.amazonaws.com/fall.m4a",
    },
    {
        title: "My Second Song",
        artist: "Lea McShan",
        audio: "https://your-bucket.s3.amazonaws.com/fast_angles.m4a",
    },
    {
        title: "My Second Song",
        artist: "Lea McShan",
        audio: "https://your-bucket.s3.amazonaws.com/fell(NOVOX).m4a",
    },
    {
        title: "My Second Song",
        artist: "Lea McShan",
        audio: "https://your-bucket.s3.amazonaws.com/fell(WVOX).m4a",
    },
    {
        title: "My Second Song",
        artist: "Lea McShan",
        audio: "https://your-bucket.s3.amazonaws.com/FINALLY.mp3",
    },
    {
        title: "My Second Song",
        artist: "Lea McShan",
        audio: "https://your-bucket.s3.amazonaws.com/frustrating_word.m4a",
    },
    {
        title: "My Second Song",
        artist: "Lea McShan",
        audio: "https://your-bucket.s3.amazonaws.com/fun_times.m4a",
    },
    {
        title: "My Second Song",
        artist: "Lea McShan",
        audio: "https://your-bucket.s3.amazonaws.com/GIVER.08 2.m4a",
    },
    {
        title: "My Second Song",
        artist: "Lea McShan",
        audio: "https://your-bucket.s3.amazonaws.com/GIVER.m4a",
    },

    {
        title: "My Second Song",
        artist: "Lea McShan",
        audio: "https://your-bucket.s3.amazonaws.com/gone.m4a",
    },
    {
        title: "My Second Song",
        artist: "Lea McShan",
        audio: "https://your-bucket.s3.amazonaws.com/good_monsters.m4a",
    },
    {
        title: "My Second Song",
        artist: "Lea McShan",
        audio: "https://your-bucket.s3.amazonaws.com/Graceful_Shadows.mp3",
    },
    {
        title: "My Second Song",
        artist: "Lea McShan",
        audio: "https://your-bucket.s3.amazonaws.com/guitar_loop.m4a",
    },
    {
        title: "My Second Song",
        artist: "Lea McShan",
        audio: "https://your-bucket.s3.amazonaws.com/hey.m4a",
    },
    {
        title: "My Second Song",
        artist: "Lea McShan",
        audio: "https://your-bucket.s3.amazonaws.com/holding_on.m4a",
    },

    {
        title: "My Second Song",
        artist: "Lea McShan",
        audio: "https://your-bucket.s3.amazonaws.com/home.mp3",
    },
    {
        title: "My Second Song",
        artist: "Lea McShan",
        audio: "https://your-bucket.s3.amazonaws.com/hope_loop.m4a",
    },
    {
        title: "My Second Song",
        artist: "Lea McShan",
        audio: "https://your-bucket.s3.amazonaws.com/I_FOUND_A_NOTE_LOOP.m4a",
    },
    {
        title: "My Second Song",
        artist: "Lea McShan",
        audio: "https://your-bucket.s3.amazonaws.com/if_ever_i_was_lost(novox).m4a",
    },
    {
        title: "My Second Song",
        artist: "Lea McShan",
        audio: "https://your-bucket.s3.amazonaws.com/if_ever_i_was_lost(wvox)",
    },
    {
        title: "My Second Song",
        artist: "Lea McShan",
        audio: "https://your-bucket.s3.amazonaws.com/important_decision.m4a",
    },

    {
        title: "My Second Song",
        artist: "Lea McShan",
        audio: "https://your-bucket.s3.amazonaws.com/INJUSTICE.m4a",
    },
    {
        title: "My Second Song",
        artist: "Lea McShan",
        audio: "https://your-bucket.s3.amazonaws.com/it's_all_alright.m4a",
    },
    {
        title: "My Second Song",
        artist: "Lea McShan",
        audio: "https://your-bucket.s3.amazonaws.com/j.m4a",
    },
    {
        title: "My Second Song",
        artist: "Lea McShan",
        audio: "https://your-bucket.s3.amazonaws.com/june_(piano).m4a",
    },
    {
        title: "My Second Song",
        artist: "Lea McShan",
        audio: "https://your-bucket.s3.amazonaws.com/june_(piano).m4a",
    },
    {
        title: "My Second Song",
        artist: "Lea McShan",
        audio: "https://your-bucket.s3.amazonaws.com/K.m4a",
    },
    {
        title: "My Second Song",
        artist: "Lea McShan",
        audio: "https://your-bucket.s3.amazonaws.com/king_of_the_city.m4a",
    },
    {
        title: "My Second Song",
        artist: "Lea McShan",
        audio: "https://your-bucket.s3.amazonaws.com/L_SOng.m4a",
    },
    {
        title: "My Second Song",
        artist: "Lea McShan",
        audio: "https://your-bucket.s3.amazonaws.com/l.m4a",
    },
    {
        title: "My Second Song",
        artist: "Lea McShan",
        audio: "https://your-bucket.s3.amazonaws.com/look_away.m4a",
    },
    {
        title: "My Second Song",
        artist: "Lea McShan",
        audio: "https://your-bucket.s3.amazonaws.com/LOOK_UP(NOVOX).m4a",
    },
    {
        title: "My Second Song",
        artist: "Lea McShan",
        audio: "https://your-bucket.s3.amazonaws.com/losing.m4a",
    },
    {
        title: "My Second Song",
        artist: "Lea McShan",
        audio: "https://your-bucket.s3.amazonaws.com/lost_in_the_city.m4a",
    },
    {
        title: "My Second Song",
        artist: "Lea McShan",
        audio: "https://your-bucket.s3.amazonaws.com/LOVE.m4a",
    },
    {
        title: "My Second Song",
        artist: "Lea McShan",
        audio: "https://your-bucket.s3.amazonaws.com/magical_moments.m4a",
    },
    {
        title: "My Second Song",
        artist: "Lea McShan",
        audio: "https://your-bucket.s3.amazonaws.com/manana(NOVOX).m4a",
    },
    {
        title: "My Second Song",
        artist: "Lea McShan",
        audio: "https://your-bucket.s3.amazonaws.com/manana(WVOX).m4a",
    },
    {
        title: "My Second Song",
        artist: "Lea McShan",
        audio: "https://your-bucket.s3.amazonaws.com/Massi.mp3",
    },

    {
        title: "My Second Song",
        artist: "Lea McShan",
        audio: "https://your-bucket.s3.amazonaws.com/memories_overcome_me.m4a",
    },
    {
        title: "My Second Song",
        artist: "Lea McShan",
        audio: "https://your-bucket.s3.amazonaws.com/mischevious_beat.m4a",
    },
    {
        title: "My Second Song",
        artist: "Lea McShan",
        audio: "https://your-bucket.s3.amazonaws.com/mud_is_deep(novox).m4a",
    },
    {
        title: "My Second Song",
        artist: "Lea McShan",
        audio: "https://your-bucket.s3.amazonaws.com/mud_is_deep(wvox).m4a",
    },
    {
        title: "My Second Song",
        artist: "Lea McShan",
        audio: "https://your-bucket.s3.amazonaws.com/MUSIC_COLLECTIVE_SUBMISSION.m4a",
    },
    {
        title: "My Second Song",
        artist: "Lea McShan",
        audio: "https://your-bucket.s3.amazonaws.com/mysterious_lab.m4a",
    },

    {
        title: "My Second Song",
        artist: "Lea McShan",
        audio: "https://your-bucket.s3.amazonaws.com/NEVER.m4a",
    },
    {
        title: "My Second Song",
        artist: "Lea McShan",
        audio: "https://your-bucket.s3.amazonaws.com/new_beginnings.m4a",
    },
    {
        title: "My Second Song",
        artist: "Lea McShan",
        audio: "https://your-bucket.s3.amazonaws.com/new_world.m4a",
    },
    {
        title: "My Second Song",
        artist: "Lea McShan",
        audio: "https://your-bucket.s3.amazonaws.com/no_one_else_did_(NOVOX).m4a",
    },
    {
        title: "My Second Song",
        artist: "Lea McShan",
        audio: "https://your-bucket.s3.amazonaws.com/ocean_eyes.m4a",
    },
    {
        title: "My Second Song",
        artist: "Lea McShan",
        audio: "https://your-bucket.s3.amazonaws.com/playground_drama.m4a",
    },

    {
        title: "My Second Song",
        artist: "Lea McShan",
        audio: "https://your-bucket.s3.amazonaws.com/progress.m4a",
    },
    {
        title: "My Second Song",
        artist: "Lea McShan",
        audio: "https://your-bucket.s3.amazonaws.com/promise(NOVOX).m4a",
    },
    {
        title: "My Second Song",
        artist: "Lea McShan",
        audio: "https://your-bucket.s3.amazonaws.com/promise(WVOX).m4a",
    },
    {
        title: "My Second Song",
        artist: "Lea McShan",
        audio: "https://your-bucket.s3.amazonaws.com/pull_me_up.m4a",
    },
    {
        title: "My Second Song",
        artist: "Lea McShan",
        audio: "https://your-bucket.s3.amazonaws.com/push.m4a",
    },
    {
        title: "My Second Song",
        artist: "Lea McShan",
        audio: "https://your-bucket.s3.amazonaws.com/rATHER.m4a",
    },

    {
        title: "My Second Song",
        artist: "Lea McShan",
        audio: "https://your-bucket.s3.amazonaws.com/RINGTONE.m4a",
    },
    {
        title: "My Second Song",
        artist: "Lea McShan",
        audio: "https://your-bucket.s3.amazonaws.com/rise_to_the_challenge.m4a",
    },
    {
        title: "My Second Song",
        artist: "Lea McShan",
        audio: "https://your-bucket.s3.amazonaws.com/RUN.m4a",
    },
    {
        title: "My Second Song",
        artist: "Lea McShan",
        audio: "https://your-bucket.s3.amazonaws.com/sai(W:VOX).m4a",
    },
    {
        title: "My Second Song",
        artist: "Lea McShan",
        audio: "https://your-bucket.s3.amazonaws.com/sail(NOVOX).m4a",
    },
    {
        title: "My Second Song",
        artist: "Lea McShan",
        audio: "https://your-bucket.s3.amazonaws.com/sail(WVOX).m4a",
    },
    {
        title: "My Second Song",
        artist: "Lea McShan",
        audio: "https://your-bucket.s3.amazonaws.com/sav.m4a",
    },
    {
        title: "My Second Song",
        artist: "Lea McShan",
        audio: "https://your-bucket.s3.amazonaws.com/SAYIMGONE.m4a",
    },
    {
        title: "My Second Song",
        artist: "Lea McShan",
        audio: "https://your-bucket.s3.amazonaws.com/setback.mp3",
    },
    {
        title: "My Second Song",
        artist: "Lea McShan",
        audio: "https://your-bucket.s3.amazonaws.com/should_i.m4a",
    },
    {
        title: "My Second Song",
        artist: "Lea McShan",
        audio: "https://your-bucket.s3.amazonaws.com/shoulder.m4a",
    },
    {
        title: "My Second Song",
        artist: "Lea McShan",
        audio: "https://your-bucket.s3.amazonaws.com/Shoulders.mp3",
    },

    {
        title: "My Second Song",
        artist: "Lea McShan",
        audio: "https://your-bucket.s3.amazonaws.com/SIDECHAIN.m4a",
    },
    {
        title: "My Second Song",
        artist: "Lea McShan",
        audio: "https://your-bucket.s3.amazonaws.com/SIDECHAIN.m4a",
    },
    {
        title: "My Second Song",
        artist: "Lea McShan",
        audio: "https://your-bucket.s3.amazonaws.com/SLEEP(NOVOX).m4a",
    },
    {
        title: "My Second Song",
        artist: "Lea McShan",
        audio: "https://your-bucket.s3.amazonaws.com/SLEEP(WVOX).m4a",
    },
    {
        title: "My Second Song",
        artist: "Lea McShan",
        audio: "https://your-bucket.s3.amazonaws.com/sleepy_ideas.m4a",
    },
    {
        title: "My Second Song",
        artist: "Lea McShan",
        audio: "https://your-bucket.s3.amazonaws.com/small_beat.m4a",
    },

    {
        title: "My Second Song",
        artist: "Lea McShan",
        audio: "https://your-bucket.s3.amazonaws.com/SMOOTH(NOVOX).m4a",
    },
    {
        title: "My Second Song",
        artist: "Lea McShan",
        audio: "https://your-bucket.s3.amazonaws.com/SMOOTH(WVOX).m4a",
    },
    {
        title: "My Second Song",
        artist: "Lea McShan",
        audio: "https://your-bucket.s3.amazonaws.com/something_brewing.m4a",
    },
    {
        title: "My Second Song",
        artist: "Lea McShan",
        audio: "https://your-bucket.s3.amazonaws.com/something_in_the_forest.m4a",
    },
    {
        title: "My Second Song",
        artist: "Lea McShan",
        audio: "https://your-bucket.s3.amazonaws.com/somethings_coming.m4a",
    },
    {
        title: "My Second Song",
        artist: "Lea McShan",
        audio: "https://your-bucket.s3.amazonaws.com/still.m4a",
    },

    {
        title: "My Second Song",
        artist: "Lea McShan",
        audio: "https://your-bucket.s3.amazonaws.com/sundown_tension.m4a",
    },
    {
        title: "My Second Song",
        artist: "Lea McShan",
        audio: "https://your-bucket.s3.amazonaws.com/Surround.mp3",
    },
    {
        title: "My Second Song",
        artist: "Lea McShan",
        audio: "https://your-bucket.s3.amazonaws.com/suspense_loop.m4a",
    },
    {
        title: "My Second Song",
        artist: "Lea McShan",
        audio: "https://your-bucket.s3.amazonaws.com/temporary_fall.m4a",
    },
    {
        title: "My Second Song",
        artist: "Lea McShan",
        audio: "https://your-bucket.s3.amazonaws.com/TENOR.m4a",
    },
    {
        title: "My Second Song",
        artist: "Lea McShan",
        audio: "https://your-bucket.s3.amazonaws.com/tension.m4a",
    },
    {
        title: "My Second Song",
        artist: "Lea McShan",
        audio: "https://your-bucket.s3.amazonaws.com/to_the_sea_love(wvox).m4a",
    },
    {
        title: "My Second Song",
        artist: "Lea McShan",
        audio: "https://your-bucket.s3.amazonaws.com/travel.m4a",
    },
    {
        title: "My Second Song",
        artist: "Lea McShan",
        audio: "https://your-bucket.s3.amazonaws.com/unsure.m4a",
    },
    {
        title: "My Second Song",
        artist: "Lea McShan",
        audio: "https://your-bucket.s3.amazonaws.com/up_to_no_good.m4a",
    },
    {
        title: "My Second Song",
        artist: "Lea McShan",
        audio: "https://your-bucket.s3.amazonaws.com/Vegas.mp3",
    },
    {
        title: "My Second Song",
        artist: "Lea McShan",
        audio: "https://your-bucket.s3.amazonaws.com/venice_beach.m4a",
    },
    {
        title: "My Second Song",
        artist: "Lea McShan",
        audio: "https://your-bucket.s3.amazonaws.com/waiting_for_results.m4a",
    },
    {
        title: "My Second Song",
        artist: "Lea McShan",
        audio: "https://your-bucket.s3.amazonaws.com/what_to_do.m4a",
    },
    {
        title: "My Second Song",
        artist: "Lea McShan",
        audio: "https://your-bucket.s3.amazonaws.com/when_will_it_be_me.m4a",
    },
    {
        title: "My Second Song",
        artist: "Lea McShan",
        audio: "https://your-bucket.s3.amazonaws.com/where_did_she_go.m4a",
    },
    {
        title: "My Second Song",
        artist: "Lea McShan",
        audio: "https://your-bucket.s3.amazonaws.com/whims_loop.m4a",
    },
    {
        title: "My Second Song",
        artist: "Lea McShan",
        audio: "https://your-bucket.s3.amazonaws.com/who_did_it.m4a",
    },
    {
        title: "My Second Song",
        artist: "Lea McShan",
        audio: "https://your-bucket.s3.amazonaws.com/why.mp3",
    },
    {
        title: "My Second Song",
        artist: "Lea McShan",
        audio: "https://your-bucket.s3.amazonaws.com/WO_Monsters.m4a",
    },
    {
        title: "My Second Song",
        artist: "Lea McShan",
        audio: "https://your-bucket.s3.amazonaws.com/words.m4a",
    },

    {
        title: "My Second Song",
        artist: "Lea McShan",
        audio: "https://your-bucket.s3.amazonaws.com/WORK_LOOP.m4a",
    },

    {
        title: "My Second Song",
        artist: "Lea McShan",
        audio: "https://your-bucket.s3.amazonaws.com/you_said_my_name(no_vox)).m4a",
    },

    {
        title: "My Second Song",
        artist: "Lea McShan",
        audio: "https://your-bucket.s3.amazonaws.com/you_said_my_name(wvox).m4a",
    },

    {
        title: "My Second Song",
        artist: "Lea McShan",
        audio: "https://your-bucket.s3.amazonaws.com/",
    },

    {
        title: "My Second Song",
        artist: "Lea McShan",
        audio: "https://your-bucket.s3.amazonaws.com/",
    }
];

const jsonUrl = "https://song-253.s3.us-east-1.amazonaws.com/songs.json";

fetch(jsonUrl)
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

            songElement.innerHTML = `
                <h2>${song.title}</h2>
                <p>${song.artist}</p>
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
