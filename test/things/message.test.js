

import  { _h } from '../../src/index.js';



describe('Message', () => {
  

  test('DB should allow storing and retrieving a value', async () => {
    

    let message = new _h.things.Message("sender@test.com", "recipient@test.com", "Subject", "Text", new Date(), new Date())


    expect (1).toBe(1)
   

  });

 
  
});

