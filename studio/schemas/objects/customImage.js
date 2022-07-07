import { MdImage } from 'react-icons/md';

export default {
  name: 'customImage',
  title: 'Image',
  type: 'image',
  icon: MdImage,
  options: {
    hotspot: true,
  },
  fields: [
    {
      title: 'Alt-text',
      name: 'alt',
      type: 'string',
      validation: (Rule) => Rule.error('Alt-text cant be empty').required(),
      options: {
        isHighlighted: true,
      },
    },
  ],
};
