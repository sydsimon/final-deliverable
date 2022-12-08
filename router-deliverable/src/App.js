import './App.css';
import { Outlet, Link } from "react-router-dom";


export default function App() {
  return (
    <div class="flexbox-container">
      <div class="flexbox-item overallHeader">
        <h1 class="flexbox-item header">Budget Rescue</h1>
        <h2 class="flexbox-item header2">
        Welcome to the best budget tracker there is to save your money. 
        Click on the invoice page to how much it costs for each vacation spot, and click on the expenses page
        to see how much you spend monthly on different expenses.
        </h2>
      </div>
      <div class="flexbox-container links">
        <nav>
          <Link 
            class="flexbox-item invoice-link" 
            to="/invoices">Invoices</Link> {" "}
          <Link class="flexbox-item expense-link" to="/expenses">Expenses</Link>
        </nav>
      </div>
      <Outlet />
    </div>
  );
}

