import React from "react";
import { PostList } from "./index";
import renderer from "react-test-renderer";
import { PostCreate } from "..//PostCreate/index";

describe("Testa actions do 4eddit", () =>{
    test("Snapshot", () => {
        const tree = renderer.create(<PostList posts={""} goToHome={()=>{}}  PostCreate={""} />)
        .toJSON();
        expect(tree).toMatchSnapshot();
    });

});