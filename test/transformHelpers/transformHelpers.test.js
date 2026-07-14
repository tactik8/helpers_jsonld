
import  { _h } from '../../src/index.js';



describe('TransformHelpers', () => {
  

  test('Helpers should transform', async () => {
    

    let message = new _h.things.Message("sender@test.com", "recipient@test.com", "Subject", "Text", new Date(), new Date())


    expect (message.sender[0].email).toBe("sender@test.com")
    expect (message.recipient.email).toBe("recipient@test.com")
    expect (message.subject[0]).toBe("Subject")
    expect (message.text[0]).toBe("Text")
    expect (message.dateSent[0]).toBeInstanceOf(Date)
    expect (message.dateReceived[0]).toBeInstanceOf(Date)

  });

 
  
});

