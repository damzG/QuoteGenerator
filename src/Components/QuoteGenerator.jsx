import React from "react";
import { useState } from "react";
import quotes from "../quotes.json";


export default function QuoteGenerator() {


const initialQuote = quotes[Math.floor(Math.random() * quotes.length)];

const [ currentQuote, setCurrentQuote] = useState(initialQuote);

function generateQuote(){
    setCurrentQuote(quotes[Math.floor(Math.random() * quotes.length)]);
}

    return <div className="h-screen flex items-center justify-center">
        <div className="bg-emerald-500 text-black p-6 rounded-lg  border border-black-700 shadow-lg shadow-emerald-300">
        <h1 className="text-center font-bold text-white">Random Quote Generator</h1>
        <p className="italic text-gray-700 mt-2 font-bold">"{currentQuote.quote} - {currentQuote.author}"</p>
        <button onClick={generateQuote} className="border border-emerald-950 rounded-lg p-2 mx-auto block mt-4 cursor-pointer hover:bg-emerald-400 transition duration-300 hover:text-white">Generate</button>
        </div>
    </div>;
}