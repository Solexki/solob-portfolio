import Popup from "@/components/Common/Popup";
import Projects from "@/components/Site/Projects";

export default function HomePage() {
  return (
    <>
      <Projects />
      <noscript>
        <Popup
          title="Enable JS"
          content="This portfolio site have some cool functionality that require Java Script, Please enable JS"
        />
      </noscript>
    </>
  );
}
