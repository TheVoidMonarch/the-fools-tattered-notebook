
import { CyberSecurityNote } from '../types';

export const sampleNotes: CyberSecurityNote[] = [
  {
    id: "1",
    title: "The Bewitchment of SQL: Ancient Art of Database Enchantment",
    date: "Waning Moon, Year of the Phoenix",
    category: "Web Security",
    content: `<p>Today I've been studying the ancient bewitchment known as SQL Injection. This powerful form of enchantment allows one to enthrall the guardians of data repositories, bending them to the caster's will.</p>
      <p>The essence of this bewitchment involves whispering arcane commands where ordinary text is expected:</p>
      <pre>' OR 1=1 --</pre>
      <p>When the enchantment is properly woven, it causes the guardian spirits to reveal all secrets in their keeping, granting access to realms and treasures meant only for the initiated.</p>
      <p>I've discovered several protective wards against such bewitchments:</p>
      <ul>
        <li>Parameterized queries (binding the bewitching energies with arcane sigils)</li>
        <li>Input validation (detecting corrupted magical symbols before they take effect)</li>
        <li>Least privilege principles (ensuring guardians only control the specific chambers they must protect)</li>
      </ul>
      <p>On the next full moon, I shall attempt to master more potent variations of this bewitchment.</p>`,
    tags: ["sql-bewitchment", "database-enchantment", "guardian-bypass", "arcane-injection"],
    questions: [
      {
        id: "q1",
        question: "What is the purpose of the mystical symbols (--) in an SQL bewitchment incantation?",
        options: [
          "To make the enchantment more visually appealing",
          "To sever the remainder of the guardian's questioning",
          "To inject malevolent spirit scripts",
          "To encrypt the bewitching code from detection"
        ],
        correctAnswer: "To sever the remainder of the guardian's questioning"
      },
      {
        id: "q2",
        question: "Which of these protective wards offers the strongest defense against SQL bewitchments?",
        options: [
          "Using illusionary validation on the client side only",
          "Concealing error messages from the guardian spirits",
          "Binding parameters with sacred sigils (parameterized queries)",
          "Renaming the chambers of data with obscure titles"
        ],
        correctAnswer: "Binding parameters with sacred sigils (parameterized queries)"
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

