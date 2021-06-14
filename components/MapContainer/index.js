import React from 'react';
import GoogleMapReact from 'google-map-react';

import styles from './MapContainer.module.scss';

const CENTER = { lat: 34.024212, lng: -118.496475 };

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
            mapsLoaded: false,
            map: {},
            mapsApi: {},
            placesService: {},
            places: [],
        };
    }

    componentDidUpdate(prevProps, prevState) {
        if (!this.state.mapsLoaded) {
            return;
        }
    }

    handleFindPlaces = () => {
        this.state.placesService.textSearch(
            {
                location: CENTER,

                type: ['pharmacy'], // List of types: https://developers.google.com/places/supported_types
                query: 'cvs',
            },
            response => {
                this.setState({ places: response });
            }
        );
    };

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

    render() {
        const { places } = this.state;

        console.log({ places });

        return (
            <section className={styles.root}>
                <GoogleMapReact
                    options={this.createMapOptions}
                    bootstrapURLKeys={{
                        key: 'AIzaSyDSIZ0_V9gUYR8l-4W7tvmihmasBK869Bg',
                        libraries: ['places'],
                    }}
                    defaultZoom={13}
                    defaultCenter={CENTER}
                    yesIWantToUseGoogleMapApiInternals={true}
                    onGoogleApiLoaded={({ map, maps }) =>
                        this.apiHasLoaded(map, maps)
                    }
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
