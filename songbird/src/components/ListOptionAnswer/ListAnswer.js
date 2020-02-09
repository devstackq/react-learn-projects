import React from 'react'
import Answer from './Answer'
import './ListAnswer.css'

//card, each item info,  send

const style1 = {
    padding: "5px",
    width: "300px",
    backgroundColor: "lime",
    color: "#000",
    listStyle: "none"
}
const style2 = {
    width: "300px",
    padding: "5px",
    backgroundColor: "yellow",
    listStyle: "none"
}
const style3 = {
    width: "300px",
    padding: "5px",
    backgroundColor: "blue",
    listStyle: "none",
    color: "#fff"
}
const style4 = {
    width: "300px",
    padding: "5px",
    backgroundColor: "violet",
    listStyle: "none"
}
const style5 = {
    width: "300px",
    padding: "5px",
    backgroundColor : "green",
    listStyle: "none"
}


const style6 = {
    width: "300px",
    padding: "5px",
    backgroundColor: "brown",
    listStyle: "none"
}
const style7 = {
    width: "300px",
    padding: "5px",
    backgroundColor: "brown",
    height: "30px",

}

const listQuest = [
style1,
style2,
style3,
style4,
style5,
style6,
];


const ListQuestions = ({birds, selectAnswer, choice, randomValue}) =>(


<div className="list-wrapper" >


{birds.map((item, i) => (

<ul className="list-ul" key={item.id}>

<button onClick={ ()=> {selectAnswer(item.id) } }>
<li style={ listQuest[i] }>
   {item.id} {item.name}
</li>

</button>
    {/* <img src = {item.image} />  */}
   
</ul>
 

))}

   { randomValue === choice? <ul className="list-ul"> <li className={style7}> {birds[randomValue-1].name} </li> </ul> : <p> "" </p> }
</div>

)
export default ListQuestions