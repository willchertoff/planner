import React, { Component, PropTypes } from 'react';
import update from 'immutability-helper';
import cx from 'classnames';
import s from './tasks.css';

/* Data Center */
import firebase from '../database';

class Tasks extends Component {
  static propTypes = {
    className: PropTypes.string,
    activeTrip: PropTypes.number,
  }
  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
    };
  }
  componentWillMount = () => {
    const { activeTrip } = this.props;
    this.tasksRef = firebase.database().ref(`/trips/${activeTrip - 1}/tasks`);
    this.tasksRef.on('child_changed', (data) => {
      this.setState({
        tasks: update(this.state.tasks, {
          [data.val().id]: {
            completed: {
              $set: data.val().completed,
            },
          },
        }),
      });
    });
  }
  componentWillReceiveProps = (nextProps) => {
    this.tasksRef = firebase.database().ref(`/trips/${nextProps.activeTrip - 1}/tasks`);
    this.tasksRef.once('value', (snapshot) => {
      const tsks = [];
      snapshot.forEach((task) => {
        tsks.push(task.val());
        this.setState({
          tasks: tsks,
        });
      });
    });
    this.tasksRef.on('child_changed', (data) => {
      this.setState({
        tasks: update(this.state.tasks, {
          [data.val().id]: {
            completed: {
              $set: data.val().completed,
            },
          },
        }),
      });
    });
  }
  componentWillUnmount = () => {
    this.tasksRef.off();
  }
  toggleTask = (e) => {
    this.tasksRef.child(`${e.target.name}`).update({
      completed: e.target.checked,
    });
  }
  render() {
    const {
      className,
    } = this.props;

    return (
      <div
        className={cx(s.root, className)}
      >
        <h3>My Tasks</h3>
        <div className={s.tasks}>
          {
            this.state.tasks.map(task =>
              <label key={task.id} className={s.label} htmlFor={task.id}>
                <input
                  className={s.input}
                  name={task.id}
                  type="checkbox"
                  checked={task.completed}
                  onChange={this.toggleTask}
                />
                <span
                  style={{
                    textDecoration: task.completed ? 'line-through' : 'none',
                    opacity: task.completed ? '0.29' : 1,
                  }}
                >
                  {task.text}
                </span>
              </label>,
            )
          }
        </div>
      </div>
    );
  }
}

export default Tasks;
