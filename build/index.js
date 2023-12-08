"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function Respond(res, status, json) {
    if (json != null) {
        res.status(status).json(json);
    }
    else {
        res.status(status);
    }
}
/**
 * HTTP 101 - Continue
 *
 * This interim response indicates that the client should continue
 * the request or ignore the response if the request is already finished.
 */
function Continue(res, data, message) {
    const response = {};
    if (data != null)
        response.data = data;
    if (message != null)
        response.message = message;
    Respond(res, 101, response);
}
/**
 * HTTP 102 - Switching Protocols
 *
 * This code is sent in response to an Upgrade request header
 * from the client and indicates the protocol the server is switching to.
 */
function SwitchingProtocols(res, data, message) {
    const response = {};
    if (data != null)
        response.data = data;
    if (message != null)
        response.message = message;
    Respond(res, 402, response);
}
/**
 * HTTP 103 - Processing
 *
 * This code indicates that the server has received and is
 * processing the request, but no response is available yet.
 */
function Processing(res, data, message) {
    const response = {};
    if (data != null)
        response.data = data;
    if (message != null)
        response.message = message;
    Respond(res, 103, response);
}
/**
 * HTTP 104 - Early Hints
 *
 * This status code is primarily intended to be used with the Link header,
 * letting the user agent start preloading resources while the server prepares a response.
 */
function EarlyHints(res, data, message) {
    const response = {};
    if (data != null)
        response.data = data;
    if (message != null)
        response.message = message;
    Respond(res, 104, response);
}
/**
 * HTTP 200 - OK
 *
 * The request succeeded.
 */
function OK(res, data, message) {
    const response = Object.assign(Object.assign({}, (Array.isArray(data) ? { count: data.length } : null)), { data,
        message });
    Respond(res, 200, response);
}
/**
 * HTTP 201 - Created
 *
 * The request succeeded, and a new resource was created as a result. This is
 * typically the response sent after POST requests, or some PUT requests.
 */
function Created(res, data, message) {
    const response = {};
    if (data != null)
        response.data = data;
    if (message != null)
        response.message = message;
    Respond(res, 201, response);
}
/**
 * HTTP 202 - Accepted
 *
 * The request has been received but not yet acted upon. It is noncommittal,
 * since there is no way in HTTP to later send an asynchronous response indicating
 * the outcome of the request. It is intended for cases where another process or
 * server handles the request, or for batch processing.
 */
function Accepted(res, data, message) {
    const response = {};
    if (data != null)
        response.data = data;
    if (message != null)
        response.message = message;
    Respond(res, 202, response);
}
/**
 * HTTP 203 - Non-Authoritative Information
 *
 * This response code means the returned metadata is not exactly the same as is
 * available from the origin server, but is collected from a local or a third-party copy.
 * This is mostly used for mirrors or backups of another resource. Except for that
 * specific case, the 200 OK response is preferred to this status.
 */
function NonAuthoritativeInformation(res, data, message) {
    const response = {};
    if (data != null)
        response.data = data;
    if (message != null)
        response.message = message;
    Respond(res, 203, response);
}
/**
 * HTTP 204 - No Content
 *
 * There is no content to send for this request, but the headers may be useful.
 * The user agent may update its cached headers for this resource with the new ones.
 */
function NoContent(res, data, message) {
    const response = {};
    if (data != null)
        response.data = data;
    if (message != null)
        response.message = message;
    Respond(res, 204, response);
}
/**
 * HTTP 205 - Reset Content
 *
 * Tells the user agent to reset the document which sent this request.
 */
function ResetContent(res, data, message) {
    const response = {};
    if (data != null)
        response.data = data;
    if (message != null)
        response.message = message;
    Respond(res, 205, response);
}
/**
 * HTTP 206 - Partial Content
 *
 * This response code is used when the Range header is sent from the
 * client to request only part of a resource.
 */
function PartialContent(res, data, message) {
    const response = {};
    if (data != null)
        response.data = data;
    if (message != null)
        response.message = message;
    Respond(res, 206, response);
}
/**
 * HTTP 207 - Multi-Status
 *
 * Conveys information about multiple resources, for situations
 * where multiple status codes might be appropriate.
 */
function MultiStatus(res, data, message) {
    const response = {};
    if (data != null)
        response.data = data;
    if (message != null)
        response.message = message;
    Respond(res, 207, response);
}
/**
 * HTTP 208 - Already Reported
 *
 * Used inside a <dav:propstat> response element to avoid repeatedly
 * enumerating the internal members of multiple bindings to the same collection.
 */
function AlreadyReported(res, data, message) {
    const response = {};
    if (data != null)
        response.data = data;
    if (message != null)
        response.message = message;
    Respond(res, 208, response);
}
/**
 * HTTP 226 - IM Used
 *
 * The server has fulfilled a GET request for the resource, and the response
 * is a representation of the result of one or more instance-manipulations
 * applied to the current instance.
 */
function IMUsed(res, data, message) {
    const response = {};
    if (data != null)
        response.data = data;
    if (message != null)
        response.message = message;
    Respond(res, 226, response);
}
/**
 * HTTP 300 - Multiple Choices
 *
 * The request has more than one possible response. The user agent or user should
 * choose one of them. (There is no standardized way of choosing one of the responses,
 * but HTML links to the possibilities are recommended so the user can pick.)
 */
function MultipleChoices(res, data, message) {
    const response = {};
    if (data != null)
        response.data = data;
    if (message != null)
        response.message = message;
    Respond(res, 300, response);
}
/**
 * HTTP 301 - Moved Permanently
 *
 * The URL of the requested resource has been changed permanently.
 * The new URL is given in the response.
 */
function MovedPermanently(res, data, message) {
    const response = {};
    if (data != null)
        response.data = data;
    if (message != null)
        response.message = message;
    Respond(res, 301, response);
}
/**
 * HTTP 302 - Found
 *
 * This response code means that the URI of requested resource has been changed temporarily.
 * Further changes in the URI might be made in the future. Therefore, this same URI should
 * be used by the client in future requests.
 */
function Found(res, data, message) {
    const response = {};
    if (data != null)
        response.data = data;
    if (message != null)
        response.message = message;
    Respond(res, 302, response);
}
/**
 * HTTP 303 - See Other
 *
 * The server sent this response to direct the client to get the requested resource at
 * another URI with a GET request.
 */
function SeeOther(res, data, message) {
    const response = {};
    if (data != null)
        response.data = data;
    if (message != null)
        response.message = message;
    Respond(res, 303, response);
}
/**
 * HTTP 304 - Not Modified
 *
 * This is used for caching purposes. It tells the client that the response has not been
 * modified, so the client can continue to use the same cached version of the response.
 */
function NotModified(res, data, message) {
    const response = {};
    if (data != null)
        response.data = data;
    if (message != null)
        response.message = message;
    Respond(res, 304, response);
}
/**
 * @deprecated
 * HTTP 305 - UseProxy
 *
 * Defined in a previous version of the HTTP specification to indicate that a requested
 * response must be accessed by a proxy. It has been deprecated due to security concerns
 * regarding in-band configuration of a proxy.
 */
function UseProxy(res, data, message) {
    const response = {};
    if (data != null)
        response.data = data;
    if (message != null)
        response.message = message;
    Respond(res, 305, response);
}
/**
 * HTTP 306 - Unused
 *
 * This response code is no longer used; it is just reserved. It was used in a previous
 * version of the HTTP/1.1 specification.
 */
function Unused(res, data, message) {
    const response = {};
    if (data != null)
        response.data = data;
    if (message != null)
        response.message = message;
    Respond(res, 306, response);
}
/**
 * HTTP 307 - Temporary Redirect
 *
 * The server sends this response to direct the client to get the requested resource at
 * another URI with same method that was used in the prior request. This has the same
 * semantics as the 302 Found HTTP response code, with the exception that the user agent
 * must not change the HTTP method used: if a POST was used in the first request,
 * a POST must be used in the second request.
 */
function TemporaryRedirect(res, data, message) {
    const response = {};
    if (data != null)
        response.data = data;
    if (message != null)
        response.message = message;
    Respond(res, 307, response);
}
/**
 * HTTP 308 - Permanent Redirect
 *
 * This means that the resource is now permanently located at another URI, specified by
 * the Location: HTTP Response header. This has the same semantics as the 301 Moved Permanently
 * HTTP response code, with the exception that the user agent must not change the HTTP method
 * used: if a POST was used in the first request, a POST must be used in the second request.
 */
function PermanentRedirect(res, data, message) {
    const response = {};
    if (data != null)
        response.data = data;
    if (message != null)
        response.message = message;
    Respond(res, 308, response);
}
/**
 * HTTP 400 - Bad Request
 *
 * The server cannot or will not process the request due to something that is perceived to be
 * a client error (e.g., malformed request syntax, invalid request message framing,
 * or deceptive request routing).
 */
function BadRequest(res, data, message) {
    const response = {};
    if (data != null)
        response.data = data;
    if (message != null)
        response.message = message;
    Respond(res, 400, response);
}
/**
 * HTTP 401 - Unauthorized
 *
 * Although the HTTP standard specifies "unauthorized", semantically this response means
 * "unauthenticated". That is, the client must authenticate itself to get the requested response.
 */
function Unauthorized(res, data, message) {
    const response = {};
    if (data != null)
        response.data = data;
    if (message != null)
        response.message = message;
    Respond(res, 401, response);
}
/**
 * HTTP 402 - Payment Required
 *
 * This response code is reserved for future use. The initial aim for creating this code was using
 * it for digital payment systems, however this status code is used very rarely and no
 * standard convention exists.
 */
function PaymentRequired(res, data, message) {
    const response = {};
    if (data != null)
        response.data = data;
    if (message != null)
        response.message = message;
    Respond(res, 402, response);
}
/**
 * HTTP 403 - Forbidden
 *
 * The client does not have access rights to the content; that is, it is unauthorized, so the server
 * is refusing to give the requested resource. Unlike 401 Unauthorized,
 * the client's identity is known to the server.
 */
function Forbidden(res, data, message) {
    const response = {};
    if (data != null)
        response.data = data;
    if (message != null)
        response.message = message;
    Respond(res, 403, response);
}
/**
 * HTTP 404 - Not Found
 *
 * The server cannot find the requested resource. In the browser, this means the URL is not
 * recognized. In an API, this can also mean that the endpoint is valid but the resource itself does
 * not exist. Servers may also send this response instead of 403 Forbidden to hide the existence of
 * a resource from an unauthorized client. This response code is probably the most well known due to
 * its frequent occurrence on the web.
 */
function NotFound(res, data, message) {
    const response = {};
    if (data != null)
        response.data = data;
    if (message != null)
        response.message = message;
    Respond(res, 404, response);
}
/**
 * HTTP 405 - Method Not Allowed
 *
 * The request method is known by the server but is not supported by the target resource.
 * For example, an API may not allow calling DELETE to remove a resource.
 */
function MethodNotAllowed(res, data, message) {
    const response = {};
    if (data != null)
        response.data = data;
    if (message != null)
        response.message = message;
    Respond(res, 405, response);
}
/**
 * HTTP 406 - Not Acceptable
 *
 * This response is sent when the web server, after performing server-driven content negotiation,
 * doesn't find any content that conforms to the criteria given by the user agent.
 */
function NotAcceptable(res, data, message) {
    const response = {};
    if (data != null)
        response.data = data;
    if (message != null)
        response.message = message;
    Respond(res, 406, response);
}
/**
 * HTTP 407 - Proxy Authentication Required
 *
 * This is similar to 401 Unauthorized but authentication is needed to be done by a proxy.
 */
function ProxyAuthenticationRequired(res, data, message) {
    const response = {};
    if (data != null)
        response.data = data;
    if (message != null)
        response.message = message;
    Respond(res, 407, response);
}
/**
 * HTTP 408 - Request Timeout
 *
 * This response is sent on an idle connection by some servers, even without any previous
 * request by the client. It means that the server would like to shut down this unused connection.
 * This response is used much more since some browsers, like Chrome, Firefox 27+, or IE9, use HTTP
 * pre-connection mechanisms to speed up surfing. Also note that some servers merely shut down
 * the connection without sending this message.
 */
function RequestTimeout(res, data, message) {
    const response = {};
    if (data != null)
        response.data = data;
    if (message != null)
        response.message = message;
    Respond(res, 408, response);
}
/**
 * HTTP 409 - Conflict
 *
 * This response is sent when a request conflicts with the current state of the server.
 */
function Conflict(res, data, message) {
    const response = {};
    if (data != null)
        response.data = data;
    if (message != null)
        response.message = message;
    Respond(res, 409, response);
}
/**
 * HTTP 410 - Gone
 *
 * This response is sent when the requested content has been permanently deleted from server,
 * with no forwarding address. Clients are expected to remove their caches and links to the
 * resource. The HTTP specification intends this status code to be used for "limited-time,
 * promotional services". APIs should not feel compelled to indicate resources that have
 * been deleted with this status code.
 */
function Gone(res, data, message) {
    const response = {};
    if (data != null)
        response.data = data;
    if (message != null)
        response.message = message;
    Respond(res, 410, response);
}
/**
 * HTTP 411 - Length Required
 *
 * Server rejected the request because the Content-Length header
 * field is not defined and the server requires it.
 */
function LengthRequired(res, data, message) {
    const response = {};
    if (data != null)
        response.data = data;
    if (message != null)
        response.message = message;
    Respond(res, 411, response);
}
/**
 * HTTP 412 - Precondition Failed
 *
 * The client has indicated preconditions in its headers which the server does not meet.
 */
function PreconditionFailed(res, data, message) {
    const response = {};
    if (data != null)
        response.data = data;
    if (message != null)
        response.message = message;
    Respond(res, 412, response);
}
/**
 * HTTP 413 - Payload Too Large
 *
 * Request entity is larger than limits defined by server. The server might close the
 * connection or return an Retry-After header field.
 */
function PayloadTooLarge(res, data, message) {
    const response = {};
    if (data != null)
        response.data = data;
    if (message != null)
        response.message = message;
    Respond(res, 413, response);
}
/**
 * HTTP 414 - URI Too Long
 *
 * The URI requested by the client is longer than the server is willing to interpret.
 */
function URITooLong(res, data, message) {
    const response = {};
    if (data != null)
        response.data = data;
    if (message != null)
        response.message = message;
    Respond(res, 414, response);
}
/**
 * HTTP 415 - Unsupported Media Type
 *
 * The media format of the requested data is not supported by the server,
 * so the server is rejecting the request.
 */
function UnsupportedMediaType(res, data, message) {
    const response = {};
    if (data != null)
        response.data = data;
    if (message != null)
        response.message = message;
    Respond(res, 415, response);
}
/**
 * HTTP 416 - Range Not Satisfiable
 *
 * The range specified by the Range header field in the request cannot
 * be fulfilled. It's possible that the range is outside the size of the target URI's data.
 */
function RangeNotSatisfiable(res, data, message) {
    const response = {};
    if (data != null)
        response.data = data;
    if (message != null)
        response.message = message;
    Respond(res, 416, response);
}
/**
 * HTTP 417 - Expectation Failed
 *
 * This response code means the expectation indicated by the Expect
 * request header field cannot be met by the server.
 */
function ExpectationFailed(res, data, message) {
    const response = {};
    if (data != null)
        response.data = data;
    if (message != null)
        response.message = message;
    Respond(res, 417, response);
}
/**
 * HTTP 418 - I'm a Teapot
 *
 * The server refuses the attempt to brew coffee with a teapot.
 */
function ImATeapot(res, data, message) {
    const response = {};
    if (data != null)
        response.data = data;
    if (message != null)
        response.message = message;
    Respond(res, 418, response);
}
/**
 * HTTP 421 - Misdirect Request
 *
 * The request was directed at a server that is not able to produce a response.
 * This can be sent by a server that is not configured to produce responses for
 * the combination of scheme and authority that are included in the request URI.
 */
function MisdirectRequest(res, data, message) {
    const response = {};
    if (data != null)
        response.data = data;
    if (message != null)
        response.message = message;
    Respond(res, 421, response);
}
/**
 * HTTP 422 - Unprocessable Entity
 *
 * The request was well-formed but was unable to be followed due to semantic errors.
 */
function UnprocessableEntity(res, data, message) {
    const response = {};
    if (data != null)
        response.data = data;
    if (message != null)
        response.message = message;
    Respond(res, 422, response);
}
/**
 * HTTP 423 - Locked
 *
 * The resource that is being accessed is locked.
 */
function Locked(res, data, message) {
    const response = {};
    if (data != null)
        response.data = data;
    if (message != null)
        response.message = message;
    Respond(res, 423, response);
}
/**
 * HTTP 424 - Failed Dependency
 *
 * The request failed due to failure of a previous request.
 */
function FailedDependency(res, data, message) {
    const response = {};
    if (data != null)
        response.data = data;
    if (message != null)
        response.message = message;
    Respond(res, 424, response);
}
/**
 * HTTP 425 - Too Early
 *
 * Indicates that the server is unwilling to risk processing a request that might be replayed.
 */
function TooEarly(res, data, message) {
    const response = {};
    if (data != null)
        response.data = data;
    if (message != null)
        response.message = message;
    Respond(res, 425, response);
}
/**
 * HTTP 426 - Upgrade Required
 *
 * The server refuses to perform the request using the current protocol but might be willing
 * to do so after the client upgrades to a different protocol. The server sends an Upgrade
 * header in a 426 response to indicate the required protocol(s).
 */
function UpgradeRequired(res, data, message) {
    const response = {};
    if (data != null)
        response.data = data;
    if (message != null)
        response.message = message;
    Respond(res, 426, response);
}
/**
 * HTTP 428 - Precondition Required
 *
 * The origin server requires the request to be conditional. This response is intended to
 * prevent the 'lost update' problem, where a client GETs a resource's state, modifies it
 * and PUTs it back to the server, when meanwhile a third party has modified the state on
 * the server, leading to a conflict.
 */
function PreconditionRequired(res, data, message) {
    const response = {};
    if (data != null)
        response.data = data;
    if (message != null)
        response.message = message;
    Respond(res, 428, response);
}
/**
 * HTTP 429 - Too Many Requests
 *
 * The user has sent too many requests in a given amount of time ("rate limiting").
 */
function TooManyRequests(res, data, message) {
    const response = {};
    if (data != null)
        response.data = data;
    if (message != null)
        response.message = message;
    Respond(res, 429, response);
}
/**
 * HTTP 431 - Request Header Fields Too Large
 *
 * The server is unwilling to process the request because its header fields are too large.
 * The request may be resubmitted after reducing the size of the request header fields.
 */
function RequestHeaderFieldsTooLarge(res, data, message) {
    const response = {};
    if (data != null)
        response.data = data;
    if (message != null)
        response.message = message;
    Respond(res, 431, response);
}
/**
 * HTTP 451 - Unavailable For Legal Reasons
 *
 * The user agent requested a resource that cannot legally be provided,
 * such as a web page censored by a government.
 */
function UnavailableForLegalReasons(res, data, message) {
    const response = {};
    if (data != null)
        response.data = data;
    if (message != null)
        response.message = message;
    Respond(res, 451, response);
}
/**
 * HTTP 500 - Internal Server Error
 *
 * The server has encountered a situation it does not know how to handle.
 */
function InternalServerError(res, data, message) {
    const response = {};
    if (data != null)
        response.data = data;
    if (message != null)
        response.message = message;
    Respond(res, 500, response);
}
/**
 * HTTP 501 - Not Implemented
 *
 * The request method is not supported by the server and cannot be handled.
 * The only methods that servers are required to support (and therefore that
 * must not return this code) are GET and HEAD.
 */
function NotImplemented(res, data, message) {
    const response = {};
    if (data != null)
        response.data = data;
    if (message != null)
        response.message = message;
    Respond(res, 501, response);
}
/**
 * HTTP 502 - Bad Gateway
 *
 * This error response means that the server, while working as a gateway to
 * get a response needed to handle the request, got an invalid response.
 */
function BadGateway(res, data, message) {
    const response = {};
    if (data != null)
        response.data = data;
    if (message != null)
        response.message = message;
    Respond(res, 502, response);
}
/**
 * HTTP 503 - Service Unavailable
 *
 * The server is not ready to handle the request. Common causes are a server that
 * is down for maintenance or that is overloaded. Note that together with this
 * response, a user-friendly page explaining the problem should be sent. This
 * response should be used for temporary conditions and the Retry-After HTTP header
 * should, if possible, contain the estimated time before the recovery of the service.
 * The webmaster must also take care about the caching-related headers that are sent
 * along with this response, as these temporary condition responses should usually
 * not be cached.
 */
function ServiceUnavailable(res, data, message) {
    const response = {};
    if (data != null)
        response.data = data;
    if (message != null)
        response.message = message;
    Respond(res, 503, response);
}
/**
 * HTTP 504 - Gateway Timeout
 *
 * This error response is given when the server is acting as a gateway and cannot
 * get a response in time.
 */
function GatewayTimeout(res, data, message) {
    const response = {};
    if (data != null)
        response.data = data;
    if (message != null)
        response.message = message;
    Respond(res, 504, response);
}
/**
 * HTTP 505 - HTTP Version Not Supported
 *
 * The HTTP version used in the request is not supported by the server.
 */
function HTTPVersionNotSupported(res, data, message) {
    const response = {};
    if (data != null)
        response.data = data;
    if (message != null)
        response.message = message;
    Respond(res, 505, response);
}
/**
 * HTTP 506 - Variant Also Negotiates
 *
 * The server has an internal configuration error: the chosen variant resource is
 * configured to engage in transparent content negotiation itself, and is therefore
 * not a proper end point in the negotiation process.
 */
function VariantAlsoNegotiates(res, data, message) {
    const response = {};
    if (data != null)
        response.data = data;
    if (message != null)
        response.message = message;
    Respond(res, 506, response);
}
/**
 * HTTP 507 - Insufficient Storage
 *
 * The method could not be performed on the resource because the server is unable to
 * store the representation needed to successfully complete the request.
 */
function InsufficientStorage(res, data, message) {
    const response = {};
    if (data != null)
        response.data = data;
    if (message != null)
        response.message = message;
    Respond(res, 507, response);
}
/**
 * HTTP 508 - Loop Detected
 *
 * The server detected an infinite loop while processing the request.
 */
function LoopDetected(res, data, message) {
    const response = {};
    if (data != null)
        response.data = data;
    if (message != null)
        response.message = message;
    Respond(res, 508, response);
}
/**
 * HTTP 510 - Not Extended
 *
 * Further extensions to the request are required for the server to fulfill it.
 */
function NotExtended(res, data, message) {
    const response = {};
    if (data != null)
        response.data = data;
    if (message != null)
        response.message = message;
    Respond(res, 510, response);
}
/**
 * HTTP 511 - NetworkAuthenticationRequired
 *
 * Indicates that the client needs to authenticate to gain network access.
 */
function NetworkAuthenticationRequired(res, data, message) {
    const response = {};
    if (data != null)
        response.data = data;
    if (message != null)
        response.message = message;
    Respond(res, 511, response);
}
exports.default = {
    Continue, // 100
    SwitchingProtocols, // 101
    Processing, // 102
    EarlyHints, // 103
    OK, // 200
    Created, // 201
    Accepted, // 202
    NonAuthoritativeInformation, // 203
    NoContent, // 204
    ResetContent, // 205
    PartialContent, // 206
    MultiStatus, // 207
    AlreadyReported, // 208
    IMUsed, // 226
    MultipleChoices, // 300
    MovedPermanently, // 301
    Found, // 302
    SeeOther, // 303
    NotModified, // 304
    UseProxy, // 305
    Unused, // 306
    TemporaryRedirect, // 307
    PermanentRedirect, // 308
    BadRequest, // 400
    Unauthorized, // 401
    PaymentRequired, // 402
    Forbidden, // 403
    NotFound, // 404
    MethodNotAllowed, // 405
    NotAcceptable, // 406
    ProxyAuthenticationRequired, // 407
    RequestTimeout, // 408
    Conflict, // 409
    Gone, // 410
    LengthRequired, // 411
    PreconditionFailed, // 412
    PayloadTooLarge, // 413
    URITooLong, // 414
    UnsupportedMediaType, // 415
    RangeNotSatisfiable, // 416
    ExpectationFailed, // 417
    ImATeapot, // 418
    MisdirectRequest, // 421
    UnprocessableEntity, // 422
    Locked, // 423
    FailedDependency, // 424
    TooEarly, // 425
    UpgradeRequired, // 426
    PreconditionRequired, // 428
    TooManyRequests, // 429
    RequestHeaderFieldsTooLarge, // 431
    UnavailableForLegalReasons, // 451
    InternalServerError, // 500
    NotImplemented, // 501
    BadGateway, // 502
    ServiceUnavailable, // 503
    GatewayTimeout, // 504
    HTTPVersionNotSupported, // 505
    VariantAlsoNegotiates, // 506
    InsufficientStorage, // 507
    LoopDetected, // 508
    NotExtended, // 510
    NetworkAuthenticationRequired // 511
};
