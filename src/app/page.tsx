import StudentCard from "./components/StudentCard";

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold mb-6">Student ID Cards</h1>

      <StudentCard name="Ahsan " age={16} rollNumber="S12345" studentClass="Mon 2pm to 5pm" />
      <StudentCard name="Jameel" age={17} rollNumber="S54321" studentClass="Mon 2pm to 5pm" />
      <StudentCard name="Zain" age={15} rollNumber="S67890" studentClass="Mon 2pm to 5pm" />
    </div>
  );
};

export default Home;
