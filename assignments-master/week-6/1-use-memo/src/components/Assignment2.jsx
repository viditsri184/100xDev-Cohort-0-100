import React, { useEffect, useMemo, useState } from "react";

// In this assignment, you will create a component that renders a large list of sentences and includes an input field for filtering these items. 
// The goal is to use useMemo to optimize the filtering process, ensuring the list is only re-calculated when necessary (e.g., when the filter criteria changes).
// You will learn something new here, specifically how you have to pass more than one value in the dependency array

const WORDS = ["Hello", "my", "name", "is", "popeyee", "the sailor", "man"];
const total_lines = 1000;
const ALL_SENTENCES = [];
for(let i = 0 ; i < total_lines ; i++){
    let sentences = "";
    for(let j =  0 ; j < WORDS.length ; j++){
        sentences += WORDS[Math.floor(Math.random() * WORDS.length)];
        sentences += " ";
    }
    ALL_SENTENCES.push(sentences);
}

export function Assignment2(){
    const [sentence, setSentences] = useState(ALL_SENTENCES);
    const [filter, setFilter] = useState("");

    let filteredSentences = useMemo(() => {return sentence.filter(x => x.includes(filter))}, [sentence, filter]);

    return <div>
        <input type="text" onChange={(e) => setFilter(e.target.value)}/>
        {filteredSentences.map(word => <div>{word}</div>)}
    </div>
}