import { useEffect, useState } from "react";
import "./App.css";
import Description from "./components/Description/Description";
import Feedback from "./components/Feedback/Feedback";
import Notification from "./components/Notification/Notification";
import Options from "./components/Options/Options";

function App() {
  const [rate, setRate] = useState(() => {
    const savedRate = window.localStorage.getItem('savedRate');
    if (savedRate) {
      return JSON.parse(savedRate);
    }
    return (
      {
      good: 0,
      neutral: 0,
      bad: 0
    }
  )
});

useEffect(() => {
  window.localStorage.setItem('savedRate', JSON.stringify(rate));
}, [rate]);

const updateFeedback = feedbackType => {
  setRate(prevRate => ({
    ...prevRate,
    [feedbackType]: rate[feedbackType] + 1,
  }));
};




return (
  <div>
    <Description />
    <Options />
    <Feedback />
    <Notification />
  </div>
); 
}

export default App;
