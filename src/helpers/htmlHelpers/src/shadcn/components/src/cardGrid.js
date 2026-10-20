


export function CardGrid({nbOfColumns, content}) {
  
    
    let nbOfColumnsSM = String(nbOfColumns ?? 2)
    let nbOfColumnsLG = String(nbOfColumns ?? 3)
    let nbOfColumnsXL = String(nbOfColumns ?? 4)
    nbOfColumns = String(nbOfColumns ?? 1)


  return `
    <div class="grid grid-cols-${nbOfColumns} gap-6 sm:grid-cols-${nbOfColumnsSM} lg:grid-cols-${nbOfColumnsLG} xl:grid-cols-${nbOfColumnsXL}">
      ${content}
    </div>
  `
}