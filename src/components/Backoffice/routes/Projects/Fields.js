const projectFields = [
    {
        name: 'title',
        label: 'Title',
        type: 'text',
      },
      {
        name: 'github',
        label: 'Github',
        type: 'text',
      },
      {
        name: 'tags',
        label: 'Tags',
        type: 'multi',
      },
      {
        name: 'status',
        label: 'Status',
        type: 'select',
        options: [
          { value: 'active', label: 'Active', default: true },
          { value: 'finished', label: 'Finished',  default: false },
        ],
      },
      {
        name: 'description',
        label: 'Description',
        type: 'ckeditor',
      },
     
      {
        name: 'image',
        label: 'Image',
        type: 'file',
      },
     
]
export default projectFields