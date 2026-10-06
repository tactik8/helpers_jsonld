import * as h from "../htmlPropertyValue.js";

describe("URL Helpers ", () => {
  describe("Get Datatype", () => {
    let record = {
      "@type": "Thing",
      "@id": "https://www.test.com/thing1#thing",
      name: "thing1",
      url: "https://www.test.com/thing1",
      other: {
        "@type": "Thing",
        "@id": "https://www.test.com/thing12#thing",
        name: "thing12",
         url: "https://www.test.com/thing12"
      },
    };

    let baseUrl = "https://krknapi.com/api"

    it("Url", () => {

      let hpv = h.getHtmlPropertyValue(record, 'name', baseUrl)

      expect(hpv.value).toEqual("thing1");
      expect(hpv.htmlValue).toEqual("<div title=\"thing1\" class=\"min-w-md line-clamp-4\">thing1</div>");        

    });
  });
});
