import C_Board from "./classes/C_Board";
import C_GenericTask from "./classes/C_GenericTask";
import { createTask } from "./Utility";

/* let C_buildFirst = new C_GenericTask("Build First");
let C_buildSecond = new C_GenericTask("Build Second");
let C_buildThird = new C_GenericTask("Build Third"); */

let C_build1 = new C_GenericTask("1");
let C_build2 = new C_GenericTask("2");
let C_build3 = new C_GenericTask("3");
let C_build4 = new C_GenericTask("4");
let C_build5 = new C_GenericTask("5");
let C_build6 = new C_GenericTask("6");
let C_build7 = new C_GenericTask("7");
let C_build8 = new C_GenericTask("8");
let C_build9 = new C_GenericTask("9");
let C_build10 = new C_GenericTask("10");
let C_build11 = new C_GenericTask("11");
let C_build12 = new C_GenericTask("12");
let C_build13 = new C_GenericTask("13");
let C_build14 = new C_GenericTask("14");
let C_build15 = new C_GenericTask("15");
let C_build16 = new C_GenericTask("16");
let C_build17 = new C_GenericTask("17");

let C_buildUIOnboarding = createTask(
  "Build UI for onboarding flow",
  "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo, sequi! Id libero repudiandae, dicta ducimus architecto veniam repellat explicabo sint provident debitis ex vitae sunt odio, sequi quo at! Ducimus?",
  [C_build1, C_build2, C_build3]
);

let C_buildUIForSearch = createTask(
  "Build UI for Search",
  "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo, sequi! Id libero repudiandae, dicta ducimus architecto veniam repellat explicabo sint provident debitis ex vitae sunt odio, sequi quo at! Ducimus?",
  [C_build4]
);

let C_buildSettingsUI = createTask(
  "Build settings UI",
  "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo, sequi! Id libero repudiandae, dicta ducimus architecto veniam repellat explicabo sint provident debitis ex vitae sunt odio, sequi quo at! Ducimus?",
  [C_build5]
);

let C_designSettings = createTask(
  "Design settings and search pages",
  "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo, sequi! Id libero repudiandae, dicta ducimus architecto veniam repellat explicabo sint provident debitis ex vitae sunt odio, sequi quo at! Ducimus?",
  [C_build6]
);
C_designSettings.subTasks[0].status = "DONE";

let C_addAccountManagement = createTask(
  "Add account manageemnt endpoints",
  "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo, sequi! Id libero repudiandae, dicta ducimus architecto veniam repellat explicabo sint provident debitis ex vitae sunt odio, sequi quo at! Ducimus?",
  [C_build7, C_build8, C_build9]
);
C_addAccountManagement.subTasks[0].status = "DONE";
C_addAccountManagement.subTasks[1].status = "DONE";

let C_conductWireframeTests = createTask(
  "Conduct 5 wireframe tests",
  "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo, sequi! Id libero repudiandae, dicta ducimus architecto veniam repellat explicabo sint provident debitis ex vitae sunt odio, sequi quo at! Ducimus?",
  [C_build10]
);
C_conductWireframeTests.subTasks[0].status = "DONE";

let C_designOnbordingFlow = createTask(
  "Design onboarding flow",
  "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo, sequi! Id libero repudiandae, dicta ducimus architecto veniam repellat explicabo sint provident debitis ex vitae sunt odio, sequi quo at! Ducimus?",
  [C_build11, C_build12, C_build13]
);
C_designOnbordingFlow.subTasks[0].status = "DONE";

let C_createWireframePrototype = createTask(
  "Create wireframe prototype",
  "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo, sequi! Id libero repudiandae, dicta ducimus architecto veniam repellat explicabo sint provident debitis ex vitae sunt odio, sequi quo at! Ducimus?",
  [C_build14]
);
C_createWireframePrototype.subTasks[0].status = "DONE";

let C_reviewResultsUsability = createTask(
  "Review results of usability tests and iterate",
  "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo, sequi! Id libero repudiandae, dicta ducimus architecto veniam repellat explicabo sint provident debitis ex vitae sunt odio, sequi quo at! Ducimus?",
  [C_build15, C_build16, C_build17]
);
C_reviewResultsUsability.subTasks[0].status = "DONE";
C_reviewResultsUsability.subTasks[1].status = "DONE";
C_reviewResultsUsability.subTasks[2].status = "DONE";

let C_platformLaunch = new C_Board(
  "Platform Launch",
  [
    C_buildUIOnboarding,
    C_buildUIForSearch,
    C_buildSettingsUI,
    C_designSettings,
    C_addAccountManagement,
    C_designOnbordingFlow,
    C_conductWireframeTests,
    C_createWireframePrototype,
    C_reviewResultsUsability,
  ],
  true,
  0
);

let C_marketingPlan = new C_Board(
  "Marketing Plan",
  [
    C_buildUIOnboarding,
    C_buildUIForSearch,
    C_designOnbordingFlow,
    C_conductWireframeTests,
    C_createWireframePrototype,
  ],
  undefined,
  1
);
let C_roadMap = new C_Board(
  "Roadmap",
  [
    C_buildUIForSearch,
    C_buildSettingsUI,
    C_designSettings,
    C_addAccountManagement,
    C_createWireframePrototype,
    C_reviewResultsUsability,
  ],
  undefined,
  2
);

const boards: C_Board[] = [C_platformLaunch, C_marketingPlan, C_roadMap];

export default boards;
