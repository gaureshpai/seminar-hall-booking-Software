'use client';

import { saveBooking } from '@/actions/formSubmissions';
import { useForm } from "react-hook-form";
import { useState } from "react";
import toast, { Toaster } from 'react-hot-toast';
import sendMail from '@/actions/formSubmissions';

type BookingFormValues = {
    Date: string;
    Time: string;
    Department: string;
    Event: string;
    FacultyIncharge: string;
    email: string;
    Hall: string;
};

const BooktheHall = () => {
    const { register, handleSubmit, reset } = useForm<BookingFormValues>();
    const [loading, setLoading] = useState(false);

    const onSubmit = async (data: BookingFormValues) => {
        setLoading(true);
        try {
            await saveBooking({
                ...data,
                Date: new Date(data.Date),
            } as any);
            toast.success("Booking successful!");
            try {
                const emailRes = await sendMail(
                    data.email, 
                    "Booking Confirmation",
                    `<p>Hello ${data.FacultyIncharge},<br />Your booking for <strong>${data.Event}</strong> in <strong>${data.Hall}</strong> on <strong>${data.Date}</strong> at <strong>${data.Time}</strong> has been received.</p>`
                );
                toast.success("Email sent successfully");
                console.log("Email sent:", emailRes);
            } catch (emailErr) {
                console.error("Email sending failed:", emailErr);
                toast.error("Booking saved but email failed.");
            }
            reset();
        } catch (err: any) {
            toast.error("Booking failed: You already may have booked a Hall");
            console.error("Booking Failed:", err.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="container mx-auto max-w-7xl">
            <Toaster />
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="bg-[#04091e] text-white p-8 shadow-lg"
            >
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="mb-8 md:mb-0 md:w-1/4 text-center md:text-left">
                        <h2 className="text-2xl font-bold p-2 uppercase">
                            Book
                            <br /> the <br /> Seminar <br />Hall
                        </h2>
                    </div>

                    <div className="md:w-3/4">
                        <div className="flex flex-wrap mx-2">
                            <div className="w-full md:w-1/3 px-2 mb-6 md:mb-0">
                                <div className="mb-4">
                                    <input
                                        type="date"
                                        {...register("Date", { required: true })}
                                        className="w-full py-2 px-3 border border-[#2b3146] placeholder-gray-400 bg-[#04091e] text-gray-400 focus:outline-none focus:border-yellow-500"
                                        aria-label="Schedule Date"
                                    />
                                </div>
                                <div>
                                    <select
                                        {...register("Event", { required: true })}
                                        className="w-full py-2 px-3 border placeholder-gray-400 border-[#2b3146] bg-[#04091e] text-gray-400 focus:outline-none focus:border-yellow-500"
                                        aria-label="Event"
                                    >
                                        <option value="">Event</option>
                                        <option value="Academic Events">Academic Events</option>
                                        <option value="Cultural Events">Cultural Events</option>
                                        <option value="Tech Events">Tech Events</option>
                                        <option value="Administrative Events">Administrative Events</option>
                                        <option value="Others">Others</option>
                                    </select>
                                </div>
                                
                            </div>

                            <div className="w-full md:w-1/3 px-2 mb-6 md:mb-0">
                                <div className="mb-4">
                                    <select
                                        {...register("Time", { required: true })}
                                        className="w-full py-2 px-3 border placeholder-gray-400 border-[#2b3146] bg-[#04091e] text-gray-400 focus:outline-none focus:border-yellow-500"
                                        aria-label="Time"
                                    >
                                        <option value="">Time</option>
                                        <option value="Morning">Morning</option>
                                        <option value="Afternoon">Afternoon</option>
                                    </select>
                                </div>
                                <div>
                                    <input
                                        type="text"
                                        {...register("FacultyIncharge", { required: true })}
                                        className="w-full py-2 px-3 border border-[#2b3146] bg-[#04091e] text-gray-400 placeholder-gray-400 focus:outline-none focus:border-yellow-500"
                                        placeholder="Faculty Incharge"
                                        aria-label="Faculty Incharge"
                                    />
                                </div>
                                <div className='mt-4'>
                                    <input
                                        type="text"
                                        {...register("email", {required: true})}
                                        className="w-full py-2 px-3 border border-[#2b3146] bg-[#04091e] text-gray-400 placeholder-gray-400 focus:outline-none focus:border-yellow-500"
                                        placeholder="Email"
                                        aria-label="email"
                                    />
                                </div>
                            </div>

                            <div className="w-full md:w-1/3 px-2">
                                <div>
                                    <select
                                        {...register("Department", { required: true })}
                                        className="w-full py-2 px-3 border placeholder-gray-400 border-[#2b3146] bg-[#04091e] text-gray-400 focus:outline-none focus:border-yellow-500"
                                        aria-label="Department"
                                    >
                                        <option value="">Department</option>
                                        <option value="CSE">CSE</option>
                                        <option value="ISE">ISE</option>
                                        <option value="AIML">AIML</option>
                                        <option value="ICB">ICB</option>
                                        <option value="AIDS">AIDS</option>
                                        <option value="ECE">ECE</option>
                                        <option value="CIVIL">CIVIL</option>
                                        <option value="MECH">MECH</option>
                                    </select>

                                </div>
                                <div className='mt-4'>
                                    <select
                                        {...register("Hall", { required: true })}
                                        className="w-full py-2 pt-3 px-3 border placeholder-gray-400 border-[#2b3146] bg-[#04091e] text-gray-400 focus:outline-none focus:border-yellow-500"
                                        aria-label="Event"
                                    >
                                        <option value="">Hall</option>
                                        <option value="Seminar Hall 1">Seminar Hall 1</option>
                                        <option value="Seminar Hall 2">Seminar Hall 2</option>
                                        <option value="Seminar Hall 3">Seminar Hall 3</option>
                                    </select>
                                </div>
                                <button
                                    type="submit"
                                    disabled={loading}
                                    className="inline-block w-full mt-4 bg-yellow-500 text-white py-2 px-4 hover:bg-yellow-600 transition duration-300 text-center"
                                >
                                    {loading ? "Booking..." : "Book Now"}
                                </button>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default BooktheHall;
