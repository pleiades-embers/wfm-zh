import { Tag  } from "@arco-design/web-react";

function TagList(props:any) {
  const { data } = props;

  function onTagClick(){}
  function removeTag(item){}

  return (
    <div style={{marginBottom:20}}>
      {(data ?? [])?.map((item:any) => {
        return <Tag  closable
        style={{ margin: '0 24px',cursor:"pointer" }}
        onClick={onTagClick}
        onClose={()=>removeTag(item.id)}
        >{item.name}</Tag>;
      })}
    </div>
  );
}

export default TagList;
