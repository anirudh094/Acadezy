import React from "react";
import "../css/course.css";
import StartFirebase from "../firebaseconfig_products";
import { ref, onValue,query,orderByChild, equalTo } from "firebase/database";
const db = StartFirebase();

export class ArtificialIntelligence extends React.Component {
  constructor() {
    super();
    this.state = {
      tableData: [],
    };
  }

  componentDidMount() {
    const dbref = query(ref(db, "Courses"),orderByChild('name'),equalTo("Artificial Intelligence"));

    onValue(dbref, (snapshot) => {
      let records = [];
      snapshot.forEach((childSnapshot) => {
        let keyName = childSnapshot.key;
        let data = childSnapshot.val();
        records.push({ key: keyName, data: data });
      });
      this.setState({ tableData: records });
    });
  }

  render() {
    return (
      <>
        <div className="courses-container">
            {this.state.tableData.map((row, index) => {
              return (
                <h1 className="course-name">{row.data.name}</h1>
              );
            })}
        </div>
      </>
    );
  }
}
