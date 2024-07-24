"use client";
import {SendSMSParams, SendSMSResponse, APIResponse} from "@simpletext/client";
import axios from "axios";

export default function Home() {

  const sendSms = async () => {
    const params: SendSMSParams = {
      to: "+11234567890",
      message: "Hello, Ryland!"
    };

    const response = await axios.post("/api/sms", params);

    const data = response.data;
    console.log(data);
  }


  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <p>simpletext minimalist appdir example</p>
      <button onClick={sendSms} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Send SMS
      </button>
    </main>
  );
}
