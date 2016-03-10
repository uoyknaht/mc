import React from 'react';
import { connect }            from 'react-redux';
import Immutable from 'Immutable';
import MapsListTemplate from '../MapsListTemplate/mapsListTemplate.cmp'

class PopularMapsList extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    var maps = Immutable.fromJS([
        {
            _id: '1',
            url: 'z0BQvRFiob4s.ksT_HgsfpIeU',            
            title: 'Visiting places in Vienna'
        }
    ]);

    return (
        <div>
            <p>Popular maps:</p>
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

export default connect(mapStateToProps, mapDispatchToProps)(PopularMapsList);