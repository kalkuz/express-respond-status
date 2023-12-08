import { type Response } from 'express';
import { type RespondData } from './types';
/**
 * HTTP 101 - Continue
 *
 * This interim response indicates that the client should continue
 * the request or ignore the response if the request is already finished.
 */
declare function Continue(res: Response, data?: RespondData, message?: RespondData): void;
/**
 * HTTP 102 - Switching Protocols
 *
 * This code is sent in response to an Upgrade request header
 * from the client and indicates the protocol the server is switching to.
 */
declare function SwitchingProtocols(res: Response, data?: RespondData, message?: RespondData): void;
/**
 * HTTP 103 - Processing
 *
 * This code indicates that the server has received and is
 * processing the request, but no response is available yet.
 */
declare function Processing(res: Response, data?: RespondData, message?: RespondData): void;
/**
 * HTTP 104 - Early Hints
 *
 * This status code is primarily intended to be used with the Link header,
 * letting the user agent start preloading resources while the server prepares a response.
 */
declare function EarlyHints(res: Response, data?: RespondData, message?: RespondData): void;
/**
 * HTTP 200 - OK
 *
 * The request succeeded.
 */
declare function OK(res: Response, data?: RespondData, message?: RespondData): void;
/**
 * HTTP 201 - Created
 *
 * The request succeeded, and a new resource was created as a result. This is
 * typically the response sent after POST requests, or some PUT requests.
 */
declare function Created(res: Response, data?: RespondData, message?: RespondData): void;
/**
 * HTTP 202 - Accepted
 *
 * The request has been received but not yet acted upon. It is noncommittal,
 * since there is no way in HTTP to later send an asynchronous response indicating
 * the outcome of the request. It is intended for cases where another process or
 * server handles the request, or for batch processing.
 */
declare function Accepted(res: Response, data?: RespondData, message?: RespondData): void;
/**
 * HTTP 203 - Non-Authoritative Information
 *
 * This response code means the returned metadata is not exactly the same as is
 * available from the origin server, but is collected from a local or a third-party copy.
 * This is mostly used for mirrors or backups of another resource. Except for that
 * specific case, the 200 OK response is preferred to this status.
 */
declare function NonAuthoritativeInformation(res: Response, data?: RespondData, message?: RespondData): void;
/**
 * HTTP 204 - No Content
 *
 * There is no content to send for this request, but the headers may be useful.
 * The user agent may update its cached headers for this resource with the new ones.
 */
declare function NoContent(res: Response, data?: RespondData, message?: RespondData): void;
/**
 * HTTP 205 - Reset Content
 *
 * Tells the user agent to reset the document which sent this request.
 */
declare function ResetContent(res: Response, data?: RespondData, message?: RespondData): void;
/**
 * HTTP 206 - Partial Content
 *
 * This response code is used when the Range header is sent from the
 * client to request only part of a resource.
 */
declare function PartialContent(res: Response, data?: RespondData, message?: RespondData): void;
/**
 * HTTP 207 - Multi-Status
 *
 * Conveys information about multiple resources, for situations
 * where multiple status codes might be appropriate.
 */
declare function MultiStatus(res: Response, data?: RespondData, message?: RespondData): void;
/**
 * HTTP 208 - Already Reported
 *
 * Used inside a <dav:propstat> response element to avoid repeatedly
 * enumerating the internal members of multiple bindings to the same collection.
 */
declare function AlreadyReported(res: Response, data?: RespondData, message?: RespondData): void;
/**
 * HTTP 226 - IM Used
 *
 * The server has fulfilled a GET request for the resource, and the response
 * is a representation of the result of one or more instance-manipulations
 * applied to the current instance.
 */
declare function IMUsed(res: Response, data?: RespondData, message?: RespondData): void;
/**
 * HTTP 300 - Multiple Choices
 *
 * The request has more than one possible response. The user agent or user should
 * choose one of them. (There is no standardized way of choosing one of the responses,
 * but HTML links to the possibilities are recommended so the user can pick.)
 */
declare function MultipleChoices(res: Response, data?: RespondData, message?: RespondData): void;
/**
 * HTTP 301 - Moved Permanently
 *
 * The URL of the requested resource has been changed permanently.
 * The new URL is given in the response.
 */
declare function MovedPermanently(res: Response, data?: RespondData, message?: RespondData): void;
/**
 * HTTP 302 - Found
 *
 * This response code means that the URI of requested resource has been changed temporarily.
 * Further changes in the URI might be made in the future. Therefore, this same URI should
 * be used by the client in future requests.
 */
declare function Found(res: Response, data?: RespondData, message?: RespondData): void;
/**
 * HTTP 303 - See Other
 *
 * The server sent this response to direct the client to get the requested resource at
 * another URI with a GET request.
 */
declare function SeeOther(res: Response, data?: RespondData, message?: RespondData): void;
/**
 * HTTP 304 - Not Modified
 *
 * This is used for caching purposes. It tells the client that the response has not been
 * modified, so the client can continue to use the same cached version of the response.
 */
declare function NotModified(res: Response, data?: RespondData, message?: RespondData): void;
/**
 * @deprecated
 * HTTP 305 - UseProxy
 *
 * Defined in a previous version of the HTTP specification to indicate that a requested
 * response must be accessed by a proxy. It has been deprecated due to security concerns
 * regarding in-band configuration of a proxy.
 */
declare function UseProxy(res: Response, data?: RespondData, message?: RespondData): void;
/**
 * HTTP 306 - Unused
 *
 * This response code is no longer used; it is just reserved. It was used in a previous
 * version of the HTTP/1.1 specification.
 */
declare function Unused(res: Response, data?: RespondData, message?: RespondData): void;
/**
 * HTTP 307 - Temporary Redirect
 *
 * The server sends this response to direct the client to get the requested resource at
 * another URI with same method that was used in the prior request. This has the same
 * semantics as the 302 Found HTTP response code, with the exception that the user agent
 * must not change the HTTP method used: if a POST was used in the first request,
 * a POST must be used in the second request.
 */
declare function TemporaryRedirect(res: Response, data?: RespondData, message?: RespondData): void;
/**
 * HTTP 308 - Permanent Redirect
 *
 * This means that the resource is now permanently located at another URI, specified by
 * the Location: HTTP Response header. This has the same semantics as the 301 Moved Permanently
 * HTTP response code, with the exception that the user agent must not change the HTTP method
 * used: if a POST was used in the first request, a POST must be used in the second request.
 */
declare function PermanentRedirect(res: Response, data?: RespondData, message?: RespondData): void;
/**
 * HTTP 400 - Bad Request
 *
 * The server cannot or will not process the request due to something that is perceived to be
 * a client error (e.g., malformed request syntax, invalid request message framing,
 * or deceptive request routing).
 */
declare function BadRequest(res: Response, data?: RespondData, message?: RespondData): void;
/**
 * HTTP 401 - Unauthorized
 *
 * Although the HTTP standard specifies "unauthorized", semantically this response means
 * "unauthenticated". That is, the client must authenticate itself to get the requested response.
 */
declare function Unauthorized(res: Response, data?: RespondData, message?: RespondData): void;
/**
 * HTTP 402 - Payment Required
 *
 * This response code is reserved for future use. The initial aim for creating this code was using
 * it for digital payment systems, however this status code is used very rarely and no
 * standard convention exists.
 */
declare function PaymentRequired(res: Response, data?: RespondData, message?: RespondData): void;
/**
 * HTTP 403 - Forbidden
 *
 * The client does not have access rights to the content; that is, it is unauthorized, so the server
 * is refusing to give the requested resource. Unlike 401 Unauthorized,
 * the client's identity is known to the server.
 */
declare function Forbidden(res: Response, data?: RespondData, message?: RespondData): void;
/**
 * HTTP 404 - Not Found
 *
 * The server cannot find the requested resource. In the browser, this means the URL is not
 * recognized. In an API, this can also mean that the endpoint is valid but the resource itself does
 * not exist. Servers may also send this response instead of 403 Forbidden to hide the existence of
 * a resource from an unauthorized client. This response code is probably the most well known due to
 * its frequent occurrence on the web.
 */
declare function NotFound(res: Response, data?: RespondData, message?: RespondData): void;
/**
 * HTTP 405 - Method Not Allowed
 *
 * The request method is known by the server but is not supported by the target resource.
 * For example, an API may not allow calling DELETE to remove a resource.
 */
declare function MethodNotAllowed(res: Response, data?: RespondData, message?: RespondData): void;
/**
 * HTTP 406 - Not Acceptable
 *
 * This response is sent when the web server, after performing server-driven content negotiation,
 * doesn't find any content that conforms to the criteria given by the user agent.
 */
declare function NotAcceptable(res: Response, data?: RespondData, message?: RespondData): void;
/**
 * HTTP 407 - Proxy Authentication Required
 *
 * This is similar to 401 Unauthorized but authentication is needed to be done by a proxy.
 */
declare function ProxyAuthenticationRequired(res: Response, data?: RespondData, message?: RespondData): void;
/**
 * HTTP 408 - Request Timeout
 *
 * This response is sent on an idle connection by some servers, even without any previous
 * request by the client. It means that the server would like to shut down this unused connection.
 * This response is used much more since some browsers, like Chrome, Firefox 27+, or IE9, use HTTP
 * pre-connection mechanisms to speed up surfing. Also note that some servers merely shut down
 * the connection without sending this message.
 */
declare function RequestTimeout(res: Response, data?: RespondData, message?: RespondData): void;
/**
 * HTTP 409 - Conflict
 *
 * This response is sent when a request conflicts with the current state of the server.
 */
declare function Conflict(res: Response, data?: RespondData, message?: RespondData): void;
/**
 * HTTP 410 - Gone
 *
 * This response is sent when the requested content has been permanently deleted from server,
 * with no forwarding address. Clients are expected to remove their caches and links to the
 * resource. The HTTP specification intends this status code to be used for "limited-time,
 * promotional services". APIs should not feel compelled to indicate resources that have
 * been deleted with this status code.
 */
declare function Gone(res: Response, data?: RespondData, message?: RespondData): void;
/**
 * HTTP 411 - Length Required
 *
 * Server rejected the request because the Content-Length header
 * field is not defined and the server requires it.
 */
declare function LengthRequired(res: Response, data?: RespondData, message?: RespondData): void;
/**
 * HTTP 412 - Precondition Failed
 *
 * The client has indicated preconditions in its headers which the server does not meet.
 */
declare function PreconditionFailed(res: Response, data?: RespondData, message?: RespondData): void;
/**
 * HTTP 413 - Payload Too Large
 *
 * Request entity is larger than limits defined by server. The server might close the
 * connection or return an Retry-After header field.
 */
declare function PayloadTooLarge(res: Response, data?: RespondData, message?: RespondData): void;
/**
 * HTTP 414 - URI Too Long
 *
 * The URI requested by the client is longer than the server is willing to interpret.
 */
declare function URITooLong(res: Response, data?: RespondData, message?: RespondData): void;
/**
 * HTTP 415 - Unsupported Media Type
 *
 * The media format of the requested data is not supported by the server,
 * so the server is rejecting the request.
 */
declare function UnsupportedMediaType(res: Response, data?: RespondData, message?: RespondData): void;
/**
 * HTTP 416 - Range Not Satisfiable
 *
 * The range specified by the Range header field in the request cannot
 * be fulfilled. It's possible that the range is outside the size of the target URI's data.
 */
declare function RangeNotSatisfiable(res: Response, data?: RespondData, message?: RespondData): void;
/**
 * HTTP 417 - Expectation Failed
 *
 * This response code means the expectation indicated by the Expect
 * request header field cannot be met by the server.
 */
declare function ExpectationFailed(res: Response, data?: RespondData, message?: RespondData): void;
/**
 * HTTP 418 - I'm a Teapot
 *
 * The server refuses the attempt to brew coffee with a teapot.
 */
declare function ImATeapot(res: Response, data?: RespondData, message?: RespondData): void;
/**
 * HTTP 421 - Misdirect Request
 *
 * The request was directed at a server that is not able to produce a response.
 * This can be sent by a server that is not configured to produce responses for
 * the combination of scheme and authority that are included in the request URI.
 */
declare function MisdirectRequest(res: Response, data?: RespondData, message?: RespondData): void;
/**
 * HTTP 422 - Unprocessable Entity
 *
 * The request was well-formed but was unable to be followed due to semantic errors.
 */
declare function UnprocessableEntity(res: Response, data?: RespondData, message?: RespondData): void;
/**
 * HTTP 423 - Locked
 *
 * The resource that is being accessed is locked.
 */
declare function Locked(res: Response, data?: RespondData, message?: RespondData): void;
/**
 * HTTP 424 - Failed Dependency
 *
 * The request failed due to failure of a previous request.
 */
declare function FailedDependency(res: Response, data?: RespondData, message?: RespondData): void;
/**
 * HTTP 425 - Too Early
 *
 * Indicates that the server is unwilling to risk processing a request that might be replayed.
 */
declare function TooEarly(res: Response, data?: RespondData, message?: RespondData): void;
/**
 * HTTP 426 - Upgrade Required
 *
 * The server refuses to perform the request using the current protocol but might be willing
 * to do so after the client upgrades to a different protocol. The server sends an Upgrade
 * header in a 426 response to indicate the required protocol(s).
 */
declare function UpgradeRequired(res: Response, data?: RespondData, message?: RespondData): void;
/**
 * HTTP 428 - Precondition Required
 *
 * The origin server requires the request to be conditional. This response is intended to
 * prevent the 'lost update' problem, where a client GETs a resource's state, modifies it
 * and PUTs it back to the server, when meanwhile a third party has modified the state on
 * the server, leading to a conflict.
 */
declare function PreconditionRequired(res: Response, data?: RespondData, message?: RespondData): void;
/**
 * HTTP 429 - Too Many Requests
 *
 * The user has sent too many requests in a given amount of time ("rate limiting").
 */
declare function TooManyRequests(res: Response, data?: RespondData, message?: RespondData): void;
/**
 * HTTP 431 - Request Header Fields Too Large
 *
 * The server is unwilling to process the request because its header fields are too large.
 * The request may be resubmitted after reducing the size of the request header fields.
 */
declare function RequestHeaderFieldsTooLarge(res: Response, data?: RespondData, message?: RespondData): void;
/**
 * HTTP 451 - Unavailable For Legal Reasons
 *
 * The user agent requested a resource that cannot legally be provided,
 * such as a web page censored by a government.
 */
declare function UnavailableForLegalReasons(res: Response, data?: RespondData, message?: RespondData): void;
/**
 * HTTP 500 - Internal Server Error
 *
 * The server has encountered a situation it does not know how to handle.
 */
declare function InternalServerError(res: Response, data?: RespondData, message?: RespondData): void;
/**
 * HTTP 501 - Not Implemented
 *
 * The request method is not supported by the server and cannot be handled.
 * The only methods that servers are required to support (and therefore that
 * must not return this code) are GET and HEAD.
 */
declare function NotImplemented(res: Response, data?: RespondData, message?: RespondData): void;
/**
 * HTTP 502 - Bad Gateway
 *
 * This error response means that the server, while working as a gateway to
 * get a response needed to handle the request, got an invalid response.
 */
declare function BadGateway(res: Response, data?: RespondData, message?: RespondData): void;
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
declare function ServiceUnavailable(res: Response, data?: RespondData, message?: RespondData): void;
/**
 * HTTP 504 - Gateway Timeout
 *
 * This error response is given when the server is acting as a gateway and cannot
 * get a response in time.
 */
declare function GatewayTimeout(res: Response, data?: RespondData, message?: RespondData): void;
/**
 * HTTP 505 - HTTP Version Not Supported
 *
 * The HTTP version used in the request is not supported by the server.
 */
declare function HTTPVersionNotSupported(res: Response, data?: RespondData, message?: RespondData): void;
/**
 * HTTP 506 - Variant Also Negotiates
 *
 * The server has an internal configuration error: the chosen variant resource is
 * configured to engage in transparent content negotiation itself, and is therefore
 * not a proper end point in the negotiation process.
 */
declare function VariantAlsoNegotiates(res: Response, data?: RespondData, message?: RespondData): void;
/**
 * HTTP 507 - Insufficient Storage
 *
 * The method could not be performed on the resource because the server is unable to
 * store the representation needed to successfully complete the request.
 */
declare function InsufficientStorage(res: Response, data?: RespondData, message?: RespondData): void;
/**
 * HTTP 508 - Loop Detected
 *
 * The server detected an infinite loop while processing the request.
 */
declare function LoopDetected(res: Response, data?: RespondData, message?: RespondData): void;
/**
 * HTTP 510 - Not Extended
 *
 * Further extensions to the request are required for the server to fulfill it.
 */
declare function NotExtended(res: Response, data?: RespondData, message?: RespondData): void;
/**
 * HTTP 511 - NetworkAuthenticationRequired
 *
 * Indicates that the client needs to authenticate to gain network access.
 */
declare function NetworkAuthenticationRequired(res: Response, data?: RespondData, message?: RespondData): void;
declare const _default: {
    Continue: typeof Continue;
    SwitchingProtocols: typeof SwitchingProtocols;
    Processing: typeof Processing;
    EarlyHints: typeof EarlyHints;
    OK: typeof OK;
    Created: typeof Created;
    Accepted: typeof Accepted;
    NonAuthoritativeInformation: typeof NonAuthoritativeInformation;
    NoContent: typeof NoContent;
    ResetContent: typeof ResetContent;
    PartialContent: typeof PartialContent;
    MultiStatus: typeof MultiStatus;
    AlreadyReported: typeof AlreadyReported;
    IMUsed: typeof IMUsed;
    MultipleChoices: typeof MultipleChoices;
    MovedPermanently: typeof MovedPermanently;
    Found: typeof Found;
    SeeOther: typeof SeeOther;
    NotModified: typeof NotModified;
    UseProxy: typeof UseProxy;
    Unused: typeof Unused;
    TemporaryRedirect: typeof TemporaryRedirect;
    PermanentRedirect: typeof PermanentRedirect;
    BadRequest: typeof BadRequest;
    Unauthorized: typeof Unauthorized;
    PaymentRequired: typeof PaymentRequired;
    Forbidden: typeof Forbidden;
    NotFound: typeof NotFound;
    MethodNotAllowed: typeof MethodNotAllowed;
    NotAcceptable: typeof NotAcceptable;
    ProxyAuthenticationRequired: typeof ProxyAuthenticationRequired;
    RequestTimeout: typeof RequestTimeout;
    Conflict: typeof Conflict;
    Gone: typeof Gone;
    LengthRequired: typeof LengthRequired;
    PreconditionFailed: typeof PreconditionFailed;
    PayloadTooLarge: typeof PayloadTooLarge;
    URITooLong: typeof URITooLong;
    UnsupportedMediaType: typeof UnsupportedMediaType;
    RangeNotSatisfiable: typeof RangeNotSatisfiable;
    ExpectationFailed: typeof ExpectationFailed;
    ImATeapot: typeof ImATeapot;
    MisdirectRequest: typeof MisdirectRequest;
    UnprocessableEntity: typeof UnprocessableEntity;
    Locked: typeof Locked;
    FailedDependency: typeof FailedDependency;
    TooEarly: typeof TooEarly;
    UpgradeRequired: typeof UpgradeRequired;
    PreconditionRequired: typeof PreconditionRequired;
    TooManyRequests: typeof TooManyRequests;
    RequestHeaderFieldsTooLarge: typeof RequestHeaderFieldsTooLarge;
    UnavailableForLegalReasons: typeof UnavailableForLegalReasons;
    InternalServerError: typeof InternalServerError;
    NotImplemented: typeof NotImplemented;
    BadGateway: typeof BadGateway;
    ServiceUnavailable: typeof ServiceUnavailable;
    GatewayTimeout: typeof GatewayTimeout;
    HTTPVersionNotSupported: typeof HTTPVersionNotSupported;
    VariantAlsoNegotiates: typeof VariantAlsoNegotiates;
    InsufficientStorage: typeof InsufficientStorage;
    LoopDetected: typeof LoopDetected;
    NotExtended: typeof NotExtended;
    NetworkAuthenticationRequired: typeof NetworkAuthenticationRequired;
};
export default _default;
