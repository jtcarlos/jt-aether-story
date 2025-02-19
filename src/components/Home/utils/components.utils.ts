import { HomeComponentProps } from "../HomeComponent"

export const components: HomeComponentProps[] = [
  {
    title: "Interface",
    description:
      "These are the components that the user usually interacts with / helps app interaction such as buttons, modals, dropdowns, and more.",
    samples: [
      {
        image: "./components/button-component.png",
        component: "Button",
      },
      {
        image: "./components/dropdown-component.png",
        component: "Dropdown",
      },
    ],
  },
  {
    title: "Form",
    description:
      "These are the components that are filled by the user and are commonly seen when the user is interacting with application forms.",
    samples: [
      {
        image: "./components/input-component.png",
        component: "Input",
      },
      {
        image: "./components/checkbox-component.png",
        component: "Checkbox",
      },
    ],
  },
  {
    title: "Layout",
    description: "These are the components that helps you easily configure the layout of your application.",
    samples: [
      {
        image: "./components/stack-component.png",
        component: "Stack",
      },
      {
        image: "./components/container-component.png",
        component: "Container",
      },
    ],
  },
]
