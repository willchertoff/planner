import React, { Component, PropTypes } from 'react';
import s from './ProgressBar.css';

/* Data Center */
import firebase from '../../src/database';

const completedTasks = tasks =>
  tasks.filter(task => task.completed === true);

const taskCount = tasks => tasks.length;

const percentage = tasks => taskCount(completedTasks(tasks)) / taskCount(tasks);

class ProgressBar extends Component {
  static propTypes = {
    title: PropTypes.string,
    activeTrip: PropTypes.number,
  }
  constructor(props) {
    super(props);
    this.state = {
      percent: 0,
    };
  }
  componentWillMount = () => {
    this.tasksRef = firebase.database().ref(`/trips/${this.props.activeTrip - 1}/tasks`);
    this.tasksRef.once('value', (snapshot) => {
      const tsks = [];
      snapshot.forEach((snap) => {
        tsks.push(snap.val());
      });
      this.setState({
        percent: percentage(tsks),
      });
    });
    this.tasksRef.on('child_changed', () => {
      this.tasksRef.once('value', (snapshot) => {
        const tsks = [];
        snapshot.forEach((snap) => {
          tsks.push(snap.val());
        });
        this.setState({
          percent: percentage(tsks),
        });
      });
    });
  }
  componentWillReceiveProps = (nextProps) => {
    this.tasksRef = firebase.database().ref(`/trips/${nextProps.activeTrip - 1}/tasks`);
    this.tasksRef.on('child_changed', () => {
      this.tasksRef.once('value', (snapshot) => {
        const tsks = [];
        snapshot.forEach((snap) => {
          tsks.push(snap.val());
        });
        this.setState({
          percent: percentage(tsks),
        });
      });
    });
    this.tasksRef.once('value', (snapshot) => {
      const tsks = [];
      snapshot.forEach((snap) => {
        tsks.push(snap.val());
      });
      this.setState({
        percent: percentage(tsks),
      });
    });
  }
  componentWillUnmount = () => {
    this.tasksRef.off();
  }

  render() {
    const {
      title,
    } = this.props;

    const { percent } = this.state;

    const barWidth = `${Math.floor(percent * 100)}%`;

    return (
      <div
        className={s.root}
      >
        <h3>{title}</h3>
        <svg width="100%" className={s.bar}>
          <rect x="0" y="10" width="100%" height="5px" fill="#EEECEA" />
          <rect x="0" y="10" className={s.prog} width={barWidth} height="5px" fill="#8FC6C3" />
        </svg>
        <span
          className={s.label}
          style={{
            left: `calc(${barWidth} - 21px)`,
          }}
        >
          {barWidth}
        </span>
      </div>
    );
  }
}

export default ProgressBar;
