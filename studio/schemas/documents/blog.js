import { GiNotebook } from 'react-icons/gi';

export default {
  title: 'blog post',
  name: 'blog',
  type: 'document',
  icon: GiNotebook,
  fields: [
    { title: 'Title', name: 'title', type: 'string' },
    {
      title: 'Slug',
      name: 'slug',
      type: 'slug',
      options: { source: 'title', maxLength: 30 },
    },
    {
      title: 'Published at',
      name: 'publishedAt',
      type: 'date',
    },
    {
      title: 'Cover image',
      name: 'coverImage',
      type: 'image',
      options: { hotspot: true },
    },
  ],
};
