window.SC300_QUESTIONS = [
  {
    "domain": "Implement and manage user identities",
    "type": "single",
    "q": "Users whose department is Finance must be added to a group automatically and removed when the attribute changes.",
    "o": [
      "Assigned security group",
      "Dynamic user group",
      "Administrative unit",
      "Access package"
    ],
    "a": [
      1
    ],
    "e": "Dynamic membership rules evaluate user attributes and update membership automatically.",
    "r": "Dynamic groups"
  },
  {
    "domain": "Implement and manage user identities",
    "type": "single",
    "q": "HR admins must reset passwords only for HR users, not for users in other departments.",
    "o": [
      "Security group",
      "Administrative unit with a scoped role",
      "Conditional Access",
      "Management group"
    ],
    "a": [
      1
    ],
    "e": "Administrative units scope Entra admin roles to a subset of directory objects.",
    "r": "Administrative units"
  },
  {
    "domain": "Implement and manage user identities",
    "type": "multi",
    "q": "Which TWO are valid uses of Microsoft Entra B2B collaboration?",
    "o": [
      "Invite an external consultant with their own identity",
      "Assign a guest to an enterprise app",
      "Create Azure availability zones",
      "Replace Conditional Access",
      "Patch domain controllers"
    ],
    "a": [
      0,
      1
    ],
    "e": "B2B lets external users authenticate with external identities and receive assigned access.",
    "r": "B2B collaboration"
  },
  {
    "domain": "Implement and manage user identities",
    "type": "single",
    "q": "A deleted user must be restored with the same object where possible.",
    "o": [
      "Create a new user with the same UPN",
      "Restore the deleted user",
      "Invite the user as a guest",
      "Run an access review"
    ],
    "a": [
      1
    ],
    "e": "Soft-deleted Entra users can be restored during the retention period.",
    "r": "User lifecycle"
  },
  {
    "domain": "Implement and manage user identities",
    "type": "single",
    "q": "Cloud sign-in must continue even if on-premises authentication agents are unavailable.",
    "o": [
      "Pass-through authentication",
      "Password hash synchronization",
      "Federation only",
      "Certificate-based authentication"
    ],
    "a": [
      1
    ],
    "e": "Password hash synchronization supports cloud authentication without depending on on-premises agents at sign-in.",
    "r": "Hybrid authentication"
  },
  {
    "domain": "Implement and manage user identities",
    "type": "single",
    "q": "Microsoft Entra ID must validate passwords directly against on-premises AD without storing password hashes in the cloud.",
    "o": [
      "Password hash synchronization",
      "Pass-through authentication",
      "Seamless SSO only",
      "Entra Domain Services"
    ],
    "a": [
      1
    ],
    "e": "Pass-through authentication validates credentials through on-premises agents.",
    "r": "Hybrid authentication"
  },
  {
    "domain": "Implement and manage user identities",
    "type": "single",
    "q": "A department needs a shared mailbox, calendar, SharePoint site, and Teams support.",
    "o": [
      "Security group",
      "Microsoft 365 group",
      "Administrative unit",
      "Role-assignable group"
    ],
    "a": [
      1
    ],
    "e": "Microsoft 365 groups provide collaboration resources.",
    "r": "Group types"
  },
  {
    "domain": "Implement and manage user identities",
    "type": "single",
    "q": "An Entra administrative role must be assigned to a group.",
    "o": [
      "Use any dynamic group",
      "Create a role-assignable security group",
      "Use a distribution list",
      "Use an on-premises-only group"
    ],
    "a": [
      1
    ],
    "e": "Only groups created as role-assignable can receive Entra roles.",
    "r": "Role-assignable groups"
  },
  {
    "domain": "Implement and manage user identities",
    "type": "single",
    "q": "Licenses must be assigned automatically to all members of the Sales group.",
    "o": [
      "Group-based licensing",
      "Administrative units",
      "Resource locks",
      "Authentication context"
    ],
    "a": [
      0
    ],
    "e": "Group-based licensing assigns and removes licenses through group membership.",
    "r": "Group-based licensing"
  },
  {
    "domain": "Implement authentication and access management",
    "type": "single",
    "q": "Users may access Microsoft 365 only from compliant devices.",
    "o": [
      "Azure RBAC",
      "Conditional Access requiring a compliant device",
      "PIM",
      "Access reviews"
    ],
    "a": [
      1
    ],
    "e": "Conditional Access grant controls can require device compliance.",
    "r": "Conditional Access"
  },
  {
    "domain": "Implement authentication and access management",
    "type": "single",
    "q": "Admins must use phishing-resistant authentication to access the Azure portal.",
    "o": [
      "Named location",
      "Authentication strength",
      "Sign-in frequency",
      "Terms of use"
    ],
    "a": [
      1
    ],
    "e": "Authentication strengths can require phishing-resistant MFA methods.",
    "r": "Authentication strengths"
  },
  {
    "domain": "Implement authentication and access management",
    "type": "single",
    "q": "A new Conditional Access policy must be evaluated without enforcement.",
    "o": [
      "On",
      "Off",
      "Report-only",
      "Audit"
    ],
    "a": [
      2
    ],
    "e": "Report-only evaluates a policy without enforcing it.",
    "r": "Conditional Access"
  },
  {
    "domain": "Implement authentication and access management",
    "type": "multi",
    "q": "Which TWO are Conditional Access risk conditions?",
    "o": [
      "User risk",
      "Sign-in risk",
      "Resource tags",
      "Budget status",
      "Resource locks"
    ],
    "a": [
      0,
      1
    ],
    "e": "Conditional Access can evaluate user risk and sign-in risk.",
    "r": "Identity Protection"
  },
  {
    "domain": "Implement authentication and access management",
    "type": "single",
    "q": "Leaked credentials are detected for a user.",
    "o": [
      "Device risk",
      "User risk",
      "Application risk",
      "Resource risk"
    ],
    "a": [
      1
    ],
    "e": "Leaked credentials indicate the identity itself may be compromised.",
    "r": "Identity Protection"
  },
  {
    "domain": "Implement authentication and access management",
    "type": "single",
    "q": "Users must reset their own forgotten passwords after verification.",
    "o": [
      "Password Administrator",
      "SSPR",
      "PIM",
      "Access reviews"
    ],
    "a": [
      1
    ],
    "e": "SSPR lets users reset their own passwords.",
    "r": "SSPR"
  },
  {
    "domain": "Implement authentication and access management",
    "type": "single",
    "q": "A hybrid user's SSPR change must update on-premises AD.",
    "o": [
      "Password writeback",
      "Password hash sync only",
      "Seamless SSO",
      "Cross-tenant sync"
    ],
    "a": [
      0
    ],
    "e": "Password writeback sends cloud password changes to on-premises AD.",
    "r": "Password writeback"
  },
  {
    "domain": "Implement authentication and access management",
    "type": "single",
    "q": "The company wants phishing-resistant passwordless authentication using physical keys.",
    "o": [
      "SMS",
      "FIDO2 security keys",
      "Security questions",
      "Email OTP"
    ],
    "a": [
      1
    ],
    "e": "FIDO2 keys provide passwordless, phishing-resistant authentication.",
    "r": "Passwordless authentication"
  },
  {
    "domain": "Implement authentication and access management",
    "type": "single",
    "q": "MFA must be required only when an eligible admin activates a privileged role.",
    "o": [
      "Conditional Access for all apps",
      "PIM activation settings",
      "SSPR",
      "Access reviews"
    ],
    "a": [
      1
    ],
    "e": "PIM activation settings can require MFA specifically during activation.",
    "r": "PIM"
  },
  {
    "domain": "Implement authentication and access management",
    "type": "single",
    "q": "A user must create and delete Azure VMs but cannot assign access.",
    "o": [
      "Reader",
      "Contributor",
      "Owner",
      "User Access Administrator"
    ],
    "a": [
      1
    ],
    "e": "Contributor manages resources but cannot assign Azure RBAC roles.",
    "r": "Azure RBAC"
  },
  {
    "domain": "Implement authentication and access management",
    "type": "single",
    "q": "A user must assign Azure RBAC roles but should not manage resources.",
    "o": [
      "Contributor",
      "Reader",
      "User Access Administrator",
      "Security Reader"
    ],
    "a": [
      2
    ],
    "e": "User Access Administrator manages access assignments.",
    "r": "Azure RBAC"
  },
  {
    "domain": "Plan and implement workload identities",
    "type": "single",
    "q": "Developers are building a new app that will authenticate users with Entra ID.",
    "o": [
      "Enterprise application only",
      "App registration",
      "Administrative unit",
      "Access package"
    ],
    "a": [
      1
    ],
    "e": "An app registration defines the application's identity and permissions.",
    "r": "App registrations"
  },
  {
    "domain": "Plan and implement workload identities",
    "type": "single",
    "q": "Salesforce is added from the gallery and users must be assigned for SSO.",
    "o": [
      "Enterprise application service principal",
      "Managed identity",
      "Administrative unit",
      "Resource group"
    ],
    "a": [
      0
    ],
    "e": "The enterprise application is the tenant service principal used for SSO and assignment.",
    "r": "Enterprise applications"
  },
  {
    "domain": "Plan and implement workload identities",
    "type": "single",
    "q": "An Azure VM must access Key Vault without stored credentials.",
    "o": [
      "Guest account",
      "Managed identity",
      "Shared user account",
      "Emergency account"
    ],
    "a": [
      1
    ],
    "e": "Managed identities provide Azure resources with automatically managed identities.",
    "r": "Managed identities"
  },
  {
    "domain": "Plan and implement workload identities",
    "type": "single",
    "q": "Multiple Azure resources must share one identity.",
    "o": [
      "System-assigned managed identity",
      "User-assigned managed identity",
      "Guest identity",
      "Federated user"
    ],
    "a": [
      1
    ],
    "e": "A user-assigned managed identity can be attached to multiple resources.",
    "r": "Managed identities"
  },
  {
    "domain": "Plan and implement workload identities",
    "type": "single",
    "q": "A confidential app needs a credential more secure than a client secret.",
    "o": [
      "Certificate credential",
      "User password",
      "SMS code",
      "Security question"
    ],
    "a": [
      0
    ],
    "e": "Certificates are stronger app credentials than shared secrets.",
    "r": "Application credentials"
  },
  {
    "domain": "Plan and implement workload identities",
    "type": "single",
    "q": "An app calls Microsoft Graph as the signed-in user.",
    "o": [
      "Application permissions",
      "Delegated permissions",
      "Azure RBAC",
      "PIM permissions"
    ],
    "a": [
      1
    ],
    "e": "Delegated permissions act on behalf of a signed-in user.",
    "r": "API permissions"
  },
  {
    "domain": "Plan and implement workload identities",
    "type": "single",
    "q": "A background daemon calls Microsoft Graph without a signed-in user.",
    "o": [
      "Delegated permissions",
      "Application permissions",
      "User consent only",
      "Authentication strength"
    ],
    "a": [
      1
    ],
    "e": "Application permissions are used by daemon or service apps.",
    "r": "API permissions"
  },
  {
    "domain": "Plan and implement workload identities",
    "type": "single",
    "q": "A high-privilege Graph permission cannot be approved by users.",
    "o": [
      "Any member can approve",
      "An admin must grant consent",
      "The app approves itself",
      "A resource owner approves"
    ],
    "a": [
      1
    ],
    "e": "Permissions requiring admin consent must be approved by an authorized administrator.",
    "r": "Consent"
  },
  {
    "domain": "Plan and implement workload identities",
    "type": "single",
    "q": "An app must accept users from any Entra organization.",
    "o": [
      "Single-tenant accounts only",
      "Accounts in any organizational directory",
      "Personal accounts only",
      "Managed identities only"
    ],
    "a": [
      1
    ],
    "e": "This creates a multitenant application.",
    "r": "App tenancy"
  },
  {
    "domain": "Plan and implement identity governance",
    "type": "single",
    "q": "Global Admin access must require approval and expire after two hours.",
    "o": [
      "Conditional Access",
      "PIM",
      "Access reviews",
      "Entitlement management"
    ],
    "a": [
      1
    ],
    "e": "PIM provides just-in-time, time-bound privileged role activation.",
    "r": "PIM"
  },
  {
    "domain": "Plan and implement identity governance",
    "type": "single",
    "q": "Managers must verify every six months who still needs Finance app access.",
    "o": [
      "Access reviews",
      "Conditional Access",
      "Authentication strengths",
      "Password protection"
    ],
    "a": [
      0
    ],
    "e": "Access reviews periodically validate existing access.",
    "r": "Access reviews"
  },
  {
    "domain": "Plan and implement identity governance",
    "type": "single",
    "q": "Contractors request Teams, SharePoint, and app access with manager approval and 90-day expiration.",
    "o": [
      "Entitlement management access package",
      "Azure RBAC only",
      "Administrative unit",
      "Resource lock"
    ],
    "a": [
      0
    ],
    "e": "Access packages bundle resources and support request, approval, and expiration policies.",
    "r": "Entitlement management"
  },
  {
    "domain": "Plan and implement identity governance",
    "type": "single",
    "q": "Joiner, mover, and leaver tasks must be automated from HR-driven events.",
    "o": [
      "Lifecycle Workflows",
      "Azure Policy",
      "Access reviews only",
      "Defender for Cloud"
    ],
    "a": [
      0
    ],
    "e": "Lifecycle Workflows automate joiner-mover-leaver identity tasks.",
    "r": "Lifecycle Workflows"
  },
  {
    "domain": "Plan and implement identity governance",
    "type": "single",
    "q": "A user is eligible for an Entra role in PIM. What must happen before permissions are received?",
    "o": [
      "Activate the role",
      "Run password sync",
      "Create an access package",
      "Register an app"
    ],
    "a": [
      0
    ],
    "e": "Eligible assignments require activation.",
    "r": "PIM"
  },
  {
    "domain": "Plan and implement identity governance",
    "type": "single",
    "q": "A privileged role assignment starts Monday and ends after 30 days.",
    "o": [
      "Permanent active assignment",
      "Time-bound assignment",
      "Dynamic membership rule",
      "Session control"
    ],
    "a": [
      1
    ],
    "e": "PIM supports time-bound eligible or active assignments.",
    "r": "PIM"
  },
  {
    "domain": "Plan and implement identity governance",
    "type": "single",
    "q": "Users who do not respond to an access review must automatically lose access.",
    "o": [
      "Apply results automatically and remove non-responders",
      "Require MFA",
      "Enable writeback",
      "Use report-only"
    ],
    "a": [
      0
    ],
    "e": "Access reviews can automatically apply decisions and remove non-responders.",
    "r": "Access reviews"
  }
];
