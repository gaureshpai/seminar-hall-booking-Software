'use client';

import { saveBooking } from '@/actions/formSubmissions';
import { useForm } from "react-hook-form";
import { useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
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

type BookingPayload = {
    userId: string;
    Date: Date;
    Time: string;
    Department: string;
    Event: string;
    FacultyIncharge: string;
    Hall: string;
    email: string;
    status: string;
    createdAt: string;
    updatedAt: string;
};


const BooktheHall = () => {
    const { data: session } = useSession();
    const router = useRouter();
    const { register, handleSubmit, reset } = useForm<BookingFormValues>();
    const [loading, setLoading] = useState(false);

    const onSubmit = async (data: BookingFormValues) => {
        if (!session) {
            setLoading(true);
            toast.error("Please login to book a hall");
            setTimeout(() => {
                router.push("/sign-in");
                setLoading(false);
            }, 1000);
            return;
        }

        setLoading(true);
        try {
            const bookingPayload: BookingPayload = {
                userId: session.user?.id ?? "unknown",
                Date: new Date(data.Date),
                Time: data.Time,
                Department: data.Department,
                Event: data.Event,
                FacultyIncharge: data.FacultyIncharge,
                Hall: data.Hall,
                email: data.email,
                status: "pending",
                createdAt: new Date().toISOString(),
                updatedAt: new Date().toISOString(),
            };

            await saveBooking(bookingPayload);

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
        } catch (err: unknown) {
            let message = "Booking failed";
            if (err instanceof Error) message = err.message;
            toast.error(`${message}: You may have already booked a Hall`);
            console.error("Booking Failed:", message);
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
                        {session && (
                            <p className="text-sm text-gray-400 mt-2">
                                Welcome, {session.user?.name || session.user?.email}
                            </p>
                        )}
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
                                        type="email"
                                        {...register("email", { required: true })}
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
                                        aria-label="Hall"
                                    >
                                        <option value="">Hall</option>
                                        <option value="Seminar Hall 1">Seminar Hall 1</option>
                                        <option value="Seminar Hall 2">Seminar Hall 2</option>
                                        <option value="Seminar Hall 3">Seminar Hall 3</option>
                                    </select>
                                </div>
                                <button
                                    type="submit"
                                    disabled={loading || !session}
                                    className={`inline-block w-full mt-4 text-white py-2 px-4 transition duration-300 text-center disabled:cursor-not-allowed ${session
                                        ? 'bg-yellow-500 hover:bg-yellow-600 disabled:bg-gray-500'
                                        : 'bg-gray-500 cursor-not-allowed'
                                        }`}
                                >
                                    {loading
                                        ? (session ? "Booking..." : "Redirecting...")
                                        : (session ? "Book Now" : "You need to sign-in to book a hall")
                                    }
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