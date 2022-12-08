import { Link, Outlet, useSearchParams } from "react-router-dom";
import { getInvoices } from "../data";
import './invoices.css';

export default function Invoices() {
  let invoices = getInvoices();
  let [searchParams, setSearchParams] = useSearchParams();
  return (
    <div class= "flexbox-item invoiceList">
      <nav>
       {/* Adds a text input that edits the searchParams to the inputted text.
       If there is a change in the input box then the searchParam is set. */}
      <input
          className= "search-box"
          placeholder="Search here"
          value={searchParams.get("filter") || ""}
          onChange={(event) => {
            let filter = event.target.value;
            if (filter) {
              setSearchParams({ filter });
            } else {
              setSearchParams({});
            }
          }}
        />
        {/* For each invoice filter out those that start with the same letters as searchParam */}
        {invoices.filter((invoice) => {
            let filter = searchParams.get("filter");
            if (!filter) return true;
            let name = invoice.name.toLowerCase();
            return name.startsWith(filter.toLowerCase());
          })
        .map((invoice) => (
          <Link
            class= "flexbox-item links"
            style={{ display: "flex", margin: "1rem 0" }}
            to={`/invoices/${invoice.number}`}
            key={invoice.number}
          >
            {invoice.name}
          </Link>
        ))}
      </nav>
      <Outlet />
    </div>
  );
}
