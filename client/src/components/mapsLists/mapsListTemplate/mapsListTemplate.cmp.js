import React from 'react';
import Router from 'react-router';
import { DefaultRoute, Link, Route, RouteHandler } from 'react-router';
import { connect }            from 'react-redux';
import { routeActions } from 'react-router-redux';
import Immutable from 'Immutable';

class MapsListTemplate extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {

      var html = [];

      this.props.maps.forEach((map) => {
        html.push(
          <div to className="list-group-item" key={map.get('_id')}>

            <Link
                to={`/maps/${map.get('url')}`}
                className="list-group-item-heading">

                {map.get('title')}
            </Link>
          </div>
        );
      });


    return (
        <div>
            {html}
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

export default connect(mapStateToProps, mapDispatchToProps)(MapsListTemplate);

            // <p className="list-group-item-text">
            //     Categories:&nbsp;
            //     <CategoriesTitlesList
            //         placeId={place.get('_id')}
            //         categories={place.get('categories')} />
            // </p>