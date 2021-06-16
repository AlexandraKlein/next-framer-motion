import React from 'react';
import GoogleMapReact from 'google-map-react';
import Autocomplete from 'react-google-autocomplete';
import cx from 'classnames';

import styles from './MapContainer.module.scss';

const DEFAULT_CENTER = { lat: 34.024212, lng: -118.496475 };
const DEFAULT_ZOOM = 12;

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

const Marker = ({ lat, lng, uid, index, onMouseEnter, onMouseLeave }) => {
    return (
        <div
            className={styles.marker}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
        >
            <div className={styles.marker} lat={lat} lng={lng}>
                <span>{index + 1}</span>
            </div>
        </div>
    );
};

const Place = ({ name, address, isActive }) => {
    return (
        <div className={cx(styles.place, { [styles.activePlace]: isActive })}>
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
            places: null,
            locationId: null,
            activePlaceId: null,
            center: DEFAULT_CENTER,
            zoom: DEFAULT_ZOOM,
        };
    }

    componentDidMount() {
        // navigator.geolocation.getCurrentPosition(position => {
        //     const lat = position.coords.latitude;
        //     const lng = position.coords.longitude;
        //     this.handleSetCenter(lat, lng);
        // });
    }

    componentDidUpdate(prevProps, prevState) {
        // On Map Load
        if (!prevState.mapsLoaded && this.state.mapsLoaded) {
            this.handleFindPlaces();
        }

        if (prevState.places === null && this.state.places !== null) {
            const bounds = this.getMapBounds(
                this.state.mapsApi,
                this.state.places
            );

            this.state.map.fitBounds(bounds);
        }

        if (prevState.locationId !== this.state.locationId) {
            this.handleFindPlaces();
        }
    }

    getMapBounds = (mapsApi, places) => {
        const bounds = new mapsApi.LatLngBounds();

        places.forEach(place => {
            bounds.extend(
                new mapsApi.LatLng(
                    place.geometry.location.lat(),
                    place.geometry.location.lng()
                )
            );
        });

        return bounds;
    };

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
        this.setState({ places: null, loading: true });
        this.state.placesService.textSearch(
            {
                location: this.state.center,
                // type: ['store'], // List of types: https://developers.google.com/places/supported_types
                query: 'walmart',
            },
            response => {
                this.setState({ places: response, loading: false });
            }
        );
    };

    handleOnChange = (center, zoom) => {
        this.setState({ center, zoom });
    };

    handleMouseEnterMarker = id => {
        this.setState({ activePlaceId: id });
    };

    handleMouseLeaveMarker = () => {
        this.setState({ activePlaceId: null });
    };

    render() {
        const { places, loading, activePlaceId } = this.state;

        return (
            <section className={styles.root}>
                <div className={styles.content}>
                    <div className={styles.autocomplete}>
                        <Autocomplete
                            apiKey="AIzaSyDSIZ0_V9gUYR8l-4W7tvmihmasBK869Bg"
                            onPlaceSelected={place => {
                                if (!place?.geometry) {
                                    return;
                                }

                                const lat = place.geometry.location.lat();
                                const lng = place.geometry.location.lng();

                                this.setState({ center: { lat, lng } }, () =>
                                    this.setState({
                                        locationId: place.place_id,
                                    })
                                );
                            }}
                        />
                    </div>

                    {places?.length > 0 && !loading && (
                        <aside className={styles.aside}>
                            {places.map((place, index) => {
                                return (
                                    <Place
                                        isActive={
                                            place.place_id ===
                                            this.state.activePlaceId
                                        }
                                        key={index}
                                        address={place.formatted_address}
                                        name={place.name}
                                        photo={place.photos?.[0].getUrl()}
                                    />
                                );
                            })}
                        </aside>
                    )}
                </div>

                <div className={styles.innerContainer}>
                    <GoogleMapReact
                        options={this.createMapOptions}
                        bootstrapURLKeys={{
                            key: 'AIzaSyDSIZ0_V9gUYR8l-4W7tvmihmasBK869Bg',
                            libraries: ['places'],
                        }}
                        onBoundsChange={this.handleOnChange}
                        center={this.state.center}
                        zoom={this.state.zoom}
                        onGoogleApiLoaded={({ map, maps }) =>
                            this.apiHasLoaded(map, maps)
                        }
                        yesIWantToUseGoogleMapApiInternals
                    >
                        {places?.length > 0 &&
                            places.map((place, index) => (
                                <Marker
                                    key={place.place_id + index}
                                    index={index}
                                    uid={place.place_id}
                                    address={place.formatted_address}
                                    name={place.name}
                                    lat={place.geometry.location.lat()}
                                    lng={place.geometry.location.lng()}
                                    onMouseEnter={() =>
                                        this.handleMouseEnterMarker(
                                            place.place_id
                                        )
                                    }
                                    onMouseLeave={this.handleMouseLeaveMarker}
                                />
                            ))}
                    </GoogleMapReact>
                    {loading && (
                        <div className={styles.loading}>
                            <h2>Loading...</h2>
                        </div>
                    )}
                </div>
            </section>
        );
    }
}

export default MapContainer;
