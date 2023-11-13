import { FC } from 'react';
import ApiCalendar from 'react-google-calendar-api';
import { useDispatch, useSelector } from 'react-redux';

import { setCalendarEventList, setIsSigned } from '../../redux/slices/calendarSlice';
import { RootState } from '../../redux/store';
import { Button } from '../Common/Button';
import {
  AuthorizationContainer,
  CalendarEventsContainer,
  CalendarMessage,
  MessageText,
  TimeBubble,
  Wrapper
} from './style';

interface CalendarResponse {
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

const config = {
  clientId: process.env.REACT_APP_GOOGLE_CLIENT_ID!,
  apiKey: process.env.REACT_APP_GOOGLE_API_KEY!,
  scope: 'https://www.googleapis.com/auth/calendar.events.readonly',
  discoveryDocs: ['https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest']
};

const apiCalendar = new ApiCalendar(config);

export const Calendar: FC = () => {
  const isSigned = useSelector((state: RootState) => state.calendar.isSigned);
  const calendarEventList = useSelector((state: RootState) => state.calendar.calendarEventList);

  const dispatch = useDispatch();

  const handleSignIn = (): void => {
    apiCalendar
      .handleAuthClick()
      .then(() => {
        const timeMin = new Date();
        const timeMax = new Date(timeMin);
        timeMax.setDate(timeMin.getDate() + 1);
        apiCalendar
          .listEvents({
            timeMin: timeMin.toISOString(),
            timeMax: timeMax.toISOString(),
            maxResults: 3,
            singleEvents: true,
            orderBy: 'startTime'
          })
          .then(({ result }: { result: CalendarResponse }) => {
            dispatch(setCalendarEventList(result.items));
          });
        dispatch(setIsSigned(true));
      })
      .catch(() => {
        console.error('Popup closed');
      });
  };

  const handleSignOut = (): void => {
    apiCalendar.handleSignoutClick();
    dispatch(setIsSigned(false));
    dispatch(setCalendarEventList([]));
  };

  const getFormattedTime = (dateTime: string) => {
    return new Date(dateTime).toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: false
    });
  };

  return (
    <Wrapper>
      <CalendarEventsContainer>
        {isSigned && calendarEventList.length === 0 ? (
          <MessageText>There is no events today</MessageText>
        ) : (
          calendarEventList.map((item: CalendarEvent) => (
            <CalendarMessage key={item.htmlLink}>
              <TimeBubble>{getFormattedTime(item.start.dateTime)}</TimeBubble>
              <MessageText>{item.summary}</MessageText>
            </CalendarMessage>
          ))
        )}
      </CalendarEventsContainer>
      <AuthorizationContainer>
        {!isSigned ? (
          <Button onClick={handleSignIn}>Sign In</Button>
        ) : (
          <Button onClick={handleSignOut}>Sign Out</Button>
        )}
      </AuthorizationContainer>
    </Wrapper>
  );
};
