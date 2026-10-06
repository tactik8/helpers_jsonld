export function getParsedRequest(req) {
  /**
   * Represents the request parameters from the express request object.
   * @const {Object}
   * @property {string} method - The request method in lowercase
   * @property {string} hostname - The hostname including port number
   * @property {string} url - The relative url of the web end point (/things)
   * @property {number} offset - For a search, offset.
   * @property {number} limit - For a search,limit.
   * @property {string} orderBy - For a search, orderBy.
   * @property {string} orderDirection - For a search, orderDirection (-1, 1)
   * @param {Object} filter - The filter object
   * @property {string} record_id - The record_id called.
   * @param {Object} data - The data object
   *
   */
  let parsedRequest = {
    method: req.method.toLowerCase(),
    hostname: req.host,
    url: req.originalUrl,
    fullUrl: req.protocol + "://" + req.get("host") + req.originalUrl,
    offset: Number(req.query?.offset),
    limit: Number(req.query?.limit),
    orderBy: req.query?.orderBy,
    orderDirection: req.query?.orderDirection,
    record_id: req.params.record_id,
    data: req?.body,
  };

  // Retrieve filter either from a json query params filter or from remaining query parameters
  parsedRequest.filter = { ...req.query } || {};

  console.log("pp", parsedRequest.filter);
  if (req.query?.filter) {
    try {
      parsedRequest.filter = JSON.parse(req.query?.filter);
    } catch {}
  }
  parsedRequest.filter = parsedRequest.filter || {};

  if (parsedRequest?.filter) {
    // remove filter params starting with _

    Object.keys(parsedRequest.filter || {})
      .filter((x) => x.startsWith("_") == true)
      .forEach((x) => delete parsedRequest.filter[x]);

    // remove special keywords from filter
    let specialKeywords = [
      "filter",
      "offset",
      "limit",
      "orderBy",
      "orderDirection",
    ];
    specialKeywords.forEach((x) => delete parsedRequest.filter[x]);
  }

  return parsedRequest;
}
