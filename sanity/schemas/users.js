export default {
    name: 'users',
    title: 'Users',
    type: 'document',
    fields: [
      {
        name: "name",
        type: "string",
        title: "Name",
        validation: (Rule) => Rule.required()
      },
      {
        name: "phone",
        type: "string",
        title: "Phone number",
        validation: (Rule) => Rule.required().unique()
      },
      {
        name: "password",
        type: "string",
        title: "Password",
        validation: (Rule) => Rule.required()
      },
      {
        name: "location",
        type: "string",
        title: "This is my location",
        validation: (Rule) => Rule.max(200)
      },
      {
        name: "avatar",
        type: "image",
        title: "Avatar preview",
      },
    ],
  }
  