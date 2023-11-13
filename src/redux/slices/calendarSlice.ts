import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

import { CalendarEvent, CalendarType } from '@/types/models';

const initialState: CalendarType = {
  isSigned: false,
  calendarEventList: []
};

export const calendarSlice = createSlice({
  name: 'calendar',
  initialState,
  reducers: {
    setIsSigned: (state, { payload: isSigned }: PayloadAction<boolean>) => {
      state.isSigned = isSigned;
    },
    setCalendarEventList: (
      state,
      { payload: calendarEventList }: PayloadAction<CalendarEvent[]>
    ) => {
      state.calendarEventList = calendarEventList;
    }
  }
});

export const { setIsSigned, setCalendarEventList } = calendarSlice.actions;

export default calendarSlice.reducer;
