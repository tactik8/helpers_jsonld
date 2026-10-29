





export function Article(content, className){


    content = content || ""
    content = content.trim()
    if(!content || content == "") { return "" }

    return `
    
    <article 
        class="mx-auto max-w-2xl px-6 py-16 ${className || ""}"
    >
    
        ${content || ""}
    
    </article>
    
    `



}


export function ArticleHeader(content, className){


    content = content || ""
    content = content.trim()
    if(!content || content == "") { return "" }


    return `
    
    <header 
        class="${className || ""}"
    >
    
        ${content || ""}
    
    </header>
    
    `

}


export function ArticleCategory(content, className){


    content = content || ""
    content = content.trim()
    if(!content || content == "") { return "" }

    return ` 

     <p 
        class="text-sm font-medium uppercase tracking-wide text-indigo-600 ${className || ""}"
     >
        ${content || ""}
     
     </p>

    `


}

export function ArticleTitle(content, className){

    content = content || ""
    content = content.trim()
    if(!content || content == "") { return "" }

    return `
    
        <h1 
            class="mt-2 text-4xl font-semibold tracking-tight text-neutral-900 ${className || ''}"
        >
            ${content || ""}
        </h1>

    `
}

export function ArticleSubTitle(content, className){

    content = content || ""
    content = content.trim()
    if(!content || content == "") { return "" }

    return `
        
        <div 
            class="mt-4 flex items-center gap-3 text-sm text-neutral-500 ${className || ''}"
        >
    
            <span class="h-8 w-8 rounded-full bg-neutral-200"></span>
        
            <span>${content || ""}</span>

        </div>

    `


}


export function ArticleMedia(content, className){

    content = content || ""
    content = content.trim()
    if(!content || content == "") { return "" }

    return `
    
        <div 
            class="mt-8 aspect-video rounded-2xl bg-neutral-100 ${className || ""}"
        >

            ${content || ""}
        
        </div>

    `


}


export function ArticleBody(content, className){

    content = content || ""
    content = content.trim()
    if(!content || content == "") { return "" }

    return `

        <div 
            class="prose prose-neutral mt-8 max-w-none ${className || ""}"
        >
            ${content || ""}
        </div>
    `



}

export function ArticleFooter(content, className){

    content = content || ""
    content = content.trim()
    if(!content || content == "") { return "" }

    return `
    
        <div 
            class="${className || ""}"
        >
            
            ${content || ""}

        </div>

    
    `


}

export function ArticleCard(content, className){

    content = content || ""
    content = content.trim()
    if(!content || content == "") { return "" }

    return `
    
    
    <article 
        class="group overflow-hidden rounded-2xl border border-neutral-200 bg-white transition hover:-translate-y-1 hover:shadow-lg ${className || ""}"
        >

            ${content || ""}

    </article>
    
    `

}

export function ArticleCardHeader(content, className){

    content = content || ""
    content = content.trim()
    if(!content || content == "") { return "" }
    
    return `
    
    
    <article 
        class="group overflow-hidden rounded-2xl border border-neutral-200 bg-white transition hover:-translate-y-1 hover:shadow-lg ${className || ""}"
        >

            ${content || ""}
            
    </article>
    
    `

}

export function ArticleCardBody(content, className){

    content = content || ""
    content = content.trim()
    if(!content || content == "") { return "" }


     return `
    
    
     <div class="p-5 ${className || ""}">


            ${content || ""}
            
    </div>
    
    `

}

export function ArticleCardFooter(content, className){

    content = content || ""
    content = content.trim()
    if(!content || content == "") { return "" }
    
    return `
    
    <div class="mt-4 flex items-center gap-2 text-xs text-neutral-500 ${className || ""}">
          ${content || ""}
    </div>
    
    `

}


export function ArticleCardTitle(content, className){

    content = content || ""
    content = content.trim()
    if(!content || content == "") { return "" }


    return `
    
    
     <h3 class="mt-2 font-semibold text-neutral-900 ${className || ""}">


            ${content || ""}
            
    </h3>
    
    `

}


export function ArticleCardMedia(content, className){

    return `
    
    
    <div 
        class="aspect-video bg-neutral-100 ${className || ""}"
    >


            ${content || ""}
            
    </div>
    
    `

}
