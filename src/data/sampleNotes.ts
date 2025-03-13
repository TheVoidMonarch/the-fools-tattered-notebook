
import { CyberSecurityNote } from '@/types';

export const sampleNotes: CyberSecurityNote[] = [
  {
    id: "1",
    title: "The Art of SQL Injection: A Beginner's Guide",
    date: "Waning Moon, Year of the Phoenix",
    category: "Web Security",
    content: `<p>Today I've been studying the ancient technique known as SQL Injection. This powerful incantation allows one to manipulate the very foundation of data repositories.</p>
      <p>The basic structure of this spell involves inserting magical commands where ordinary text is expected:</p>
      <pre>' OR 1=1 --</pre>
      <p>When cast correctly, this allows a practitioner to bypass the guardians of authentication, revealing secrets not meant for untrained eyes.</p>
      <p>I've discovered that proper defense against such incantations involves:</p>
      <ul>
        <li>Parameterized queries (binding the magical energies)</li>
        <li>Input validation (checking for corrupted magical symbols)</li>
        <li>Least privilege principles (limiting the power of the conjuration)</li>
      </ul>
      <p>Tomorrow I shall attempt to master more advanced variations of this technique.</p>`,
    tags: ["sql-injection", "web-security", "authentication-bypass", "beginner"],
    questions: [
      {
        id: "q1",
        question: "What is the primary purpose of the comment symbols (--) in an SQL injection attack?",
        options: [
          "To make the code more readable",
          "To comment out the rest of the SQL query",
          "To inject malicious JavaScript",
          "To encrypt the injected code"
        ],
        correctAnswer: "To comment out the rest of the SQL query"
      },
      {
        id: "q2",
        question: "Which of the following is the best defense against SQL injection attacks?",
        options: [
          "Using client-side validation only",
          "Hiding database error messages",
          "Using parameterized queries",
          "Renaming database tables"
        ],
        correctAnswer: "Using parameterized queries"
      }
    ]
  },
  {
    id: "2",
    title: "Deciphering the XSS Enchantment",
    date: "Third Day of Autumn Equinox",
    category: "Web Security",
    content: `<p>Cross-Site Scripting (XSS) - a subtle but powerful enchantment that allows the insertion of magical scripts into texts viewed by other practitioners.</p>
      <p>I've identified three primary forms of this spell:</p>
      <ul>
        <li><strong>Reflected XSS:</strong> A temporary incantation, cast through manipulated scrolls (URLs) that affects only the immediate viewer</li>
        <li><strong>Stored XSS:</strong> A persistent spell, embedded in the very fabric of the repository, affecting all who view the corrupted text</li>
        <li><strong>DOM-based XSS:</strong> A localized enchantment that manipulates the structure of the viewing glass itself</li>
      </ul>
      <p>A basic casting might look like this:</p>
      <pre>&lt;script&gt;alert('You have been enchanted!')&lt;/script&gt;</pre>
      <p>I found that protective wards include:</p>
      <ul>
        <li>Content Security Policy (CSP) - limiting which magical sources can be trusted</li>
        <li>Output encoding - transforming dangerous symbols into harmless representations</li>
        <li>Input sanitization - cleansing texts of potentially dangerous incantations</li>
      </ul>`,
    tags: ["xss", "cross-site-scripting", "web-security", "client-side-attacks"],
    questions: [
      {
        id: "q1",
        question: "Which type of XSS attack persists in the database and affects multiple users?",
        options: [
          "Reflected XSS",
          "Stored XSS",
          "DOM-based XSS",
          "Induced XSS"
        ],
        correctAnswer: "Stored XSS"
      },
      {
        id: "q2",
        question: "What defense mechanism restricts which sources can load scripts on your page?",
        options: [
          "HTTPS",
          "Content Security Policy (CSP)",
          "Same-Origin Policy",
          "CORS"
        ],
        correctAnswer: "Content Security Policy (CSP)"
      }
    ]
  }
];
