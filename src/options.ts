



export const columns:any = [
    {
      title: 'Name',
      dataIndex: 'name',
      sorter: (a, b) => a.name.length - b.name.length,
    },
    {
      title: 'Salary',
      dataIndex: 'salary',
      sorter: (a, b) => a.salary - b.salary,
      filters: [
        {
          text: '> 20000',
          value: '20000',
        },
        {
          text: '> 30000',
          value: '30000',
        },
      ],
      defaultFilters: ['20000'],
      onFilter: (value, row) => row.salary > value,
      sortDirections: ['ascend'],
      defaultSortOrder: 'ascend',
    },
    {
      title: 'Address',
      dataIndex: 'address',
      filters: [
        {
          text: 'London',
          value: 'London',
        },
        {
          text: 'Paris',
          value: 'Paris',
        },
      ],
      onFilter: (value, row) => row.address.indexOf(value) > -1,
      filterMultiple: false,
    },
    {
      title: 'Email',
      dataIndex: 'email',
      sorter: (a, b) => a.email.length - b.email.length,
    },
  ];