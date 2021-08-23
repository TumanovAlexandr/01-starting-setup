import ExpenseItem from "./components/ExpenseItem";
import Expenses from "./components/Expenses";
import "./components/Expenses.css";

function App() {
  return (
    <div>
      <h2>Let's get started!</h2>
      <div className="expenses">
        <ExpenseItem
          title={Expenses()[0].title}
          amount={Expenses()[0].amount}
          date={Expenses()[0].date}
        />
        <ExpenseItem
          title={Expenses()[1].title}
          amount={Expenses()[1].amount}
          date={Expenses()[1].date}
        />
        <ExpenseItem
          title={Expenses()[2].title}
          amount={Expenses()[2].amount}
          date={Expenses()[2].date}
        />
        <ExpenseItem
          title={Expenses()[3].title}
          amount={Expenses()[3].amount}
          date={Expenses()[3].date}
        />
      </div>
    </div>
  );
}

export default App;
