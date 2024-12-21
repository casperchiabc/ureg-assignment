import { useState } from "react";
import useFetchRates from "../hooks/useFetchRates";
import MainHeader from "./MainHeader";
import DatePicker from "react-date-picker";
import { format } from "date-fns";

import { FaSpinner } from "react-icons/fa";
import { IoMdCalendar } from "react-icons/io";
import "react-date-picker/dist/DatePicker.css";
import "react-calendar/dist/Calendar.css";
import RateItems from "./RateItems";

export default function Main() {
    const [ date, setDate ] = useState(offsetTimezone(new Date()));
    const { data, error, isLoading } = useFetchRates(date);

    function offsetTimezone(date) {
        return new Date(date.getTime() - date.getTimezoneOffset()*60*1000);
    }

    return (
        <div className="p-6 max-w-[1020px] m-auto">
            <MainHeader />
            <div className="flex items-center justify-between mx-12 mt-5 mb-1">
                <span className="font-bold text-lg">
                    {!date
                        ? "Please select a date"
                        : "Rates as of " + format(date, "dd-MM-yyyy")}
                </span>
                <span className="relative">
                    <DatePicker
                        onChange={(newDate) => setDate(offsetTimezone(newDate))}
                        clearIcon={null}
                        calendarIcon={<IoMdCalendar />}
                        format="dd-MM-y"
                        value={date}
                        className={
                            isLoading
                                ? "bg-gray-200 border-2 border-gray-300 text-slate-700 rounded-md py-1 pl-1"
                                : "bg-gray-50 border-2 border-gray-300 text-slate-700 rounded-md py-1 pl-1 "
                        }
                        disabled={isLoading}
                    />
                </span>
            </div>
            
            {error && error ? <div className="ml-12 mt-8 text-red-700 text-xl">{error}</div> : ''}

            {isLoading ? <div><FaSpinner className="text-3xl spin m-auto mt-16" /></div> : ''}

            {!error && !isLoading && <RateItems data={data} />}
        </div>
    );
}
