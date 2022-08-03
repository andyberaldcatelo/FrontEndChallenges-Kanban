import C_Board from "./classes/C_Board";
import C_GenericTask from "./classes/C_GenericTask";
import E_TaskState from "./Enum/E_TaskState";
import { createGenericTask, createTask, createBoard } from "./Utility";

let C_buildFirst = new C_GenericTask("Build First");
let C_buildSecond = new C_GenericTask("Build Second");
let C_buildThird = new C_GenericTask("Build Third");

let C_buildUIOnboarding = createTask(
  "Build UI for onboarding flow",
  "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo, sequi! Id libero repudiandae, dicta ducimus architecto veniam repellat explicabo sint provident debitis ex vitae sunt odio, sequi quo at! Ducimus?",
  [C_buildFirst, C_buildSecond, C_buildThird]
);

let C_buildUIForSearch = createTask(
  "Build UI for Search",
  "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo, sequi! Id libero repudiandae, dicta ducimus architecto veniam repellat explicabo sint provident debitis ex vitae sunt odio, sequi quo at! Ducimus?",
  [C_buildFirst]
);

let C_buildSettingsUI = createTask(
  "Build settings UI",
  "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo, sequi! Id libero repudiandae, dicta ducimus architecto veniam repellat explicabo sint provident debitis ex vitae sunt odio, sequi quo at! Ducimus?",
  [C_buildFirst, C_buildSecond]
);

let C_designSettings = createTask(
  "Design settings and search pages",
  "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo, sequi! Id libero repudiandae, dicta ducimus architecto veniam repellat explicabo sint provident debitis ex vitae sunt odio, sequi quo at! Ducimus?",
  [C_buildFirst, C_buildSecond]
);

let C_addAccountManagement = createTask(
  "Add account manageemnt endpoints",
  "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo, sequi! Id libero repudiandae, dicta ducimus architecto veniam repellat explicabo sint provident debitis ex vitae sunt odio, sequi quo at! Ducimus?",
  [C_buildFirst, C_buildSecond, C_buildThird]
);

let C_conductWireframeTests = createTask(
  "Conduct 5 wireframe tests",
  "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo, sequi! Id libero repudiandae, dicta ducimus architecto veniam repellat explicabo sint provident debitis ex vitae sunt odio, sequi quo at! Ducimus?",
  [C_buildFirst]
);

let C_designOnbordingFlow = createTask(
  "Design onboarding flow",
  "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo, sequi! Id libero repudiandae, dicta ducimus architecto veniam repellat explicabo sint provident debitis ex vitae sunt odio, sequi quo at! Ducimus?",
  [C_buildFirst, C_buildSecond, C_buildThird]
);

let C_createWireframePrototype = createTask(
  "Create wireframe prototype",
  "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo, sequi! Id libero repudiandae, dicta ducimus architecto veniam repellat explicabo sint provident debitis ex vitae sunt odio, sequi quo at! Ducimus?",
  [C_buildFirst]
);

let C_reviewResultsUsability = createTask(
  "Review results of usability tests and iterate",
  "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo, sequi! Id libero repudiandae, dicta ducimus architecto veniam repellat explicabo sint provident debitis ex vitae sunt odio, sequi quo at! Ducimus?",
  [C_buildFirst, C_buildSecond, C_buildThird]
);

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
