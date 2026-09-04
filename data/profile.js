


export const updateProfile = () => {

    if (document.title != 'PC') { return } else {

        const avatarBox = document.getElementById("playerAvatarBox");
        const rosterBox = document.getElementById("playerRosterBox");
        const PCBox = document.getElementById("playerPCBox");
        const badgeBox = document.getElementById("playerBadgeBox");

        const profileSections = [avatarBox,rosterBox,PCBox,badgeBox];
        profileSections.forEach((e) => { 
            e.classList.add('profileSection');
            console.log('new section',e)
        });

    }

}