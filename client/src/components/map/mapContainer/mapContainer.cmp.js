import React from 'react';
import Router from 'react-router';
import { DefaultRoute, Link, Route, RouteHandler } from 'react-router';
import { clickMap, clickMarker, markerDragEnd } from '../../../actions/mapActions';
import { connect }            from 'react-redux';
// import React, {PropTypes, Component} from 'react/addons';
import { routeActions } from 'react-router-redux';
import shouldPureComponentUpdate from 'react-pure-render/function';
// import GoogleMap from 'google-map-react';
import GoogleMap from '../../googleMap/map/map.cmp.js';
import PlaceMarker from '../../googleMap/placeMarker/placeMarker.cmp';

class MapContainer extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {

    // $("#mc-main-map-iframe").contents().find("#featurecardPanel").addClass('mc-featurecardPanel');

    var mapUrl = 'z0BQvRFiob4s.ksT_HgsfpIeU';
    var iframeSrc = 'http://www.google.com/maps/d/embed?mid=' + this.props.mapUrl;

    return (
        <div className="mc-main-map">

            <iframe id="mc-main-map-iframe" src={iframeSrc}></iframe>

        </div>
    );
  }
}

MapContainer.prototype.shouldComponentUpdate = shouldPureComponentUpdate;

function mapStateToProps(state, ownProps) {
  return {
  }
}

function mapDispatchToProps(dispatch) {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MapContainer);
