import { useRef, useState } from 'react';

import { StandaloneSearchBox, useJsApiLoader } from '@react-google-maps/api';
import { MapPin } from 'lucide-react';

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select';
import { googleLibraries } from '@/config';
import { setStepTwoAnswer } from '@/store';

export default function LocationSearch({ label }: { label?: string }) {
  const inputRef = useRef<google.maps.places.SearchBox | null>(null);
  const [inputValue, setInputValue] = useState('');
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY as string,
    // @ts-expect-error no types for this
    libraries: googleLibraries
  });

  const handleOnPlacesChanged = () => {
    const places = inputRef.current?.getPlaces();
    if (places && places.length > 0) {
      setInputValue(places[0].formatted_address || '');
    }

    if (places && places.length > 0) {
      setStepTwoAnswer((prev) => ({
        ...prev,
        location: places[0]
      }));
    }
  };

  const handleUseCurrentLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords;
          const geocodeUrl = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${import.meta.env.VITE_GOOGLE_MAPS_API_KEY}`;

          try {
            const response = await fetch(geocodeUrl);
            const data = await response.json();
            if (data.results.length > 0) {
              setInputValue(data.results[0].formatted_address);
            }

            setStepTwoAnswer((prev) => ({
              ...prev,
              location: data.results[0]
            }));
          } catch (error) {
            console.error('Error fetching location:', error);
          }
        },
        (error) => {
          console.error('Error getting geolocation:', error);
        }
      );
    }
  };

  return (
    <div
      className={
        'flex grid-cols-[1fr_auto] flex-col justify-between gap-x-7 gap-y-10 pt-8 md:grid md:items-end md:pt-12'
      }
    >
      <div className={'flex w-full flex-col gap-2 md:gap-4'}>
        <div
          className={
            'flex flex-col flex-wrap justify-between gap-1 md:flex-row md:items-center'
          }
        >
          <h3 className={'text-xl font-bold md:text-lg lg:text-xl'}>{label}</h3>
          <button
            onClick={handleUseCurrentLocation}
            className={'flex items-center gap-1 text-sm font-bold underline'}
          >
            <MapPin size={19} />
            Use My Current Location
          </button>
        </div>
        {isLoaded && (
          <div className={'relative'}>
            <StandaloneSearchBox
              onLoad={(ref) => (inputRef.current = ref)}
              onPlacesChanged={handleOnPlacesChanged}
            >
              <input
                type='text'
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                className={
                  'border-border text-md h-10 w-full border bg-gray-200 px-2.5 py-1.5 placeholder:text-gray-400'
                }
                placeholder={'Start typing a location'}
              />
            </StandaloneSearchBox>
            <p className={'absolute pt-2.5 text-xs text-[#818181] md:pt-4'}>
              Powered by Google Maps
            </p>
          </div>
        )}
      </div>

      <div className={'flex flex-col gap-2 md:gap-4'}>
        <h3 className={'text-xl font-bold md:text-lg lg:text-xl'}>
          Preferred local distance
        </h3>
        <Select
          defaultValue={'5'}
          onValueChange={(value) => {
            return setStepTwoAnswer((prev) => ({
              ...prev,
              radius: Number(value)
            }));
          }}
        >
          <SelectTrigger className='w-[180px]'>
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value='5'>Within 5 miles</SelectItem>
            <SelectItem value='10'>Within 10 miles</SelectItem>
            <SelectItem value='25'>Within 25 miles</SelectItem>
            <SelectItem value='50'>Within 50 miles</SelectItem>
            <SelectItem value='100'>Within 100 miles</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}
