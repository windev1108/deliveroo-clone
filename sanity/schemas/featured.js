export default {
    name: 'featured',
    title: 'Featured Menu categories',
    type: 'document',
    fields: [
      {
        name: "name",
        type: "string",
        title: "Featured Category name",
        validation: (Rule) => Rule.required()
      },
      {
        name: "short_description",
        type: "string",
        title: "Short description of the Dish",
        validation: (Rule) => Rule.max(300)
      },
      {
        name: "restaurants",
        type: "array",
        title: "Restaurants",
        of: [{ type: "reference", to: [{ type: "restaurants"}] }]
      },
    ],
  }
  