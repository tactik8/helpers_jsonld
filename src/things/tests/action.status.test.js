

import { things } from "../things.js";

import { jsonldBase as h} from "../../jsonldBase/jsonldBase.js";



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

        it('Action set state active', () => {

            let a = new things.Action()
            a.setActive()
            expect(a.isPotential).toEqual(false);
            expect(a.isActive).toEqual(true);
            expect(a.isCompleted).toEqual(false);
            expect(a.isFailed).toEqual(false);

            expect(h.isPotential(a)).toEqual(false);
            expect(h.isActive(a)).toEqual(true);
            expect(h.isCompleted(a)).toEqual(false);
            expect(h.isFailed(a)).toEqual(false);


        });

        it('Action set state Completed', () => {

            let a = new things.Action()
            a.setCompleted()
            expect(a.isPotential).toEqual(false);
            expect(a.isActive).toEqual(false);
            expect(a.isCompleted).toEqual(true);
            expect(a.isFailed).toEqual(false);

            expect(a.startTime).not.toEqual(undefined);
            expect(a.endTime).not.toEqual(undefined);


            expect(h.isPotential(a)).toEqual(false);
            expect(h.isActive(a)).toEqual(false);
            expect(h.isCompleted(a)).toEqual(true);
            expect(h.isFailed(a)).toEqual(false);


        });

        it('Action set state Completed', () => {

            let a = new things.Action()
            a.setFailed()
            expect(a.isPotential).toEqual(false);
            expect(a.isActive).toEqual(false);
            expect(a.isCompleted).toEqual(false);
            expect(a.isFailed).toEqual(true);


            expect(h.isPotential(a)).toEqual(false);
            expect(h.isActive(a)).toEqual(false);
            expect(h.isCompleted(a)).toEqual(false);
            expect(h.isFailed(a)).toEqual(true);





        });

    })



})