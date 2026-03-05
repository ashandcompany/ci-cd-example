import AboutComponent from "../../components/about-component";

export default function About() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8">
      <main className="flex flex-col items-center justify-center flex-1">
        <AboutComponent />
      </main>
    </div>
  );
}
