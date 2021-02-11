import * as $protobuf from "protobufjs";
/** Namespace GrpcBus. */
export namespace GrpcBus {

    /** Properties of a GBClientMessage. */
    interface IGBClientMessage {

        /** GBClientMessage serviceCreate */
        serviceCreate?: (GrpcBus.IGBCreateService|null);

        /** GBClientMessage serviceRelease */
        serviceRelease?: (GrpcBus.IGBReleaseService|null);

        /** GBClientMessage callCreate */
        callCreate?: (GrpcBus.IGBCreateCall|null);

        /** GBClientMessage callEnd */
        callEnd?: (GrpcBus.IGBCallEnd|null);

        /** GBClientMessage callSend */
        callSend?: (GrpcBus.IGBSendCall|null);
    }

    /** Represents a GBClientMessage. */
    class GBClientMessage implements IGBClientMessage {

        /**
         * Constructs a new GBClientMessage.
         * @param [properties] Properties to set
         */
        constructor(properties?: GrpcBus.IGBClientMessage);

        /** GBClientMessage serviceCreate. */
        public serviceCreate?: (GrpcBus.IGBCreateService|null);

        /** GBClientMessage serviceRelease. */
        public serviceRelease?: (GrpcBus.IGBReleaseService|null);

        /** GBClientMessage callCreate. */
        public callCreate?: (GrpcBus.IGBCreateCall|null);

        /** GBClientMessage callEnd. */
        public callEnd?: (GrpcBus.IGBCallEnd|null);

        /** GBClientMessage callSend. */
        public callSend?: (GrpcBus.IGBSendCall|null);

        /**
         * Creates a new GBClientMessage instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GBClientMessage instance
         */
        public static create(properties?: GrpcBus.IGBClientMessage): GrpcBus.GBClientMessage;

        /**
         * Encodes the specified GBClientMessage message. Does not implicitly {@link GrpcBus.GBClientMessage.verify|verify} messages.
         * @param message GBClientMessage message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: GrpcBus.IGBClientMessage, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GBClientMessage message, length delimited. Does not implicitly {@link GrpcBus.GBClientMessage.verify|verify} messages.
         * @param message GBClientMessage message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: GrpcBus.IGBClientMessage, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GBClientMessage message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GBClientMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GrpcBus.GBClientMessage;

        /**
         * Decodes a GBClientMessage message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GBClientMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GrpcBus.GBClientMessage;

        /**
         * Verifies a GBClientMessage message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GBClientMessage message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GBClientMessage
         */
        public static fromObject(object: { [k: string]: any }): GrpcBus.GBClientMessage;

        /**
         * Creates a plain object from a GBClientMessage message. Also converts values to other types if specified.
         * @param message GBClientMessage
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: GrpcBus.GBClientMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GBClientMessage to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GBServerMessage. */
    interface IGBServerMessage {

        /** GBServerMessage serviceCreate */
        serviceCreate?: (GrpcBus.IGBCreateServiceResult|null);

        /** GBServerMessage serviceRelease */
        serviceRelease?: (GrpcBus.IGBReleaseServiceResult|null);

        /** GBServerMessage callCreate */
        callCreate?: (GrpcBus.IGBCreateCallResult|null);

        /** GBServerMessage callEvent */
        callEvent?: (GrpcBus.IGBCallEvent|null);

        /** GBServerMessage callEnded */
        callEnded?: (GrpcBus.IGBCallEnded|null);
    }

    /** Represents a GBServerMessage. */
    class GBServerMessage implements IGBServerMessage {

        /**
         * Constructs a new GBServerMessage.
         * @param [properties] Properties to set
         */
        constructor(properties?: GrpcBus.IGBServerMessage);

        /** GBServerMessage serviceCreate. */
        public serviceCreate?: (GrpcBus.IGBCreateServiceResult|null);

        /** GBServerMessage serviceRelease. */
        public serviceRelease?: (GrpcBus.IGBReleaseServiceResult|null);

        /** GBServerMessage callCreate. */
        public callCreate?: (GrpcBus.IGBCreateCallResult|null);

        /** GBServerMessage callEvent. */
        public callEvent?: (GrpcBus.IGBCallEvent|null);

        /** GBServerMessage callEnded. */
        public callEnded?: (GrpcBus.IGBCallEnded|null);

        /**
         * Creates a new GBServerMessage instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GBServerMessage instance
         */
        public static create(properties?: GrpcBus.IGBServerMessage): GrpcBus.GBServerMessage;

        /**
         * Encodes the specified GBServerMessage message. Does not implicitly {@link GrpcBus.GBServerMessage.verify|verify} messages.
         * @param message GBServerMessage message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: GrpcBus.IGBServerMessage, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GBServerMessage message, length delimited. Does not implicitly {@link GrpcBus.GBServerMessage.verify|verify} messages.
         * @param message GBServerMessage message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: GrpcBus.IGBServerMessage, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GBServerMessage message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GBServerMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GrpcBus.GBServerMessage;

        /**
         * Decodes a GBServerMessage message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GBServerMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GrpcBus.GBServerMessage;

        /**
         * Verifies a GBServerMessage message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GBServerMessage message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GBServerMessage
         */
        public static fromObject(object: { [k: string]: any }): GrpcBus.GBServerMessage;

        /**
         * Creates a plain object from a GBServerMessage message. Also converts values to other types if specified.
         * @param message GBServerMessage
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: GrpcBus.GBServerMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GBServerMessage to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GBKeyValue. */
    interface IGBKeyValue {

        /** GBKeyValue key */
        key?: (string|null);

        /** GBKeyValue value */
        value?: (string|null);
    }

    /** Represents a GBKeyValue. */
    class GBKeyValue implements IGBKeyValue {

        /**
         * Constructs a new GBKeyValue.
         * @param [properties] Properties to set
         */
        constructor(properties?: GrpcBus.IGBKeyValue);

        /** GBKeyValue key. */
        public key: string;

        /** GBKeyValue value. */
        public value: string;

        /**
         * Creates a new GBKeyValue instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GBKeyValue instance
         */
        public static create(properties?: GrpcBus.IGBKeyValue): GrpcBus.GBKeyValue;

        /**
         * Encodes the specified GBKeyValue message. Does not implicitly {@link GrpcBus.GBKeyValue.verify|verify} messages.
         * @param message GBKeyValue message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: GrpcBus.IGBKeyValue, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GBKeyValue message, length delimited. Does not implicitly {@link GrpcBus.GBKeyValue.verify|verify} messages.
         * @param message GBKeyValue message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: GrpcBus.IGBKeyValue, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GBKeyValue message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GBKeyValue
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GrpcBus.GBKeyValue;

        /**
         * Decodes a GBKeyValue message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GBKeyValue
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GrpcBus.GBKeyValue;

        /**
         * Verifies a GBKeyValue message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GBKeyValue message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GBKeyValue
         */
        public static fromObject(object: { [k: string]: any }): GrpcBus.GBKeyValue;

        /**
         * Creates a plain object from a GBKeyValue message. Also converts values to other types if specified.
         * @param message GBKeyValue
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: GrpcBus.GBKeyValue, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GBKeyValue to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GBMetadata. */
    interface IGBMetadata {

        /** GBMetadata fields */
        fields?: (GrpcBus.IGBKeyValue[]|null);
    }

    /** Represents a GBMetadata. */
    class GBMetadata implements IGBMetadata {

        /**
         * Constructs a new GBMetadata.
         * @param [properties] Properties to set
         */
        constructor(properties?: GrpcBus.IGBMetadata);

        /** GBMetadata fields. */
        public fields: GrpcBus.IGBKeyValue[];

        /**
         * Creates a new GBMetadata instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GBMetadata instance
         */
        public static create(properties?: GrpcBus.IGBMetadata): GrpcBus.GBMetadata;

        /**
         * Encodes the specified GBMetadata message. Does not implicitly {@link GrpcBus.GBMetadata.verify|verify} messages.
         * @param message GBMetadata message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: GrpcBus.IGBMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GBMetadata message, length delimited. Does not implicitly {@link GrpcBus.GBMetadata.verify|verify} messages.
         * @param message GBMetadata message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: GrpcBus.IGBMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GBMetadata message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GBMetadata
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GrpcBus.GBMetadata;

        /**
         * Decodes a GBMetadata message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GBMetadata
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GrpcBus.GBMetadata;

        /**
         * Verifies a GBMetadata message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GBMetadata message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GBMetadata
         */
        public static fromObject(object: { [k: string]: any }): GrpcBus.GBMetadata;

        /**
         * Creates a plain object from a GBMetadata message. Also converts values to other types if specified.
         * @param message GBMetadata
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: GrpcBus.GBMetadata, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GBMetadata to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GBServiceInfo. */
    interface IGBServiceInfo {

        /** GBServiceInfo endpoint */
        endpoint?: (string|null);

        /** GBServiceInfo serviceId */
        serviceId?: (string|null);
    }

    /** Represents a GBServiceInfo. */
    class GBServiceInfo implements IGBServiceInfo {

        /**
         * Constructs a new GBServiceInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: GrpcBus.IGBServiceInfo);

        /** GBServiceInfo endpoint. */
        public endpoint: string;

        /** GBServiceInfo serviceId. */
        public serviceId: string;

        /**
         * Creates a new GBServiceInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GBServiceInfo instance
         */
        public static create(properties?: GrpcBus.IGBServiceInfo): GrpcBus.GBServiceInfo;

        /**
         * Encodes the specified GBServiceInfo message. Does not implicitly {@link GrpcBus.GBServiceInfo.verify|verify} messages.
         * @param message GBServiceInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: GrpcBus.IGBServiceInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GBServiceInfo message, length delimited. Does not implicitly {@link GrpcBus.GBServiceInfo.verify|verify} messages.
         * @param message GBServiceInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: GrpcBus.IGBServiceInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GBServiceInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GBServiceInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GrpcBus.GBServiceInfo;

        /**
         * Decodes a GBServiceInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GBServiceInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GrpcBus.GBServiceInfo;

        /**
         * Verifies a GBServiceInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GBServiceInfo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GBServiceInfo
         */
        public static fromObject(object: { [k: string]: any }): GrpcBus.GBServiceInfo;

        /**
         * Creates a plain object from a GBServiceInfo message. Also converts values to other types if specified.
         * @param message GBServiceInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: GrpcBus.GBServiceInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GBServiceInfo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GBCreateService. */
    interface IGBCreateService {

        /** GBCreateService serviceId */
        serviceId?: (number|null);

        /** GBCreateService serviceInfo */
        serviceInfo?: (GrpcBus.IGBServiceInfo|null);
    }

    /** Represents a GBCreateService. */
    class GBCreateService implements IGBCreateService {

        /**
         * Constructs a new GBCreateService.
         * @param [properties] Properties to set
         */
        constructor(properties?: GrpcBus.IGBCreateService);

        /** GBCreateService serviceId. */
        public serviceId: number;

        /** GBCreateService serviceInfo. */
        public serviceInfo?: (GrpcBus.IGBServiceInfo|null);

        /**
         * Creates a new GBCreateService instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GBCreateService instance
         */
        public static create(properties?: GrpcBus.IGBCreateService): GrpcBus.GBCreateService;

        /**
         * Encodes the specified GBCreateService message. Does not implicitly {@link GrpcBus.GBCreateService.verify|verify} messages.
         * @param message GBCreateService message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: GrpcBus.IGBCreateService, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GBCreateService message, length delimited. Does not implicitly {@link GrpcBus.GBCreateService.verify|verify} messages.
         * @param message GBCreateService message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: GrpcBus.IGBCreateService, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GBCreateService message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GBCreateService
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GrpcBus.GBCreateService;

        /**
         * Decodes a GBCreateService message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GBCreateService
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GrpcBus.GBCreateService;

        /**
         * Verifies a GBCreateService message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GBCreateService message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GBCreateService
         */
        public static fromObject(object: { [k: string]: any }): GrpcBus.GBCreateService;

        /**
         * Creates a plain object from a GBCreateService message. Also converts values to other types if specified.
         * @param message GBCreateService
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: GrpcBus.GBCreateService, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GBCreateService to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GBReleaseService. */
    interface IGBReleaseService {

        /** GBReleaseService serviceId */
        serviceId?: (number|null);
    }

    /** Represents a GBReleaseService. */
    class GBReleaseService implements IGBReleaseService {

        /**
         * Constructs a new GBReleaseService.
         * @param [properties] Properties to set
         */
        constructor(properties?: GrpcBus.IGBReleaseService);

        /** GBReleaseService serviceId. */
        public serviceId: number;

        /**
         * Creates a new GBReleaseService instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GBReleaseService instance
         */
        public static create(properties?: GrpcBus.IGBReleaseService): GrpcBus.GBReleaseService;

        /**
         * Encodes the specified GBReleaseService message. Does not implicitly {@link GrpcBus.GBReleaseService.verify|verify} messages.
         * @param message GBReleaseService message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: GrpcBus.IGBReleaseService, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GBReleaseService message, length delimited. Does not implicitly {@link GrpcBus.GBReleaseService.verify|verify} messages.
         * @param message GBReleaseService message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: GrpcBus.IGBReleaseService, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GBReleaseService message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GBReleaseService
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GrpcBus.GBReleaseService;

        /**
         * Decodes a GBReleaseService message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GBReleaseService
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GrpcBus.GBReleaseService;

        /**
         * Verifies a GBReleaseService message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GBReleaseService message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GBReleaseService
         */
        public static fromObject(object: { [k: string]: any }): GrpcBus.GBReleaseService;

        /**
         * Creates a plain object from a GBReleaseService message. Also converts values to other types if specified.
         * @param message GBReleaseService
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: GrpcBus.GBReleaseService, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GBReleaseService to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GBCallInfo. */
    interface IGBCallInfo {

        /** GBCallInfo methodId */
        methodId?: (string|null);

        /** GBCallInfo binArgument */
        binArgument?: (Uint8Array|null);

        /** GBCallInfo meta */
        meta?: (GrpcBus.IGBMetadata|null);
    }

    /** Represents a GBCallInfo. */
    class GBCallInfo implements IGBCallInfo {

        /**
         * Constructs a new GBCallInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: GrpcBus.IGBCallInfo);

        /** GBCallInfo methodId. */
        public methodId: string;

        /** GBCallInfo binArgument. */
        public binArgument: Uint8Array;

        /** GBCallInfo meta. */
        public meta?: (GrpcBus.IGBMetadata|null);

        /**
         * Creates a new GBCallInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GBCallInfo instance
         */
        public static create(properties?: GrpcBus.IGBCallInfo): GrpcBus.GBCallInfo;

        /**
         * Encodes the specified GBCallInfo message. Does not implicitly {@link GrpcBus.GBCallInfo.verify|verify} messages.
         * @param message GBCallInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: GrpcBus.IGBCallInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GBCallInfo message, length delimited. Does not implicitly {@link GrpcBus.GBCallInfo.verify|verify} messages.
         * @param message GBCallInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: GrpcBus.IGBCallInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GBCallInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GBCallInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GrpcBus.GBCallInfo;

        /**
         * Decodes a GBCallInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GBCallInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GrpcBus.GBCallInfo;

        /**
         * Verifies a GBCallInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GBCallInfo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GBCallInfo
         */
        public static fromObject(object: { [k: string]: any }): GrpcBus.GBCallInfo;

        /**
         * Creates a plain object from a GBCallInfo message. Also converts values to other types if specified.
         * @param message GBCallInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: GrpcBus.GBCallInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GBCallInfo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GBCreateCall. */
    interface IGBCreateCall {

        /** GBCreateCall serviceId */
        serviceId?: (number|null);

        /** GBCreateCall callId */
        callId?: (number|null);

        /** GBCreateCall info */
        info?: (GrpcBus.IGBCallInfo|null);
    }

    /** Represents a GBCreateCall. */
    class GBCreateCall implements IGBCreateCall {

        /**
         * Constructs a new GBCreateCall.
         * @param [properties] Properties to set
         */
        constructor(properties?: GrpcBus.IGBCreateCall);

        /** GBCreateCall serviceId. */
        public serviceId: number;

        /** GBCreateCall callId. */
        public callId: number;

        /** GBCreateCall info. */
        public info?: (GrpcBus.IGBCallInfo|null);

        /**
         * Creates a new GBCreateCall instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GBCreateCall instance
         */
        public static create(properties?: GrpcBus.IGBCreateCall): GrpcBus.GBCreateCall;

        /**
         * Encodes the specified GBCreateCall message. Does not implicitly {@link GrpcBus.GBCreateCall.verify|verify} messages.
         * @param message GBCreateCall message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: GrpcBus.IGBCreateCall, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GBCreateCall message, length delimited. Does not implicitly {@link GrpcBus.GBCreateCall.verify|verify} messages.
         * @param message GBCreateCall message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: GrpcBus.IGBCreateCall, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GBCreateCall message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GBCreateCall
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GrpcBus.GBCreateCall;

        /**
         * Decodes a GBCreateCall message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GBCreateCall
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GrpcBus.GBCreateCall;

        /**
         * Verifies a GBCreateCall message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GBCreateCall message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GBCreateCall
         */
        public static fromObject(object: { [k: string]: any }): GrpcBus.GBCreateCall;

        /**
         * Creates a plain object from a GBCreateCall message. Also converts values to other types if specified.
         * @param message GBCreateCall
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: GrpcBus.GBCreateCall, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GBCreateCall to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GBCallEnded. */
    interface IGBCallEnded {

        /** GBCallEnded callId */
        callId?: (number|null);

        /** GBCallEnded serviceId */
        serviceId?: (number|null);
    }

    /** Represents a GBCallEnded. */
    class GBCallEnded implements IGBCallEnded {

        /**
         * Constructs a new GBCallEnded.
         * @param [properties] Properties to set
         */
        constructor(properties?: GrpcBus.IGBCallEnded);

        /** GBCallEnded callId. */
        public callId: number;

        /** GBCallEnded serviceId. */
        public serviceId: number;

        /**
         * Creates a new GBCallEnded instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GBCallEnded instance
         */
        public static create(properties?: GrpcBus.IGBCallEnded): GrpcBus.GBCallEnded;

        /**
         * Encodes the specified GBCallEnded message. Does not implicitly {@link GrpcBus.GBCallEnded.verify|verify} messages.
         * @param message GBCallEnded message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: GrpcBus.IGBCallEnded, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GBCallEnded message, length delimited. Does not implicitly {@link GrpcBus.GBCallEnded.verify|verify} messages.
         * @param message GBCallEnded message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: GrpcBus.IGBCallEnded, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GBCallEnded message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GBCallEnded
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GrpcBus.GBCallEnded;

        /**
         * Decodes a GBCallEnded message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GBCallEnded
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GrpcBus.GBCallEnded;

        /**
         * Verifies a GBCallEnded message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GBCallEnded message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GBCallEnded
         */
        public static fromObject(object: { [k: string]: any }): GrpcBus.GBCallEnded;

        /**
         * Creates a plain object from a GBCallEnded message. Also converts values to other types if specified.
         * @param message GBCallEnded
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: GrpcBus.GBCallEnded, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GBCallEnded to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GBEndCall. */
    interface IGBEndCall {

        /** GBEndCall callId */
        callId?: (number|null);

        /** GBEndCall serviceId */
        serviceId?: (number|null);
    }

    /** Represents a GBEndCall. */
    class GBEndCall implements IGBEndCall {

        /**
         * Constructs a new GBEndCall.
         * @param [properties] Properties to set
         */
        constructor(properties?: GrpcBus.IGBEndCall);

        /** GBEndCall callId. */
        public callId: number;

        /** GBEndCall serviceId. */
        public serviceId: number;

        /**
         * Creates a new GBEndCall instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GBEndCall instance
         */
        public static create(properties?: GrpcBus.IGBEndCall): GrpcBus.GBEndCall;

        /**
         * Encodes the specified GBEndCall message. Does not implicitly {@link GrpcBus.GBEndCall.verify|verify} messages.
         * @param message GBEndCall message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: GrpcBus.IGBEndCall, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GBEndCall message, length delimited. Does not implicitly {@link GrpcBus.GBEndCall.verify|verify} messages.
         * @param message GBEndCall message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: GrpcBus.IGBEndCall, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GBEndCall message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GBEndCall
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GrpcBus.GBEndCall;

        /**
         * Decodes a GBEndCall message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GBEndCall
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GrpcBus.GBEndCall;

        /**
         * Verifies a GBEndCall message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GBEndCall message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GBEndCall
         */
        public static fromObject(object: { [k: string]: any }): GrpcBus.GBEndCall;

        /**
         * Creates a plain object from a GBEndCall message. Also converts values to other types if specified.
         * @param message GBEndCall
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: GrpcBus.GBEndCall, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GBEndCall to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GBSendCall. */
    interface IGBSendCall {

        /** GBSendCall callId */
        callId?: (number|null);

        /** GBSendCall serviceId */
        serviceId?: (number|null);

        /** GBSendCall binData */
        binData?: (Uint8Array|null);

        /** GBSendCall isEnd */
        isEnd?: (boolean|null);
    }

    /** Represents a GBSendCall. */
    class GBSendCall implements IGBSendCall {

        /**
         * Constructs a new GBSendCall.
         * @param [properties] Properties to set
         */
        constructor(properties?: GrpcBus.IGBSendCall);

        /** GBSendCall callId. */
        public callId: number;

        /** GBSendCall serviceId. */
        public serviceId: number;

        /** GBSendCall binData. */
        public binData: Uint8Array;

        /** GBSendCall isEnd. */
        public isEnd: boolean;

        /**
         * Creates a new GBSendCall instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GBSendCall instance
         */
        public static create(properties?: GrpcBus.IGBSendCall): GrpcBus.GBSendCall;

        /**
         * Encodes the specified GBSendCall message. Does not implicitly {@link GrpcBus.GBSendCall.verify|verify} messages.
         * @param message GBSendCall message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: GrpcBus.IGBSendCall, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GBSendCall message, length delimited. Does not implicitly {@link GrpcBus.GBSendCall.verify|verify} messages.
         * @param message GBSendCall message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: GrpcBus.IGBSendCall, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GBSendCall message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GBSendCall
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GrpcBus.GBSendCall;

        /**
         * Decodes a GBSendCall message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GBSendCall
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GrpcBus.GBSendCall;

        /**
         * Verifies a GBSendCall message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GBSendCall message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GBSendCall
         */
        public static fromObject(object: { [k: string]: any }): GrpcBus.GBSendCall;

        /**
         * Creates a plain object from a GBSendCall message. Also converts values to other types if specified.
         * @param message GBSendCall
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: GrpcBus.GBSendCall, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GBSendCall to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GBCreateServiceResult. */
    interface IGBCreateServiceResult {

        /** GBCreateServiceResult serviceId */
        serviceId?: (number|null);

        /** GBCreateServiceResult result */
        result?: (GrpcBus.GBCreateServiceResult.ECreateServiceResult|null);

        /** GBCreateServiceResult errorDetails */
        errorDetails?: (string|null);
    }

    /** Represents a GBCreateServiceResult. */
    class GBCreateServiceResult implements IGBCreateServiceResult {

        /**
         * Constructs a new GBCreateServiceResult.
         * @param [properties] Properties to set
         */
        constructor(properties?: GrpcBus.IGBCreateServiceResult);

        /** GBCreateServiceResult serviceId. */
        public serviceId: number;

        /** GBCreateServiceResult result. */
        public result: GrpcBus.GBCreateServiceResult.ECreateServiceResult;

        /** GBCreateServiceResult errorDetails. */
        public errorDetails: string;

        /**
         * Creates a new GBCreateServiceResult instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GBCreateServiceResult instance
         */
        public static create(properties?: GrpcBus.IGBCreateServiceResult): GrpcBus.GBCreateServiceResult;

        /**
         * Encodes the specified GBCreateServiceResult message. Does not implicitly {@link GrpcBus.GBCreateServiceResult.verify|verify} messages.
         * @param message GBCreateServiceResult message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: GrpcBus.IGBCreateServiceResult, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GBCreateServiceResult message, length delimited. Does not implicitly {@link GrpcBus.GBCreateServiceResult.verify|verify} messages.
         * @param message GBCreateServiceResult message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: GrpcBus.IGBCreateServiceResult, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GBCreateServiceResult message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GBCreateServiceResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GrpcBus.GBCreateServiceResult;

        /**
         * Decodes a GBCreateServiceResult message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GBCreateServiceResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GrpcBus.GBCreateServiceResult;

        /**
         * Verifies a GBCreateServiceResult message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GBCreateServiceResult message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GBCreateServiceResult
         */
        public static fromObject(object: { [k: string]: any }): GrpcBus.GBCreateServiceResult;

        /**
         * Creates a plain object from a GBCreateServiceResult message. Also converts values to other types if specified.
         * @param message GBCreateServiceResult
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: GrpcBus.GBCreateServiceResult, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GBCreateServiceResult to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    namespace GBCreateServiceResult {

        /** ECreateServiceResult enum. */
        enum ECreateServiceResult {
            SUCCESS = 0,
            INVALID_ID = 1,
            GRPC_ERROR = 2
        }
    }

    /** Properties of a GBReleaseServiceResult. */
    interface IGBReleaseServiceResult {

        /** GBReleaseServiceResult serviceId */
        serviceId?: (number|null);
    }

    /** Represents a GBReleaseServiceResult. */
    class GBReleaseServiceResult implements IGBReleaseServiceResult {

        /**
         * Constructs a new GBReleaseServiceResult.
         * @param [properties] Properties to set
         */
        constructor(properties?: GrpcBus.IGBReleaseServiceResult);

        /** GBReleaseServiceResult serviceId. */
        public serviceId: number;

        /**
         * Creates a new GBReleaseServiceResult instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GBReleaseServiceResult instance
         */
        public static create(properties?: GrpcBus.IGBReleaseServiceResult): GrpcBus.GBReleaseServiceResult;

        /**
         * Encodes the specified GBReleaseServiceResult message. Does not implicitly {@link GrpcBus.GBReleaseServiceResult.verify|verify} messages.
         * @param message GBReleaseServiceResult message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: GrpcBus.IGBReleaseServiceResult, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GBReleaseServiceResult message, length delimited. Does not implicitly {@link GrpcBus.GBReleaseServiceResult.verify|verify} messages.
         * @param message GBReleaseServiceResult message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: GrpcBus.IGBReleaseServiceResult, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GBReleaseServiceResult message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GBReleaseServiceResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GrpcBus.GBReleaseServiceResult;

        /**
         * Decodes a GBReleaseServiceResult message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GBReleaseServiceResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GrpcBus.GBReleaseServiceResult;

        /**
         * Verifies a GBReleaseServiceResult message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GBReleaseServiceResult message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GBReleaseServiceResult
         */
        public static fromObject(object: { [k: string]: any }): GrpcBus.GBReleaseServiceResult;

        /**
         * Creates a plain object from a GBReleaseServiceResult message. Also converts values to other types if specified.
         * @param message GBReleaseServiceResult
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: GrpcBus.GBReleaseServiceResult, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GBReleaseServiceResult to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GBCreateCallResult. */
    interface IGBCreateCallResult {

        /** GBCreateCallResult callId */
        callId?: (number|null);

        /** GBCreateCallResult serviceId */
        serviceId?: (number|null);

        /** GBCreateCallResult result */
        result?: (GrpcBus.GBCreateCallResult.ECreateCallResult|null);

        /** GBCreateCallResult errorDetails */
        errorDetails?: (string|null);
    }

    /** Represents a GBCreateCallResult. */
    class GBCreateCallResult implements IGBCreateCallResult {

        /**
         * Constructs a new GBCreateCallResult.
         * @param [properties] Properties to set
         */
        constructor(properties?: GrpcBus.IGBCreateCallResult);

        /** GBCreateCallResult callId. */
        public callId: number;

        /** GBCreateCallResult serviceId. */
        public serviceId: number;

        /** GBCreateCallResult result. */
        public result: GrpcBus.GBCreateCallResult.ECreateCallResult;

        /** GBCreateCallResult errorDetails. */
        public errorDetails: string;

        /**
         * Creates a new GBCreateCallResult instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GBCreateCallResult instance
         */
        public static create(properties?: GrpcBus.IGBCreateCallResult): GrpcBus.GBCreateCallResult;

        /**
         * Encodes the specified GBCreateCallResult message. Does not implicitly {@link GrpcBus.GBCreateCallResult.verify|verify} messages.
         * @param message GBCreateCallResult message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: GrpcBus.IGBCreateCallResult, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GBCreateCallResult message, length delimited. Does not implicitly {@link GrpcBus.GBCreateCallResult.verify|verify} messages.
         * @param message GBCreateCallResult message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: GrpcBus.IGBCreateCallResult, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GBCreateCallResult message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GBCreateCallResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GrpcBus.GBCreateCallResult;

        /**
         * Decodes a GBCreateCallResult message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GBCreateCallResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GrpcBus.GBCreateCallResult;

        /**
         * Verifies a GBCreateCallResult message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GBCreateCallResult message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GBCreateCallResult
         */
        public static fromObject(object: { [k: string]: any }): GrpcBus.GBCreateCallResult;

        /**
         * Creates a plain object from a GBCreateCallResult message. Also converts values to other types if specified.
         * @param message GBCreateCallResult
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: GrpcBus.GBCreateCallResult, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GBCreateCallResult to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    namespace GBCreateCallResult {

        /** ECreateCallResult enum. */
        enum ECreateCallResult {
            SUCCESS = 0,
            INVALID_ID = 1,
            GRPC_ERROR = 2
        }
    }

    /** Properties of a GBCallEvent. */
    interface IGBCallEvent {

        /** GBCallEvent callId */
        callId?: (number|null);

        /** GBCallEvent serviceId */
        serviceId?: (number|null);

        /** GBCallEvent event */
        event?: (string|null);

        /** GBCallEvent jsonData */
        jsonData?: (string|null);

        /** GBCallEvent binData */
        binData?: (Uint8Array|null);
    }

    /** Represents a GBCallEvent. */
    class GBCallEvent implements IGBCallEvent {

        /**
         * Constructs a new GBCallEvent.
         * @param [properties] Properties to set
         */
        constructor(properties?: GrpcBus.IGBCallEvent);

        /** GBCallEvent callId. */
        public callId: number;

        /** GBCallEvent serviceId. */
        public serviceId: number;

        /** GBCallEvent event. */
        public event: string;

        /** GBCallEvent jsonData. */
        public jsonData: string;

        /** GBCallEvent binData. */
        public binData: Uint8Array;

        /**
         * Creates a new GBCallEvent instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GBCallEvent instance
         */
        public static create(properties?: GrpcBus.IGBCallEvent): GrpcBus.GBCallEvent;

        /**
         * Encodes the specified GBCallEvent message. Does not implicitly {@link GrpcBus.GBCallEvent.verify|verify} messages.
         * @param message GBCallEvent message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: GrpcBus.IGBCallEvent, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GBCallEvent message, length delimited. Does not implicitly {@link GrpcBus.GBCallEvent.verify|verify} messages.
         * @param message GBCallEvent message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: GrpcBus.IGBCallEvent, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GBCallEvent message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GBCallEvent
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GrpcBus.GBCallEvent;

        /**
         * Decodes a GBCallEvent message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GBCallEvent
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GrpcBus.GBCallEvent;

        /**
         * Verifies a GBCallEvent message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GBCallEvent message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GBCallEvent
         */
        public static fromObject(object: { [k: string]: any }): GrpcBus.GBCallEvent;

        /**
         * Creates a plain object from a GBCallEvent message. Also converts values to other types if specified.
         * @param message GBCallEvent
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: GrpcBus.GBCallEvent, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GBCallEvent to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GBCallEnd. */
    interface IGBCallEnd {

        /** GBCallEnd callId */
        callId?: (number|null);

        /** GBCallEnd serviceId */
        serviceId?: (number|null);
    }

    /** Represents a GBCallEnd. */
    class GBCallEnd implements IGBCallEnd {

        /**
         * Constructs a new GBCallEnd.
         * @param [properties] Properties to set
         */
        constructor(properties?: GrpcBus.IGBCallEnd);

        /** GBCallEnd callId. */
        public callId: number;

        /** GBCallEnd serviceId. */
        public serviceId: number;

        /**
         * Creates a new GBCallEnd instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GBCallEnd instance
         */
        public static create(properties?: GrpcBus.IGBCallEnd): GrpcBus.GBCallEnd;

        /**
         * Encodes the specified GBCallEnd message. Does not implicitly {@link GrpcBus.GBCallEnd.verify|verify} messages.
         * @param message GBCallEnd message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: GrpcBus.IGBCallEnd, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GBCallEnd message, length delimited. Does not implicitly {@link GrpcBus.GBCallEnd.verify|verify} messages.
         * @param message GBCallEnd message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: GrpcBus.IGBCallEnd, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GBCallEnd message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GBCallEnd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GrpcBus.GBCallEnd;

        /**
         * Decodes a GBCallEnd message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GBCallEnd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GrpcBus.GBCallEnd;

        /**
         * Verifies a GBCallEnd message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GBCallEnd message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GBCallEnd
         */
        public static fromObject(object: { [k: string]: any }): GrpcBus.GBCallEnd;

        /**
         * Creates a plain object from a GBCallEnd message. Also converts values to other types if specified.
         * @param message GBCallEnd
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: GrpcBus.GBCallEnd, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GBCallEnd to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }
}
