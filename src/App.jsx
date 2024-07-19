import { LearnComponent } from "./components/LearnComponent";
import { Header } from "./components/Header";
import { ChildComponents } from "./components/ChildComponents";
import { Student } from "./components/Student";
import { ArraySample } from "./components/ArraySample";
import { FunctionSample } from "./components/FunctionSample";
import { MultiTypeComponent } from "./components/MultiTypeComponent";
import { OneofSample } from "./components/OneofSample";

function App() {
  const items = [
    { id: 1, name: "Items 1" },
    { id: 2, name: "Items 2" },
    { id: 3, name: "Items 3" },
  ];
  const handleClick = () => {
    alert("Button Clicked!");
  };
  return (
    <>
      <h1>Welcome Onboard</h1>
      <LearnComponent />
      <Header />
      <Student name="Dhuwa" age={23} isMarried={true} />
      <Student name="Sajeewan" age={23} isMarried={false} />
      <Student />

      <ChildComponents>
        <p>This is My World</p>
        <p>This is My World</p>
      </ChildComponents>
      <ArraySample items={items} />
      <OneofSample color="blue" />
      <MultiTypeComponent value="Hello" />
      <MultiTypeComponent value={42} />
      <MultiTypeComponent value={true} />
      <div>
        <h2>Hello World</h2>
        <FunctionSample handleClick={handleClick} />
      </div>
    </>
  );
}

export default App;
