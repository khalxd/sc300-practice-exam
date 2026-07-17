window.SC300_INTERVIEW = [
  {
    "id": "I1",
    "category": "Conditional Access",
    "prompt": "How would you roll out a new Conditional Access policy without locking out the organization?",
    "keywords": [
      "report-only",
      "pilot",
      "emergency",
      "exclude",
      "sign-in logs",
      "test"
    ],
    "model": "Start with a pilot group, exclude monitored emergency access accounts, use report-only mode, review sign-in logs and policy impact, then expand in controlled stages."
  },
  {
    "id": "I2",
    "category": "PIM",
    "prompt": "Why is an eligible PIM assignment safer than a permanent active assignment?",
    "keywords": [
      "temporary",
      "activate",
      "mfa",
      "approval",
      "least privilege",
      "standing"
    ],
    "model": "Eligible assignments remove standing privilege. The user activates only when needed and can be required to complete MFA, provide justification, obtain approval, and accept a limited duration."
  },
  {
    "id": "I3",
    "category": "Troubleshooting",
    "prompt": "A user completed MFA but still cannot access an enterprise application. What would you check?",
    "keywords": [
      "sign-in logs",
      "conditional access",
      "assignment",
      "authorization",
      "group",
      "license"
    ],
    "model": "Check sign-in logs and Conditional Access results first, then verify enterprise application assignment, group membership, app roles, licensing, and device or session requirements."
  },
  {
    "id": "I4",
    "category": "Workload identities",
    "prompt": "Explain service principal versus managed identity.",
    "keywords": [
      "application",
      "azure resource",
      "credentials",
      "secret",
      "microsoft manages",
      "service principal"
    ],
    "model": "A service principal represents an application in a tenant and uses a secret, certificate, or federated credential. A managed identity is a special service principal for an Azure resource whose credentials are managed by Azure."
  },
  {
    "id": "I5",
    "category": "Governance",
    "prompt": "How do entitlement management, access reviews, and PIM work together?",
    "keywords": [
      "access package",
      "request",
      "review",
      "still need",
      "privileged",
      "temporary"
    ],
    "model": "Entitlement management governs requests and assignments, Access Reviews verify continued need, and PIM provides controlled temporary privileged access."
  },
  {
    "id": "I6",
    "category": "Hybrid identity",
    "prompt": "Compare password hash synchronization, pass-through authentication, and AD FS.",
    "keywords": [
      "hash",
      "cloud",
      "on-premises",
      "agent",
      "federation",
      "redirect"
    ],
    "model": "PHS lets Entra authenticate using a synchronized password-derived hash. PTA validates passwords through on-premises agents. AD FS redirects authentication to the company federation service."
  },
  {
    "id": "I7",
    "category": "External identities",
    "prompt": "Explain B2B collaboration versus B2B direct connect.",
    "keywords": [
      "guest",
      "directory",
      "shared channels",
      "tenant",
      "home credentials"
    ],
    "model": "B2B collaboration uses a guest representation in the resource tenant. B2B direct connect is primarily for Teams shared channels without the traditional guest and tenant-switching experience."
  },
  {
    "id": "I8",
    "category": "Onboarding",
    "prompt": "How would you onboard a new employee into passwordless authentication?",
    "keywords": [
      "temporary access pass",
      "register",
      "windows hello",
      "authenticator",
      "expire"
    ],
    "model": "Issue a time-limited TAP for the first secure sign-in, require registration of Windows Hello for Business or Authenticator, verify registration, and allow the TAP to expire."
  }
];
