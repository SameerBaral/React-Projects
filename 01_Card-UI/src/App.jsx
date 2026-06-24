import Card from "./components/Card";
import { services } from "./data/services";

function App() {
  return (
    <div className="min-h-screen bg-slate-200 flex justify-center items-center p-8">

      <div className="grid grid-cols-2 md:grid-cols-2 gap-8 max-w-4xl">

        {services.map((service) => (
          <Card
            key={service.id}
            title={service.title}
            description={service.description}
            tags={service.tags}
            bgColor={service.bgColor}
          />
        ))}

      </div>

    </div>
  );
}

export default App;