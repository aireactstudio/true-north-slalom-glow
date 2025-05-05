import React, { useEffect, useRef } from 'react';
import { MapPin, Phone, Navigation, ExternalLink } from 'lucide-react';

declare global {
  interface Window {
    google: any;
    initMap: () => void;
  }
}

const MapSection: React.FC = () => {
  const mapRef = useRef<HTMLDivElement>(null);
  const googleMapRef = useRef<any>(null);

  // Location coordinates
  const seattleOffice = { lat: 47.645749, lng: -122.191260 };
  
  useEffect(() => {
    // Load Google Maps JavaScript API
    const loadGoogleMapsScript = () => {
      const script = document.createElement('script');
      script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyAfv5Lqryev4X33SlrVS4GQDddwc90qv-A&libraries=places&callback=initMap`;
      script.async = true;
      script.defer = true;
      document.head.appendChild(script);

      // Initialize map when script loads
      window.initMap = () => initializeMap();

      return () => {
        delete window.initMap;
        script.remove();
      };
    };

    // Initialize the map
    const initializeMap = () => {
      if (!mapRef.current) return;

      const mapOptions = {
        center: seattleOffice,
        zoom: 14,
        mapTypeId: window.google.maps.MapTypeId.ROADMAP,
        disableDefaultUI: true,
        zoomControl: true,
        styles: [
          { elementType: "geometry", stylers: [{ color: "#242f3e" }] },
          { elementType: "labels.text.stroke", stylers: [{ color: "#242f3e" }] },
          { elementType: "labels.text.fill", stylers: [{ color: "#746855" }] },
          { featureType: "administrative.locality", elementType: "labels.text.fill", stylers: [{ color: "#d59563" }] },
          { featureType: "poi", elementType: "labels.text.fill", stylers: [{ color: "#d59563" }] },
          { featureType: "poi.park", elementType: "geometry", stylers: [{ color: "#263c3f" }] },
          { featureType: "poi.park", elementType: "labels.text.fill", stylers: [{ color: "#6b9a76" }] },
          { featureType: "road", elementType: "geometry", stylers: [{ color: "#38414e" }] },
          { featureType: "road", elementType: "geometry.stroke", stylers: [{ color: "#212a37" }] },
          { featureType: "road", elementType: "labels.text.fill", stylers: [{ color: "#9ca5b3" }] },
          { featureType: "road.highway", elementType: "geometry", stylers: [{ color: "#746855" }] },
          { featureType: "road.highway", elementType: "geometry.stroke", stylers: [{ color: "#1f2835" }] },
          { featureType: "road.highway", elementType: "labels.text.fill", stylers: [{ color: "#f3d19c" }] },
          { featureType: "transit", elementType: "geometry", stylers: [{ color: "#2f3948" }] },
          { featureType: "transit.station", elementType: "labels.text.fill", stylers: [{ color: "#d59563" }] },
          { featureType: "water", elementType: "geometry", stylers: [{ color: "#17263c" }] },
          { featureType: "water", elementType: "labels.text.fill", stylers: [{ color: "#515c6d" }] },
          { featureType: "water", elementType: "labels.text.stroke", stylers: [{ color: "#17263c" }] }
        ]
      };

      // Create the map
      googleMapRef.current = new window.google.maps.Map(mapRef.current, mapOptions);

      // Add marker
      const marker = new window.google.maps.Marker({
        position: seattleOffice,
        map: googleMapRef.current,
        title: "True North ITG - Seattle Office",
        animation: window.google.maps.Animation.DROP,
        icon: {
          path: 'M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z',
          fillColor: '#3B82F6',
          fillOpacity: 1,
          strokeColor: '#FFFFFF',
          strokeWeight: 2,
          scale: 2,
          anchor: new window.google.maps.Point(12, 22)
        }
      });

      // Add info window
      const infoWindow = new window.google.maps.InfoWindow({
        content: `<div style="color:#333; padding:5px;"><strong>True North ITG</strong><br>16504 9th Ave SE, #203<br>Mill Creek, WA 98012</div>`
      });

      marker.addListener('click', () => {
        infoWindow.open(googleMapRef.current, marker);
      });
    };

    loadGoogleMapsScript();
  }, []);

  return (
    <section className="bg-tnorth-surface-dark py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-8 items-stretch">
          {/* Location Info */}
          <div className="md:w-1/3 bg-tnorth-surface-dark rounded-xl overflow-hidden shadow-xl">
            <div className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="rounded-full bg-blue-600/20 p-3">
                  <MapPin className="h-8 w-8 text-blue-400" strokeWidth={1.5} />
                </div>
                <h2 className="text-3xl font-bold text-white">Our Locations</h2>
              </div>
              
              <div className="space-y-8 mb-10">
                <div className="bg-blue-900/20 p-6 rounded-lg border border-blue-800/30">
                  <h3 className="text-xl font-medium mb-3 text-blue-200 flex items-center gap-2">
                    <span className="inline-block w-2 h-2 rounded-full bg-blue-400"></span>
                    Seattle Office
                  </h3>
                  <p className="text-white/80 mb-3">
                    16504 9th Ave SE, #203<br />
                    Mill Creek, WA 98012
                  </p>
                  <a 
                    href="https://goo.gl/maps/W2PaZK4UD9R24pP19"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-blue-400 hover:text-blue-300 gap-1 text-sm transition-colors"
                  >
                    <Navigation className="h-3 w-3" />
                    <span>Get directions</span>
                  </a>
                </div>
                
                <div className="bg-blue-900/20 p-6 rounded-lg border border-blue-800/30">
                  <h3 className="text-xl font-medium mb-3 text-blue-200 flex items-center gap-2">
                    <span className="inline-block w-2 h-2 rounded-full bg-blue-400"></span>
                    The Woodlands Office
                  </h3>
                  <p className="text-white/80 mb-3">
                    25700 I-45, Suite 4102<br />
                    The Woodlands, TX 77386
                  </p>
                  <a 
                    href="https://goo.gl/maps/QnEskjw8tPxMfg7f8"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-blue-400 hover:text-blue-300 gap-1 text-sm transition-colors"
                  >
                    <Navigation className="h-3 w-3" />
                    <span>Get directions</span>
                  </a>
                </div>
              </div>
              
              <div className="pt-4 border-t border-blue-800/30">
                <div className="flex items-center gap-3 text-white/80">
                  <Phone className="h-5 w-5 text-blue-400" strokeWidth={1.5} />
                  <span>1.855.383.4300</span>
                </div>
              </div>
              
              <a 
                href="/contact" 
                className="mt-8 w-full flex items-center justify-center gap-2 py-3 bg-blue-600 hover:bg-blue-500 text-white font-medium rounded-lg transition-colors group"
              >
                <span>Contact Us</span>
                <ExternalLink className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
          
          {/* Map */}
          <div className="md:w-2/3 bg-tnorth-surface-dark rounded-xl overflow-hidden shadow-xl h-[550px]">
            <div ref={mapRef} className="w-full h-full" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MapSection;
