import { useEffect, useState } from "react";
import "./App.css";
import { Table } from "@arco-design/web-react";
import { columns } from "./options";
import { post } from "./post";

const data = [
  {
    key: "1",
    name: "Jane Doe",
    salary: 23000,
    address: "32 Park Road, London",
    email: "jane.doe@example.com",
  },
  {
    key: "2",
    name: "Alisa Ross",
    salary: 25000,
    address: "35 Park Road, Paris",
    email: "alisa.ross@example.com",
  },
  {
    key: "3",
    name: "Kevin Sandra",
    salary: 22000,
    address: "31 Park Road, London",
    email: "kevin.sandra@example.com",
  },
  {
    key: "4",
    name: "Ed Hellen",
    salary: 17000,
    address: "42 Park Road, Paris",
    email: "ed.hellen@example.com",
  },
  {
    key: "5",
    name: "William Smith",
    salary: 27000,
    address: "62 Park Road, London",
    email: "william.smith@example.com",
  },
];

const App = () => {
  // const [data,setData]=useState([])

  useEffect(() => {
    post("/api/SearchCommodity", {
      "app_id": "warframe_market",
      "from_src": "warframe_market_web",
      "word": "一举三"
  }).then((data) => {
      console.log(data); 
    });
  }, []);

  return <Table columns={columns} data={data} />;
};

export default App;
