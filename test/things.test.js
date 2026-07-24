
import  {_h}  from '../src/index.js'

describe('Thing Classes', () => {
  
  
  test('Should produce record', async () => {
    

    let t = new _h.things.Thing()

    t.name = "Some thing"

    let record = t.record

    
    expect(record).toHaveProperty('name', "Some thing");

  });

 
  
});

