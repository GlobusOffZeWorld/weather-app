import { InputHTMLAttributes, RefObject } from 'react';

export interface CalendarResponse {
  kind: string;
  etag: string;
  summary: string;
  description: string;
  updated: string;
  timeZone: string;
  accessRole: string;
  defaultReminders: [
    {
      method: string;
      minutes: number;
    }
  ];
  items: CalendarEvent[];
}

export interface CalendarEvent {
  status: string;
  htmlLink: string;
  summary: string;
  organizer: {
    email: string;
    self: boolean;
  };
  start: {
    dateTime: string;
    timeZone: string;
  };
  end: {
    dateTime: string;
    timeZone: string;
  };
}

export interface SearchBarProps {
  inputProps: InputHTMLAttributes<HTMLInputElement>;
  forwardedRef: RefObject<HTMLInputElement>;
}

export interface LayoutProps {
  children?: React.ReactNode;
}

export interface AutocompleteField {
  city: {
    raw: string;
  };
  geolocation: {
    raw: {
      latitude: string;
      longitude: string;
    };
  };
}

export interface DayWeather {
  datetime: string;
  temp: number;
  conditions: string;
  icon: string;
}

export interface WeatherCardProps extends DayWeather {
  title: string;
}

export interface ForecastStateType {
  dailyData: DayWeather[];
  hourlyData: DayWeather[];
  isLoading: boolean;
  errors: string;
}

export interface ForecastPayloadType {
  userLocation: UserLocationType;
  startDate: string;
  endDate: string;
}

export interface CalendarType {
  isSigned: boolean;
  calendarEventList: CalendarEvent[];
}

export interface UserLocationType {
  cityName?: string;
  latitude: number;
  longitude: number;
}

export type IntervalType = {
  type: 'Daily' | 'Hourly';
};
