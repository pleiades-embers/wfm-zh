import { useCallback, useRef, useState } from "react";
import "./App.css";
import { Table, Select, Spin } from "@arco-design/web-react";
import { columns } from "./options";
import { post } from "./post";
import debounce from 'lodash/debounce';
import TagList from "./TagList";
const App = () => {
  const [searchHistory, setSearchHistory] = useState<Record<number,string>[]>([])
  const [commodities,setCommodities]=useState([])
  const [tableData,setTableData]=useState<any>([])
  const [tableLoading,setTableLoading]=useState<boolean>(false)
  const [fetching, setFetching] = useState(false);
  const refFetchId = useRef<any>(null);


  function postCommodityTableData(id:number) {
    setTableLoading(true)
    const params = {
      app_id: "warframe_market",
      from_src: "warframe_market_web",
      page_size: 10,
      sorts: [
        {
          "key": "online_state",
          "order": "desc"
        }
      ],
      filters: [
        {
          "key": "content.commodity_id",
          "operator": "=",
          "value": id
        },
        {
          "key": "content.type",
          "operator": "=",
          "value": 1
        }
      ]
    }
    post("/api/SearchPost", params).then(function (res: any) {
      console.log(res,111)
      if(res?.data?.posts?.length>0){
        setTableData(res.data.posts)
        setTableLoading(false)
      }
    });

  }

  function onSearchSelect(value:{value:number,label:string}){
    const newValue={id:value.value,name:value.label}
    setSearchHistory([newValue,...searchHistory])
    postCommodityTableData(newValue.id)
  }


  const debouncedFetchUser = useCallback(
    debounce((inputValue) => {
      refFetchId.current = Date.now();
      const fetchId = refFetchId.current;
      setFetching(true);
      post("/api/SearchCommodity", {
        app_id: "warframe_market",
        from_src: "warframe_market_web",
        word: inputValue,
      }).then(function (response: any) {
        if (refFetchId.current === fetchId) {
          const options = response.data.commodities.map((item: any) => ({
            label: item.name,
            value: item.commodity_id,
          }));
          setFetching(false);
          setCommodities(options);
        }

      });
    }, 100),
    []
  );

  return (
    <>
      <Select
        style={{ width: 800, marginBottom: 20 }}
        showSearch
        options={commodities}
        placeholder="请输入名称搜索"
        filterOption={false}
        onChange={onSearchSelect}
        labelInValue={true}
        notFoundContent={
          fetching ? (
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Spin style={{ margin: 12 }} />
            </div>
          ) : null
        }
        onSearch={debouncedFetchUser}
      />
      <br/>
      <TagList data={searchHistory}   />
      <Table columns={columns} data={tableData} loading={tableLoading} />
    </>
  );
};

export default App;
