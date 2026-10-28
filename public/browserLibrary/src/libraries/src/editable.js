import * as eh from './elementHelpers.js';
import { h } from '/jsonldCore.js';
import { db } from '../../recordsDB/recordsDB.js';


/**
 * All the elements with class kr-value becomes editable when double-clicking on it
 */




/**
 * All elements with 
 * @param {*} element 
 */
export function initContainer(element){

    initEventListeners(element)

}




function initEventListeners(element){

    console.log('init editable')

    element.addEventListener('dblclick', (e) => {

        console.log('dblclick', e.target.tagName, e.target.className)

        // get krinput 
        toggleEditable(e.target)

    })


}


function toggleEditable(element){

    let valueElement = element.closest('.kr-value')

    if(!valueElement){ return }

    if(valueElement.classList.contains('editin')){
        return unsetEditable(valueElement)
    } else {
        setEditable(element)
    }

}

function setEditable(element){


    let valueElement = element.closest('.kr-value')

    console.log('ve', valueElement.tagName)
    valueElement.id = valueElement?.id || h.randomUUID()

    valueElement.contentEditable = true
    valueElement.classList.add('editing')

    const controller = new AbortController();

    element.addEventListener('focusout', (event) => {
        unsetEditable(element)
        saveIfChanged(element)
        controller.abort()
    }, { signal: controller.signal })

}



function saveIfChanged(element){

    let ref = eh.getRef(element)

    if(!ref){
        console.log('Cannot save, Missing ref')
    }

    let propertyID = eh.propertyID(element)
    
    let originalRecord = db.get(ref)
    let originalValue = db.getValue(ref, propertyID)
    
    if(originalValue != element.textContent){

        db.setValue(ref, propertyID, element.textContent)

        let newRecord = db.get(ref)
        console.log('Record has been updated', JSON.stringify(originalRecord, null, 4), JSON.stringify(newRecord, null, 4))

    }



}


function unsetEditable(element){

    let valueElement = element.closest('.kr-value')
    valueElement.contentEditable = false
    valueElement.classList.remove('editing')

    

    removeObserver(valueElement)

}


function setObserver(element){


    // 2. Create the observer callback function
    const callback = (mutationsList) => {
    for (const mutation of mutationsList) {
        if (mutation.type === "childList" || mutation.type === "characterData") {
            

            // let valueElement = mutation.target.closest('.kr-value')

            let ref = eh.getRef(element)

            let propertyID = eh.propertyID(element)

          //  db.setValue(ref, propertyID, element.textContent)
            
            console.log("Span content changed to:", ref, propertyID, element.textContent);
        }
    }
    };

    // 3. Create an observer instance linked to the callback
    const observer = new MutationObserver(callback);

    // 4. Start observing the target node for configuration changes
    observer.observe(element, {
        childList: true,      // Monitors additions/removals of child nodes (text)
        characterData: true,   // Monitors changes to the text content itself
        subtree: true          // Monitors nested elements
    });

    observerDB[element.id] = observer

    return observer
} 


let observerDB = {}

function removeObserver(element){


    if(!observerDB?.[element.id]){return}

    observerDB[element.id].disconnect();


}