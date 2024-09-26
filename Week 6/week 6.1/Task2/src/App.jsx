import { useState } from 'react'

// Approach 1 :  1st way to create wrapper components:

/*This is not like a real wrapper component, more of a pseudo wrapper component but still
works fine, but we should be not using this approach.
The correct approach is approach2 : by using children keyword  */
 
// function App() {
//   return (
//     <div>
//       <CardWrapper innerComponent={TextComponent}/>
//     </div>
//   )
// }

// function CardWrapper({innerComponent: InnerComponent}){
//   // Create a div which has a border and inside the div, renders the prop {which is another component in this case}
//   return <div style={{border : "2px solid black", boxShadow: "2px 2px -2px blue"}}>
//   <InnerComponent/>
//   </div>
// }

// function TextComponent(){
//   return <div>
//     hi there
//   </div>
// }


// Approach 2 : Using children property of props
/*In this approach whatever we write inside a component we can access it using the
children keyword. This way we can create and should create wrapper components by accessing whatever is inside
the actual wrapper component by using children keyword*/
function App(){
  return (
    <div style={{display: "flex", justifyContent:"center", alignContent:"center"}}>
      <Card>
      {/* hi there is a children */}
        hi there
      </Card>
      <Card>
      {/* div is a children with its content inside */}
        <div>
          Hi there from 2nd card
        </div>
      </Card>
    </div>
  )
}

function Card({children}){
  return <div style={{
    border: "1px solid black",
    padding: 10,
    margin: 10
  }}>
    {children}
  </div>
}


export default App
