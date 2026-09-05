export const updateProfile = () => {

    if (document.title != 'PC') { return } else {

        const avatarBox = document.getElementById("playerAvatarBox");
        const rosterBox = document.getElementById("playerRosterBox");
        const PCBox = document.getElementById("playerPCBox");
        const badgeBox = document.getElementById("playerBadgeBox");
        const avatarChange = document.getElementById("changeAvatar");
        const badgeCaseBox = document.getElementById("badgeCase");
        const badgeCases = document.querySelectorAll("playerBadgeCase");

        avatarChange.addEventListener("change", (e) => {
            setAvatar(e.target.value);
        });

        badgeCases.forEach((badgeCase) => {
            badgeCase.addEventListener("click", (e) => {
                localStorage.setItem("badgeRegion",e.target.innerHTML);
            })
        })

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

        const setBadgeRegion = (region=localStorage.getItem("badgeRegion")) => {
            localStorage.setItem("badgeRegion",region);
            switch(region) {
                case 'Kanto':
                    break;
                default: break;
            }
        }

        const getBadges = (region = 'Kanto') => {

            // for (let i = 0; i < 8; i++) {
            //     const newBadgeHolder = document.createElement("div");
            //     newBadgeHolder.classList.add("badgeHolder");
            //     newBadgeHolder.id = `badgeHolder${i}`;
            //     badgeCaseBox.appendChild(newBadgeHolder);
            // }

        }

        const profileSections = [avatarBox,rosterBox,PCBox,badgeBox];

        profileSections.forEach((e) => { 
            e.classList.add('profileSection');
        });

        getAvatar();
        getBadges();

    }

}