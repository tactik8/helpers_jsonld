import { h } from '/jsonldCore.js';
import { db } from './src/recordsDB/recordsDB.js';

import { htmlComponent } from './src/htmlComponent/htmlComponent.js';

export const browserLibrary = {};

console.log('test');





function getPlayground(name) {



    // Set up playground

    let mainElement = document.getElementsByTagName('main')[0];
    let spacer = document.createElement('div');
    spacer.classList.add('w-full');
    spacer.classList.add('max-w-6xl');
    spacer.classList.add('space-y-8');
    spacer.classList.add('pt-12');
    spacer.classList.add('pb-12');
    mainElement.appendChild(spacer);

    let titleElement = document.createElement('h2');
    titleElement.textContent = name || 'PlayGround'
    spacer.appendChild(titleElement)


    let playGround = document.createElement('div');
    playGround.classList.add('w-full');
    playGround.classList.add('max-w-6xl');
    playGround.classList.add('space-y-8');
    playGround.classList.add('pt-12');
    playGround.classList.add('pb-12');

    spacer.appendChild(playGround);

    return playGround

}

function getItemList(){
    // Init record
    let list = new h.things.ItemList()

    for(let i =0; i < 5; i++ ){
        let a = new h.things.Action('action_' + String(i))
        a.setPotential()
        list.add(a)
    }

    for(let i =5; i < 10; i++ ){
        let a = new h.things.Action('action_' + String(i))
        a.setActive()
        list.add(a)
    }
    return list
}
let itemList = getItemList()




async function test1() {
   
    let playGround = getPlayground('PlayGround test1')
   
   
    // Init record
    let list = itemList



    let record = list.record
  
    db.set(record)

    // Init kanban element

    let e = document.createElement('kr-kanban')
    e.dataset.id = list.record_id


    playGround.append(e)

}

test1()


async function test3() {
   
    let playGround = getPlayground('PlayGround test2')
   
   
    // Init record
    let list = itemList

   
    let record = list.record
  

    // Init kanban element

  //  let e = document.createElement('kr-table')
  //  e.dataset.id = list.record_id

   // playGround.append(e)

}

test3()
