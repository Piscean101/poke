export const updateProfile = () => {

    if (document.title != 'PC') { return } else {

        const avatarBox = document.getElementById("playerAvatarBox");
        const rosterBox = document.getElementById("playerRosterBox");
        const PCBox = document.getElementById("playerPCBox");
        const badgeBox = document.getElementById("playerBadgeBox");
        const avatarChange = document.getElementById("changeAvatar");
        const badgeCaseBox = document.getElementById("badgeCase");
        const badgeCases = document.querySelectorAll(".playerBadgeCase");

        avatarChange.addEventListener("change", (e) => {
            setAvatar(e.target.value);
        });

        const setBadgeRegion = (region=localStorage.getItem("badgeRegion")) => {
            localStorage.setItem("badgeRegion",region);
            switch(region) {
                case 'Kanto':
                displayBadges(checkBadges(['Boulder','Cascade','Thunder','Rainbow','Soul','Marsh','Volcano','Earth']));
                break;
                default: break;
            }
        }

        badgeCases.forEach((badgeCase) => {
                badgeCase.addEventListener("click", (e) => {
                setBadgeRegion(e.target.innerHTML);
            });
                
        });

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

        const getRoster = () => {};

        const getPC = () => {};
        
        const checkBadges = (badgeChecklist) => {
            const badgeList = [...localStorage.getItem("badgeList").split(',')];
            // console.log('checking badges...')
            let result = [badgeChecklist.map((e) => { 
                console.log(badgeList,e,badgeList.includes(e));
                if (badgeList.includes(e)) {
                    return e;
                } else {
                    return null;
                }
            })];
            console.log(result)
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
            badgeList.forEach((e,i) => {
                if (e != null) {

                    const badgeImage = new Image();
                    const badgeHolder = document.getElementById(`Badge${i+1}`);

                    /* IMPLEMENT SWITCH TO PULL CORRECT LINKS FOR EACH BADGE c: */

                    badgeImage.classList.add("badgeImage");
                    badgeImage.src = `https://archives.bulbagarden.net/media/upload/thumb/d/dd/${e}_Badge.png/75px-${e}_Badge.png`;
                    badgeHolder.children.length ? badgeHolder.removeChild(badgeHolder.children[0]) : null;
                    badgeHolder.appendChild(badgeImage);

                }
            })
        }

        const profileSections = [avatarBox,rosterBox,PCBox,badgeBox];

        profileSections.forEach((e) => { 
            e.classList.add('profileSection');
        });

        getAvatar();
        setBadgeRegion(localStorage.getItem("badgeRegion"))

    }

}