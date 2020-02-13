import { shallow } from "enzyme";
import { Planner } from "./index";
import TaskCreate from "../TaskCreate";
import TaskList from "../TaskList";

describe("Testar Container do Planner", () => {
    test("Deve renderizar os containers", () => {
        const container = shallow(<Planner  TaskCreate  />)
    })
}) 