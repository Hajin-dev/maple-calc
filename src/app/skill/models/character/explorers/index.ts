import { SkillData } from "../../skill-data";

import { warriorSkillData } from "./warrior";
import { magicainSkillData } from "./magician";
import { bowmenSkillData } from "./bowmen";
import { thiefSkillData } from "./thief";
import { pirateSkillData } from "./pirate";

const explorersSkillData:SkillData[]=[
    ...warriorSkillData,
    ...magicainSkillData,
    ...bowmenSkillData,
    ...thiefSkillData,
    ...pirateSkillData
]

export default explorersSkillData;