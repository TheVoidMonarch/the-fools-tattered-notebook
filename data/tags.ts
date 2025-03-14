export interface Tag {
  id: string;
  name: string;
  category: string;
  description: string;
}

export const commonTags: Tag[] = [
  // Web Security
  { id: "web-security", name: "Web Security", category: "Web", description: "Security practices for web applications" },
  { id: "xss", name: "XSS", category: "Web", description: "Cross-Site Scripting vulnerabilities" },
  { id: "csrf", name: "CSRF", category: "Web", description: "Cross-Site Request Forgery attacks" },
  { id: "sql-injection", name: "SQL Injection", category: "Web", description: "Database injection attacks" },
  { id: "authentication", name: "Authentication", category: "Web", description: "User authentication and authorization" },
  
  // Network Security
  { id: "network-security", name: "Network Security", category: "Network", description: "Network-level security measures" },
  { id: "firewall", name: "Firewall", category: "Network", description: "Network traffic filtering" },
  { id: "vpn", name: "VPN", category: "Network", description: "Virtual Private Networks" },
  { id: "ddos", name: "DDoS", category: "Network", description: "Distributed Denial of Service attacks" },
  
  // Cryptography
  { id: "cryptography", name: "Cryptography", category: "Crypto", description: "Encryption and cryptographic systems" },
  { id: "encryption", name: "Encryption", category: "Crypto", description: "Data encryption methods" },
  { id: "hashing", name: "Hashing", category: "Crypto", description: "Hash functions and algorithms" },
  { id: "ssl-tls", name: "SSL/TLS", category: "Crypto", description: "Secure communication protocols" },
  
  // Malware & Threats
  { id: "malware", name: "Malware", category: "Threats", description: "Malicious software" },
  { id: "ransomware", name: "Ransomware", category: "Threats", description: "Extortion malware" },
  { id: "phishing", name: "Phishing", category: "Threats", description: "Social engineering attacks" },
  { id: "botnet", name: "Botnet", category: "Threats", description: "Network of compromised devices" },
  
  // Compliance & Standards
  { id: "compliance", name: "Compliance", category: "Standards", description: "Regulatory compliance" },
  { id: "gdpr", name: "GDPR", category: "Standards", description: "General Data Protection Regulation" },
  { id: "hipaa", name: "HIPAA", category: "Standards", description: "Healthcare data protection" },
  { id: "pci-dss", name: "PCI DSS", category: "Standards", description: "Payment card security" },
  
  // Tools & Technologies
  { id: "pentesting", name: "Penetration Testing", category: "Tools", description: "Security testing" },
  { id: "wireshark", name: "Wireshark", category: "Tools", description: "Network analysis tool" },
  { id: "nmap", name: "Nmap", category: "Tools", description: "Network scanning tool" },
  { id: "metasploit", name: "Metasploit", category: "Tools", description: "Penetration testing framework" },
  
  // Best Practices
  { id: "security-best-practices", name: "Best Practices", category: "Practices", description: "Security guidelines" },
  { id: "password-security", name: "Password Security", category: "Practices", description: "Password management" },
  { id: "access-control", name: "Access Control", category: "Practices", description: "Resource access management" },
  { id: "incident-response", name: "Incident Response", category: "Practices", description: "Security incident handling" },
  
  // Emerging Threats
  { id: "ai-security", name: "AI Security", category: "Emerging", description: "AI-related security concerns" },
  { id: "iot-security", name: "IoT Security", category: "Emerging", description: "Internet of Things security" },
  { id: "cloud-security", name: "Cloud Security", category: "Emerging", description: "Cloud computing security" },
  { id: "zero-trust", name: "Zero Trust", category: "Emerging", description: "Zero trust security model" }
]; 