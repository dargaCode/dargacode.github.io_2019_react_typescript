export const SKILL_URL_PREFIX = `https://github.com/dargaCode?tab=repositories&q=topic%3A`;

export interface SkillSortComparator {
  (a: Skill, b: Skill): number;
}

export interface RawSkill {
  name: string;
  displayName: string;
  iconClass: string;
  projectCount: number;
}

// Some extra values are derived before export, but can be ignored by user
export interface Skill extends RawSkill {
  nameLower: string;
}

export const SKILL_SORT_OPTIONS = ["Skill Name", "Project Count"];

export const SKILL_TYPE_ORDER: string[] = [
  "Language",
  "Environment",
  "Framework",
  "Library",
  "Database",
  "Tool"
];

// Add more attributes to the skills objects to help with sorting.
// It's more efficient to do it once here instead of inside the comparators.
export function processRawSkills(skills: RawSkill[]): Skill[] {
  return skills.map(
    (skill: RawSkill): Skill => {
      return {
        ...skill,
        // Allow lowercase skills like jQuery to sort properly by name
        nameLower: skill.displayName.toLowerCase()
      };
    }
  );
}

export function projectsSkillComparator(a: Skill, b: Skill): number {
  return b.projectCount - a.projectCount;
}

export function nameSkillComparator(a: Skill, b: Skill): number {
  if (a.nameLower < b.nameLower) {
    return -1;
  }
  if (b.nameLower < a.nameLower) {
    return 1;
  }
  return 0;
}
