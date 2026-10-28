







export function Kanban(content){

    return `
    
    <div class="kr-kanban bg-white p-6">
    ${content}
  </div>
    `
}

export function KanbanHeader(content){
     return `<header class="kr-kanban-header mb-6 flex flex-wrap items-center justify-between gap-4">
    ${content}
    </header>`
}

export function KanbanBody(content){
     return `<div class="kr-kanban-body flex gap-4 overflow-x-auto pb-4">
            ${content}
    </div>`
}


export function KanbanFooter(content){
     return `<footer class="kr-kanban-footer">
    ${content}
    </footer>`
}
export function KanbanTitle(title, subTitle){

    return `<div class="kr-kanban-header-title">
      <h1 class="text-lg font-semibold text-neutral-900">${title}</h1>
      <p class="text-sm text-neutral-500">${subTitle}</p>
    </div>`
}


export function KanbanColumn(content){

    return `
    
        <section class="kr-kanban-column flex w-72 shrink-0 flex-col rounded-2xl border border-neutral-200 bg-neutral-50">
            ${content}
        </section>

    
    `
}

export function KanbanColumnHeader(content){

    return `
     <header class="kr-kanban-column-header flex items-center gap-2 px-4 py-3">
        <span class="text-sm font-medium text-neutral-900">${content}</span>
        <span data-count class="rounded-full bg-neutral-200 px-2 py-0.5 text-xs text-neutral-600">2</span>
        <span class="ml-auto text-neutral-400"></span>
      </header>
    `
}

export function KanbanColumnBody(content){

    return `
          <div data-column class="kr-kanban-column-body flex min-h-[140px] flex-1 flex-col gap-2 px-3 pb-2">
          ${content}
          </div>

    `
}

export function KanbanColumnFooter(content){

    return `
     <footer class="kr-kanban-column-footer  flex items-center gap-2 px-4 py-3">
        ${content}
      </footer>
    `
}

export function KanbanCard(content){

    return `
      <article data-card class="kr-kanban-card cursor-grab rounded-xl border border-neutral-200 bg-white p-3 shadow-sm transition hover:shadow-md">
         ${content}
        </article>
    `
}
export function KanbanCardHeader(content){

    return `
          <span class="kr-kanban-card-header rounded-md bg-blue-50 px-1.5 py-0.5 text-[11px] font-medium text-blue-700">${content}</span>
   
    `
}

export function KanbanCardBody(content){

    return `
     
          <p class="kr-kanban-card-body mt-2 text-sm font-medium leading-snug text-neutral-900">${content}</p>
        
    `
}

export function KanbanCardFooter(content){

    return `
         
          <div class="kr-kanban-card-footer mt-3 flex items-center gap-2 text-xs text-neutral-400">
            ${content}
          </div>
    `
}


