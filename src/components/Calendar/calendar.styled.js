import styled from "styled-components";
import { DayPicker } from "react-day-picker";

export const CalendarContent = styled.div`
  margin-bottom: 12px;
`;

export const CalendarTtl = styled.p`
  margin-bottom: 14px;
  padding: 0 7px;
  font-size: 14px;
  font-weight: 600;
`;

export const CalendarBlock = styled.div`
  display: block;
`;

export const CalendarNav = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 14px;
  padding: 0 7px;
`;

export const CalendarMonth = styled.div`
  color: #94a6be;
  font-size: 14px;
  line-height: 25px;
  font-weight: 600;
`;

export const NavActions = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const NavAction = styled.div`
  width: 18px;
  height: 25px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CalendarPeriod = styled.div`
  padding: 0 7px;
`;

export const CalendarP = styled.p`
  color: #94a6be;
  font-size: 10px;
  line-height: 1;
`;

export const CalendarSpan = styled.span`
  color: #000000;
`;

export const CalDayPicker = styled(DayPicker)`
  color: #94a6be;
  --rdp-caption-font-size: 14px;
  font-size: 10px;
  --rdp-cell-size: 22px;
  --rdp-accent-color: #94a6be;
`;
