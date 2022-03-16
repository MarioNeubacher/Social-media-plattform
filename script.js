let storyArray = [{
        image:'img/user-48.png',
        username:'User1'
    }, {
        image:'img/fireman-48.png',
        username:'User2'
    }, {
        image:'img/collaborator-48.png',
        username:'User3'
    }, {
        image:'img/user-7-48.png',
        username:'User4'
    }, {
        image:'img/cook-48.png',
        username:'User5'
    }, {
        image:'img/student-48.png',
        username:'User6'
    }, {
        image:'img/worker-48.png',
        username:'User7'
    }, {
        image:'img/assistant-48.png',
        username:'User8'
    }, {
        image:'img/doctor-48.png',
        username:'User9'
    }, {
        image:'img/manager-48.png',
        username:'User10'
    }, {
        image:'img/moderator-48.png',
        username:'User11'
    }, {
        image:'img/businesswoman-48.png',
        username:'User12'
    }
];

let postArray = [{
        author: 'User1',
        profilepicture: 'img/user-48.png',
        image: 'img/pexels-francesco-ungaro-2325446.jpg',
        likes: '3',
        comments: '187',
        user: 'User10',
        message: 'mega',
        user2: 'User4',
        message2: 'Da möchte ich jetzt auch gern sein!',
        ago: '3 Stunden'
    }, {
        author: 'User3',
        profilepicture: 'img/collaborator-48.png',
        image: 'img/pexels-alexandr-podvalny-2082949.jpg',
        likes: '25',
        comments: '234',
        user: 'User5',
        message: 'Wow',
        user2: 'User12',
        message2: 'Pura vida!',
        ago: '48 Minuten'
    }, {
        author: 'User7',
        profilepicture: 'img/worker-48.png',
        image: 'img/pexels-pierre-blaché-2901209.jpg',
        likes: '63',
        comments: '1345',
        user: 'User1',
        message: 'Top',
        user2: 'User9',
        message2: 'Wünsch dir noch schönen Urlaub :)',
        ago: '5 Sekunden'
    }
];

let suggestionsArray = [{
        profilepicture: 'img/user-8-48.png',
        user: 'User1',
    }, {
        profilepicture: 'img/contacts-48.png',
        user: 'User22',
    }, {
        profilepicture: 'img/user-2-48.png',
        user: 'User80',
    }, {
        profilepicture: 'img/user-6-48.png',
        user: 'User19',
    }, {
        profilepicture: 'img/administrator-48.png',
        user: 'User43',
    }
];

function render() {
    stories();
    posts();
    rightContainer();
}

function stories() {
    for (let i = 0; i < storyArray.length; i++) {
        const abbrev = storyArray[i];

        document.getElementById('stories').innerHTML += `
            <div class="div-storyJSON">
                <img src="${abbrev['image']}" class="img-user img-profile">
                ${abbrev['username']} 
            </div>
            `;
    }
}

function posts() {
    for (let i = 0; i < postArray.length; i++) {
        const abbrev = postArray[i];

        document.getElementById('posts').innerHTML += `
            <div class="div-posts">
                <div class="div-postspacebetween">
                    <div class="div-postheaderleft">
                        <img src="${abbrev['profilepicture']}" class="img-profile img-userpost">
                        <p>${abbrev['author']}</p>
                    </div>
                    <img class="img-ellipsis" src="img/icons8-ellipsis-30.png">
                </div>
                <img class="img-post" src="${abbrev['image']}">
                <div class="div-postbottom">
                    <div class="div-postspacebetween">
                        <div>
                            <img id="id-likeHeart1${i}" onclick="likeHeart1(${i})" src="img/favorite-4-32.png" class="img-icons">
                            <img src="img/icons8-speech-bubble-50.png" class ="img-icons">
                            <img src="img/icons8-sent-50.png" class ="img-icons">
                        </div>
                        <img src="img/icons8-bookmark-32.png" class ="img-icons">
                    </div>
                    <p>Gefällt ${abbrev['likes']} Mal</p>
                    <p class ="text-viewcomments">Alle ${abbrev['comments']} Kommentare ansehen</p>
                    <div class ="div-postspacebetween">
                        <div>
                            <b style="cursor: pointer">${abbrev['user']}</b> ${abbrev['message']}
                        </div>
                        <div>
                            <img id="id-likeHeart2${i}" onclick="likeHeart2(${i})" src="img/favorite-4-32.png" class ="img-icons">
                        </div>
                    </div>
                    <div class ="div-postspacebetween">
                        <div>
                            <b style="cursor: pointer">${abbrev['user2']}</b> ${abbrev['message2']}
                        </div>
                        <div>
                            <img id="id-likeHeart3${i}" onclick="likeHeart3(${i})" src="img/favorite-4-32.png" class ="img-icons">
                        </div>
                    </div>
                    <div id="id-post${i}"></div>
                    <div class ="text-hoursago">Vor ${abbrev['ago']}</div>
                        <div class ="div-postspacebetween">
                            <input id="id-comment${i}" class ="input-addcomment" type ="text" placeholder="Kommentar hinzufügen...">
                            <p onclick="comment(${i})" class ="text-blue">Posten</p>
                        </div>
                    </div>
            </div>
        `;
    }
}

function comment(i) {
    let comment1 = document.getElementById('id-comment'+i).value;

    document.getElementById('id-post'+i).innerHTML += `
    <div class ="div-postspacebetween">
        <div>
            <b style="cursor: pointer">mario_neubacher</b> ${comment1}
        </div>
        <div>
            <img id="id-likeHeart3${i}" onclick="likeHeart3(${i})" src="img/favorite-4-32.png" class ="img-icons">
        </div>
    </div>
    `;

    document.getElementById('id-comment'+i).value = ``;
}

function likeHeart1(i) { /* verschiedene Funktionen, wegen verschiedenen Positionen*/
    document.getElementById('id-likeHeart1'+i).src = "img/hearts-48.png"; /* ${i} & +i in der ID, wegen unterschiedlichen Posts */
}

function likeHeart2(i) {
    document.getElementById('id-likeHeart2'+i).src = "img/hearts-48.png";
}

function likeHeart3(i) {
    document.getElementById('id-likeHeart3'+i).src = "img/hearts-48.png";
}

function rightContainer() {
    document.getElementById('rightContainer').innerHTML += `
        <div class="div-postspacebetween">
            <div class="div-alignitems">
                <img src="img/2.jpg" class="img-profile img-user">
                <b>mario_neubacher</b>
            </div>
            <p class="text-blue">Wechseln</p>
        </div>
        <div class="div-righttext">
            <p class="text-vorschlägefürdich" style="margin-left: 12.5px">Vorschläge für dich</p>
            <b class="text-alleansehen">Alle ansehen</b>
        </div>
        <div id="id-suggestions"></div>
        <div>
            <br>
            <p class="text-imprint">Info · Hilfe · Presse · API · Jobs · Datenrichtlinie · Nutzungsbedingungen · Standorte · Top-Konten · Hashtags · Sprache
            English · <a class="text-bilderherkunft" href="pictures.html">Bilder Herkunft</a></p>
        </div>
        <br>
        <p class="text-imprint">© 2021 INSTAGRAM VON MARIO NEUBACHER</p>
    `;
    suggestions();
}

function suggestions() {
    for (let i = 0; i < suggestionsArray.length; i++) {
        const abbrev = suggestionsArray[i];
        
        document.getElementById('id-suggestions').innerHTML += `
            <div class="div-righttext">
                <div class="div-alignitems">
                    <img src="${abbrev['profilepicture']}" class="img-profile img-user" style="height:30px; width: 30px">
                    <div class="div-column">
                        <b style="cursor: pointer">${abbrev['user']}</b>
                    </div>
                </div>
                <p class="text-blue">Abonnieren</p>
            </div>
            `;
    }
}