import './App.css';
import { Outlet, Link } from "react-router-dom";


export default function App() {
  return (
    <div class="flexbox-container">
      <h1 class="flexbox-item header">Budget Rescue</h1>
      <body>
        <div class="flexbox-item header2">
        Welcome to the best budget tracker there is to save your money. 
        Click on the invoice page to see who owes you money, and click on the expenses page
        to see how much you spend monthly on different expenses.
        </div>
      </body>
      <nav class="flexbox-item links">
        <Link to="/invoices">Invoices</Link> |{" "}
        <Link to="/expenses">Expenses</Link>
      </nav>
      <Outlet />
    </div>
  );
}

