var songs = {
  1 : "https://iplock.weebly.com/uploads/9/5/7/3/95731436/i_like_me_better__bass_boosted_.m4a",
  2 : "https://iplock.weebly.com/uploads/9/5/7/3/95731436/marshmello_ft._khalid_-_silence__official_lyric_video_.mp3",
  3 : "https://iplock.weebly.com/uploads/9/5/7/3/95731436/marshmello_-_alone.mp3",
  4 : "https://iplock.weebly.com/uploads/9/5/7/3/95731436/selena_gomez_marshmello_-_wolves__visualizer_.mp3",
  5 : "https://iplock.weebly.com/uploads/9/5/7/3/95731436/wilson__expensive_mistakes_.mp3",
  6 : "https://iplock.weebly.com/uploads/9/5/7/3/95731436/marshmello_x_lil_peep_-_spotlight__official_music_video_.mp3",
  7 : "https://iplock.weebly.com/uploads/9/5/7/3/95731436/walk_it_talk_it.mp3",
  8 : "https://iplock.weebly.com/uploads/9/5/7/3/95731436/friends_are_family_mp3.mp3",
  9 : "https://iplock.weebly.com/uploads/9/5/7/3/95731436/imortals.mp3",
  10 : "https://iplock.weebly.com/uploads/9/5/7/3/95731436/better_when_im_dancin_mp3.mp3",
  11 : "https://iplock.weebly.com/uploads/9/5/7/3/95731436/ode_to_sleep_mp3.mp3",
  12 : "https://iplock.weebly.com/uploads/9/5/7/3/95731436/shine_your_way.mp3",
  13 : "https://iplock.weebly.com/uploads/9/5/7/3/95731436/fake_you_out.mp3",
  14 : "https://iplock.weebly.com/uploads/9/5/7/3/95731436/uma_thurman_mp3.mp3",
  15 : "https://iplock.weebly.com/uploads/9/5/7/3/95731436/migos__amp__marshmello_-_danger__from_bright__the_album__%5Bmusic_video%5D.mp3",
  16 : "https://iplock.weebly.com/uploads/9/5/7/3/95731436/post_malone_-_rockstar_ft._21_savage__official_audio_.mp3",
  17 : "https://iplock.weebly.com/uploads/9/5/7/3/95731436/thunder.mp3",
  18 : "https://iplock.weebly.com/uploads/9/5/7/3/95731436/alan_walker_-_fade_%5Bncs_release%5D.mp3",
  19 : "https://iplock.weebly.com/uploads/9/5/7/3/95731436/10__official_audio_.mp3",
  20 : "https://iplock.weebly.com/uploads/9/5/7/3/95731436/lil_dicky_-_freaky_friday__lyrics__ft._chris_brown.mp3",
  21 : "https://iplock.weebly.com/uploads/9/5/7/3/95731436/bastille_-_pompeii__lyrics_.mp3",
  22 : "https://iplock.weebly.com/uploads/9/5/7/3/95731436/preme_-_jackie_chan__audio__ft._post_malone.mp3",
  23 : "https://iplock.weebly.com/uploads/9/5/7/3/95731436/guns_for_hands_instrumental_mp3.mp3",
  24 : "https://iplock.weebly.com/uploads/9/5/7/3/95731436/owl_city_-_fireflies__lyrics_.mp3",
  25 : "https://iplock.weebly.com/uploads/9/5/7/3/95731436/logic_-_ballin__ft._castro___prod._arthur_mcarthur_.mp3",
  26 : "https://iplock.weebly.com/uploads/9/5/7/3/95731436/live_it_up.mp3",
  27 : "https://iplock.weebly.com/uploads/9/5/7/3/95731436/geronimo.mp3",
  28 : "https://iplock.weebly.com/uploads/9/5/7/3/95731436/cardi_b_bad_bunny__amp__j_balvin_-_i_like_it_[official_music_video].mp3",
  29 : "https://iplock.weebly.com/uploads/9/5/7/3/95731436/mkto_-_classic.mp3",
  30 : "https://iplock.weebly.com/uploads/9/5/7/3/95731436/owl_city_-_verge_ft._aloe_blacc.mp3",
  31 : "https://iplock.weebly.com/uploads/9/5/7/3/95731436/walk_the_moon_-_one_foot__official_video_.mp3",
  32 : "https://iplock.weebly.com/uploads/9/5/7/3/95731436/marshmello__amp__logic_-_everyday__audio_.mp3",
  33 : "https://iplock.weebly.com/uploads/9/5/7/3/95731436/fall_out_boy_-_bishops_knife_trick__lyrics_lyric_video_.mp3",
  34 : "https://iplock.weebly.com/uploads/9/5/7/3/95731436/sheppard_-_coming_home__official_audio_.mp3"
}

var titles = {
  1 : "I Like Me Better",
  2 : "Silence ft. Khalid",
  3 : "Alone (Spotify extended version)",
  4 : "Wolves",
  5 : "Wilson Expensive Mistakes",
  6 : "Spotlight",
  7 : "Walk it Talk it",
  8 : "Friends Are Family",
  9 : "Imortals",
  10 : "Better When I'm Dancin",
  11 : "Ode to Sleep",
  12 : "Shine Your Way",
  13 : "Fake You Out",
  14 : "Uma Therman",
  15 : "Danger",
  16 : "Rockstar",
  17 : "Thunder",
  18 : "Faded",
  19 : "6/10",
  20 : "Freaky Friday",
  21 : "Pompeii",
  22 : "Jackie Chan",
  23 : "Guns For Hands",
  24 : "Fireflies",
  25 : "Ballin'",
  26 : "Live it Up",
  27 : "Geronimo",
  28 : "I Like it",
  29 : "Classic",
  30 : "Verge",
  31 : "One Foot",
  32 : "Everyday",
  33 : "Bishops Knife Trick",
  34 : "Coming Home"
}

var albumart = {
  1 : "https://is4-ssl.mzstatic.com/image/thumb/Music117/v4/c5/5f/e5/c55fe54a-8696-396b-977d-05d6e1000d6b/5056167100188_1.jpg/268x0w.jpg",
  2 : "https://upload.wikimedia.org/wikipedia/en/thumb/c/c4/Marshmello_Silence.jpg/220px-Marshmello_Silence.jpg",
  3 : "https://vignette.wikia.nocookie.net/monstercat/images/0/0c/Marshmello_-_Alone.jpg/revision/latest?cb=20160513204533",
  4 : "https://is3-ssl.mzstatic.com/image/thumb/Music118/v4/68/6d/01/686d0165-5745-b529-fbfc-2f9bf79bce02/17UM1IM41679.jpg/268x0w.jpg",
  5 : "https://images-na.ssl-images-amazon.com/images/I/41K3SuHNQpL._SS500.jpg",
  6 : "",
  7 : "",
  8 : "",
  9 : "",
  10 : "https://i.ytimg.com/vi/npdg21rjowU/maxresdefault.jpg",
  11 : "",
  12 : "",
  13 : "",
  14 : "",
  15 : "",
  16 : "",
  17 : "",
  18 : "",
  19 : "",
  20 : "https://iplock.weebly.com/uploads/9/5/7/3/95731436/p157.png",
  21 : "",
  22 : "",
  23 : "",
  24 : "",
  25 : "",
  26 : "",
  27 : "",
  28 : "",
  29 : "",
  30 : "",
  31 : "",
  32 : "",
  33 : "",
  34 : ""
}

var artists = {
  1 : "LAUV",
  2 : "Marshmello and Khalid",
  3 : "Marshmello",
  4 : "Marshmello and Selena Gomez",
  5 : "Fall Out Boy",
  6 : "Marshmello ft. lil Peep",
  7 : "Migos",
  8 : "(undefined)",
  9 : "Fall Out Boy",
  10 : "Megan Trainer",
  11 : "Twentyone Pilots",
  12 : "Owl City",
  13 : "Twentyone Pilots",
  14 : "Fall Out Boy",
  15 : "Marshmello ft. Migos and",
  16 : "Post Malone ft. 21 Savage",
  17 : "Imagine Dragons",
  18 : "Alan Walker",
  19 : "Dodie Clark",
  20 : "lil Dicky ft. Chris Brown",
  21 : "Bastille",
  22 : "Post Malone",
  23 : "Twentyone Pilots",
  24 : "Owl City",
  25 : "Logic ft. Castro",
  26 : "Owl City",
  27 : "Shepherd",
  28 : "Cardi B ft. Bad Bunny",
  29 : "MKTO",
  30 : "Owl City",
  31 : "Walk The Moon",
  32 : "Marshmello ft. Logic",
  33 : "Fall Out Boy",
  34 : "Sheppard"
}

/*var AlbumName {
  1 : "",
  2 : "",
  3 : "",
  4 : "",
  5 : "Mania",
  6 : "",
  7 : "",
  8 : "",
  9 : "American Beauty/American Psycho",
  10 : "",
  11 : "Vessel",
  12 : "",
  13 : "Vessel",
  14 : "American Beauty/American Psycho",
  15 : "",
  16 : "",
  17 : "",
  18 : "",
  19 : "",
  20 : "",
  21 : "",
  22 : "",
  23 : "Vessel",
  24 : "",
  25 : "",
  26 : "",
  27 : "",
  28 : "",
  29 : "",
  30 : "",
  31 : "",
  32 : "",
  33 : "Mania"
}*/
