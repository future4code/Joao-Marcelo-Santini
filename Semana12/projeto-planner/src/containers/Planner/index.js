import React from "react";
import TaskCreate from "../TaskCreate";
import TaskList from "../TaskList";
import { connect } from "react-redux";

class Planner extends React.Component {
  render() {
    return <div>
      <h1>Planner</h1>
      <TaskCreate></TaskCreate>
      <TaskList></TaskList>
    </div>
  }
}

export default connect()
(Planner);
