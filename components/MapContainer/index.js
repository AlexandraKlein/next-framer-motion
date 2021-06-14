import React from 'react';
import GoogleMapReact from 'google-map-react';

import styles from './MapContainer.module.scss';

const DEFAULT_CENTER = { lat: 34.024212, lng: -118.496475 };
const DEFAULT_ZOOM = 13;

const Marker = props => {
    return (
        <div className={styles.marker} lat={props.lat} lng={props.lng}>
            <p>{props.name}</p>
        </div>
    );
};

class MapContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            mapsLoaded: false,
            map: {},
            mapsApi: {},
            placesService: {},
            places: [],
            center: DEFAULT_CENTER,
            zoom: DEFAULT_ZOOM,
        };
    }

    componentDidUpdate(prevProps, prevState) {
        if (!this.state.mapsLoaded) {
            return;
        }
    }

    componentDidMount() {
        const {
            markers,
            constraints,
            placesService,
            directionService,
            mapsApi,
        } = this.state;
    }

    createMapOptions = maps => {
        return {
            panControl: false,
            mapTypeControl: false,
            scrollwheel: false,
            styles: [
                {
                    stylers: [
                        { saturation: -100 },
                        { gamma: 0.8 },
                        { lightness: 4 },
                        { visibility: 'on' },
                    ],
                },
            ],
        };
    };

    apiHasLoaded = (map, mapsApi) => {
        this.setState({
            mapsLoaded: true,
            map,
            mapsApi,
            placesService: new mapsApi.places.PlacesService(map),
        });
    };

    handleFindPlaces = () => {
        this.setState({ loading: true });
        this.state.placesService.textSearch(
            {
                location: this.state.center,

                type: ['pharmacy'], // List of types: https://developers.google.com/places/supported_types
                query: 'cvs',
            },
            response => {
                this.setState({ places: response, loading: false });
            }
        );
    };

    handleOnBoundsChange = (center, zoom) => {
        this.setState({ center, zoom });
    };

    render() {
        const { places, loading } = this.state;

        return (
            <section className={styles.root}>
                <GoogleMapReact
                    options={this.createMapOptions}
                    bootstrapURLKeys={{
                        key: 'AIzaSyDSIZ0_V9gUYR8l-4W7tvmihmasBK869Bg',
                        libraries: ['places'],
                    }}
                    onBoundsChange={this.handleOnBoundsChange}
                    center={this.state.center}
                    zoom={this.state.zoom}
                    onGoogleApiLoaded={({ map, maps }) =>
                        this.apiHasLoaded(map, maps)
                    }
                    yesIWantToUseGoogleMapApiInternals
                >
                    {places &&
                        places.map((place, index) => (
                            <Marker
                                key={index}
                                name={place.name}
                                lat={place.geometry.location.lat()}
                                lng={place.geometry.location.lng()}
                            />
                        ))}
                </GoogleMapReact>
                {loading && (
                    <div className={styles.loading}>
                        <h2>Loading...</h2>
                    </div>
                )}
                <button
                    onClick={this.handleFindPlaces}
                    className={styles.button}
                >
                    find places
                </button>
            </section>
        );
    }
}

export default MapContainer;
