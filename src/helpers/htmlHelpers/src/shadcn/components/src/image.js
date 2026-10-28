
import * as modal from './modal.js'


export function Image(url, altText, className){

    return `<img src="${url}" onerror="this.style.display='none';" alt="${altText || ""}}">`

}



export function ImageModal(url, altText, className){


    return modal.Modal(Image(url, altText), Image(url, altText))

}


export function ImageThumbnail(url, altText, className){

    return Image(url, altText, className)

}