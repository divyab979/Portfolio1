"use client";

import React, { useEffect, useState } from "react";
import { Container, Box, Tabs, Tab, Button } from "@mui/material";
import AdminAboutView from "@/components/admin-view/about";
import AdminContactView from "@/components/admin-view/contact";
import AdminSkillsView from "@/components/admin-view/skills";
import AdminExperienceView from "@/components/admin-view/experience";
import AdminHomeView from "@/components/admin-view/home";
import AdminProjectView from "@/components/admin-view/project";
import Login from "@/components/admin-view/login";
import { addData, getData, login, updateData } from "@/services";

// Initial form states with default values
const initialHomeFormData = {
  myName: "",
  oneLineSummary: "",
};

const initialAboutFormData = {
  aboutTitle: "",
  aboutSummary: "",
};

const initialExperienceFormData = {
  jobTitle: "",
  company: "",
  duration: "",
  experienceSummary: "",
};

const initialProjectFormData = {
  projectImage: "",
  projectName: "",
  projectDescription: "",
  projectGitLink: "",
  projectWebLink: "",
};

const initialSkillsFormData = {
  skillTitle: "",
  skillImage: "",
};

const initialLoginFormData = {
  username: "",
  password: "",
};

export default function AdminView() {
  // States for selected tab, form data, fetched data, auth, etc.
  const [currentSelectedTab, setCurrentSelectedTab] = useState("home");
  const [homeViewFormData, setHomeViewFormData] = useState(initialHomeFormData);
  const [aboutViewFormData, setAboutViewFormData] =
    useState(initialAboutFormData);
  const [experienceViewFormData, setExperienceViewFormData] = useState(
    initialExperienceFormData
  );
  const [skillsViewFormData, setSkillsViewFormData] = useState(
    initialSkillsFormData
  );
  const [projectViewFormData, setProjectViewFormData] = useState(
    initialProjectFormData
  );
  const [allData, setAllData] = useState({});
  const [update, setUpdate] = useState(false);
  const [authUser, setAuthUser] = useState(false);
  const [loginFormData, setLoginFormData] = useState(initialLoginFormData);

  // Define menu items with their corresponding components and props.
  // Note: We spread the initial form data to ensure that all properties are always defined.
  const menuItems = [
    {
      id: "home",
      label: "Home",
      component: (
        <AdminHomeView
          formData={{ ...initialHomeFormData, ...homeViewFormData }}
          setFormData={setHomeViewFormData}
          handleSaveData={handleSaveData}
        />
      ),
    },
    {
      id: "about",
      label: "About",
      component: (
        <AdminAboutView
          formData={{ ...initialAboutFormData, ...aboutViewFormData }}
          setFormData={setAboutViewFormData}
          handleSaveData={handleSaveData}
        />
      ),
    },
    {
      id: "experience",
      label: "Experience",
      component: (
        <AdminExperienceView
          formData={{ ...initialExperienceFormData, ...experienceViewFormData }}
          setFormData={setExperienceViewFormData}
          handleSaveData={handleSaveData}
          data={allData?.experience || []}
        />
      ),
    },
    {
      id: "skills",
      label: "Skills",
      component: (
        <AdminSkillsView
          formData={{ ...initialSkillsFormData, ...skillsViewFormData }}
          setFormData={setSkillsViewFormData}
          handleSaveData={handleSaveData}
          data={allData?.skills || []}
        />
      ),
    },
    {
      id: "project",
      label: "Project",
      component: (
        <AdminProjectView
          formData={{ ...initialProjectFormData, ...projectViewFormData }}
          setFormData={setProjectViewFormData}
          handleSaveData={handleSaveData}
          data={allData?.project || []}
        />
      ),
    },
    {
      id: "contact",
      label: "Contact",
      component: <AdminContactView data={allData?.contact || []} />,
    },
  ];

  // Function to fetch data for the selected tab
  async function extractAllDatas() {
    const response = await getData(currentSelectedTab);

    if (
      currentSelectedTab === "home" &&
      response &&
      response.data &&
      response.data.length
    ) {
      setHomeViewFormData(response.data[0]);
      setUpdate(true);
    }

    if (
      currentSelectedTab === "about" &&
      response &&
      response.data &&
      response.data.length
    ) {
      setAboutViewFormData(response.data[0]);
      setUpdate(true);
    }

    if (response?.success) {
      setAllData((prev) => ({
        ...prev,
        [currentSelectedTab]: response.data,
      }));
    }
  }

  // Function to save data (using addData or updateData)
  async function handleSaveData() {
    const dataMap = {
      home: homeViewFormData,
      about: aboutViewFormData,
      experience: experienceViewFormData,
      project: projectViewFormData,
      skills: skillsViewFormData,
    };

    const response = update
      ? await updateData(currentSelectedTab, dataMap[currentSelectedTab])
      : await addData(currentSelectedTab, dataMap[currentSelectedTab]);

    console.log(response, "response");

    if (response.success) {
      resetFormDatas();
      extractAllDatas();
    }
  }

  // Reset form data to its initial state
  function resetFormDatas() {
    setHomeViewFormData(initialHomeFormData);
    setAboutViewFormData(initialAboutFormData);
    setExperienceViewFormData(initialExperienceFormData);
    setSkillsViewFormData(initialSkillsFormData);
    setProjectViewFormData(initialProjectFormData);
  }

  // Fetch data when the selected tab changes
  useEffect(() => {
    extractAllDatas();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentSelectedTab]);

  // Check for authenticated user on mount
  useEffect(() => {
    setAuthUser(JSON.parse(sessionStorage.getItem("authUser")));
  }, []);

  // Login function (updates auth state and sessionStorage)
  async function handleLogin() {
    const res = await login(loginFormData);
    console.log(res, "login");
    if (res?.success) {
      setAuthUser(true);
      sessionStorage.setItem("authUser", JSON.stringify(true));
    }
  }

  // If not logged in, show the Login component
  if (!authUser)
    return (
      <Login
        formData={loginFormData}
        handleLogin={handleLogin}
        setFormData={setLoginFormData}
      />
    );

  // Find the current menu item
  const currentItem = menuItems.find((item) => item.id === currentSelectedTab);

  // Handle tab change (using the index of the tab)
  const handleTabChange = (event, newValue) => {
    const selectedId = menuItems[newValue].id;
    setCurrentSelectedTab(selectedId);
    resetFormDatas();
    setUpdate(false);
  };

  return (
    <Box maxWidth="lg" sx={{ mt: 4 }}>
      {/* Navigation Bar */}
      <Box
        sx={{
          borderBottom: 1,
          borderColor: "gray.200",
          width: "100%",
          position: "fixed",
          top: 0,
          left: 0,
          backgroundColor: "white",
          zIndex: 1000,
          p: 2,
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            width: "100%",
            justifyContent: "space-between",
          }}
        >
          <Tabs
            value={menuItems.findIndex(
              (item) => item.id === currentSelectedTab
            )}
            onChange={handleTabChange}
            TabIndicatorProps={{
              style: { backgroundColor: "rgb(255,194,188)" },
            }}
            sx={{
              "& .Mui-selected": { color: "rgb(255,194,188) !important" },
            }}
          >
            {menuItems.map((item) => (
              <Tab key={item.id} label={item.label} />
            ))}
          </Tabs>
          <Button
            onClick={() => {
              setAuthUser(false);
              sessionStorage.removeItem("authUser");
            }}
            // variant="outlined"
            size="small"
            sx={{
              fontWeight: "bold",
              padding: "10px",
              backgroundColor: "rgb(255,194,188)", // Pink color
              color: "white",
              "&:hover": { backgroundColor: "rgb(255,180,170)" }, // Slightly darker pink on hover
            }}
          >
            Logout
          </Button>
        </Box>
      </Box>

      {/* Content Section */}
      <Container sx={{ mt: 10, pt: 5 }}>{currentItem?.component}</Container>
    </Box>
  );
}
