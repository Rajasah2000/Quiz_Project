import React, { useState } from 'react'
import '../Page/Quiz.css'
import toast from 'react-hot-toast';
import swal from 'sweetalert';
import Swal from 'sweetalert2';

const Quiz = () => {
  const [count , setCount] = useState(1);
  const [score , setScore] = useState(0);
  const [select , setSelect] = useState(false);
  const [toggle , setToggle] = useState(false);
  const [optionIndex , setOptionIndex] = useState(null)
  const [AllQuestion, setAllQuestion] = useState([
    {
      question: 'React is a library for building user interfaces in which programming language?',
      status: false,
      userSideAnswer: '',
      options: [
        {
          name: 'JavaScript',
          correct: true,
        },
        {
          name: 'Java',
          correct: false,
        },
        {
          name: 'Python',
          correct: false,
        },
        {
          name: 'C++',
          correct: false,
        },
      ],
    },
    {
      question: 'What is the main purpose of JSX in React?',
      status: false,
      userSideAnswer: '',
      options: [
        {
          name: 'To define component structure',
          correct: false,
        },
        {
          name: 'To handle HTTP requests',
          correct: false,
        },
        {
          name: 'To describe the UI',
          correct: true,
        },
        {
          name: 'To declare variables',
          correct: false,
        },
      ],
    },
    {
      question: 'What does React use to increase performance by updating only the necessary components in the DOM?',
      status: false,
      userSideAnswer: '',
      options: [
        {
          name: 'Virtual DOM',
          correct: true,
        },
        {
          name: 'Real DOM',
          correct: false,
        },
        {
          name: 'Shadow DOM',
          correct: false,
        },
        {
          name: 'Immutable DOM',
          correct: false,
        },
      ],
    },
    {
      question: 'Which React hook is used to perform side effects in a functional component?',
      status: false,
      userSideAnswer: '',
      options: [
        {
          name: 'useState',
          correct: false,
        },
        {
          name: 'useEffect',
          correct: true,
        },
        {
          name: 'useContext',
          correct: false,
        },
        {
          name: 'useReducer',
          correct: false,
        },
      ],
    },
    {
      question: 'In React, what is used to pass data to a component from its parent?',
      status: false,
      userSideAnswer: '',
      options: [
        {
          name: 'state',
          correct: false,
        },
        {
          name: 'props',
          correct: true,
        },
        {
          name: 'context',
          correct: false,
        },
        {
          name: 'ref',
          correct: false,
        },
      ],
    },
    {
      question: 'What is the purpose of the `key` prop in React?',
      status: false,
      userSideAnswer: '',
      options: [
        {
          name: 'To specify the order of elements in an array',
          correct: false,
        },
        {
          name: 'To uniquely identify elements in a list',
          correct: true,
        },
        {
          name: 'To define a component key',
          correct: false,
        },
        {
          name: 'To set a default value for a prop',
          correct: false,
        },
      ],
    },
    {
      question: 'Which lifecycle method is called after a component renders for the first time?',
      status: false,
      userSideAnswer: '',
      options: [
        {
          name: 'componentDidMount',
          correct: true,
        },
        {
          name: 'componentWillUnmount',
          correct: false,
        },
        {
          name: 'componentDidUpdate',
          correct: false,
        },
        {
          name: 'componentWillUpdate',
          correct: false,
        },
      ],
    },
    {
      question: 'What is the purpose of React Router?',
      status: false,
      userSideAnswer: '',
      options: [
        {
          name: 'To manage state in React components',
          correct: false,
        },
        {
          name: 'To handle HTTP requests in React',
          correct: false,
        },
        {
          name: 'To implement navigation in a React application',
          correct: true,
        },
        {
          name: 'To create animations in React components',
          correct: false,
        },
      ],
    },
    {
      question: 'In React, what is the significance of the `shouldComponentUpdate` method?',
      status: false,
      userSideAnswer: '',
      options: [
        {
          name: 'To update the component state',
          correct: false,
        },
        {
          name: 'To determine if a component should re-render',
          correct: true,
        },
        {
          name: 'To handle errors during rendering',
          correct: false,
        },
        {
          name: 'To fetch data from an API',
          correct: false,
        },
      ],
    },
    {
      question: 'What is the purpose of React Fragments?',
      status: false,
      userSideAnswer: '',
      options: [
        {
          name: 'To create reusable components',
          correct: false,
        },
        {
          name: 'To group multiple elements without adding extra nodes to the DOM',
          correct: true,
        },
        {
          name: 'To handle form submissions',
          correct: false,
        },
        {
          name: 'To manage component state',
          correct: false,
        },
      ],
    },
  ]);



console.log('fsdfsdfsdfsdf', AllQuestion);




const HandleClick = (item , ele , index) => {
  setOptionIndex(index)
  setToggle(true)
  
  setAllQuestion(prev => {
    const newArray = [...prev];
    newArray[count - 1] = {
      ...newArray[count - 1],
      options: ele?.options,
      question: ele?.question,
      status: true,
      userSideAnswer: item?.name,
    }; 
    return newArray
  })
  setSelect(true);
  //  AllQuestion[count - 1].status = true;
  if(item?.correct == true){
    setScore(score+1);
  }
}

  return (
    <div style={{ textAlign: 'center', marginTop: '5rem' }}>
      <div className="header">
        <h2 className="header_heading">React Quiz Website</h2>
        <p>A simple quiz website coded in react js</p>
      </div>
      <div className="header1">
        <p style={{ float: 'left' }}>
          Question {count} out of {AllQuestion?.length}
        </p>
        <p style={{ float: 'right' }}>Score: 0</p>
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        {AllQuestion?.map((ele, index) => {
          return (
            <div
              className="circle"
              style={{ backgroundColor: ele?.status ? '#45a049' : '#f5424e' }}
              onClick={() => setCount(index + 1)}
            >
              {index + 1}
            </div>
          );
        })}
      </div>

      {AllQuestion.slice(count - 1, count)?.map((ele, inx) => {
        return (
          <div class="quiz-container">
            <div class="question">
              <h2>Question {count}:</h2>
              <p>{ele?.question}</p>
            </div>
            <div class="answers">
              {ele?.options?.map((item, index) => {
                return (
                  <button
                    class="option"
                    style={{ backgroundColor: toggle && index === optionIndex || item.name == ele?.userSideAnswer  ? '#e3d405' : '#4caf50' }}
                    onClick={() => HandleClick(item, ele, index)}
                  >
                    {String.fromCharCode(65 + index)}. {item?.name}
                  </button>
                );
              })}
            </div>
          </div>
        );
      })}

      <div className="header1">
        <div class=""> 
          {count !== AllQuestion?.length && (
            <button
              disabled={count == AllQuestion?.length ? true : false}
              class="option"
              style={{ float: 'left' }}
              onClick={() => {
                if (select) {
                  toast.success('Saved Successfully');
                  console.log('uiuiuiuiuiuiiu', AllQuestion);
                  setToggle(false)
                  setCount(count + 1);
                  setSelect(false);
                } else {
                  toast.error('Please select option');
                }
              }}
            >
              Save & Continue
            </button>
          )}
          {count !== AllQuestion?.length && (
            <button
              disabled={count == AllQuestion?.length ? true : false}
              class="option1"
              onClick={() => {
                setCount(count + 1);
                setSelect(false);
              }}
            >
              Skip
            </button>
          )}

          {count === AllQuestion?.length && (
            <button
              class="option2"
              onClick={() => Swal.fire({
  title: "Are you sure?",
  text: "You won't be able to revert this!",
  icon: "success",
  showCancelButton: true,
  confirmButtonColor: "#3085d6",
  cancelButtonColor: "#d33",
  confirmButtonText: "Yes, delete it!"
}).then((result) => {
  if (result.isConfirmed) {
    Swal.fire({
      title: "Deleted!",
      text: "Your file has been deleted.",
      icon: "success"
    });
  }
})}
              style={{ float: 'left' }}
            >
              Save & Finish
            </button>
          )}
          <button
            disabled={count == 1 ? true : false}
            class="option2"
            onClick={() => setCount(count - 1)}
            style={{ float: 'right' }}
          >
            Previous
          </button>
        </div>
      </div>

    </div>
  );
}

export default Quiz