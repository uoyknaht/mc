import React from 'react';
import Router from 'react-router';
import { DefaultRoute, Link, Route, RouteHandler } from 'react-router';
import { connect }            from 'react-redux';
import Nav from '../nav/nav.cmp';
import PageTitle from '../pageTitle/pageTitle.cmp';
import MapContainer from '../map/mapContainer/mapContainer.cmp';
import NewestMapsList from '../mapsLists/newestMapsList/newestMapsList.cmp';
import PopularMapsList from '../mapsLists/popularMapsList/popularMapsList.cmp';

class App extends React.Component {

    constructor() {
        super();
        this.render = this.render.bind(this);
    }

    render() {
      return (
        <div>
            <Nav />

            <div className="mc-main-content">

                <NewestMapsList/>
                <PopularMapsList/>

            </div>

            <MapContainer mapUrl={this.props.mapUrl} />

        </div>
      )
    }

}

function mapStateToProps(state, ownProps) {
  return {
    mapUrl: ownProps.params.id
  }
}

function mapDispatchToProps(dispatch) {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

