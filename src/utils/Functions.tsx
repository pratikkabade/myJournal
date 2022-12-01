export function changeIT(ID: any) {
    var elem = document.getElementById(ID)
    elem.classList.remove("fa-refresh")
    elem.classList.add("fa-check")
    elem.style.color = "var(--green)"
}

export function changeEmoji(ID: any) {
    var elem = document.getElementById(ID)
    elem.classList.add(ID)
}