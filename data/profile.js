export const updateProfile = () => {

    if (document.title != 'PC') { return } else {

        const avatarBox = document.getElementById("playerAvatarBox");
        const rosterBox = document.getElementById("playerRosterBox");
        const PCBox = document.getElementById("playerPCBox");
        const badgeBox = document.getElementById("playerBadgeBox");
        const avatarChange = document.getElementById("changeAvatar");
        const badgeCaseBox = document.getElementById("badgeCase");
        const badgeCases = document.querySelectorAll(".playerBadgeCase");

        const setAvatar = (name) => {
            localStorage.setItem("playerAvatar",name);
            avatarBox.src = `https://play.pokemonshowdown.com/sprites/trainers/${name}.png`;
        };

        const getAvatar = (avatar=localStorage.getItem("playerAvatar")) => {
            if (!avatar) {
                setAvatar('ash');
            } else { 
                setAvatar(avatar);
            }
        };
        
        avatarChange.addEventListener("change", (e) => {
            setAvatar(e.target.value);
        });

        const placeInPC = () => {};

        const pullFromPC = () => {};

        const getRoster = () => {

            for (let i = 0; i < 6; i++) {

                var rosterHolder = document.createElement("div");
                var pokeImage = new Image();
                pokeImage.src = '';
                rosterHolder.appendChild(pokeImage);
                rosterHolder.classList.add("rosterHolder");
                rosterBox.appendChild(rosterHolder);

            }

        };

        const getPC = (maxSize=6) => {

            for (let i = 0; i < maxSize; i++) {
                var PCHolder = document.createElement("div");
                var pokeImage = new Image();
                pokeImage.src = '';
                PCHolder.appendChild(pokeImage);
                PCHolder.classList.add("PCHolder");
                PCBox.appendChild(PCHolder);
            }

        };

        const setBadgeRegion = (region) => {
            localStorage.setItem("badgeRegion",region);
            switch(region) {
                case 'Kanto':
                    displayBadges(checkBadges(['Boulder','Cascade','Thunder','Rainbow','Soul','Marsh','Volcano','Earth']));
                    break;
                case 'Johto':
                    displayBadges(checkBadges(['Zephyr','Hive','Plain','Fog','Storm','Mineral','Glacier','Rising']));
                    break;
                default: break;
            }
        };

        badgeCases.forEach((badgeCase) => {
                badgeCase.addEventListener("click", (e) => {
                setBadgeRegion(e.target.innerHTML);
            });
                
        });
        
        const checkBadges = (badgeChecklist) => {

            const badgeList = [...localStorage.getItem("badgeList").split(',')];

            let result = [badgeChecklist.map((e) => { 

                if (badgeList.includes(e)) {

                    return e;

                } else {

                    return null;

                }

            })];

            return result;

        }

        const addBadge = (badge) => {

            const badgeList = localStorage.getItem("badgeList");

            if (!badgeList) {

                localStorage.setItem("badgeList",badge);

            } else {

                const badgeNames = [...badgeList.split(',')];

                if (!badgeNames.includes(badge)) {
                    badgeNames.push(badge);
                }

                localStorage.setItem("badgeList",badgeNames);

            }

            alert(`Congratulations! You earned the ${badge} badge!`);

        }

        const displayBadges = ([badgeList]) => {

            const badgeHolders = document.querySelectorAll('.badgeHolder');

            badgeHolders.forEach((e) => {

                e.children[0].src = '';
                e.children[0].classList.remove("badgeImage");

            });

            badgeList.forEach((e,i) => {

                if (e != null) {

                    var badgeHolder = document.getElementById(`Badge${i+1}`);
                    var badgeImage = badgeHolder.children[0];
                    badgeImage.classList.add("badgeImage")

                    switch(i) {

                        case 0:
                            e == 'Boulder' ? 
                            badgeImage.src = `https://archives.bulbagarden.net/media/upload/thumb/d/dd/Boulder_Badge.png/75px-Boulder_Badge.png` :
                            e == 'Zephyr' ?
                            badgeImage.src = `https://archives.bulbagarden.net/media/upload/thumb/4/4a/Zephyr_Badge.png/75px-Zephyr_Badge.png` : null;
                            break;
                        case 1:
                            e == 'Cascade' ? 
                            badgeImage.src = `https://archives.bulbagarden.net/media/upload/thumb/9/9c/Cascade_Badge.png/75px-Cascade_Badge.png` :
                            e == 'Hive' ?
                            badgeImage.src = `https://archives.bulbagarden.net/media/upload/thumb/0/08/Hive_Badge.png/75px-Hive_Badge.png` : null;
                            break;
                        case 2: 
                            e == 'Thunder' ?
                            badgeImage.src = `https://archives.bulbagarden.net/media/upload/thumb/a/a6/Thunder_Badge.png/75px-Thunder_Badge.png` :
                            e == 'Plain' ?
                            badgeImage.src = `https://archives.bulbagarden.net/media/upload/thumb/a/a7/Plain_Badge.png/75px-Plain_Badge.png`: null;
                            break;
                        case 3:
                            e == 'Rainbow' ?
                            badgeImage.src = `https://archives.bulbagarden.net/media/upload/thumb/b/b5/Rainbow_Badge.png/75px-Rainbow_Badge.png` :
                            e == 'Fog' ?
                            badgeImage.src = `https://archives.bulbagarden.net/media/upload/thumb/4/48/Fog_Badge.png/75px-Fog_Badge.png` : null;
                            break;
                        case 4:
                            e == 'Soul' ? 
                            badgeImage.src = `https://archives.bulbagarden.net/media/upload/thumb/7/7d/Soul_Badge.png/75px-Soul_Badge.png` :
                            e == 'Storm' ?
                            badgeImage.src = `https://archives.bulbagarden.net/media/upload/thumb/b/b9/Storm_Badge.png/75px-Storm_Badge.png` : null;
                            break;
                        case 5:
                            e == 'Marsh' ? 
                            badgeImage.src = `https://archives.bulbagarden.net/media/upload/thumb/6/6b/Marsh_Badge.png/75px-Marsh_Badge.png` :
                            e == 'Mineral' ?
                            badgeImage.src = `https://archives.bulbagarden.net/media/upload/thumb/7/7b/Mineral_Badge.png/75px-Mineral_Badge.png`: null;
                            break;
                        case 6:
                            e == 'Volcano' ? 
                            badgeImage.src = `https://archives.bulbagarden.net/media/upload/thumb/1/12/Volcano_Badge.png/75px-Volcano_Badge.png`:
                            e == 'Glacier' ?
                            badgeImage.src = `https://archives.bulbagarden.net/media/upload/thumb/e/e6/Glacier_Badge.png/75px-Glacier_Badge.png`: null;
                            break;
                        case 7:
                            e == 'Earth' ?
                            badgeImage.src = `https://archives.bulbagarden.net/media/upload/thumb/7/78/Earth_Badge.png/75px-Earth_Badge.png`:
                            e == 'Rising' ?
                            badgeImage.src = `https://archives.bulbagarden.net/media/upload/thumb/5/58/Rising_Badge.png/75px-Rising_Badge.png`: null;
                            break;
                        default: break;
                    }

                }
            });

        }

        const profileSections = [avatarBox,rosterBox,PCBox,badgeBox];

        profileSections.forEach((e) => { 
            e.classList.add('profileSection');
        });

        setBadgeRegion(localStorage.getItem("badgeRegion"));
        getAvatar();
        getPC();
        getRoster();

    }

}