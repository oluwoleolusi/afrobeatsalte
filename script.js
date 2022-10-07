const grid_1 = document.getElementById("grid_1");
const grid_2 = document.getElementById("grid_2");
const grid_3 = document.getElementById("grid_3");
const grid_4 = document.getElementById("grid_4");
const grid_image_1 = document.getElementById("grid_image_1");
const grid_image_2 = document.getElementById("grid_image_2");
const grid_image_3 = document.getElementById("grid_image_3");
const grid_image_4 = document.getElementById("grid_image_4");

grid_1.addEventListener("mouseover", () => {
    grid_image_1.classList.add("grid_image_zoomed");
})

grid_1.addEventListener("mouseout", () => {
    grid_image_1.classList.remove("grid_image_zoomed");
})

grid_2.addEventListener("mouseover", () => {
    grid_image_2.classList.add("grid_image_zoomed");
})

grid_2.addEventListener("mouseout", () => {
    grid_image_2.classList.remove("grid_image_zoomed");
})

grid_3.addEventListener("mouseover", () => {
    grid_image_3.classList.add("grid_image_zoomed");
})

grid_3.addEventListener("mouseout", () => {
    grid_image_3.classList.remove("grid_image_zoomed");
})

grid_4.addEventListener("mouseover", () => {
    grid_image_4.classList.add("grid_image_zoomed");
})

grid_4.addEventListener("mouseout", () => {
    grid_image_4.classList.remove("grid_image_zoomed");
})

// function zoomIn() {
//     classList.add("song_zoomed");
// }

// function zoomOut() {
//     classList.remove("song_zoomed");
// }


    // const even_grid_items = document.getElementsByClassName("song");

    // for(let i=0; i<even_grid_items.length; i++) {
    //     even_grid_items[i].addEventListener("mouseover", () => {    
    //         even_grid_items[i].classList.add("song_zoomed");
    //     })
    //     even_grid_items[i].addEventListener("mouseout", () => {
    //         even_grid_items[i].classList.remove("song_zoomed");
    //     })
    // }





