

export const columns:any = [
    {
      title: '用户名',
      dataIndex: 'user.name',
    },
    {
      title: '状态',
      dataIndex: 'user.online_state',
    },
    {
      title: '段位',
      dataIndex: 'user.tier',
    },
    {
      title: '商品名',
      dataIndex: 'content.name',
    },
    {
      title: '单价',
      dataIndex: 'content.price',
      sorter: (a: { content: { price: number; }; }, b: { content: { price: number; }; }) => {
        if (a.content.price > b.content.price) {
          return 1;
        }
        if (a.content.price < b.content.price) {
          return -1;
        }
        return 0;
      },
    },
    {
      title: '数量',
      dataIndex: 'content.count',
    },
];



