import { suite, test, slow, timeout } from "mocha-typescript";
import { expect } from "chai";
import { MetadataRegistryService } from "../../src/reflection/MetadataRegistryService";

function testDecoratorToEmitMetadata(target: Function) {

}

@suite("reflection/MetadataRegistryService") class MetadataRegistryServiceSpec {

    @test ".getInstance() is working"() {

        expect(MetadataRegistryService.getInstance()).to.be.an.instanceOf(MetadataRegistryService);
    }

    @test "Can get and set metadata"() {

        @testDecoratorToEmitMetadata
        class Test { }

        const meta = MetadataRegistryService.getInstance();
        meta.setValue("test", Test, "hello world");

        // now get the declared value
        expect(meta.get("test", Test)).to.equal("hello world");
    }
}