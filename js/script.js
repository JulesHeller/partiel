// Boutons et infos :

document.querySelectorAll("button").forEach(e => {
    e.addEventListener("click", ouvrirInfos)
})

function ouvrirInfos() {
    let id = this.getAttribute("id")

    console.log(".inf-" + id)

    document.querySelectorAll(".infos:not(.inf-" + id + ")").forEach(e => {
        e.classList.remove("show")
    })

    document.querySelector("svg").classList.remove("svg-fst")
    document.querySelector("svg").classList.remove("svg-ensisa")
    document.querySelector("svg").classList.remove("svg-flsh")
    document.querySelector("svg").classList.remove("svg-enscmu")
    document.querySelector("svg").classList.add("svg-" + id)

    document.querySelector(".inf-" + id).classList.toggle("show")
}

// SVG :

window.addEventListener("load", goSVG)

function goSVG() {
    //animation des cibles casée ici pour plus d'efficacité :)

    document.querySelectorAll(".cont-bat").forEach(e => {
        e.classList.remove("cont-bat1")
    })

    document.querySelector("svg").classList.add("svg5")
}