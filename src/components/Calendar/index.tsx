import { FC, MouseEvent, useState } from "react";
import { Button } from "../Common/Button";
import ApiCalendar from 'react-google-calendar-api';
import { AuthorizationContainer, CalendarEventsContainer, CalendarMessage, MessageText, TimeBubble, Wrapper } from "./style";

interface CalendarEvent {
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

export const Calendar: FC = () => {
  const [calendarEventList, setCalendarEventList] = useState([])
  const [isSigned, setIsSigned] = useState(false)

  const config = {
    clientId: process.env.REACT_APP_GOOGLE_CLIENT_ID!,
    apiKey: process.env.REACT_APP_GOOGLE_API_KEY!,
    scope: "https://www.googleapis.com/auth/calendar.events.readonly",
    discoveryDocs: [
      "https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest",
    ],
  }

  const apiCalendar = new ApiCalendar(config)

  const handleSignIn = (): void => {
    apiCalendar.handleAuthClick().then((res => {
      const timeMin = new Date()
      const timeMax = new Date(timeMin)
      timeMax.setDate(timeMin.getDate() + 1)
      apiCalendar.listEvents({
        timeMin: timeMin.toISOString(),
        timeMax: timeMax.toISOString(),
        maxResults: 3,
        singleEvents: true,
        orderBy: 'startTime'
      }).then(({ result }: any) => {
        setCalendarEventList(result.items)
      });
      setIsSigned(true)
    })).catch((err) => {
      console.error('Popup closed')
    })
  }

  const handleSignOut = (): void => {
    apiCalendar.handleSignoutClick();
    setIsSigned(false)
    setCalendarEventList([])
  }

  return (
    <Wrapper>
      <CalendarEventsContainer>
        {(isSigned && calendarEventList.length < 1) ?
          <MessageText>There is no events today</MessageText> :
          calendarEventList.map((item: CalendarEvent, index: number) => {
            const time = new Date(item.start.dateTime).toLocaleTimeString("en-US", {
              hour: "2-digit",
              minute: "2-digit",
              hour12: false,
            })
            const title = item.summary
            return (
              <CalendarMessage key={index}>
                <TimeBubble>{time}</TimeBubble>
                <MessageText>{title}</MessageText>
              </CalendarMessage>
            )
          })}

      </CalendarEventsContainer>
      <AuthorizationContainer>
        {!isSigned ?
          <Button onClick={handleSignIn}>Sign In</Button> :
          <Button onClick={handleSignOut}>Sign Out</Button>
        }
      </AuthorizationContainer>
    </Wrapper>
  )
}