[![npm version](https://badge.fury.io/js/@kalkuz%2Fexpress-respond-status.svg)](https://badge.fury.io/js/@kalkuz%2Fexpress-respond-status)

# Express Respond Status

Express Respond Status is a middleware for Express that adds response methods using the response object. This method allows you to easily send a response with a status code and a JSON body. It provides explanatory method names for each status code.

## Installation

You can install this package using npm:

```bash
npm install @kalkuz/express-respond-status
```

Using yarn:

```bash
yarn add @kalkuz/express-respond-status
```

### Dependencies

Express Respond Status only depends on [Express](https://expressjs.com/).

## Usage

### Importing The Package
  
  ```javascript
  import Respond from '@kalkuz/express-respond-status';
  ```

### Responding Requests

Example success responses:
  
  ```javascript
  // HTTP 200
  Respond.OK(res, { somedata: 'somevalue' }, 'Any response message here');
  ```

  ```javascript
  // HTTP 201
  Respond.Created(res, { somedata: 'somevalue' }, 'Any response message here');
  ```

  ```javascript
  // HTTP 202
  Respond.Accepted(res, { somedata: 'somevalue' }, 'Any response message here');
  ```

Example error responses:
  
  ```javascript
  // HTTP 400
  Respond.BadRequest(res,  { somedata: 'somevalue' }, 'Any response message here');
  ```
  
  ```javascript
  // HTTP 401
  Respond.Unauthorized(res,  { somedata: 'somevalue' }, 'Any response message here');
  ```

  ```javascript
  // HTTP 403
  Respond.Forbidden(res,  { somedata: 'somevalue' }, 'Any response message here');
  ```

### Notes

- The `data` parameter is optional. If you don't want to send any data, you can pass `null` or `undefined` as the second parameter.

- The `message` parameter is optional. If you don't want to send any message, you can pass `null` or `undefined` as the third parameter.

### Available Methods

HTTP Status Code | Method Usage
--- | ---
100 | `Continue(res, data, message)` 
101 | `SwitchingProtocols(res, data, message)`
102 | `Processing(res, data, message)`
103 | `EarlyHints(res, data, message)`
200 | `OK(res, data, message)`
201 | `Created(res, data, message)`
202 | `Accepted(res, data, message)`
203 | `NonAuthoritativeInformation(res, data, message)`
204 | `NoContent(res, data, message)`
205 | `ResetContent(res, data, message)`
206 | `PartialContent(res, data, message)`
207 | `MultiStatus(res, data, message)`
208 | `AlreadyReported(res, data, message)`
226 | `IMUsed(res, data, message)`
300 | `MultipleChoices(res, data, message)`
301 | `MovedPermanently(res, data, message)`
302 | `Found(res, data, message)`
303 | `SeeOther(res, data, message)`
304 | `NotModified(res, data, message)`
305 | `UseProxy(res, data, message)`
306 | `Unused(res, data, message)`
307 | `TemporaryRedirect(res, data, message)`
308 | `PermanentRedirect(res, data, message)`
400 | `BadRequest(res, data, message)`
401 | `Unauthorized(res, data, message)`
402 | `PaymentRequired(res, data, message)`
403 | `Forbidden(res, data, message)`
404 | `NotFound(res, data, message)`
405 | `MethodNotAllowed(res, data, message)`
406 | `NotAcceptable(res, data, message)`
407 | `ProxyAuthenticationRequired(res, data, message)`
408 | `RequestTimeout(res, data, message)`
409 | `Conflict(res, data, message)`
410 | `Gone(res, data, message)`
411 | `LengthRequired(res, data, message)`
412 | `PreconditionFailed(res, data, message)`
413 | `PayloadTooLarge(res, data, message)`
414 | `URITooLong(res, data, message)`
415 | `UnsupportedMediaType(res, data, message)`
416 | `RangeNotSatisfiable(res, data, message)`
417 | `ExpectationFailed(res, data, message)`
418 | `ImATeapot(res, data, message)`
421 | `MisdirectRequest(res, data, message)`
422 | `UnprocessableEntity(res, data, message)`
423 | `Locked(res, data, message)`
424 | `FailedDependency(res, data, message)`
425 | `TooEarly(res, data, message)`
426 | `UpgradeRequired(res, data, message)`
428 | `PreconditionRequired(res, data, message)`
429 | `TooManyRequests(res, data, message)`
431 | `RequestHeaderFieldsTooLarge(res, data, message)`
451 | `UnavailableForLegalReasons(res, data, message)`
500 | `InternalServerError(res, data, message)`
501 | `NotImplemented(res, data, message)`
502 | `BadGateway(res, data, message)`
503 | `ServiceUnavailable(res, data, message)`
504 | `GatewayTimeout(res, data, message)`
505 | `HTTPVersionNotSupported(res, data, message)`
506 | `VariantAlsoNegotiates(res, data, message)`
507 | `InsufficientStorage(res, data, message)`
508 | `LoopDetected(res, data, message)`
510 | `NotExtended(res, data, message)`
511 | `NetworkAuthenticationRequired(res, data, message)`

## License

[MIT License](https://github.com/kalkuz/express-respond-status/blob/master/LICENCE)
