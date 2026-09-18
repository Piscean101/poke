const routes = document.querySelectorAll(".selectRoute");


export const selectRoute = () => {
    
    routes.forEach((route) => {
        route.addEventListener("click", (e) => {
            window.location.href = (window.location.origin + '/pages/explore/' + route.innerHTML.replace(" ","") + ".html").toLowerCase();
        })
    });

}