
import { things } from "../things.js";

import { jsonldBase as h } from "../../jsonldBase/jsonldBase.js";



describe('Action Class', () => {


    describe('Action status', () => {


        // Happy path
        it('Action set state Potential', () => {

            let a = new things.Action()
            a.setPotential()
            expect(a.isPotential).toEqual(true);
            expect(a.isActive).toEqual(false);
            expect(a.isCompleted).toEqual(false);
            expect(a.isFailed).toEqual(false);

            expect(h.isPotential(a)).toEqual(true);
            expect(h.isActive(a)).toEqual(false);
            expect(h.isCompleted(a)).toEqual(false);
            expect(h.isFailed(a)).toEqual(false);


        });
    });
});
