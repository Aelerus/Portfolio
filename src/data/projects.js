export const projectTypes = ['All', 'Web', 'Game', '3D & Art', 'Other']

export const projects = [
  {
    slug: 'project-one',
    name: 'Project One',
    type: 'Web',
    summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    description:
      'A placeholder description for Project One. Replace this with the real story behind the project: what it does, why it exists, and what was learned along the way.',
    tech: ['JavaScript', 'HTML', 'CSS'],
    liveUrl: '',
    sourceUrl: '',
    thumbnail: null,
    screenshots: []
  },
  {
    slug: 'project-two',
    name: 'Project Two',
    type: 'Game',
    summary: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    description:
      'A placeholder description for Project Two. Add gameplay notes, mechanics, screenshots, and links to playable builds when available.',
    tech: ['Godot', 'GDScript'],
    liveUrl: '',
    sourceUrl: '',
    thumbnail: null,
    screenshots: []
  },
  {
    slug: 'project-three',
    name: 'Project Three',
    type: '3D & Art',
    summary: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco.',
    description:
      'A placeholder description for Project Three. Use this space to talk through the modeling and animation process, and any rendering notes.',
    tech: ['Blender'],
    liveUrl: '',
    sourceUrl: '',
    thumbnail: null,
    screenshots: []
  },
  {
    slug: 'project-four',
    name: 'Project Four',
    type: 'Web',
    summary: 'Duis aute irure dolor in reprehenderit in voluptate velit esse.',
    description:
      'A placeholder description for Project Four. Replace with details and link out to the live build and source repo.',
    tech: ['JavaScript', 'CSS'],
    liveUrl: '',
    sourceUrl: '',
    thumbnail: null,
    screenshots: []
  },
  {
    slug: 'project-five',
    name: 'Project Five',
    type: 'Game',
    summary: 'Cillum dolore eu fugiat nulla pariatur excepteur sint occaecat.',
    description:
      'A placeholder description for Project Five. Add design pillars, screenshots, and the playable build link when ready.',
    tech: ['Unity', 'C#'],
    liveUrl: '',
    sourceUrl: '',
    thumbnail: null,
    screenshots: []
  },
  {
    slug: 'project-six',
    name: 'Project Six',
    type: '3D & Art',
    summary: 'Cupidatat non proident, sunt in culpa qui officia deserunt mollit.',
    description:
      'A placeholder description for Project Six. Document the modeling references, key choices, and renders.',
    tech: ['Blender'],
    liveUrl: '',
    sourceUrl: '',
    thumbnail: null,
    screenshots: []
  },
  {
    slug: 'project-seven',
    name: 'Project Seven',
    type: 'Web',
    summary: 'Anim id est laborum sed ut perspiciatis unde omnis iste natus.',
    description:
      'A placeholder description for Project Seven. Replace with the real write up later.',
    tech: ['JavaScript', 'HTML', 'CSS'],
    liveUrl: '',
    sourceUrl: '',
    thumbnail: null,
    screenshots: []
  },
  {
    slug: 'project-eight',
    name: 'Project Eight',
    type: 'Other',
    summary: 'Error sit voluptatem accusantium doloremque laudantium totam rem.',
    description:
      'A placeholder description for Project Eight. Could be a tool, an experiment, or anything that does not fit the other buckets.',
    tech: ['Misc'],
    liveUrl: '',
    sourceUrl: '',
    thumbnail: null,
    screenshots: []
  }
]

export function getProjectBySlug(slug) {
  return projects.find((p) => p.slug === slug)
}
