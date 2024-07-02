import Option from './Option';

export default function Question({ question, dispatch, answer }) {
  return (
    <div className="">
      <h4>{question.question}</h4>
      <Option question={question} answer={answer} dispatch={dispatch} />
    </div>
  );
}
