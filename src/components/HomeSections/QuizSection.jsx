import GridMotion from "../ui/GridMotion";

// note: you'll need to make sure the parent container of this component is sized properly
const items = [
  "Item 1",
  <div key="jsx-item-1">Quiz with python</div>,
  "https://images.unsplash.com/photo-1723403804231-f4e9b515fe9d?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "Item 2",
  <div key="jsx-item-2">JAVA</div>,
  "Item 4",
  <div key="jsx-item-2">PYTHON</div>,
  "https://images.unsplash.com/photo-1723403804231-f4e9b515fe9d?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "Item 5",
  <div key="jsx-item-2">Various Quizes</div>,
  "Item 7",
  <div key="jsx-item-2">MACHINE LEARNING</div>,
  "https://images.unsplash.com/photo-1723403804231-f4e9b515fe9d?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "Item 8",
  <div key="jsx-item-2">ARTIFICIAL INTELLIGENT</div>,
  "Item 10",
  <div key="jsx-item-3">ML/AI</div>,
  "https://images.unsplash.com/photo-1723403804231-f4e9b515fe9d?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "Item 11",
  <div key="jsx-item-2">Custom JSX Content</div>,
  "Item 13",
  <div key="jsx-item-4">Custom JSX Content</div>,
  "https://images.unsplash.com/photo-1723403804231-f4e9b515fe9d?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "Item 14",
  // Add more items as needed
];

const QuizSection = () => {
  return (
    <>
      <GridMotion items={items} />
    </>
  );
};

export default QuizSection;
