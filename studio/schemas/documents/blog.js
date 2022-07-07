import { GiNotebook } from 'react-icons/gi';
import { format } from 'date-fns';

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
      type: 'datetime',
    },
    {
      title: 'Cover image',
      name: 'coverImage',
      type: 'customImage',
    },
    {
      title: 'Summary',
      name: 'summary',
      type: 'excerptText',
    },
    {
      title: 'Blog Body',
      name: 'blogBody',
      type: 'bodyText',
    },
  ],
  preview: {
    select: {
      image: 'coverImage',
      title: 'title',
      publishedAt: 'publishedAt',
    },
    prepare({ image, title, publishedAt }) {
      return {
        title,
        media: image,
        subtitle: publishedAt
          ? format(new Date(publishedAt), 'p, dd/MM/yyyy')
          : '',
      };
    },
  },
};
