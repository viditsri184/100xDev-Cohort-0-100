import { useContext } from "react";
import { LevelContext } from "../LevelContext";

/*
Wrap them with a context provider to provide the LevelContext to them:

This tells React: “if any component inside this <Section> asks for LevelContext,
give them this level.” The component will use the value of the nearest
<LevelContext.Provider> in the UI tree above it.

Now both Heading and Section read the LevelContext to figure out how “deep” they
are. And the Section wraps its children into the LevelContext to specify that
anything inside of it is at a “deeper” level.
*/


export default function Section({children}){
    const level = useContext(LevelContext);

    return (
        <section style={{border:"1px solid black", margin:10, padding:5}}>
            <LevelContext.Provider value={level + 1}>
                {children}
            </LevelContext.Provider>
        </section>
    )
}