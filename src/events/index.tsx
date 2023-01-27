import { useEffect, useState } from "react";
import "./style.css"
import { Dots } from "../dots";
export function Timer({ time, openTime }: { time: Date; openTime?: Date }) {
    function Holder({
        text,
        minusNumber = 0,
        remainNumber = 0,
    }: {
        text: string;
        minusNumber?: number;
        remainNumber?: number;
    }) {
        return (
            <div className="box">
                <div className="counter">
                    <span>{minusNumber}-</span>
                    <span>{remainNumber}</span>
                </div>
                <span className="tail">{text}</span>
            </div>
        );
    }
    const [remTime, setRemTime] = useState(remainTime());
    const [overTime, setOverTime] = useState(theTimeOver());
    function remainTime() {
        const remainSeconds = Math.max(0, time.getTime() - Date.now());
        const day = Math.floor(remainSeconds / (1000 * 60 * 60 * 24));
        const hours = Math.floor((remainSeconds / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((remainSeconds / (1000 * 60)) % 60);
        const seconds = Math.floor((remainSeconds / 1000) % 60);
        return {
            day,
            hours,
            minutes,
            seconds,
        };
    }
    function theTimeOver() {
        if (!openTime)
            return {
                day: 0,
                hours: 0,
                minutes: 0,
                seconds: 0,
            };
        const overDays = Math.max(0, Date.now() - openTime.getTime());
        const day = Math.floor((overDays / (1000 * 60 * 60 * 24)) % 30);
        const hours = Math.floor((overDays / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((overDays / (1000 * 60)) % 60);
        const seconds = Math.floor((overDays / 1000) % 60);
        return {
            day,
            hours,
            minutes,
            seconds,
        };
    }
    useEffect(() => {
        setInterval(() => {
            setRemTime(remainTime());
            setOverTime(theTimeOver());
        }, 1000);
    }, []);

    return (
        <div className="time-counter">
            <Holder
                text="days"
                remainNumber={remTime.day}
                minusNumber={overTime.day}
            />
            <Holder
                text="hours"
                remainNumber={remTime.hours}
                minusNumber={overTime.hours}
            />
            <Holder
                text="minutes"
                remainNumber={remTime.minutes}
                minusNumber={overTime.minutes}
            />
            <Holder
                text="seconds"
                remainNumber={remTime.seconds}
                minusNumber={overTime.seconds}
            />
        </div>
    );
}
export default function Events() {
    return (
        <div className="events" id="events">
            <Dots />
            <div className="container">
                <h2 className="special-heading">latest events</h2>
                <div className="first-container">
                    <img src="/images/events.png" alt="" />
                    <div className="content-container">
                        <Timer
                            time={new Date(1000 * 60 * 60 * 24 * 30 * 12 * 100)}
                        />
                        <div className="text-container">
                            <h1>
                                Tech Masters Event {new Date().getFullYear()}
                            </h1>
                            <p>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Et vero tenetur doloremque
                                iusto ut adipisci quam ratione aliquam excepturi
                                nulla in harum, veritatis porro
                            </p>
                        </div>
                    </div>
                </div>
                <form className="subscribe-button" autoComplete="off">
                    <input type="email" name="email"  placeholder="Enter your email" />
                    <input type="submit" value="subscribe" />
                </form>
            </div>
        </div>
    );
}
