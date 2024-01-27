import React, { useState } from 'react';
import Button from '../../UI/Button/Button';
import './CourseInput.css';

const CourseInput = (props) => {
  const [enteredValue, setEnteredValue] = useState('');
  const [isValid, setValid] = useState(true);

  const goalInputChangeHandler = (event) => {
    const inputValue = event.target.value;
    setEnteredValue(inputValue);
    if (inputValue.trim().length > 0) {
      setValid(true);
    } else {
      setValid(false);
    }
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (enteredValue.trim().length === 0) {
      setValid(false);
      return;
    }
    props.onAddGoal(enteredValue);
    setEnteredValue('')
  };
   const onClickHandler=(event)=>{
    if(enteredValue.trim().length===0){
      setValid(false)
    }
    else{
      setValid(true)
    }


   }

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={`form-control ${isValid ? '' : 'invalid'}`}>
        <label>Course Goal</label>
        <input type="text" onChange={goalInputChangeHandler} value={enteredValue} />
      </div>
      <Button type="submit" onClick={onClickHandler} isValid={isValid}>Add Goal</Button>
    </form>
  );
}

export default CourseInput;
