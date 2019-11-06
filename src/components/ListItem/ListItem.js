import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './ListItem.css';
import { Link } from 'react-router-dom';


class ListItem extends Component {

  static propTypes = {
    _id: PropTypes.string,
    name: PropTypes.string,
    photo: PropTypes.string,
    history: PropTypes.object
  }


  render() {
    const characterUrl = `/character/${this.props._id}`;
    return (
      <Link to={characterUrl}>

        <li className={styles.ListItem} key={this.props._id}>
          <img src={this.props.photo} alt={this.props._id}></img>
          <p>{this.props.name}</p>
        </li>
      </Link>
    );
  }
}

export default ListItem;


// export default function ListItem({ key, name, photo, history }) {
//   return (
//     <li key={key} onClick={handleClick}>
//       <img src={photo}></img>
//       <p>{name}</p>
//     </li>
//   );
// }

// function handleClick(event) {
//   event.preventDefault();
//   this.props.history.push(`/character/${name}`);
// }



// ListItem.propTypes = {
//   key: PropTypes.string,
//   name: PropTypes.string,
//   photo: PropTypes.string,
//   history: PropTypes.object
// }
//   ;
