import { Tag  } from "@arco-design/web-react";
import './tagList.css'
function TagList(props:any) {
  const { data } = props;

  function onTagClick(){}
  function removeTag(id:number){
    console.log(id)
  }

  return (
    <div style={{marginBottom:20}} className="tagList-wrap">
      <div>搜索历史：</div>
     
      {(data ?? [])?.map((item:any) => {
        return <Tag  closable
        style={{ margin: '0 6px',cursor:"pointer" }}
        onClick={onTagClick}
        onClose={()=>removeTag(item.id)}
        >{item.name}</Tag>;
      })}
    </div>
  );
}

export default TagList;
