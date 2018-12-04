/**
 * a constraint that indicates that this class can be fully serialized and deserialized
 */
export interface Serializable<Serialized = string> {

    /**
     * serialize this object
     */
    serialize(): Serialized;
}
