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



async function test1() {
   
    let playGround = getPlayground('PlayGround test1')
   
    let t1 = {
        '@context': 'https://schema.org/',
        '@type': 'Thing',
        '@id': 'https://www.test.com/thing2#thing',
        name: 'thing2',
        url: 'https://www.test.com/thing2',
    };

    db.set(t1);

    let element = document.createElement('kr-card');
    element.dataset.recordId = 'https://www.test.com/thing2#thing';

    playGround.appendChild(element);

    //await delay(2000); // Waits for 2 seconds (2000 ms)

    t1.name = 'thing222';
    db.set(t1);

    //await delay(2000); // Waits for 2 seconds (2000 ms)


  

}

test1()

async function test2(){

    let playGround = getPlayground('PlayGround test2')

  // Test list
    let l = new h.things.ItemList()
    for(let i =0; i < 15; i++){
            l.add((new h.things.Thing('thing' + String(i))).record);

    }
   
    db.set(l.record)

    let element2 = document.createElement('kr-itemlist')
    element2.dataset.recordId = l.record_id
    playGround.appendChild(element2);



    if(1==0){
    let record = l.record
    for(let r of record.itemListElement){
        let newPosition = 15 - h.getValue(r, 'position')
        r.position = newPosition
    }

    record.itemListElement = record.itemListElement.slice(0, 11)

    db.set(record)
    }

}



test2();
