import "react-day-picker/dist/style.css";
import * as S from "./calendar.styled.js";
import { ru } from "date-fns/locale";
import { format } from "date-fns";

const Calendar = ({ selected, setSelected }) => {
  const formatDate = selected
    ? format(selected, "dd.MM.yy.")
    : "Дата не выбрана";

  return (
    <div className="pop-new-card__calendar calendar">
      <S.CalendarTtl>Даты</S.CalendarTtl>
      <S.CalendarBlock>
        <S.CalendarContent>
          <S.CalDayPicker
            locale={ru}
            mode="single"
            selected={selected}
            onSelect={setSelected}
          />
        </S.CalendarContent>

        <input type="hidden" id="datepick_value" value="08.09.2023" />
        <S.CalendarPeriod>
          <S.CalendarP>
            Срок исполнения: <S.CalendarSpan>{formatDate}</S.CalendarSpan>
          </S.CalendarP>
        </S.CalendarPeriod>
      </S.CalendarBlock>
    </div>
  );
};

export default Calendar;
