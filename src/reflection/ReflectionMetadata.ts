export declare type ReflectionMetadataTypes = {

    Singleton: boolean,
    Injectable: string,

    SingletonInstance: object
};

export declare type ReflectionMetadata = (keyof ReflectionMetadataTypes) | string;
export const ReflectionMetadata: { [P in keyof ReflectionMetadataTypes]: ReflectionMetadata | string } = {

    Singleton: "base:marker:singleton",
    Injectable: "base:marker:injectable",

    SingletonInstance: "base:concrete:singletonInstance"
};
