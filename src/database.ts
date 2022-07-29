import C_Board from "./classes/C_Board";

let C_platformLaunch = new C_Board("Platform Launch", true, 0);
let C_marketingPlan = new C_Board("Marketing Plan", undefined, 1);
let C_roadMap = new C_Board("Roadmap", undefined, 2);
const boards: C_Board[] = [C_platformLaunch, C_marketingPlan, C_roadMap];

export default boards;
