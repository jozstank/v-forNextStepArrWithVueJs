const { createApp } = Vue;
const app = createApp({
  data() {
    return {
      arrayOfObjects: [
        {
          name: "John",
          age: 25,
          hobbies: ["reading", "coding", "hiking"],
        },
        {
          name: "Jane",
          age: 30,
          hobbies: ["painting", "traveling", "photography"],
        },
        {
          name: "Bob",
          age: 22,
          hobbies: ["playing guitar", "swimming", "cooking"],
        },
      ],
    };
  },
});

app.mount("#app");
