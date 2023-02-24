// DO NOT EDIT! This is a generated file. Edit the JSDoc in src/*.js instead and run 'npm run types'.

/** Namespace testproto. */
export namespace testproto {

    /** Properties of a Test1. */
    interface ITest1 {

        /** Test1 Id */
        Id?: (number|null);

        /** Test1 Count */
        Count?: (Long|null);
    }

    /** Represents a Test1. */
    class Test1 implements ITest1 {

        /**
         * Constructs a new Test1.
         * @param [p] Properties to set
         */
        constructor(p?: testproto.ITest1);

        /** Test1 Id. */
        public Id: number;

        /** Test1 Count. */
        public Count: Long;

        /**
         * Encodes the specified Test1 message. Does not implicitly {@link testproto.Test1.verify|verify} messages.
         * @param m Test1 message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: testproto.ITest1, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Test1 message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Test1
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): testproto.Test1;
    }
}
