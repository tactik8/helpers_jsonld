import { _h } from '../../index.js'




describe('Conversation', () => {
  describe('base', () => {
    it('Add message', () => {
      
        let c = new _h.things.Conversation()

        expect(c.messages.length).toEqual(0)

        c.addMessage(undefined, undefined, undefined, "Test1", undefined, undefined)
        expect(c.messages.length).toEqual(1)
        expect([c.record.hasPart].length).toEqual(1)

        c.addMessage(undefined, undefined, undefined, "Test2", undefined, undefined)
        expect(c.messages.length).toEqual(2)
        expect(c.record.hasPart.length).toEqual(2)

        c.addMessage(undefined, undefined, undefined, "Test3", undefined, undefined)
        expect(c.messages.length).toEqual(3)
        expect(c.record.hasPart.length).toEqual(3)


        let c2 = new _h.things.Conversation(c.record)
        expect(c2.messages.length).toEqual(3)
        expect(c2.record.hasPart.length).toEqual(3)


        c2.addMessage(undefined, undefined, undefined, "Test4", undefined, undefined)
        expect(c2.messages.length).toEqual(4)
        expect(c2.record.hasPart.length).toEqual(4)

    });


    
  });
});

