"use client"
import React, { useState } from 'react'
import { RainbowButton } from "@/components/ui/rainbow-button"
import phone from '../public/phone.svg'
import Image from "next/image"
import { ShineBorder } from './ui/shine-border'
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useRouter } from 'next/navigation'
interface UserInfo {
    email: string;
    phone: string;
}

const PopUpButton = () => {
    const [popUp, setPopUp] = useState<boolean>(false)
    const [submitting, setsubmitting] = useState<boolean>(false);
    const [userinfo, setuserinfo] = useState<UserInfo>({
        email: "",
        phone: ""
    })
    const router = useRouter();
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setuserinfo((prev) => ({
            ...prev,
            [event.target.name]: event.target.value
        })
        );
    }

    const handleClick = async () => {
        if (!userinfo.email || !userinfo.phone) {
            alert("Please fill out all fields");
            return;
        }
        setsubmitting(true);
        try {
            const res = await fetch(`https://cally.pranjalrana.com/make-call?number=${encodeURIComponent(userinfo.phone)}&email=${encodeURIComponent(userinfo.email)}`);

            const text = await res.text();
            if (text == "hello") {
                setPopUp(false);
                setuserinfo({
                    email: "",
                    phone: ""
                });
            }
        } catch (error) {
            console.log("error ", error);

        }
        finally {
            setsubmitting(false);

        }
    }

    return (
        <div>
            {popUp && (
                <div
                    className="fixed inset-0 min-h-screen bg-black/50 backdrop-blur-sm z-40  animate-in fade-in duration-200"
                    onClick={() => setPopUp(false)}
                />
            )}

            {popUp && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-in zoom-in-95 fade-in duration-200">
                    <Card className="relative w-full max-w-[350px] overflow-hidden space-y-3 ">
                        <ShineBorder borderWidth={1} shineColor={["#A07CFE", "#FE8FB5", "#FFBE7B"]} />

                        <button
                            aria-label="Close popup"
                            onClick={() => setPopUp(false)}
                            className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 z-10"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>

                        <CardHeader>
                            <CardTitle>Schedule Appointment</CardTitle>
                            <CardDescription className='text-gray-800'>
                                Ai will call you on this number
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <form>
                                <div className="grid gap-4">
                                    <div className="grid gap-2">
                                        <Label htmlFor="email">Email</Label>
                                        <Input id="email" name='email' type="email" value={userinfo.email} placeholder="name@example.com" required={true} onChange={handleChange} />
                                    </div>
                                    <div className="grid gap-2">
                                        <Label htmlFor="phone">Phone</Label>
                                        <Input
                                            id="phone"
                                            name="phone"
                                            type="tel"
                                            value={userinfo.phone}
                                            className='style-none'
                                            onChange={handleChange}
                                            placeholder="xxxxxxx990"
                                            required={true}
                                        />
                                    </div>
                                </div>
                            </form>
                        </CardContent>
                        <CardFooter>
                            <Button
                                className="w-full"
                                onClick={handleClick}
                                disabled={submitting}
                            >
                                {submitting ? "Calling..." : "Call"}
                            </Button>
                        </CardFooter>
                    </Card>
                </div>
            )}

            {/* Rainbow Button */}
            <div className="flex space-y-3 flex-col items-start">
                <RainbowButton onClick={() => (setPopUp(!popUp))} >
                    <Image src={phone} alt="phone" className=" w-5 h-8 " />
                    +1 (864) 479-8961
                </RainbowButton>
            </div>
        </div>
    )
}

export default PopUpButton