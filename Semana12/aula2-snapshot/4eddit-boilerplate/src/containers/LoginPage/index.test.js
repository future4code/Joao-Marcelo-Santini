import React from "react";
import { LoginPage } from "./index";
import renderer from "react-test-renderer";


describe("Testa actions do 4eddit", () =>{
    test("Snapshot", () => {
        const tree = renderer.create(<LoginPage />)
        .toJSON();
        expect(tree).toMatchSnapshot();
    });

});