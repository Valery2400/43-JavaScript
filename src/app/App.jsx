// 1. импорт сторонних файлов в компонент
import Lesson01 from "../lessons/lesson_01/Lesson01";
import "./App.css";

// 2. сам компонент - функция, возвращающая шаблон верстки
function App() {
  return (
    <div className="App">
      <h1>Hello, react 🚀</h1>
    </div>
  );
}

// экспорт компонента для связи с другими компонентами
export default App;
