let invoices = [
    {
      name: "Playa del Carmen, Mexico",
      number: 1995,
      amount: "$10,800",
      due: "12/05/1995",
    },
    {
      name: "Sydney, Australia",
      number: 2000,
      amount: "$8,000",
      due: "10/31/2000",
    },
    {
      name: "Belize",
      number: 2003,
      amount: "$9,500",
      due: "07/22/2003",
    },
    {
      name: "Bora Bora",
      number: 1997,
      amount: "$14,000",
      due: "09/01/1997",
    },
    {
      name: "Niagara Falls",
      number: 1998,
      amount: "$4,600",
      due: "01/27/1998",
    },
  ];
 
  export function getInvoices() {
    return invoices;
  }

  export function getInvoice(number) {
    return invoices.find(
      (invoice) => invoice.number === number
    );
  }

