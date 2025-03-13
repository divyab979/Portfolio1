import ClientAboutView from "@/components/client-view/about";
import ClientContactView from "@/components/client-view/contact";
import ClientExperienceView from "@/components/client-view/experience";
import Hero from "@/components/client-view/Hero";
import ClientHomeView from "@/components/client-view/home";
import ClientProjectView from "@/components/client-view/project";
import ClientSkillView from "@/components/client-view/skills";

const API_URL =
  process.env.NEXT_PUBLIC_API_URL || "https://portfolio1-lvd5.vercel.app";

async function extractAllDatas(currentSection) {
  const res = await fetch(
    `${API_URL}/api/${currentSection}/get?ts=${Date.now()}`,
    {
      method: "GET",
      cache: "no-store",
    }
  );

  const data = await res.json();
  return data?.data;
}

export default async function Home() {
  const homeSectionData = await extractAllDatas("home");
  const aboutSectionData = await extractAllDatas("about");
  const experienceSectionData = await extractAllDatas("experience");
  const projectSectionData = await extractAllDatas("project");
  const skillsSectionData = await extractAllDatas("skills");

  return (
    <div
      className="h-screen snap-y snap-mandatory overflow-y-scroll scroll-smooth"
      style={{
        maxHeight: "90vh",
        color: "gray",
      }}
    >
      <ClientHomeView />
      <ClientAboutView
        id="about"
        data={aboutSectionData?.length ? aboutSectionData[0] : []}
      />
      <ClientExperienceView data={experienceSectionData} />
      <ClientProjectView data={projectSectionData} />
      <ClientSkillView data={skillsSectionData} />
      <ClientContactView />
    </div>
  );
}
