import React from "react";
import renderer from "react-test-renderer";
import { TaskCreate } from "./index";

describe("Teste TaskCreate", () =>{
    test("Snapshot TaskCreate", () => {
        const snapTaskCreate = renderer.create(<TaskCreate />)
        .toJSON();
        expect(snapTaskCreate).toMatchSnapshot();
    });

});