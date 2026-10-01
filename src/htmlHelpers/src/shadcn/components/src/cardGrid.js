


export function CardGrid({nbColumns, content}) {
  
    
    let nbColumnsSM = String(nbColumns ?? 2)
    let nbColumnsLG = String(nbColumns ?? 3)
    let nbColumnsXL = String(nbColumns ?? 4)
    nbColumns = String(nbColumns ?? 1)


  return `
    <div class="grid grid-cols-${nbColumns} gap-6 sm:grid-cols-${nbColumnsSM} lg:grid-cols-${nbColumnsLG} xl:grid-cols-${nbColumnsXL}">
      ${content}
    </div>
  `
}