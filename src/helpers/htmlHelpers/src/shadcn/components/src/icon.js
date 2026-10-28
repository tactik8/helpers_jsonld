



export function Icon(url, altText){

    return `<img src="${url}" onerror="this.style.display='none';" alt="${altText || ""}}">`

}