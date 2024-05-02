import MeetingTypeList from '@/components/MeetingTypeList';
import React from 'react';

const Home = () => {
    const current = new Date();
    const time = current.toLocaleString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: true,
    }); //11:30 p.m.
    /* const weekday = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const month = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
    ];
    const date = `${weekday[current.getDay()]}, ${
        month[current.getMonth()]
    } ${current.getDate()}, ${current.getFullYear()} `; //Saturday, March 23,2024 */

    const date = new Intl.DateTimeFormat('en-US', { dateStyle: 'full' }).format(current);
    return (
        <section className="flex size-full flex-col gap-10 text-white">
            <div className="h-[300px] w-full rounded-[20px] bg-hero bg-center bg-cover relative">
                <div
                    className="flex h-full flex-col justify-between max-md:px-5 
                max-md:py-8 md:p-8 lg:p-11
                "
                >
                    <h2
                        className="glassmorphism max-w-[270px] rounded py-2 text-left
                    text-base font-normal z-10 px-2"
                    >
                        Upcoming Meetimg at 1:30pm
                    </h2>
                    <div className="flex flex-col gap-2">
                        <h1 className="text-4xl font-extrabold lg:text-[42px] z-10">{time}</h1>
                        <p className="text-lg font-medium text-sky-1 lg:text-2xl z-10">{date}</p>
                    </div>
                </div>
                <div className="h-[300px] w-full rounded-[20px] bg-black bg-center bg-cover absolute top-0 left-0 opacity-40"></div>
            </div>
            <MeetingTypeList />
        </section>
    );
};

export default Home;
