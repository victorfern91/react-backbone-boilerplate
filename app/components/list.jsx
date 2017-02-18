import React from 'react';
import ListItem from '../components/generic/listItem';


export default class List extends React.Component {

  constructor() {
    super();
    this.addLike = this.addLike.bind(this);
  }

  componentDidMount() {
    this.props.collection.on('add remove reset sort change', () => {
      this.forceUpdate();
    });
  }

  componentWillUnmount() {
    if (this.props.collection) {
      this.props.collection.off();
    }
  }

  addLike(evt) {
    const taskName = evt.currentTarget.dataset.id;
    this.props.collection.incrementLike(taskName);
  }

  render() {
    return (
      <div>
        <ul className="list-item-container">
          { this.props.collection.map(model => {
            return (
              <ListItem data-id={model.get('name')} key={model.get('name')} onClick={this.addLike}>
                <span>
                  { model.get('name') } | { model.get('likes') }
                </span>
              </ListItem>
            );
          })}
        </ul>
      </div>
    );
  }
}
