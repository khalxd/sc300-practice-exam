window.SC300_META = {
  "title": "SC-300 Microsoft Identity & Access Administrator Exam Simulator",
  "version": "5.0",
  "updated": "2026-07-17",
  "sourceNote": "Original content aligned to Microsoft SC-300 skills measured as of April 27, 2026.",
  "domains": [
    {
      "name": "Implement and manage user identities",
      "weight": "20\u201325%"
    },
    {
      "name": "Implement authentication and access management",
      "weight": "25\u201330%"
    },
    {
      "name": "Plan and implement workload identities",
      "weight": "20\u201325%"
    },
    {
      "name": "Plan and automate identity governance",
      "weight": "20\u201325%"
    }
  ]
};
window.SC300_QUESTIONS = [
  {
    "id": "U01",
    "domain": "Implement and manage user identities",
    "topic": "Roles and least privilege",
    "difficulty": "Medium",
    "type": "single",
    "scenario": "The help desk must reset passwords for non-administrative users but must not create users, assign licenses, or manage privileged roles.",
    "question": "Which Microsoft Entra role should you assign?",
    "options": [
      "User Administrator",
      "Helpdesk Administrator",
      "Privileged Role Administrator",
      "Global Reader"
    ],
    "answer": [
      1
    ],
    "explanation": "Helpdesk Administrator is the least-privileged built-in role for resetting passwords for non-administrative users. User Administrator grants broader user-management permissions.",
    "whyWrong": [
      "User Administrator can create and manage users and groups, which exceeds the requirement.",
      "Correct.",
      "Privileged Role Administrator manages role assignments and PIM, not routine password resets.",
      "Global Reader is read-only."
    ]
  },
  {
    "id": "U02",
    "domain": "Implement and manage user identities",
    "topic": "Administrative units",
    "difficulty": "Medium",
    "type": "single",
    "scenario": "A multinational company wants regional help desk staff to reset passwords only for users in their own region.",
    "question": "Which solution provides the required scope with the least privilege?",
    "options": [
      "Create one tenant per region",
      "Use administrative units and scoped role assignments",
      "Create dynamic groups and assign Global Administrator",
      "Use Azure RBAC at the subscription scope"
    ],
    "answer": [
      1
    ],
    "explanation": "Administrative units can scope supported Microsoft Entra roles to a subset of users, groups, or devices.",
    "whyWrong": [
      "Separate tenants add unnecessary complexity.",
      "Correct.",
      "Dynamic groups do not scope directory role permissions, and Global Administrator violates least privilege.",
      "Azure RBAC manages Azure resources, not Microsoft Entra user administration."
    ]
  },
  {
    "id": "U03",
    "domain": "Implement and manage user identities",
    "topic": "Dynamic groups",
    "difficulty": "Easy",
    "type": "single",
    "scenario": "Employees must automatically join the Sales group when the department attribute equals Sales and leave it when the attribute changes.",
    "question": "What should you configure?",
    "options": [
      "An assigned security group",
      "A dynamic user security group",
      "A distribution group",
      "An administrative unit"
    ],
    "answer": [
      1
    ],
    "explanation": "A dynamic user group evaluates user attributes and automatically updates membership.",
    "whyWrong": [
      "Assigned groups require manual membership changes.",
      "Correct.",
      "Distribution groups are primarily for email distribution.",
      "Administrative units scope administration; they do not automate group membership."
    ]
  },
  {
    "id": "U04",
    "domain": "Implement and manage user identities",
    "topic": "Group-based licensing",
    "difficulty": "Medium",
    "type": "single",
    "scenario": "The organization wants Microsoft 365 licenses assigned and removed automatically when employees move between departments.",
    "question": "Which solution requires the least administrative effort?",
    "options": [
      "Direct license assignment",
      "Dynamic groups with group-based licensing",
      "Administrative units with scoped administrators",
      "Access reviews"
    ],
    "answer": [
      1
    ],
    "explanation": "Dynamic groups maintain membership from attributes, and group-based licensing applies or removes licenses as membership changes.",
    "whyWrong": [
      "Direct assignments require ongoing manual maintenance.",
      "Correct.",
      "Administrative units do not assign licenses automatically.",
      "Access reviews verify existing access; they do not automate department-based licensing."
    ]
  },
  {
    "id": "U05",
    "domain": "Implement and manage user identities",
    "topic": "Custom domains",
    "difficulty": "Easy",
    "type": "single",
    "scenario": "An administrator adds contoso.com as a custom domain in Microsoft Entra ID.",
    "question": "What must be completed before users can use the domain in their user principal names?",
    "options": [
      "Create an Azure subscription",
      "Verify domain ownership by adding the required DNS record",
      "Configure Microsoft Entra Connect Health",
      "Create a Conditional Access policy"
    ],
    "answer": [
      1
    ],
    "explanation": "Microsoft requires proof of domain ownership, commonly through a TXT DNS record, before the domain is verified.",
    "whyWrong": [
      "An Azure subscription is unrelated to custom-domain verification.",
      "Correct.",
      "Connect Health monitors hybrid identity components.",
      "Conditional Access does not verify domains."
    ]
  },
  {
    "id": "U06",
    "domain": "Implement and manage user identities",
    "topic": "B2B collaboration",
    "difficulty": "Medium",
    "type": "single",
    "scenario": "A consultant from another organization needs access to a SharePoint site, must use their existing work credentials, and should appear in your directory.",
    "question": "Which solution should you use?",
    "options": [
      "External ID for customers",
      "B2B collaboration guest user",
      "B2B direct connect",
      "A cloud-only member account"
    ],
    "answer": [
      1
    ],
    "explanation": "B2B collaboration creates a guest object in the resource tenant while the consultant authenticates with their home identity.",
    "whyWrong": [
      "Customer identity solutions are intended for consumers accessing customer-facing apps.",
      "Correct.",
      "B2B direct connect is primarily associated with Teams shared channels and does not create a traditional guest object for this scenario.",
      "A local member account creates unnecessary credentials."
    ]
  },
  {
    "id": "U07",
    "domain": "Implement and manage user identities",
    "topic": "B2B direct connect",
    "difficulty": "Medium",
    "type": "single",
    "scenario": "Users from two organizations must collaborate in Microsoft Teams shared channels without switching tenants or becoming traditional guest users.",
    "question": "Which capability should be configured?",
    "options": [
      "B2B collaboration",
      "B2B direct connect",
      "Cross-tenant synchronization",
      "Application Proxy"
    ],
    "answer": [
      1
    ],
    "explanation": "B2B direct connect supports Teams shared-channel collaboration without the traditional guest experience.",
    "whyWrong": [
      "B2B collaboration commonly creates guest objects and can require tenant switching.",
      "Correct.",
      "Cross-tenant synchronization provisions B2B users between tenants; it is not the core shared-channel mechanism.",
      "Application Proxy publishes on-premises web apps."
    ]
  },
  {
    "id": "U08",
    "domain": "Implement and manage user identities",
    "topic": "External users",
    "difficulty": "Medium",
    "type": "single",
    "scenario": "A guest user from Contoso is invited to Fabrikam. The guest signs in with Contoso credentials.",
    "question": "Where is the user's primary identity managed?",
    "options": [
      "Only in Fabrikam",
      "In the Contoso home tenant",
      "Equally in both tenants",
      "In the Microsoft consumer identity system"
    ],
    "answer": [
      1
    ],
    "explanation": "The home organization owns and authenticates the primary identity. Fabrikam stores a guest representation used for authorization.",
    "whyWrong": [
      "Fabrikam manages the guest object, not the primary identity.",
      "Correct.",
      "The tenants do not co-own the primary account.",
      "A work account remains in the home Microsoft Entra tenant."
    ]
  },
  {
    "id": "U09",
    "domain": "Implement and manage user identities",
    "topic": "Cross-tenant access",
    "difficulty": "Hard",
    "type": "single",
    "scenario": "Contoso trusts MFA claims from Fabrikam. Fabrikam users access Contoso resources and should not be prompted to perform MFA again when their home tenant has already satisfied MFA.",
    "question": "What should Contoso configure?",
    "options": [
      "Inbound cross-tenant access trust settings",
      "Outbound tenant restrictions",
      "A dynamic guest group",
      "Password hash synchronization"
    ],
    "answer": [
      0
    ],
    "explanation": "Inbound cross-tenant access settings can trust MFA, compliant-device, and hybrid-joined-device claims from a partner tenant.",
    "whyWrong": [
      "Correct.",
      "Outbound settings control how your users access external tenants; they do not establish inbound trust for partner claims.",
      "A group does not establish authentication trust.",
      "Password hash synchronization is a hybrid identity authentication method."
    ]
  },
  {
    "id": "U10",
    "domain": "Implement and manage user identities",
    "topic": "Hybrid identity",
    "difficulty": "Easy",
    "type": "single",
    "scenario": "Users and groups created in on-premises Active Directory must appear in Microsoft Entra ID.",
    "question": "Which technology should you implement?",
    "options": [
      "Microsoft Entra Connect Sync",
      "Microsoft Entra Application Proxy",
      "Privileged Identity Management",
      "Microsoft Defender for Cloud Apps"
    ],
    "answer": [
      0
    ],
    "explanation": "Microsoft Entra Connect Sync synchronizes supported on-premises directory objects and attributes to Microsoft Entra ID.",
    "whyWrong": [
      "Correct.",
      "Application Proxy publishes internal web applications.",
      "PIM manages privileged access.",
      "Defender for Cloud Apps provides cloud app visibility and control."
    ]
  },
  {
    "id": "U11",
    "domain": "Implement and manage user identities",
    "topic": "Password hash synchronization",
    "difficulty": "Medium",
    "type": "single",
    "scenario": "A company wants users to use the same password on-premises and in Microsoft 365. Cloud authentication must continue if the on-premises environment is temporarily unavailable, with the least administrative effort.",
    "question": "Which authentication method should you choose?",
    "options": [
      "Pass-through authentication",
      "Password hash synchronization",
      "AD FS federation",
      "Certificate-based authentication"
    ],
    "answer": [
      1
    ],
    "explanation": "Password hash synchronization enables Microsoft Entra ID to authenticate users in the cloud without contacting on-premises Active Directory for each sign-in.",
    "whyWrong": [
      "PTA depends on on-premises agents for password validation.",
      "Correct.",
      "AD FS requires additional federation infrastructure.",
      "Certificate-based authentication does not synchronize the user's AD password."
    ]
  },
  {
    "id": "U12",
    "domain": "Implement and manage user identities",
    "topic": "Pass-through authentication",
    "difficulty": "Medium",
    "type": "single",
    "scenario": "Security policy prohibits synchronizing password hashes to the cloud, but users must sign in to Microsoft 365 with their on-premises passwords.",
    "question": "Which authentication method should you implement?",
    "options": [
      "Password hash synchronization",
      "Pass-through authentication",
      "Self-service password reset",
      "Temporary Access Pass"
    ],
    "answer": [
      1
    ],
    "explanation": "Pass-through authentication validates the password against on-premises Active Directory through authentication agents without synchronizing the password hash for cloud authentication.",
    "whyWrong": [
      "PHS directly conflicts with the requirement.",
      "Correct.",
      "SSPR is for password resets.",
      "TAP is a temporary bootstrap credential."
    ]
  },
  {
    "id": "U13",
    "domain": "Implement and manage user identities",
    "topic": "Federation migration",
    "difficulty": "Hard",
    "type": "single",
    "scenario": "An organization uses AD FS but wants to reduce infrastructure, remove federation-server dependency, and use Microsoft-recommended cloud authentication.",
    "question": "Which target authentication method is generally the best fit?",
    "options": [
      "Password hash synchronization",
      "Deploy additional AD FS servers",
      "Windows Hello for Business only",
      "B2B direct connect"
    ],
    "answer": [
      0
    ],
    "explanation": "Password hash synchronization is the simplest resilient cloud-authentication model and a common target when migrating away from AD FS.",
    "whyWrong": [
      "Correct.",
      "Additional AD FS servers preserve the infrastructure the company wants to reduce.",
      "Windows Hello is an authentication method, not the directory federation replacement by itself.",
      "B2B direct connect is for cross-tenant shared-channel collaboration."
    ]
  },
  {
    "id": "U14",
    "domain": "Implement and manage user identities",
    "topic": "Connect Health",
    "difficulty": "Easy",
    "type": "single",
    "scenario": "The identity team wants alerts and health information for Microsoft Entra Connect Sync and supported hybrid authentication components.",
    "question": "Which service should they use?",
    "options": [
      "Microsoft Entra Connect Health",
      "Identity Secure Score",
      "Access Reviews",
      "Cloud Discovery"
    ],
    "answer": [
      0
    ],
    "explanation": "Microsoft Entra Connect Health provides monitoring and alerts for supported hybrid identity components.",
    "whyWrong": [
      "Correct.",
      "Secure Score provides posture recommendations.",
      "Access Reviews recertify access.",
      "Cloud Discovery identifies cloud-app usage."
    ]
  },
  {
    "id": "U15",
    "domain": "Implement and manage user identities",
    "topic": "User deletion",
    "difficulty": "Medium",
    "type": "single",
    "scenario": "An employee account was deleted accidentally 12 days ago and must be recovered.",
    "question": "What should the administrator do?",
    "options": [
      "Restore the deleted user from Microsoft Entra ID",
      "Recreate the account with the same display name",
      "Open a Microsoft support case because deletion is immediate",
      "Restore it from the Conditional Access report"
    ],
    "answer": [
      0
    ],
    "explanation": "Deleted Microsoft Entra users are soft-deleted for a limited recovery period and can be restored during that period.",
    "whyWrong": [
      "Correct.",
      "Recreating creates a new object with a different object ID and can break access relationships.",
      "Deletion is not immediately permanent.",
      "Conditional Access reports do not restore directory objects."
    ]
  },
  {
    "id": "U16",
    "domain": "Implement and manage user identities",
    "topic": "Effective permissions",
    "difficulty": "Hard",
    "type": "single",
    "scenario": "A user receives Reader at a subscription, Contributor at one resource group, and a deny assignment that prevents deleting a specific resource.",
    "question": "What is true about the user's effective access to that resource?",
    "options": [
      "Contributor always overrides the deny assignment",
      "The deny assignment can prevent deletion even though Contributor grants it",
      "Reader removes Contributor permissions",
      "The most recently assigned role wins"
    ],
    "answer": [
      1
    ],
    "explanation": "Azure RBAC permissions are cumulative, but explicit deny assignments take precedence over allowed actions.",
    "whyWrong": [
      "Deny assignments are evaluated before access is granted.",
      "Correct.",
      "Reader does not subtract permissions granted by Contributor.",
      "Azure RBAC does not use a latest-role-wins model."
    ]
  },
  {
    "id": "A01",
    "domain": "Implement authentication and access management",
    "topic": "Authentication vs authorization",
    "difficulty": "Easy",
    "type": "single",
    "scenario": "A user successfully signs in but receives Access Denied when opening the Finance application because the user is not assigned to it.",
    "question": "Which process failed?",
    "options": [
      "Authentication",
      "Authorization",
      "Synchronization",
      "Federation"
    ],
    "answer": [
      1
    ],
    "explanation": "Authentication verified the user's identity. Authorization failed because the user lacked permission to the application.",
    "whyWrong": [
      "Authentication succeeded.",
      "Correct.",
      "Synchronization is unrelated.",
      "Federation is an authentication trust model."
    ]
  },
  {
    "id": "A02",
    "domain": "Implement authentication and access management",
    "topic": "Temporary Access Pass",
    "difficulty": "Medium",
    "type": "single",
    "scenario": "A new employee has no registered authentication methods and must securely register Windows Hello for Business on the first day.",
    "question": "Which method is designed to bootstrap this registration?",
    "options": [
      "Temporary Access Pass",
      "SMS only",
      "Password hash synchronization",
      "Email one-time passcode"
    ],
    "answer": [
      0
    ],
    "explanation": "Temporary Access Pass is a time-limited passcode used to bootstrap passwordless authentication registration and recovery scenarios.",
    "whyWrong": [
      "Correct.",
      "SMS is not the preferred phishing-resistant bootstrap mechanism.",
      "PHS is a hybrid authentication method.",
      "Email OTP is commonly used for external-user redemption, not employee passwordless bootstrap."
    ]
  },
  {
    "id": "A03",
    "domain": "Implement authentication and access management",
    "topic": "Authentication strengths",
    "difficulty": "Medium",
    "type": "single",
    "scenario": "Administrators must use the strongest built-in authentication strength to resist phishing.",
    "question": "Which authentication strength should a Conditional Access policy require?",
    "options": [
      "Multifactor authentication",
      "Passwordless MFA",
      "Phishing-resistant MFA",
      "Password authentication"
    ],
    "answer": [
      2
    ],
    "explanation": "The phishing-resistant MFA strength restricts sign-in to methods Microsoft classifies as phishing resistant, such as FIDO2 security keys and Windows Hello for Business.",
    "whyWrong": [
      "General MFA can include phishable methods.",
      "Passwordless does not automatically mean every allowed method meets the phishing-resistant strength.",
      "Correct.",
      "Password-only authentication is weakest."
    ]
  },
  {
    "id": "A04",
    "domain": "Implement authentication and access management",
    "topic": "FIDO2",
    "difficulty": "Easy",
    "type": "single",
    "scenario": "Warehouse employees use shared kiosks and need portable, passwordless, phishing-resistant authentication.",
    "question": "Which method is the best fit?",
    "options": [
      "Windows Hello for Business tied to each kiosk",
      "FIDO2 security keys",
      "SMS codes",
      "Security questions"
    ],
    "answer": [
      1
    ],
    "explanation": "FIDO2 security keys are portable, passwordless, and phishing resistant, making them suitable for shared-device scenarios.",
    "whyWrong": [
      "Windows Hello credentials are tied to a user and device.",
      "Correct.",
      "SMS is phishable and not passwordless in this context.",
      "Security questions are weak and not phishing resistant."
    ]
  },
  {
    "id": "A05",
    "domain": "Implement authentication and access management",
    "topic": "Windows Hello for Business",
    "difficulty": "Medium",
    "type": "single",
    "scenario": "Employees use dedicated Windows 11 laptops with biometric readers. The organization wants passwordless and phishing-resistant sign-in with minimal extra hardware.",
    "question": "Which authentication method should you recommend?",
    "options": [
      "FIDO2 security keys for every user",
      "Windows Hello for Business",
      "SMS-based MFA",
      "Pass-through authentication"
    ],
    "answer": [
      1
    ],
    "explanation": "Windows Hello for Business uses device-bound asymmetric credentials and supports biometric or PIN gestures. Existing laptop hardware makes it the best fit.",
    "whyWrong": [
      "FIDO2 also works but requires separate hardware and more administration here.",
      "Correct.",
      "SMS is not phishing resistant.",
      "PTA is a hybrid password-validation method."
    ]
  },
  {
    "id": "A06",
    "domain": "Implement authentication and access management",
    "topic": "SSPR",
    "difficulty": "Easy",
    "type": "single",
    "scenario": "The help desk receives many forgotten-password calls. Users must verify their identity and reset their own passwords.",
    "question": "Which feature should be enabled?",
    "options": [
      "Self-service password reset",
      "Password Protection",
      "PIM",
      "App Proxy"
    ],
    "answer": [
      0
    ],
    "explanation": "SSPR lets eligible users verify identity with registered methods and reset or unlock their password without help desk intervention.",
    "whyWrong": [
      "Correct.",
      "Password Protection blocks weak or banned passwords.",
      "PIM manages privileged roles.",
      "App Proxy publishes internal web apps."
    ]
  },
  {
    "id": "A07",
    "domain": "Implement authentication and access management",
    "topic": "Password Protection",
    "difficulty": "Medium",
    "type": "single",
    "scenario": "Users frequently choose passwords based on the company name and current season.",
    "question": "Which feature should the administrator configure?",
    "options": [
      "Microsoft Entra Password Protection with a custom banned password list",
      "Password hash synchronization",
      "Authentication strengths",
      "Access Reviews"
    ],
    "answer": [
      0
    ],
    "explanation": "Password Protection uses global and custom banned-password lists to block weak, common, or organization-specific password variants.",
    "whyWrong": [
      "Correct.",
      "PHS synchronizes password hashes; it does not block organization-specific passwords.",
      "Authentication strengths control accepted sign-in methods.",
      "Access Reviews recertify access."
    ]
  },
  {
    "id": "A08",
    "domain": "Implement authentication and access management",
    "topic": "Conditional Access",
    "difficulty": "Medium",
    "type": "single",
    "scenario": "Administrators must complete MFA whenever they access Microsoft administration portals.",
    "question": "Which Conditional Access design follows least privilege and minimizes impact on normal users?",
    "options": [
      "Target all users and all cloud apps",
      "Target directory roles and Microsoft Admin Portals, then require MFA",
      "Enable SSPR for administrators",
      "Create an administrative unit"
    ],
    "answer": [
      1
    ],
    "explanation": "Targeting supported administrative roles and Microsoft Admin Portals applies the control to the intended privileged sign-ins.",
    "whyWrong": [
      "This is broader than required.",
      "Correct.",
      "SSPR does not enforce MFA for portal access.",
      "Administrative units scope directory administration, not sign-in conditions."
    ]
  },
  {
    "id": "A09",
    "domain": "Implement authentication and access management",
    "topic": "Report-only mode",
    "difficulty": "Easy",
    "type": "single",
    "scenario": "A new Conditional Access policy must be evaluated against real sign-ins without enforcing its controls.",
    "question": "Which policy state should be used?",
    "options": [
      "On",
      "Off",
      "Report-only",
      "Audit-only"
    ],
    "answer": [
      2
    ],
    "explanation": "Report-only evaluates the policy and records the expected result without enforcing grant or session controls.",
    "whyWrong": [
      "On enforces the policy.",
      "Off does not evaluate it.",
      "Correct.",
      "Audit-only is not the Conditional Access policy state name."
    ]
  },
  {
    "id": "A10",
    "domain": "Implement authentication and access management",
    "topic": "Named locations",
    "difficulty": "Medium",
    "type": "single",
    "scenario": "The company wants to block sign-ins from countries where it has no business operations.",
    "question": "What should you configure first?",
    "options": [
      "An administrative unit",
      "A named location containing the selected countries",
      "A dynamic device group",
      "A custom authentication strength"
    ],
    "answer": [
      1
    ],
    "explanation": "Named locations define countries/regions or IP ranges that Conditional Access location conditions can include or exclude.",
    "whyWrong": [
      "Administrative units do not represent geographic sign-in locations.",
      "Correct.",
      "Dynamic groups do not evaluate sign-in geography.",
      "Authentication strengths restrict methods, not countries."
    ]
  },
  {
    "id": "A11",
    "domain": "Implement authentication and access management",
    "topic": "Compliant devices",
    "difficulty": "Medium",
    "type": "single",
    "scenario": "Users may access Exchange Online from Android devices only when the devices meet the organization's Intune compliance requirements.",
    "question": "Which grant control should be required?",
    "options": [
      "Require device to be marked as compliant",
      "Require Microsoft Entra hybrid joined device",
      "Require password change",
      "Require approved client app only"
    ],
    "answer": [
      0
    ],
    "explanation": "The compliant-device grant control evaluates the device compliance state provided by Intune.",
    "whyWrong": [
      "Correct.",
      "Hybrid join is generally for Windows domain-joined devices and does not match Android.",
      "Password change remediates user risk.",
      "Approved client app is a different control and does not by itself enforce device compliance."
    ]
  },
  {
    "id": "A12",
    "domain": "Implement authentication and access management",
    "topic": "User risk",
    "difficulty": "Medium",
    "type": "single",
    "scenario": "Microsoft detects that a user's credentials were exposed in a known leak.",
    "question": "Which risk type is most directly affected?",
    "options": [
      "Sign-in risk",
      "User risk",
      "Device risk",
      "Application risk"
    ],
    "answer": [
      1
    ],
    "explanation": "User risk represents the probability that the identity itself is compromised, such as leaked credentials.",
    "whyWrong": [
      "Sign-in risk assesses a specific authentication attempt.",
      "Correct.",
      "Device risk is handled through device-security integrations, not this Identity Protection classification.",
      "Application risk is not the relevant Identity Protection risk type."
    ]
  },
  {
    "id": "A13",
    "domain": "Implement authentication and access management",
    "topic": "Sign-in risk",
    "difficulty": "Medium",
    "type": "single",
    "scenario": "A sign-in originates from an anonymous IP address and Microsoft classifies this authentication attempt as high risk.",
    "question": "Which policy response most directly remediates only this sign-in while allowing a legitimate user to prove identity?",
    "options": [
      "Require MFA",
      "Require password change for every user",
      "Delete the account",
      "Assign Global Reader"
    ],
    "answer": [
      0
    ],
    "explanation": "Requiring MFA allows a legitimate user to remediate a risky sign-in. Password change is typically associated with remediating compromised-user risk.",
    "whyWrong": [
      "Correct.",
      "A broad password change does not specifically address only this sign-in.",
      "Deletion is excessive and not automatic remediation.",
      "Role assignment is unrelated."
    ]
  },
  {
    "id": "A14",
    "domain": "Implement authentication and access management",
    "topic": "Global Secure Access",
    "difficulty": "Medium",
    "type": "single",
    "scenario": "Remote users need identity-aware access to selected private web applications without receiving broad network-level VPN access.",
    "question": "Which Microsoft Entra capability is the best fit?",
    "options": [
      "Microsoft Entra Private Access",
      "Microsoft Entra Internet Access",
      "Microsoft Entra Connect Sync",
      "B2B direct connect"
    ],
    "answer": [
      0
    ],
    "explanation": "Microsoft Entra Private Access provides Zero Trust Network Access to private applications and resources.",
    "whyWrong": [
      "Correct.",
      "Internet Access secures outbound internet and SaaS traffic.",
      "Connect Sync synchronizes identities.",
      "B2B direct connect supports Teams shared channels."
    ]
  },
  {
    "id": "A15",
    "domain": "Implement authentication and access management",
    "topic": "Global Secure Access",
    "difficulty": "Medium",
    "type": "single",
    "scenario": "The security team wants to apply identity-aware controls to outbound web traffic and discover or block risky internet destinations.",
    "question": "Which component should be deployed?",
    "options": [
      "Microsoft Entra Internet Access",
      "Microsoft Entra Private Access",
      "Application Proxy",
      "Cloud Sync"
    ],
    "answer": [
      0
    ],
    "explanation": "Microsoft Entra Internet Access is the Security Service Edge component for securing internet and SaaS traffic.",
    "whyWrong": [
      "Correct.",
      "Private Access focuses on private resources.",
      "Application Proxy publishes individual on-premises web applications.",
      "Cloud Sync synchronizes directory identities."
    ]
  },
  {
    "id": "A16",
    "domain": "Implement authentication and access management",
    "topic": "Break-glass accounts",
    "difficulty": "Hard",
    "type": "single",
    "scenario": "A misconfigured Conditional Access policy blocks all normal administrators.",
    "question": "Which design provides emergency access while minimizing ongoing risk?",
    "options": [
      "Maintain monitored cloud-only emergency access accounts excluded from normal Conditional Access dependencies",
      "Give every administrator a permanent Global Administrator assignment",
      "Use a guest account as the only Global Administrator",
      "Disable all Conditional Access policies permanently"
    ],
    "answer": [
      0
    ],
    "explanation": "Emergency access accounts should be highly protected, monitored, and designed to remain usable during failures of normal authentication or policy dependencies.",
    "whyWrong": [
      "Correct.",
      "Permanent broad privileges increase standing risk.",
      "A guest dependency is inappropriate for tenant recovery.",
      "Disabling Conditional Access permanently weakens security."
    ]
  },
  {
    "id": "A17",
    "domain": "Implement authentication and access management",
    "topic": "Token-based access",
    "difficulty": "Medium",
    "type": "single",
    "scenario": "A user signs in once and then opens Outlook, Teams, and SharePoint without repeatedly entering credentials.",
    "question": "What enables the applications to accept the existing authenticated session?",
    "options": [
      "Access tokens issued through the identity platform",
      "Password hash synchronization for each app",
      "Group-based licensing",
      "Administrative units"
    ],
    "answer": [
      0
    ],
    "explanation": "After authentication, the identity provider issues tokens that applications validate to authorize access without collecting credentials again.",
    "whyWrong": [
      "Correct.",
      "PHS validates cloud passwords but does not explain token-based SSO between apps.",
      "Licensing grants product rights, not authentication sessions.",
      "Administrative units scope administration."
    ]
  },
  {
    "id": "A18",
    "domain": "Implement authentication and access management",
    "topic": "Conditional Access logic",
    "difficulty": "Hard",
    "type": "single",
    "scenario": "A policy targets the Finance group and Exchange Online. Conditions include iOS and Android. Grant controls are configured as 'Require MFA' and 'Require device to be marked as compliant' with 'Require all selected controls.'",
    "question": "What must a targeted mobile user do to access Exchange Online?",
    "options": [
      "Complete either MFA or use a compliant device",
      "Complete MFA and use a compliant device",
      "Only use an approved browser",
      "Reset the password"
    ],
    "answer": [
      1
    ],
    "explanation": "When 'Require all selected controls' is chosen, every selected grant control must be satisfied.",
    "whyWrong": [
      "This describes 'Require one of the selected controls.'",
      "Correct.",
      "Browser selection is not the configured grant requirement.",
      "Password reset is not configured."
    ]
  },
  {
    "id": "W01",
    "domain": "Plan and implement workload identities",
    "topic": "App registration vs enterprise app",
    "difficulty": "Medium",
    "type": "single",
    "scenario": "A developer creates an application definition in a home tenant. When the application is used in a tenant, a local object represents that application and its assigned access.",
    "question": "What is the local tenant object?",
    "options": [
      "Application object",
      "Service principal (enterprise application)",
      "Managed identity resource",
      "Administrative unit"
    ],
    "answer": [
      1
    ],
    "explanation": "The app registration creates an application object. A service principal represents the application's instance and permissions in a tenant and appears under Enterprise applications.",
    "whyWrong": [
      "The application object is the global definition in its home tenant.",
      "Correct.",
      "A managed identity is a special service principal managed for an Azure resource.",
      "Administrative units scope directory administration."
    ]
  },
  {
    "id": "W02",
    "domain": "Plan and implement workload identities",
    "topic": "Managed identities",
    "difficulty": "Easy",
    "type": "single",
    "scenario": "An Azure Function must read a Key Vault secret without storing a client secret or certificate in code.",
    "question": "Which identity should you use?",
    "options": [
      "Managed identity",
      "Guest user",
      "Distribution group",
      "Break-glass account"
    ],
    "answer": [
      0
    ],
    "explanation": "Managed identities let supported Azure resources obtain tokens without developers managing credentials.",
    "whyWrong": [
      "Correct.",
      "Guest users represent external people.",
      "Distribution groups are for email.",
      "Emergency accounts are for tenant recovery."
    ]
  },
  {
    "id": "W03",
    "domain": "Plan and implement workload identities",
    "topic": "System-assigned managed identity",
    "difficulty": "Medium",
    "type": "single",
    "scenario": "A VM needs a unique identity that should be deleted automatically when the VM is deleted.",
    "question": "Which managed identity type should you enable?",
    "options": [
      "User-assigned",
      "System-assigned",
      "Federated application identity",
      "Guest identity"
    ],
    "answer": [
      1
    ],
    "explanation": "A system-assigned managed identity is tied to the lifecycle of one Azure resource.",
    "whyWrong": [
      "User-assigned identities have independent lifecycles and can be shared.",
      "Correct.",
      "Federated identity credentials are a different workload-authentication feature.",
      "Guest identities represent external users."
    ]
  },
  {
    "id": "W04",
    "domain": "Plan and implement workload identities",
    "topic": "User-assigned managed identity",
    "difficulty": "Medium",
    "type": "single",
    "scenario": "Five Azure resources require the same permissions, and the identity must remain available if one resource is deleted.",
    "question": "Which identity type should you use?",
    "options": [
      "System-assigned managed identity on each resource",
      "One user-assigned managed identity attached to the resources",
      "One shared employee account",
      "A Microsoft 365 group"
    ],
    "answer": [
      1
    ],
    "explanation": "A user-assigned managed identity has an independent lifecycle and can be associated with multiple supported resources.",
    "whyWrong": [
      "Separate system-assigned identities do not provide one shared identity and are deleted with their resources.",
      "Correct.",
      "Shared human accounts are insecure and hard to audit.",
      "Microsoft 365 groups are not workload authentication identities."
    ]
  },
  {
    "id": "W05",
    "domain": "Plan and implement workload identities",
    "topic": "Service principals",
    "difficulty": "Medium",
    "type": "single",
    "scenario": "An external automation service outside Azure must call Microsoft Graph without a signed-in user.",
    "question": "Which identity pattern is most appropriate?",
    "options": [
      "Service principal using application permissions",
      "Helpdesk Administrator user account",
      "B2B guest account",
      "Dynamic security group"
    ],
    "answer": [
      0
    ],
    "explanation": "A service principal can authenticate an application or automation workload and use approved application permissions without delegated user context.",
    "whyWrong": [
      "Correct.",
      "A human admin account should not be embedded in automation.",
      "A guest user is still a human identity.",
      "A group cannot authenticate."
    ]
  },
  {
    "id": "W06",
    "domain": "Plan and implement workload identities",
    "topic": "API permissions",
    "difficulty": "Hard",
    "type": "single",
    "scenario": "A background daemon must read all users from Microsoft Graph with no signed-in user.",
    "question": "Which permission type is required?",
    "options": [
      "Delegated permission",
      "Application permission",
      "Azure RBAC Reader on a subscription",
      "A Conditional Access exclusion"
    ],
    "answer": [
      1
    ],
    "explanation": "Application permissions allow an app to act as itself without a user. Delegated permissions operate on behalf of a signed-in user.",
    "whyWrong": [
      "Delegated permissions require user context.",
      "Correct.",
      "Azure RBAC Reader does not grant Microsoft Graph directory permissions.",
      "A policy exclusion grants no API permission."
    ]
  },
  {
    "id": "W07",
    "domain": "Plan and implement workload identities",
    "topic": "Consent",
    "difficulty": "Medium",
    "type": "single",
    "scenario": "An application requests Microsoft Graph application permission to read all mailboxes.",
    "question": "Who must grant consent?",
    "options": [
      "Each mailbox owner",
      "An administrator authorized to grant tenant-wide admin consent",
      "Any group owner",
      "The Application Proxy connector"
    ],
    "answer": [
      1
    ],
    "explanation": "High-impact application permissions require administrator consent because the app acts without a user and can access organization-wide data.",
    "whyWrong": [
      "Individual user consent cannot approve tenant-wide application permissions.",
      "Correct.",
      "Group owners do not have consent authority by default.",
      "Application Proxy connectors do not grant Graph consent."
    ]
  },
  {
    "id": "W08",
    "domain": "Plan and implement workload identities",
    "topic": "App roles",
    "difficulty": "Medium",
    "type": "single",
    "scenario": "A custom application needs separate Reader and Approver access levels that can be assigned to users and groups in Enterprise applications.",
    "question": "What should the developer define?",
    "options": [
      "Application roles",
      "Administrative units",
      "Authentication strengths",
      "Named locations"
    ],
    "answer": [
      0
    ],
    "explanation": "App roles define application-specific authorization roles that can be assigned to users, groups, or service principals.",
    "whyWrong": [
      "Correct.",
      "Administrative units scope directory management.",
      "Authentication strengths restrict methods.",
      "Named locations represent network or country locations."
    ]
  },
  {
    "id": "W09",
    "domain": "Plan and implement workload identities",
    "topic": "Application Proxy",
    "difficulty": "Easy",
    "type": "single",
    "scenario": "Employees need remote access to an on-premises HR web application using Entra SSO and Conditional Access without a traditional VPN.",
    "question": "Which feature should be deployed?",
    "options": [
      "Microsoft Entra Application Proxy",
      "Microsoft Entra Cloud Sync",
      "B2B direct connect",
      "Azure Bastion"
    ],
    "answer": [
      0
    ],
    "explanation": "Application Proxy securely publishes supported on-premises web applications through Microsoft Entra preauthentication.",
    "whyWrong": [
      "Correct.",
      "Cloud Sync synchronizes identities.",
      "B2B direct connect supports external Teams shared channels.",
      "Azure Bastion provides VM management connectivity."
    ]
  },
  {
    "id": "W10",
    "domain": "Plan and implement workload identities",
    "topic": "Enterprise app assignment",
    "difficulty": "Medium",
    "type": "single",
    "scenario": "Only members of the Payroll group should sign in to a SaaS payroll application.",
    "question": "Which enterprise application configuration should you use?",
    "options": [
      "Set user assignment required to Yes and assign the Payroll group",
      "Assign the Global Reader role to Payroll",
      "Create a named location for Payroll",
      "Enable password hash synchronization"
    ],
    "answer": [
      0
    ],
    "explanation": "Requiring user assignment and assigning the designated group restricts sign-in to assigned users and groups, subject to app behavior.",
    "whyWrong": [
      "Correct.",
      "Global Reader is a directory role and does not grant app access.",
      "Named locations do not represent departments.",
      "PHS is unrelated."
    ]
  },
  {
    "id": "W11",
    "domain": "Plan and implement workload identities",
    "topic": "App admin roles",
    "difficulty": "Medium",
    "type": "single",
    "scenario": "A staff member must manage enterprise applications and app registrations but must not manage users, groups, or privileged directory roles.",
    "question": "Which built-in role is the best fit?",
    "options": [
      "Application Administrator",
      "Global Administrator",
      "User Administrator",
      "Privileged Role Administrator"
    ],
    "answer": [
      0
    ],
    "explanation": "Application Administrator is scoped to application-management tasks and follows least privilege better than Global Administrator.",
    "whyWrong": [
      "Correct.",
      "Global Administrator is excessive.",
      "User Administrator manages users and groups.",
      "Privileged Role Administrator manages role assignments and PIM."
    ]
  },
  {
    "id": "W12",
    "domain": "Plan and implement workload identities",
    "topic": "Defender for Cloud Apps",
    "difficulty": "Medium",
    "type": "single",
    "scenario": "The security team wants to identify unsanctioned cloud services employees are using from corporate devices.",
    "question": "Which capability should they use?",
    "options": [
      "Cloud Discovery in Microsoft Defender for Cloud Apps",
      "Access Reviews",
      "Microsoft Entra Connect Health",
      "Administrative units"
    ],
    "answer": [
      0
    ],
    "explanation": "Cloud Discovery analyzes traffic and identifies cloud application usage, supporting Shadow IT discovery and risk evaluation.",
    "whyWrong": [
      "Correct.",
      "Access Reviews recertify access.",
      "Connect Health monitors hybrid identity.",
      "Administrative units scope administration."
    ]
  },
  {
    "id": "W13",
    "domain": "Plan and implement workload identities",
    "topic": "Conditional Access App Control",
    "difficulty": "Hard",
    "type": "single",
    "scenario": "Contractors may view SharePoint files from unmanaged devices, but downloads must be blocked during the session.",
    "question": "Which control is designed for this requirement?",
    "options": [
      "Conditional Access App Control with a Defender for Cloud Apps session policy",
      "Password Protection",
      "Group-based licensing",
      "Microsoft Entra Connect Sync"
    ],
    "answer": [
      0
    ],
    "explanation": "Conditional Access App Control routes sessions through Defender for Cloud Apps so session policies can monitor or restrict actions such as downloads.",
    "whyWrong": [
      "Correct.",
      "Password Protection controls password choices.",
      "Licensing does not control session actions.",
      "Connect Sync synchronizes identities."
    ]
  },
  {
    "id": "W14",
    "domain": "Plan and implement workload identities",
    "topic": "OAuth governance",
    "difficulty": "Medium",
    "type": "single",
    "scenario": "An administrator must investigate third-party OAuth applications that users authorized to access Microsoft 365 data.",
    "question": "Where should the administrator review and govern these apps?",
    "options": [
      "Microsoft Defender for Cloud Apps OAuth app policies and app inventory",
      "Microsoft Entra Connect Health",
      "PIM for Groups",
      "Named locations"
    ],
    "answer": [
      0
    ],
    "explanation": "Defender for Cloud Apps provides visibility and policy controls for OAuth apps, permissions, usage, and risk.",
    "whyWrong": [
      "Correct.",
      "Connect Health monitors hybrid components.",
      "PIM for Groups provides just-in-time group membership or ownership.",
      "Named locations represent sign-in locations."
    ]
  },
  {
    "id": "W15",
    "domain": "Plan and implement workload identities",
    "topic": "Credential security",
    "difficulty": "Hard",
    "type": "single",
    "scenario": "A confidential application currently uses a long-lived client secret. The security team wants stronger workload authentication and reduced secret-rotation risk. The workload runs on GitHub Actions outside Azure.",
    "question": "Which approach is the best fit?",
    "options": [
      "Use a federated identity credential for workload identity federation",
      "Store the client secret in the repository",
      "Run the automation under a shared administrator account",
      "Use a dynamic group as the credential"
    ],
    "answer": [
      0
    ],
    "explanation": "Workload identity federation allows supported external workloads to exchange trusted external tokens for Microsoft Entra tokens without storing long-lived secrets.",
    "whyWrong": [
      "Correct.",
      "Repository secrets can still be exposed and require rotation.",
      "Shared human accounts are insecure and reduce accountability.",
      "Groups cannot authenticate workloads."
    ]
  },
  {
    "id": "G01",
    "domain": "Plan and automate identity governance",
    "topic": "Entitlement management",
    "difficulty": "Easy",
    "type": "single",
    "scenario": "Contractors need one request that grants membership in a Microsoft 365 group, access to a SharePoint site, and access to an enterprise application.",
    "question": "What should you create?",
    "options": [
      "An access package",
      "An administrative unit",
      "A Conditional Access policy",
      "A custom Azure role"
    ],
    "answer": [
      0
    ],
    "explanation": "An access package bundles multiple resource roles into one governed request and assignment process.",
    "whyWrong": [
      "Correct.",
      "Administrative units scope administration.",
      "Conditional Access controls sign-in conditions.",
      "Azure roles grant Azure resource permissions."
    ]
  },
  {
    "id": "G02",
    "domain": "Plan and automate identity governance",
    "topic": "Catalogs",
    "difficulty": "Medium",
    "type": "single",
    "scenario": "Before HR creates access packages, it needs a container that holds approved groups, applications, and SharePoint sites.",
    "question": "Which entitlement-management object should be created?",
    "options": [
      "Catalog",
      "Access review",
      "Authentication context",
      "Administrative unit"
    ],
    "answer": [
      0
    ],
    "explanation": "A catalog is the container for resources and their roles that can be included in access packages.",
    "whyWrong": [
      "Correct.",
      "Access Reviews recertify existing assignments.",
      "Authentication context can label sensitive access for Conditional Access.",
      "Administrative units scope directory management."
    ]
  },
  {
    "id": "G03",
    "domain": "Plan and automate identity governance",
    "topic": "Access package policy",
    "difficulty": "Medium",
    "type": "single",
    "scenario": "Vendors must request access, obtain sponsor approval, accept Terms of Use, and lose access after 60 days.",
    "question": "Which solution best satisfies the requirements?",
    "options": [
      "An access package with request, approval, Terms of Use, and expiration settings",
      "A dynamic group",
      "A named location",
      "An Azure Reader role"
    ],
    "answer": [
      0
    ],
    "explanation": "Access-package policies govern who can request, approval stages, lifecycle, and related conditions such as Terms of Use.",
    "whyWrong": [
      "Correct.",
      "Dynamic groups do not provide request approvals or Terms of Use.",
      "Named locations are Conditional Access conditions.",
      "Azure Reader grants view access to Azure resources."
    ]
  },
  {
    "id": "G04",
    "domain": "Plan and automate identity governance",
    "topic": "Access reviews",
    "difficulty": "Easy",
    "type": "single",
    "scenario": "Managers must verify quarterly whether guest users still need access to project groups.",
    "question": "Which feature should be configured?",
    "options": [
      "Access Reviews",
      "PIM",
      "Identity Protection",
      "Password Protection"
    ],
    "answer": [
      0
    ],
    "explanation": "Access Reviews periodically ask reviewers to confirm or deny continued access.",
    "whyWrong": [
      "Correct.",
      "PIM provides time-bound privileged access.",
      "Identity Protection evaluates risk.",
      "Password Protection blocks weak passwords."
    ]
  },
  {
    "id": "G05",
    "domain": "Plan and automate identity governance",
    "topic": "Access review results",
    "difficulty": "Medium",
    "type": "single",
    "scenario": "A quarterly review is configured to remove access automatically when a reviewer denies access or when the user does not respond.",
    "question": "What happens after the review completes?",
    "options": [
      "The configured results are automatically applied and access can be removed",
      "The report is informational only",
      "The user's password is reset",
      "The user becomes PIM eligible"
    ],
    "answer": [
      0
    ],
    "explanation": "When auto-apply is configured, review decisions and configured no-response behavior are enforced after completion.",
    "whyWrong": [
      "Correct.",
      "Access Reviews can enforce results when configured.",
      "Password reset is unrelated.",
      "PIM eligibility is a separate privileged-access assignment."
    ]
  },
  {
    "id": "G06",
    "domain": "Plan and automate identity governance",
    "topic": "PIM eligible assignment",
    "difficulty": "Easy",
    "type": "single",
    "scenario": "A user is eligible for the User Administrator role through PIM.",
    "question": "What does this mean?",
    "options": [
      "The user has the role permanently",
      "The user can activate the role when needed, subject to configured requirements",
      "The role activates automatically at every sign-in",
      "The user can bypass Conditional Access"
    ],
    "answer": [
      1
    ],
    "explanation": "Eligible users do not have active privileges until they activate the role and satisfy requirements such as MFA, justification, or approval.",
    "whyWrong": [
      "Eligible is not permanently active.",
      "Correct.",
      "Activation is not automatic unless separately scheduled or assigned active.",
      "PIM does not bypass Conditional Access."
    ]
  },
  {
    "id": "G07",
    "domain": "Plan and automate identity governance",
    "topic": "PIM activation",
    "difficulty": "Medium",
    "type": "multiple",
    "scenario": "The organization wants stronger controls before an eligible Global Administrator assignment can be activated.",
    "question": "Which TWO controls can PIM require as part of activation?",
    "options": [
      "MFA",
      "Approval",
      "Password hash synchronization",
      "A dynamic group rule"
    ],
    "answer": [
      0,
      1
    ],
    "explanation": "PIM role settings can require controls such as MFA, justification, ticket information, and approval before activation.",
    "whyWrong": [
      "Correct.",
      "Correct.",
      "PHS is a hybrid authentication configuration.",
      "Dynamic membership rules do not approve privileged role activation."
    ]
  },
  {
    "id": "G08",
    "domain": "Plan and automate identity governance",
    "topic": "PIM duration",
    "difficulty": "Medium",
    "type": "single",
    "scenario": "Database administrators need elevated Azure permissions for no more than two hours per maintenance event.",
    "question": "Which solution follows just-in-time least privilege?",
    "options": [
      "PIM eligible assignment with a two-hour maximum activation duration",
      "Permanent Owner assignment",
      "Access package with no expiration",
      "Global Administrator assignment"
    ],
    "answer": [
      0
    ],
    "explanation": "PIM can provide eligible Azure resource role assignments with time-limited activation.",
    "whyWrong": [
      "Correct.",
      "Permanent Owner creates standing privilege.",
      "Access packages are not the primary tool for just-in-time Azure administrator roles.",
      "Global Administrator is a directory role and is overly broad."
    ]
  },
  {
    "id": "G09",
    "domain": "Plan and automate identity governance",
    "topic": "PIM for Groups",
    "difficulty": "Hard",
    "type": "single",
    "scenario": "Membership in a security group grants production access. Engineers should become members only temporarily after activation and approval.",
    "question": "Which capability should be used?",
    "options": [
      "PIM for Groups",
      "Dynamic group membership",
      "Administrative units",
      "Group-based licensing"
    ],
    "answer": [
      0
    ],
    "explanation": "PIM for Groups supports eligible, time-bound membership or ownership with activation controls.",
    "whyWrong": [
      "Correct.",
      "Dynamic groups assign membership automatically from attributes, not just-in-time approval.",
      "Administrative units scope administration.",
      "Licensing assigns products based on membership."
    ]
  },
  {
    "id": "G10",
    "domain": "Plan and automate identity governance",
    "topic": "Lifecycle workflows",
    "difficulty": "Medium",
    "type": "single",
    "scenario": "On an employee's hire date, the organization must automatically send a welcome email and add the user to required groups. On the termination date, access tasks must run automatically.",
    "question": "Which governance feature is designed for this process?",
    "options": [
      "Lifecycle Workflows",
      "Access Reviews",
      "Identity Protection",
      "Application Proxy"
    ],
    "answer": [
      0
    ],
    "explanation": "Lifecycle Workflows automate joiner, mover, and leaver tasks based on user lifecycle events and attributes.",
    "whyWrong": [
      "Correct.",
      "Access Reviews recertify ongoing access.",
      "Identity Protection responds to risk.",
      "Application Proxy publishes internal apps."
    ]
  },
  {
    "id": "G11",
    "domain": "Plan and automate identity governance",
    "topic": "Terms of Use",
    "difficulty": "Easy",
    "type": "single",
    "scenario": "External users must accept a legal agreement before accessing a sensitive application.",
    "question": "Which feature should be configured?",
    "options": [
      "Terms of Use",
      "Password Protection",
      "PIM",
      "Authentication strengths"
    ],
    "answer": [
      0
    ],
    "explanation": "Terms of Use presents an agreement and records acceptance, often enforced through Conditional Access or entitlement processes.",
    "whyWrong": [
      "Correct.",
      "Password Protection controls password quality.",
      "PIM controls privileged access.",
      "Authentication strengths control acceptable authentication methods."
    ]
  },
  {
    "id": "G12",
    "domain": "Plan and automate identity governance",
    "topic": "Break-glass monitoring",
    "difficulty": "Hard",
    "type": "single",
    "scenario": "The organization maintains two emergency Global Administrator accounts.",
    "question": "Which operational practice is most appropriate?",
    "options": [
      "Monitor sign-ins and alert on any use",
      "Use them for routine administration",
      "Share one password with the entire help desk",
      "Make them guest accounts in a partner tenant"
    ],
    "answer": [
      0
    ],
    "explanation": "Emergency accounts should be rarely used and heavily monitored; any sign-in should trigger investigation.",
    "whyWrong": [
      "Correct.",
      "Routine use defeats the emergency-only design.",
      "Broad password sharing destroys accountability.",
      "External dependency can make recovery unavailable."
    ]
  },
  {
    "id": "G13",
    "domain": "Plan and automate identity governance",
    "topic": "Audit logs",
    "difficulty": "Easy",
    "type": "single",
    "scenario": "An administrator needs to determine who changed a Conditional Access policy.",
    "question": "Which log should be reviewed?",
    "options": [
      "Audit logs",
      "Sign-in logs",
      "Provisioning logs",
      "Risky users report"
    ],
    "answer": [
      0
    ],
    "explanation": "Audit logs record directory and configuration changes, including the actor and target.",
    "whyWrong": [
      "Correct.",
      "Sign-in logs record authentication attempts.",
      "Provisioning logs record account provisioning operations.",
      "Risky users reports show identity risk, not configuration changes."
    ]
  },
  {
    "id": "G14",
    "domain": "Plan and automate identity governance",
    "topic": "Provisioning logs",
    "difficulty": "Medium",
    "type": "single",
    "scenario": "A user was not created in a SaaS application by automatic provisioning.",
    "question": "Where should the administrator investigate first?",
    "options": [
      "Provisioning logs",
      "Sign-in logs",
      "Identity Secure Score",
      "Access Reviews"
    ],
    "answer": [
      0
    ],
    "explanation": "Provisioning logs contain automatic provisioning events, mappings, skipped actions, and error details.",
    "whyWrong": [
      "Correct.",
      "Sign-in logs cover authentication, not provisioning execution.",
      "Secure Score gives recommendations.",
      "Access Reviews recertify access."
    ]
  },
  {
    "id": "G15",
    "domain": "Plan and automate identity governance",
    "topic": "Monitoring",
    "difficulty": "Hard",
    "type": "single",
    "scenario": "The identity team must retain Microsoft Entra logs beyond the default interactive retention period, query large datasets, and build dashboards.",
    "question": "Which combination best meets the requirements?",
    "options": [
      "Diagnostic settings to Log Analytics, KQL, and Workbooks",
      "Access Reviews and PIM",
      "Password Protection and SSPR",
      "Administrative units and dynamic groups"
    ],
    "answer": [
      0
    ],
    "explanation": "Diagnostic settings export logs to Log Analytics, KQL queries the data, and Workbooks provide visual reporting.",
    "whyWrong": [
      "Correct.",
      "These govern access but do not provide log retention and analytics.",
      "These are authentication features.",
      "These manage scope and group membership."
    ]
  },
  {
    "id": "X01",
    "domain": "Implement and manage user identities",
    "topic": "Cross-tenant synchronization",
    "difficulty": "Hard",
    "type": "single",
    "scenario": "A partner tenant must automatically provision, update, and remove B2B users in your tenant as employment status changes.",
    "question": "Which feature should you configure?",
    "options": [
      "Cross-tenant synchronization",
      "B2B direct connect",
      "Application Proxy",
      "Password hash synchronization"
    ],
    "answer": [
      0
    ],
    "explanation": "Cross-tenant synchronization automates the lifecycle of B2B collaboration users between tenants.",
    "whyWrong": [
      "Correct.",
      "Direct connect is for Teams shared channels.",
      "App Proxy publishes internal apps.",
      "PHS is for hybrid password authentication."
    ]
  },
  {
    "id": "X02",
    "domain": "Implement and manage user identities",
    "topic": "Role-assignable groups",
    "difficulty": "Hard",
    "type": "single",
    "scenario": "A security group will receive a Microsoft Entra directory role and its membership will be controlled by PIM for Groups.",
    "question": "What kind of group is required?",
    "options": [
      "Role-assignable security group",
      "Distribution group",
      "Dynamic Microsoft 365 group",
      "Mail-enabled security group"
    ],
    "answer": [
      0
    ],
    "explanation": "Directory roles can be assigned to protected role-assignable security groups.",
    "whyWrong": [
      "Correct.",
      "Cannot receive directory roles.",
      "Dynamic membership is not supported for role-assignable groups.",
      "Not the required object."
    ]
  },
  {
    "id": "X03",
    "domain": "Implement and manage user identities",
    "topic": "Source of authority",
    "difficulty": "Hard",
    "type": "single",
    "scenario": "A synchronized user attribute is edited in the cloud but later returns to the old value. The attribute is mastered on-premises.",
    "question": "What is the most likely cause?",
    "options": [
      "The on-premises source overwrote the cloud edit during synchronization",
      "Conditional Access reversed it",
      "PIM expired",
      "The domain was unverified"
    ],
    "answer": [
      0
    ],
    "explanation": "On-premises mastered attributes can overwrite unsupported cloud-side edits.",
    "whyWrong": [
      "Correct.",
      "CA does not edit attributes.",
      "PIM affects roles.",
      "Domain verification is unrelated."
    ]
  },
  {
    "id": "X04",
    "domain": "Implement and manage user identities",
    "topic": "Administrative units",
    "difficulty": "Hard",
    "type": "single",
    "scenario": "A regional help desk administrator is scoped to an administrative unit containing East-region users.",
    "question": "What does the scope control?",
    "options": [
      "Supported Entra administrative actions on objects in that unit",
      "Azure subscription access in the East region",
      "Sign-in locations",
      "Dynamic group membership"
    ],
    "answer": [
      0
    ],
    "explanation": "Administrative units scope supported directory administration to selected objects.",
    "whyWrong": [
      "Correct.",
      "Azure RBAC controls subscriptions.",
      "Conditional Access controls sign-in locations.",
      "Dynamic groups control membership."
    ]
  },
  {
    "id": "X05",
    "domain": "Implement authentication and access management",
    "topic": "Authentication context",
    "difficulty": "Hard",
    "type": "single",
    "scenario": "A sensitive SharePoint site must require phishing-resistant MFA, while normal SharePoint content should continue using standard MFA.",
    "question": "Which design is best?",
    "options": [
      "Use an authentication context for the sensitive site and a Conditional Access policy requiring phishing-resistant MFA",
      "Require phishing-resistant MFA for every app",
      "Use an administrative unit",
      "Use Password Protection"
    ],
    "answer": [
      0
    ],
    "explanation": "Authentication context applies stronger Conditional Access controls only when sensitive content requests that context.",
    "whyWrong": [
      "Correct.",
      "Broader than necessary.",
      "AUs do not scope SharePoint content.",
      "Password Protection is unrelated."
    ]
  },
  {
    "id": "X06",
    "domain": "Implement authentication and access management",
    "topic": "Conditional Access precedence",
    "difficulty": "Hard",
    "type": "single",
    "scenario": "A sign-in matches one Conditional Access policy that requires MFA and another that blocks access.",
    "question": "What happens?",
    "options": [
      "Access is blocked",
      "MFA overrides the block",
      "The newest policy wins",
      "The user chooses"
    ],
    "answer": [
      0
    ],
    "explanation": "Applicable policies are evaluated together and an applicable block takes precedence.",
    "whyWrong": [
      "Correct.",
      "MFA cannot override block.",
      "No newest-policy-wins model.",
      "Users do not choose policies."
    ]
  },
  {
    "id": "X07",
    "domain": "Implement authentication and access management",
    "topic": "Continuous Access Evaluation",
    "difficulty": "Hard",
    "type": "single",
    "scenario": "A compromised user is disabled and supported cloud apps should revoke access quickly rather than waiting for token expiry.",
    "question": "Which capability helps?",
    "options": [
      "Continuous Access Evaluation",
      "Group-based licensing",
      "Password Protection",
      "Cloud Sync"
    ],
    "answer": [
      0
    ],
    "explanation": "CAE lets supported services react quickly to critical identity events.",
    "whyWrong": [
      "Correct.",
      "Licensing does not revoke sessions.",
      "Password Protection controls password choices.",
      "Cloud Sync synchronizes identities."
    ]
  },
  {
    "id": "X08",
    "domain": "Implement authentication and access management",
    "topic": "Legacy authentication",
    "difficulty": "Hard",
    "type": "single",
    "scenario": "An old mail client uses a legacy protocol and cannot complete MFA. The company requires MFA for Exchange Online.",
    "question": "What should you do?",
    "options": [
      "Block legacy authentication and modernize the client",
      "Exclude the user permanently",
      "Assign Exchange Administrator",
      "Enable PHS twice"
    ],
    "answer": [
      0
    ],
    "explanation": "Legacy authentication cannot satisfy modern MFA and should be blocked.",
    "whyWrong": [
      "Correct.",
      "Weakens security.",
      "Role assignment is unrelated.",
      "PHS does not add MFA support."
    ]
  },
  {
    "id": "X09",
    "domain": "Plan and implement workload identities",
    "topic": "Managed identity authorization",
    "difficulty": "Hard",
    "type": "single",
    "scenario": "A VM has a managed identity but receives Access Denied when reading a Key Vault secret.",
    "question": "What is still required?",
    "options": [
      "Grant the managed identity a Key Vault data-plane role",
      "Assign Global Administrator",
      "Enable SSPR",
      "Verify a custom domain"
    ],
    "answer": [
      0
    ],
    "explanation": "Managed identity provides authentication, but authorization must still be granted on the target resource.",
    "whyWrong": [
      "Correct.",
      "Excessive and irrelevant.",
      "SSPR is for users.",
      "Domain verification is unrelated."
    ]
  },
  {
    "id": "X10",
    "domain": "Plan and implement workload identities",
    "topic": "Delegated permissions",
    "difficulty": "Hard",
    "type": "single",
    "scenario": "A web app should read only the signed-in user\u2019s calendar and never operate without a user.",
    "question": "Which permission model should it use?",
    "options": [
      "Delegated permissions",
      "Application permissions",
      "Azure Owner",
      "Subscription Contributor"
    ],
    "answer": [
      0
    ],
    "explanation": "Delegated permissions let an app act on behalf of a signed-in user.",
    "whyWrong": [
      "Correct.",
      "App-only permissions can operate without a user.",
      "Azure RBAC does not grant Graph calendar access.",
      "Also unrelated."
    ]
  },
  {
    "id": "X11",
    "domain": "Plan and implement workload identities",
    "topic": "Admin consent workflow",
    "difficulty": "Hard",
    "type": "single",
    "scenario": "Users cannot grant app consent but need a controlled way to request approval for legitimate apps.",
    "question": "Which feature should be configured?",
    "options": [
      "Admin consent workflow",
      "PIM for Groups",
      "Password Protection",
      "Administrative units"
    ],
    "answer": [
      0
    ],
    "explanation": "The admin consent workflow lets users request review when they cannot grant consent.",
    "whyWrong": [
      "Correct.",
      "Controls group membership.",
      "Controls password choices.",
      "Scopes administration."
    ]
  },
  {
    "id": "X12",
    "domain": "Plan and implement workload identities",
    "topic": "Automatic provisioning",
    "difficulty": "Hard",
    "type": "single",
    "scenario": "Users assigned to a SaaS app must be created, updated, and disabled automatically in that app.",
    "question": "Which feature should be configured?",
    "options": [
      "Automatic user provisioning, commonly using SCIM",
      "Application Proxy",
      "Password hash synchronization",
      "PIM"
    ],
    "answer": [
      0
    ],
    "explanation": "Automatic provisioning manages account lifecycle in supported SaaS apps.",
    "whyWrong": [
      "Correct.",
      "Publishes internal apps.",
      "Supports hybrid authentication.",
      "Controls privileged access."
    ]
  },
  {
    "id": "X13",
    "domain": "Plan and automate identity governance",
    "topic": "Multiple access package policies",
    "difficulty": "Hard",
    "type": "single",
    "scenario": "Employees and vendors need the same resource bundle, but vendors require approval and 30-day expiration while employees receive one-year access.",
    "question": "What should you configure?",
    "options": [
      "One access package with separate assignment policies",
      "Two tenants",
      "One dynamic group",
      "One permanent policy"
    ],
    "answer": [
      0
    ],
    "explanation": "One package can have multiple assignment policies for different requester populations and lifecycle rules.",
    "whyWrong": [
      "Correct.",
      "Unnecessary.",
      "Cannot supply approval and expiration workflows.",
      "Cannot meet both requirements."
    ]
  },
  {
    "id": "X14",
    "domain": "Plan and automate identity governance",
    "topic": "PIM active assignment",
    "difficulty": "Hard",
    "type": "single",
    "scenario": "An administrator needs immediate privileged access for a scheduled two-day migration and should lose it automatically afterward.",
    "question": "Which assignment is best?",
    "options": [
      "Time-bound active assignment",
      "Permanent active assignment",
      "Eligible assignment with no end date",
      "Dynamic group"
    ],
    "answer": [
      0
    ],
    "explanation": "A time-bound active assignment provides immediate access only for the scheduled period.",
    "whyWrong": [
      "Correct.",
      "Too much standing access.",
      "Would require activation and lacks the scheduled immediate state.",
      "Not a PIM assignment type."
    ]
  },
  {
    "id": "X15",
    "domain": "Plan and automate identity governance",
    "topic": "Event Hub",
    "difficulty": "Hard",
    "type": "single",
    "scenario": "Microsoft Entra logs must stream to a third-party SIEM in near real time.",
    "question": "Which diagnostic destination is best?",
    "options": [
      "Event Hub",
      "Storage account only",
      "Access Reviews",
      "Identity Secure Score"
    ],
    "answer": [
      0
    ],
    "explanation": "Event Hubs are commonly used to stream logs to external SIEM integrations.",
    "whyWrong": [
      "Correct.",
      "Better for archival than streaming.",
      "Govern access.",
      "Provides recommendations."
    ]
  },
  {
    "id": "X16",
    "domain": "Plan and automate identity governance",
    "topic": "Lifecycle Workflows",
    "difficulty": "Hard",
    "type": "single",
    "scenario": "When an employee changes department, old access should be removed and new access tasks should start automatically.",
    "question": "Which feature is designed for this mover process?",
    "options": [
      "Lifecycle Workflows",
      "Sign-in frequency",
      "Application Proxy",
      "B2B direct connect"
    ],
    "answer": [
      0
    ],
    "explanation": "Lifecycle Workflows automate joiner, mover, and leaver tasks.",
    "whyWrong": [
      "Correct.",
      "Session control only.",
      "Publishes apps.",
      "Shared channel collaboration."
    ]
  }
];
window.SC300_CASE_STUDIES = [
  {
    "title": "Case Study \u2014 Northwind Health",
    "brief": "Northwind Health has 4,000 employees, 300 contractors, on-premises Active Directory, Microsoft 365, and an internal clinical web application. Security wants fewer standing privileges and stronger controls for risky sign-ins.",
    "requirements": [
      "Employees must keep one password for on-premises and cloud services with high cloud resilience.",
      "Contractors need self-service access to Teams and SharePoint with manager approval and 90-day expiration.",
      "Global Administrator privileges must be activated only when needed, require MFA and approval, and expire after two hours.",
      "High-risk sign-ins must require MFA.",
      "The internal clinical web app must be available remotely without a full VPN."
    ],
    "question_ids": [
      "U11",
      "G03",
      "G08",
      "A13",
      "W09"
    ]
  },
  {
    "title": "Case Study \u2014 Fabrikam Retail",
    "brief": "Fabrikam operates stores in the United States and Canada. Store employees use shared kiosks. The organization is integrating a SaaS inventory system and wants centralized monitoring.",
    "requirements": [
      "Store workers require portable phishing-resistant passwordless sign-in.",
      "Only the Inventory group may access the SaaS application.",
      "A daemon must read all users from Microsoft Graph without a signed-in user.",
      "Security must discover unsanctioned cloud applications.",
      "Identity logs must be retained and visualized."
    ],
    "question_ids": [
      "A04",
      "W10",
      "W06",
      "W12",
      "G15"
    ]
  },
  {
    "title": "Case Study \u2014 Alpine Financial Services",
    "brief": "Alpine has regulated finance workloads, external vendors, SaaS apps, and Azure workloads. The company requires Zero Trust, least privilege, and full auditability.",
    "requirements": [
      "Sensitive SharePoint content must require phishing-resistant MFA without affecting ordinary content.",
      "Vendors need approval and expiration for a shared resource bundle.",
      "A SaaS app must provision and deprovision accounts automatically.",
      "Microsoft Entra logs must stream to a third-party SIEM.",
      "A scheduled migration needs immediate time-bound admin access."
    ],
    "question_ids": [
      "X05",
      "X13",
      "X12",
      "X15",
      "X14"
    ]
  }
];
