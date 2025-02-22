import React, { useEffect, useRef, useState } from 'react';
import createGlobe from 'cobe';

function Globe() {
  const canvasRef = useRef();
  const [globeSize, setGlobeSize] = useState(getGlobeSize());

  function getGlobeSize() {
    if (window.innerWidth >= 1280) return 600;
    if (window.innerWidth >= 1024) return 500;
    if (window.innerWidth >= 768) return 470;
    if (window.innerWidth >= 640) return 380;
    if (window.innerWidth >= 475) return 320;
    return 300;
  }

  useEffect(() => {
    const handleResize = () => {
      setGlobeSize(getGlobeSize());
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    let phi = 0;

    const globe = createGlobe(canvasRef.current, {
      width: globeSize,
      height: globeSize,
      phi: 0,
      theta: 0,
      dark: 1,
      diffuse: 1.2,
      mapSamples: 16000,
      mapBrightness: 6,
      baseColor: [0.3, 0.3, 0.3],
      markerColor: [0.1, 0.8, 1],
      glowColor: [1, 1, 1],
      markers: [
        // Asia
        { location: [37.7749, -122.4194], size: 0.03 }, // San Francisco
        { location: [40.7128, -74.006], size: 0.03 }, // New York
        { location: [1.3521, 103.8198], size: 0.03 }, // Singapore
        { location: [35.8617, 104.1954], size: 0.03 }, // China
        { location: [28.6139, 77.209], size: 0.03 }, // New Delhi, India
        { location: [19.076, 72.8777], size: 0.03 }, // Mumbai, India
        { location: [13.0827, 80.2707], size: 0.03 }, // Chennai, India
        { location: [22.5726, 88.3639], size: 0.03 }, // Kolkata, India
        { location: [12.9716, 77.5946], size: 0.03 }, // Bangalore, India
        { location: [17.385, 78.4867], size: 0.03 }, // Hyderabad, India
        { location: [23.2599, 77.4126], size: 0.03 }, // Bhopal, India
        { location: [26.9124, 75.7873], size: 0.03 }, // Jaipur, India
        { location: [21.1702, 72.8311], size: 0.03 }, // Surat, India
        { location: [11.0168, 76.9558], size: 0.03 }, // Coimbatore, India
        { location: [15.2993, 74.124], size: 0.03 }, // Goa, India
        { location: [25.3176, 82.9739], size: 0.03 }, // Varanasi, India
        { location: [27.0238, 74.2179], size: 0.03 }, // Ajmer, India
        { location: [30.7333, 76.7794], size: 0.03 }, // Chandigarh, India
        { location: [31.1048, 77.1734], size: 0.03 }, // Shimla, India
        { location: [34.0837, 74.7973], size: 0.03 }, // Srinagar, India
        { location: [15.9129, 79.74], size: 0.03 }, // Andhra Pradesh, India
        { location: [22.9734, 78.6569], size: 0.03 }, // Chhattisgarh, India
        { location: [23.6102, 85.2799], size: 0.03 }, // Ranchi, India
        { location: [20.9517, 85.0985], size: 0.03 }, // Bhubaneswar, India
        { location: [25.0961, 85.3131], size: 0.03 }, // Patna, India
        { location: [24.6637, 93.9063], size: 0.03 }, // Imphal, India
        { location: [27.533, 88.5122], size: 0.03 }, // Gangtok, India
        { location: [26.2006, 92.9376], size: 0.03 }, // Guwahati, India
        { location: [23.1645, 92.9376], size: 0.03 }, // Agartala, India
        { location: [25.467, 91.3662], size: 0.03 }, // Shillong, India
        { location: [27.0238, 93.6053], size: 0.03 }, // Itanagar, India
        { location: [25.5705, 91.8801], size: 0.03 }, // Aizawl, India
        { location: [24.517, 93.953], size: 0.03 }, // Kohima, India
        { location: [11.9416, 79.8083], size: 0.03 }, // Puducherry, India
        { location: [10.8505, 76.2711], size: 0.03 }, // Lakshadweep, India
        { location: [8.0883, 77.5385], size: 0.03 }, // Andaman and Nicobar Islands, India
        { location: [9.082, 8.6753], size: 0.03 }, // Nigeria
        { location: [28.3949, 84.124], size: 0.03 }, // Nepal
        { location: [7.8731, 80.7718], size: 0.03 }, // Sri Lanka
        { location: [23.685, 90.3563], size: 0.03 }, // Bangladesh
        { location: [33.9391, 67.71], size: 0.03 }, // Afghanistan
        { location: [51.5074, -0.1278], size: 0.03 }, // England
        { location: [55.7558, 37.6173], size: 0.03 }, // Russia
        { location: [25.2048, 55.2708], size: 0.03 }, // UAE
        { location: [34.0522, -118.2437], size: 0.03 }, // Los Angeles
        { location: [41.8781, -87.6298], size: 0.03 }, // Chicago
        { location: [29.7604, -95.3698], size: 0.03 }, // Houston
        { location: [33.4484, -112.074], size: 0.03 }, // Phoenix
        { location: [39.7392, -104.9903], size: 0.03 }, // Denver
        { location: [48.8566, 2.3522], size: 0.03 }, // Paris, France
        { location: [52.52, 13.405], size: 0.03 }, // Berlin, Germany
        { location: [35.6895, 139.6917], size: 0.03 }, // Tokyo, Japan
        { location: [37.5665, 126.978], size: 0.03 }, // Seoul, South Korea
        { location: [31.2304, 121.4737], size: 0.03 }, // Shanghai, China
        { location: [22.3964, 114.1095], size: 0.03 }, // Hong Kong
        { location: [55.7558, 37.6173], size: 0.03 }, // Moscow, Russia
        { location: [40.7128, -74.006], size: 0.03 }, // New York, USA
        { location: [34.0522, -118.2437], size: 0.03 }, // Los Angeles, USA
        { location: [51.5074, -0.1278], size: 0.03 }, // London, UK
        { location: [35.6895, 139.6917], size: 0.03 }, // Tokyo, Japan
        { location: [37.7749, -122.4194], size: 0.03 }, // San Francisco, USA

        // Australia
        { location: [-33.8688, 151.2093], size: 0.03 }, // Sydney
        { location: [-37.8136, 144.9631], size: 0.03 }, // Melbourne
        { location: [-27.4698, 153.0251], size: 0.03 }, // Brisbane
        { location: [-31.9505, 115.8605], size: 0.03 }, // Perth
        { location: [-34.9285, 138.6007], size: 0.03 }, // Adelaide
        { location: [-35.2809, 149.13], size: 0.03 }, // Canberra
        { location: [-42.8821, 147.3272], size: 0.03 }, // Hobart
        { location: [-12.4634, 130.8456], size: 0.03 }, // Darwin

        // North America
        { location: [45.4215, -75.6972], size: 0.03 }, // Ottawa, Canada
        { location: [43.65107, -79.347015], size: 0.03 }, // Toronto, Canada
        { location: [49.2827, -123.1207], size: 0.03 }, // Vancouver, Canada
        { location: [40.7128, -74.006], size: 0.03 }, // New York, USA
        { location: [34.0522, -118.2437], size: 0.03 }, // Los Angeles, USA
        { location: [41.8781, -87.6298], size: 0.03 }, // Chicago, USA
        { location: [29.7604, -95.3698], size: 0.03 }, // Houston, USA
        { location: [33.4484, -112.074], size: 0.03 }, // Phoenix, USA
        { location: [39.7392, -104.9903], size: 0.03 }, // Denver, USA
        { location: [25.7617, -80.1918], size: 0.03 }, // Miami, USA
        { location: [32.7157, -117.1611], size: 0.03 }, // San Diego, USA
        { location: [47.6062, -122.3321], size: 0.03 }, // Seattle, USA
        { location: [38.9072, -77.0369], size: 0.03 }, // Washington, D.C., USA
        { location: [37.7749, -122.4194], size: 0.03 }, // San Francisco, USA
        { location: [42.3601, -71.0589], size: 0.03 }, // Boston, USA
        { location: [45.5017, -73.5673], size: 0.03 }, // Montreal, Canada
        { location: [19.4326, -99.1332], size: 0.03 }, // Mexico City, Mexico
        { location: [20.6597, -103.3496], size: 0.03 }, // Guadalajara, Mexico
        { location: [25.6866, -100.3161], size: 0.03 }, // Monterrey, Mexico

        // South America
        { location: [-23.5505, -46.6333], size: 0.03 }, // São Paulo, Brazil
        { location: [-22.9068, -43.1729], size: 0.03 }, // Rio de Janeiro, Brazil
        { location: [-15.8267, -47.9218], size: 0.03 }, // Brasília, Brazil
        { location: [-34.6037, -58.3816], size: 0.03 }, // Buenos Aires, Argentina
        { location: [-33.4489, -70.6693], size: 0.03 }, // Santiago, Chile
        { location: [-12.0464, -77.0428], size: 0.03 }, // Lima, Peru
        { location: [4.711, -74.0721], size: 0.03 }, // Bogotá, Colombia
        { location: [10.4806, -66.9036], size: 0.03 }, // Caracas, Venezuela
        { location: [-0.1807, -78.4678], size: 0.03 }, // Quito, Ecuador
        { location: [-16.5, -68.15], size: 0.03 }, // La Paz, Bolivia

        // Africa
        { location: [-26.2041, 28.0473], size: 0.03 }, // Johannesburg, South Africa
        { location: [-33.9249, 18.4241], size: 0.03 }, // Cape Town, South Africa
        { location: [-29.8587, 31.0218], size: 0.03 }, // Durban, South Africa
        { location: [-1.2921, 36.8219], size: 0.03 }, // Nairobi, Kenya
        { location: [6.5244, 3.3792], size: 0.03 }, // Lagos, Nigeria
        { location: [5.6037, -0.187], size: 0.03 }, // Accra, Ghana
        { location: [30.0444, 31.2357], size: 0.03 }, // Cairo, Egypt
        { location: [36.8065, 10.1815], size: 0.03 }, // Tunis, Tunisia
        { location: [33.5731, -7.5898], size: 0.03 }, // Casablanca, Morocco
        { location: [14.7167, -17.4677], size: 0.03 }, // Dakar, Senegal
      ],
      onRender: (state) => {
        state.phi = phi;
        phi += 0.01;
      },
    });

    return () => {
      globe.destroy();
    };
  }, [globeSize]);

  return (
    <div className="mx-auto flex w-full items-center justify-center overflow-hidden">
      <div className="w-[300px] overflow-hidden xs:w-[320px] sm:w-[380px] md:w-[470px] lg:w-[500px] xl:w-[600px]">
        <canvas
          ref={canvasRef}
          style={{
            width: `${globeSize}px`,
            height: `${globeSize}px`,
          }}
          className="overflow-hidden"
        />
      </div>
    </div>
  );
}

export default Globe;
