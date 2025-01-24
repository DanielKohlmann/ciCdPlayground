import App from "./App.svelte";

new App({
  target: document.body,
  props: {
    // What's your name?
    name: "Dani Kohlmann",
    // In the following fiels you can either give a single string,
    // or an array of bullet points

    // What do you associate with the term 'CI/CD'?
    associations: ["Continous integration, continous deployment"],
    // Which CI/CD tools do you use in your project?
    tools: "GitHub pipeline",
    // What do you want to learn in this workshop?
    expectations: ["Get a better understaning of the setup of CI/CD pipelines"],
  },
});
