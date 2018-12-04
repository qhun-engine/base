export interface InjectableOptions {

    /**
     * declares this injectable class to be a singleton class
     * that is beeing cached when multiple classes request this service
     * @default true
     */
    singleton?: boolean;

    /**
     * a flag that indicates that the injector should not resolve the constructor
     * properties of the decorated class. this allows patterns like constructing an object
     * with given parameters and add it to the injector cache.
     */
    skipOwnDependencies?: boolean;
}
