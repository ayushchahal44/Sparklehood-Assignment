export type Severity = 'Low' | 'Medium' | 'High';

export interface Incident {
  id: string;
  title: string;
  description: string;
  severity: Severity;
  date: string;
  status: 'Open' | 'In Progress' | 'Resolved';
  impact: string;
  mitigation: string;
  tags: string[];
}

export const mockIncidents: Incident[] = [
  {
    id: '1',
    title: 'Biased Recommendation Algorithm',
    description: 'Algorithm consistently favored certain demographics...',
    severity: 'Medium',
    date: '2025-03-15T10:00:00Z',
    status: 'Open',
    impact: '',
    mitigation: '',
    tags: [],
  },
  {
    id: '2',
    title: 'LLM Hallucination in Critical Info',
    description: 'LLM provided incorrect safety procedure information...',
    severity: 'High',
    date: '2025-04-01T14:30:00Z',
    status: 'Open',
    impact: '',
    mitigation: '',
    tags: [],
  },
  {
    id: '3',
    title: 'Minor Data Leak via Chatbot',
    description: 'Chatbot inadvertently exposed non-sensitive user metadata...',
    severity: 'Low',
    date: '2025-03-20T09:15:00Z',
    status: 'Open',
    impact: '',
    mitigation: '',
    tags: [],
  },
]; 