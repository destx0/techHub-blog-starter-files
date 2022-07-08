import { MdStar } from 'react-icons/md';

export default {
  name: 'featured',
  title: 'Featured',
  type: 'document',
  icon: MdStar,
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
    },
    {
      name: 'blog',
      title: 'Featured blogs',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'blog' }],
        },
      ],
    },
  ],
};
