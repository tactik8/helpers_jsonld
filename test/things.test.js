
import  * as thinga from '../src/things/things.js';

describe('Thing Classes', () => {
  
  
  test('Should produce record', async () => {
    

    let t = new thinga.Thing()

    t.name = "Some thing"

    let record = t.record

    
    expect(record).toHaveProperty('name', "Some thing");

  });

 
  
});

