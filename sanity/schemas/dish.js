export default {
  name: 'dish',
  title: 'Dish',
  type: 'document',
  fields: [
    {
      name: "name",
      type: "string",
      title: "Name of the Dish",
      validation: (Rule) => Rule.required()
    },
    {
      name: "short_description",
      type: "string",
      title: "Short description of the Dish",
      validation: (Rule) => Rule.max(300)
    },
    {
      name: "price",
      type: "number",
      title: "Price of the Dish",
    },
    {
      name: "image",
      type: "image",
      title: "Image of the Dish",
    },
  ],
}
