/**
 * defines an instantiable class with unknown constructor properties
 */
export interface ClassConstructor<T extends object = object> {

    new(...args: any[]): T;
}
