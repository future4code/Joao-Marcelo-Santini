import React from "react";
import { CreateUser } from "./index";
import renderer from "react-test-renderer";


describe("Testa actions do 4eddit", () =>{
    test("Snapshot", () => {
        const tree = renderer.create(<SingUp />)
        .toJSON();
        expect(tree).toMatchSnapshot();
    });

});