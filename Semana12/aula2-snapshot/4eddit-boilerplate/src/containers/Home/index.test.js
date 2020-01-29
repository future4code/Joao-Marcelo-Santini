import React from "react";
import { Home } from "./index";
import renderer from "react-test-renderer";
import {shallow} from "enzyme";

describe("Testa actions do 4eddit", () =>{
    test("Snapshot", () => {
        const tree = renderer.create(<Home goToHome={()=>{}} goToLogin={()=>{}} />)
        .toJSON();
        expect(tree).toMatchSnapshot();
    });

});