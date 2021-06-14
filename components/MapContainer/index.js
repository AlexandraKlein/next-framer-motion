import React from 'react';
import GoogleMapReact from 'google-map-react';
import Autocomplete from 'react-google-autocomplete';

import styles from './MapContainer.module.scss';

const DEFAULT_CENTER = { lat: 34.024212, lng: -118.496475 };
const DEFAULT_ZOOM = 13;

const mapStyles = [
    {
        featureType: 'administrative',
        elementType: 'geometry',
        stylers: [
            {
                visibility: 'off',
            },
        ],
    },
    {
        featureType: 'administrative.land_parcel',
        elementType: 'labels',
        stylers: [
            {
                visibility: 'off',
            },
        ],
    },
    {
        featureType: 'poi',
        stylers: [
            {
                visibility: 'off',
            },
        ],
    },
    {
        featureType: 'poi',
        elementType: 'labels.text',
        stylers: [
            {
                visibility: 'off',
            },
        ],
    },
];

const Marker = ({ lat, lng, name }) => {
    return (
        <div className={styles.marker} lat={lat} lng={lng}>
            <h3>{name}</h3>
        </div>
    );
};

const Place = ({ name, address, photo }) => {
    return (
        <div className={styles.place}>
            {photo && <img src={photo} alt={name} />}

            <div className={styles.placeContent}>
                <h3>{name}</h3>
                <p>{address}</p>
            </div>
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

        if (
            (!prevState.mapsLoaded && this.state.mapsLoaded) ||
            prevState.center !== this.state.center
        ) {
            this.handleFindPlaces();
        }
    }

    componentDidMount() {
        navigator.geolocation.getCurrentPosition(position => {
            const lat = position.coords.latitude;
            const lng = position.coords.longitude;
            this.handleSetCenter(lat, lng);
        });
    }

    createMapOptions = maps => {
        return {
            // panControl: false,
            // mapTypeControl: false,
            // scrollwheel: false,
            styles: mapStyles,
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

    handleSetCenter = (lat, lng) => {
        this.setState({ center: { lat, lng } });
    };

    handleFindPlaces = () => {
        this.setState({ loading: true });
        this.state.placesService.textSearch(
            {
                location: this.state.center,
                // type: ['store'], // List of types: https://developers.google.com/places/supported_types
                query: 'frozen yogurt',
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
                <Autocomplete
                    className={styles.autocomplete}
                    apiKey="AIzaSyDSIZ0_V9gUYR8l-4W7tvmihmasBK869Bg"
                    onPlaceSelected={place => {
                        if (!place?.geometry) {
                            return;
                        }
                        const lat = place.geometry.location.lat();
                        const lng = place.geometry.location.lng();
                        this.handleSetCenter(lat, lng);
                    }}
                />

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
                    {places.length &&
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
                {/* 
                {places.length && !loading && (
                    <aside className={styles.aside}>
                        {places.map((place, index) => {
                            return (
                                <Place
                                    key={index}
                                    address={place.formatted_address}
                                    name={place.name}
                                    photo={place.photos?.[0].getUrl()}
                                />
                            );
                        })}
                    </aside>
                )} */}
            </section>
        );
    }
}

export default MapContainer;
