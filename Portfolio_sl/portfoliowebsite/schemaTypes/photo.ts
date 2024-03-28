import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'photo',
  title: 'Photo',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
    }),
    defineField({
        name: 'categories',
        title: 'Categories',
        type: 'array',
        of: [{type: 'reference', to: {type: 'category'}}],
      }),
  ],

  preview: {
    select: {
      title: 'title',
      media: 'mainImage',
    },
  },
})
