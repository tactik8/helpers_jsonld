import { BaseElement } from './_baseElement.js';
import { h } from '/jsonldCore.js';
import { db } from '../../recordsDB/recordsDB.js';
let BASE_URL = 'http://localhost:3021/';

export class Menu extends BaseElement {
    constructor() {
        // Always call super first in constructor
        super();
    }

    render() {
        this.innerHTML = h.html.shadcn.blocks.Menu(
            h.getPotentialAction(this.record),
        );
    }
}

customElements.define('kr-menu', Menu);

export class DropdownMenu extends BaseElement {
    constructor() {
        // Always call super first in constructor
        super();
    }

    render() {
        console.log('pp', this.record);
        this.innerHTML = h.html.shadcn.blocks.DropdownMenu(
            h.getPotentialAction(this.record),
        );

        // 1. Select the form element
        const forms = document.querySelectorAll('form');

        for (let form of forms) {
            // 2. Attach the submit event listener
            form.addEventListener('submit', async (event) => {
                // 3. Stop the default browser POST redirect/reload
                event.preventDefault();

                const formData = new FormData(form);

                // 4. Automatically capture all form input fields
                let action = Object.fromEntries(formData.entries()).record;
                action = JSON.parse(action);

                action = db.get(action);

                db.execute(action);

                //let action = JSON.parse(data);

                // Optional: Convert FormData to a standard JSON object if your API requires it
                // const data = Object.fromEntries(formData.entries());

                try {
                    // 5. Send the data asynchronously via fetch

                    console.log('Menu click', action);
                } catch (error) {
                    console.error('Network error:', error);
                }
            });
        }
    }
}

customElements.define('kr-dropdown-menu', DropdownMenu);
