import HomePage from "./components/Home";
import ProjectsPage from "./_Pages/ProjectsPage";
import AboutMePage from "./_Pages/AboutMePage";
import { CarouselSpacing } from "./_Pages/TestimonialsPage";

export default function Home() {
  return (
    <main>
      <HomePage />
      <ProjectsPage />
      <AboutMePage />
      <CarouselSpacing />
    </main>
  );
}
