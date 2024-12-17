import React from 'react'
import { CORE_CONCEPTS } from './data';
import TabButton from './TabButton';
const userData = {
  firstName : "Baburao",
  lastName : "Aapte",
  age : 56,
}

function CoreConcept(props){
  return(
    <li>
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </li>
  )
}


function CoreConcept1({title , description}){
  return(
    <li>
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  )
}


const MainGoal = () => {
  const greetings = ["Good morning", "Good afternoon", "Good evening", "Good night"];
  let greet = greetings[Math.floor(Math.random() * greetings.length)];

  const {firstName, lastName, age} = userData;

  function handleClick(){
    console.log("clicked...");
  }



  return (
    <div>
        {greet} this is from main goal component...
        <h2>{firstName} {lastName}</h2>
        <p>{age}</p>

        <ul>
          <CoreConcept title = {CORE_CONCEPTS[0].title}  description = {CORE_CONCEPTS[0].description}/>
          <CoreConcept title = {CORE_CONCEPTS[1].title}  description = {CORE_CONCEPTS[1].description}/>
          <CoreConcept title = {CORE_CONCEPTS[2].title}  description = {CORE_CONCEPTS[2].description}/>
          <CoreConcept title = {CORE_CONCEPTS[3].title}  description = {CORE_CONCEPTS[3].description}/>
        </ul>

        <p>This is by using destrucring....</p>

        <ul>
          <CoreConcept1 title = {CORE_CONCEPTS[0].title} description = {CORE_CONCEPTS[0].description} />
          <CoreConcept1 {...CORE_CONCEPTS[1]}/>
          <CoreConcept1 {...CORE_CONCEPTS[2]}/>
          <CoreConcept1 {...CORE_CONCEPTS[3]}/>
        </ul>

      {/* example of how to pass function as param to props */}

        <TabButton onSelect = {handleClick}>Components</TabButton>
        <TabButton onSelect = {handleClick}>JSX</TabButton>
        <TabButton onSelect = {handleClick}>Props</TabButton>
        <TabButton onSelect = {handleClick}>State</TabButton>
      


    </div>
  )
}

export default MainGoal;
