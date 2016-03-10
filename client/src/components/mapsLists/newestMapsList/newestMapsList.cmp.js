import React from 'react';
import { connect }            from 'react-redux';
import Immutable from 'Immutable';
import MapsListTemplate from '../MapsListTemplate/mapsListTemplate.cmp'

class NewestMapsList extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    var maps = Immutable.fromJS([
        {
            _id: '1',
            url: 'z0BQvRFiob4s.kfSQtf-6yDQM',
            title: 'Castles & Manors in Lithuania'
        }
    ]);

    return (
        <div>
            <p>Newest maps:</p>
            <MapsListTemplate maps={maps} />
        </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
  }
}

function mapDispatchToProps(dispatch) {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewestMapsList);