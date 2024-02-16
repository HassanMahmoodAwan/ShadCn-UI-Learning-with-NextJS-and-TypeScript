"use client";
// import Image from "next/image";
import {Calendar} from "@/components/ui/calendar"
import React, { useState } from "react";

export default function Home() {

  const [date, setDate] = React.useState<Date | undefined>(new Date())
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 ">
      <h1 className="text-3xl text-slate-400">Welcome to NEXT JS, TypeScript and ShadCN</h1>

      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        className="rounded-md border"
        />

    </main>
  );
}
