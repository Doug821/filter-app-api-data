import React, { Component, Fragment } from "react";

import styles from '../styles/components/list.module.css';

import Testscores from "./TestScores";
import Tags from "./Tags";

class Student extends Component {
  state = {
    collapsed: true
  };

  handleCollapse = () => this.setState({ collapsed: !this.state.collapsed });

  render() {
    const { collapsed } = this.state;
    const { student, tags, addTag } = this.props;
    const avgGrade = student.grades.reduce((total, grade) => total += parseInt(grade), 0) / student.grades.length;
    const expandSign = "fas fa-plus";
    const collapseSign = "fas fa-minus";

    return (
      <div className={styles.student}>
        <img
          className={styles.studentPicture}
          src={student.pic}
          alt={`${student.firstName} ${student.lastName}`}
        />
        <div className={styles.studentDetails}>
          <header className={styles.header}>
            <h2 className={styles.studentName}>{`${student.firstName} ${student.lastName}`}</h2>
            <button
              className={styles.showMore}
              onClick={this.handleCollapse}
            >
              <i className={collapsed ? expandSign : collapseSign}></i>
            </button>
          </header>
          <ul className={styles.studentInfoContainer}>
            <li className={styles.studentsInfos}>Email: {student.email}</li>
            <li className={styles.studentsInfos}>Company: {student.company}</li>
            <li className={styles.studentsInfos}>Skill: {student.skill}</li>
            <li className={styles.studentsInfos}>Average: {avgGrade}&#37;</li>
          </ul>
          {
            collapsed ?
              null :
              <Fragment>
                <Testscores id={student.id} scores={student.grades} />
                <Tags id={student.id} tags={tags} addTag={addTag} />
              </Fragment>
          }
        </div>
      </div>
    );
  };
}

export default Student;
