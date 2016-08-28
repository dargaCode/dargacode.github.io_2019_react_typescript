
'use strict' //enable 'let'

// CONSTANTS

// crappy fake Require for now
const CATEGORY_ORDER = CONSTANTS.CATEGORY_ORDER;
const SKILLS = CONSTANTS.SKILLS;

const skillParent = document.querySelector('.skills .skill-list');

// VARIABLES


// FUNCTIONS

function getSortedSkills(sortHelper) {
  return SKILLS.sort(sortHelper);
}

function addSkillsToDom(skillsArray) {
  for (let skill of skillsArray) {
    const skillCardArticle = document.createElement('article');
    skillCardArticle.classList.add('skill-card');

    const skillTypeParagraph = document.createElement('p');
    skillTypeParagraph.classList.add('skill-type');
    skillTypeParagraph.innerText = skill.type;

    const skillIcon = document.createElement('i');
    skillIcon.classList.add(skill.iconClass);

    const skillNameHeading = document.createElement('h3');
    skillNameHeading.classList.add('skill-name');
    skillNameHeading.innerText = skill.name;

    const skillCountParagraph = document.createElement('p');
    skillCountParagraph.classList.add('skill-project-count');
    skillCountParagraph.innerText = `${skill.projectCount} Projects`;

    skillCardArticle.appendChild(skillTypeParagraph);
    skillCardArticle.appendChild(skillIcon);
    skillCardArticle.appendChild(skillNameHeading);
    skillCardArticle.appendChild(skillCountParagraph);

    skillParent.appendChild(skillCardArticle);
  }
}

// HELPERS

function sortByProjectNum(a, b) {
  return b.projectCount - a.projectCount;
}

function sortByType(a, b) {
  a.order = CATEGORY_ORDER.indexOf(a.type);
  b.order = CATEGORY_ORDER.indexOf(b.type);

  if (a.order < b.order) {
    return -1;
  }
  else if (b.order < a.order) {
    return 1;
  }
  /* same type, so sort by name instead (to preserve alphabetical order within types) */
  else {
    return b.projectCount - a.projectCount;

    if (a.name < b.name) {
      return -1;
    }
    else if (b.name < a.name) {
      return 1;
    }
    else {
      return 0;
    }
  }
}

// MAIN

const sortedSkills = getSortedSkills(sortByType);

addSkillsToDom(sortedSkills);
