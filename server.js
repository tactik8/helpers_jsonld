import express from "express";

import { _h } from "./src/index.js";
import { DataFeed } from "./src/things/src/dataFeed.js";
import { recordToDatapoints } from "./src/datapointHelpers/src/methods/dataPointMethods.js";
import datapointHelpers from "./src/datapointHelpers/datapointHelpers.js";

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

let options = {
  baseUrl: "http://localhost:3021/things",
};

let website = new _h.things.WebSite({ url: "http://localhost" });
website.name = "testName";
website.addHeaderLink("/", "Home");
website.addHeaderLink("/ItemList", "ItemList");
website.addHeaderLink("/ImageObject", "ImageObject");
website.addHeaderLink("/VideoObject", "VideoObject");
website.addFooterLink("/ItemList", "ItemList");
website.addFooterLink("/ImageObject", "ImageObject");
website.addFooterLink("/VideoObject", "VideoObject");

let records = _h.records.itemList(500, 1);
let db = new _h.DB();
db.post(records);

// Health Check
app.get("/health", (req, res) => {
  res.status(200).json({ status: "OK", timestamp: new Date() });
});

// Mount Routes
app.get("/", async (req, res) => {

    let parsedRequest = _h.html.express.getParsedRequest(req);


    // Get records
    let baseApiUrl = 'https://db.tactik8.com/api/bronzeV1/stash'

    let queryParams = { ...req.query}

    let apiUrl = _h.dataHelpers.url.getUrl(baseApiUrl, '/', queryParams)

  //let apiUrl = `https://db.tactik8.com/api/bronzeV1/stash?@type=${"VideoObject"}&offset=${req.query?.offset || 0}&limit=${req.query?.limit || 20}`;
  let r = await fetch(apiUrl);
  let records = await r.json();
  records = records.result;

  // Generate webpage object from website with page url and title
  let webpage = website.getWebPage(req.originalUrl, "Home");
  webpage.addBreadcrumb("/", "Home");

  

  let html = _h.html.shadcn.cardsPage({
    website,
    webpage,
    title: "Test Title",
    records,
    ...parsedRequest,
    options,
  });

  res.status(200).send(html);
});

// Mount Routes

app.get("/things", async (req, res) => {
  // Generate webpage object from website with page url and title
  let webpage = website.getWebPage(req.originalUrl, "Things");
  webpage.addBreadcrumb("/things", "Things");



  // Get records
    let apiUrl = `https://db.tactik8.com/api/bronzeV1/stash?@type=${"VideoObject"}&offset=${req.query?.offset || 0}&limit=${req.query?.limit || 20}`;

  let r = await fetch(apiUrl);
  let records = await r.json();
  records = records.result;

  // parse request
  let parsedRequest = _h.html.express.getParsedRequest(req);

  // Generate and return html
  let html = _h.html.shadcn.recordsPage({
    website,
    webpage,
    title: "Test Title",
    url: req.originalUrl,
    records,
    ...parsedRequest,
    options,
  });

  res.status(200).send(html);
});

app.post("/things", (req, res) => {
  let data = req.body;
  db.post(data);
  console.log("pppp");
  console.log("d", data);

  res.redirect(req.get("referer"));
});

// Mount Routes
app.get("/things/:record_id", async (req, res) => {
  let webpage = website.getWebPage(req.originalUrl, "Things");
  webpage.addBreadcrumb("/things", "Things");
  webpage.addBreadcrumb(
    `/${options.baseUrl}/${encodeURIComponent(req.params.record_id)}`,
    req.params.record_id,
  );

  //let record = db.get(req.params.record_id);

  // Get record
  let apiUrl = `https://db.tactik8.com/api/bronzeV1/stash/${encodeURIComponent(req.params.record_id)}`;
  let r = await fetch(apiUrl);
  let a = await r.json();
  let record = a.result;

  let html = _h.html.shadcn.recordPage({
    website,
    webpage,
    title: req.params.record_id,
    url: req.originalUrl,
    record,
    options,
  });

  res.status(200).send(html);
});

// Mount Routes

app.get("/json", (req, res) => {
  let url = req.originalUrl;

  let offset = Number(req.query.offset);
  let limit = Number(req.query.limit);

  let content = _h.html.shadcn.components.JsonEditor({});

  let html = _h.html.shadcn.blankPage({
    website,
    title: "Test Title",
    url,
    content,
    options,
  });

  res.status(200).send(html);
});
app.get("/cards", (req, res) => {
  let url = req.originalUrl;

  let offset = Number(req.query.offset);
  let limit = Number(req.query.limit);

  let html = _h.html.shadcn.cardsPage({
    website,
    title: "Test Title",
    url,
    records,
    offset,
    limit,
    options,
  });

  res.status(200).send(html);
});

// Mount Routes
app.get("/image", (req, res) => {
  let url = req.originalUrl;

  let offset = Number(req.query.offset);
  let limit = Number(req.query.limit);

  let content = _h.html.shadcn.components.ImageModal({
    src: "https://placehold.co/600x400",
  });

  let html = _h.html.shadcn.blankPage({
    website,
    title: "Test Title",
    content,
    options,
  });

  res.status(200).send(html);
});

// Mount Routes
app.get("/execute", (req, res) => {
  res.redirect(req.get("referer"));
});
app.post("/execute", (req, res) => {
  res.redirect(req.get("referer"));
});

// Mount Routes
app.get("/test", (req, res) => {
  let c = "";

  c += _h.html.shadcn.card({ title: "test", content: "test" });

  let page = _h.html.shadcn.webpage({ title: "Title1", bodyContent: c });

  res.status(200).send(PageRevealEvent);

  let records = _h.records.ItemList(10, 1);

  let options = {
    baseUrl: "https://www.test.com/api",
  };
  let html = _h.html.table.getTable(records, options);
  res.status(200).send(html);
});

app.get("/:record_type", async (req, res) => {
  let apiUrl = `https://db.tactik8.com/api/n8n/stash?@type=${req.params.record_type}&offset=${req.query?.offset || 0}&limit=${req.query?.limit || 20}`;
  let r = await fetch(apiUrl);
  let records = await r.json();
  records = records.result;

  let webpage = website.getWebPage(req.originalUrl, req.params.record_type);
  webpage.addBreadcrumb("/" + req.params.record_type, req.params.record_type);

  let url = req.originalUrl;
  let offset = Number(req.query.offset);
  let limit = Number(req.query.limit);

  let parsedRequest = _h.html.express.getParsedRequest(req);

  let html = _h.html.shadcn.recordsPage({
    website,
    webpage,
    title: "Test Title",
    records,
    ...parsedRequest,
    options,
  });

  res.status(200).send(html);
});

const server = app.listen("3021", () => {
  console.log(`Server running`);
});
