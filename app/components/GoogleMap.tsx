import { useEffect, useRef } from 'react'

interface GoogleMapProps {
  apiKey: string
}

declare global {
  interface Window {
    initMap: () => void
    google: typeof google
  }
}

export default function GoogleMap({ apiKey }: GoogleMapProps) {
  const mapRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const initMap = () => {
      if (mapRef.current && window.google) {
        const lagos = { lat: 6.5244, lng: 3.3792 }
        const map = new window.google.maps.Map(mapRef.current, {
          center: lagos,
          zoom: 11,
          styles: [
            { elementType: "geometry", stylers: [{ color: "#242f3e" }] },
            { elementType: "labels.text.stroke", stylers: [{ color: "#242f3e" }] },
            { elementType: "labels.text.fill", stylers: [{ color: "#746855" }] },
            {
              featureType: "administrative.locality",
              elementType: "labels.text.fill",
              stylers: [{ color: "#d59563" }],
            },
            {
              featureType: "poi",
              elementType: "labels.text.fill",
              stylers: [{ color: "#d59563" }],
            },
            {
              featureType: "poi.park",
              elementType: "geometry",
              stylers: [{ color: "#263c3f" }],
            },
            {
              featureType: "poi.park",
              elementType: "labels.text.fill",
              stylers: [{ color: "#6b9a76" }],
            },
            {
              featureType: "road",
              elementType: "geometry",
              stylers: [{ color: "#38414e" }],
            },
            {
              featureType: "road",
              elementType: "geometry.stroke",
              stylers: [{ color: "#212a37" }],
            },
            {
              featureType: "road",
              elementType: "labels.text.fill",
              stylers: [{ color: "#9ca5b3" }],
            },
            {
              featureType: "road.highway",
              elementType: "geometry",
              stylers: [{ color: "#746855" }],
            },
            {
              featureType: "road.highway",
              elementType: "geometry.stroke",
              stylers: [{ color: "#1f2835" }],
            },
            {
              featureType: "road.highway",
              elementType: "labels.text.fill",
              stylers: [{ color: "#f3d19c" }],
            },
            {
              featureType: "transit",
              elementType: "geometry",
              stylers: [{ color: "#2f3948" }],
            },
            {
              featureType: "transit.station",
              elementType: "labels.text.fill",
              stylers: [{ color: "#d59563" }],
            },
            {
              featureType: "water",
              elementType: "geometry",
              stylers: [{ color: "#17263c" }],
            },
            {
              featureType: "water",
              elementType: "labels.text.fill",
              stylers: [{ color: "#515c6d" }],
            },
            {
              featureType: "water",
              elementType: "labels.text.stroke",
              stylers: [{ color: "#17263c" }],
            },
          ],
        })

        new window.google.maps.Marker({
          position: lagos,
          map: map,
          title: 'Lagos, Nigeria',
        })
      }
    }

    if (!window.google) {
      const script = document.createElement('script')
      script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&callback=initMap`
      script.async = true
      script.defer = true
      document.head.appendChild(script)
      window.initMap = initMap
    } else {
      initMap()
    }

    return () => {
      if (window.google) {
        window.google = undefined as any
      }
      const scripts = document.getElementsByTagName('script')
      for (let i = scripts.length - 1; i >= 0; i--) {
        if (scripts[i].src.indexOf('maps.googleapis.com/maps/api') > -1) {
          scripts[i].parentNode?.removeChild(scripts[i])
        }
      }
    }
  }, [apiKey])

  return <div ref={mapRef} className="w-full h-64 rounded-lg overflow-hidden" />
}