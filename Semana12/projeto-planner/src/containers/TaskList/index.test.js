import React from "react";
import renderer from "react-test-renderer";
import { TaskList } from "./index";

describe("Teste TaskList", () =>{
    test("Snapshot TaskList", () => {
        const snapTaskList = renderer.create(<TaskList tasks={[]} getTasks={()=>{}} />)
        .toJSON();
        expect(snapTaskList).toMatchSnapshot();
    });

});