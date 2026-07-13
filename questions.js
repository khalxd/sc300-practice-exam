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
  },
  {
    "domain": "Implement and manage user identities",
    "type": "multi",
    "case": "Case study: Contoso has regional HR teams. Each HR team must manage only users in its own region. The teams may reset passwords and update user profiles but must not receive tenant-wide permissions.",
    "q": "Which TWO actions should you perform while following least privilege?",
    "o": [
      "Create one administrative unit for each region",
      "Assign a scoped Microsoft Entra role at each administrative unit",
      "Create one dynamic group and assign Global Administrator",
      "Use Azure RBAC Contributor at the subscription",
      "Configure a resource lock"
    ],
    "a": [
      0,
      1
    ],
    "e": "Administrative units define the population an administrator can manage, and scoped Entra role assignments define what the administrator can do within that population.",
    "r": "Administrative units and scoped Entra roles"
  },
  {
    "domain": "Implement and manage user identities",
    "type": "single",
    "case": "Fabrikam uses password hash synchronization. The company loses connectivity to its on-premises datacenter for four hours.",
    "q": "Which result should you expect for existing cloud users?",
    "o": [
      "Users cannot authenticate until a domain controller is reachable",
      "Users can continue authenticating to Microsoft Entra ID",
      "Only guest users can authenticate",
      "Users must switch to pass-through authentication"
    ],
    "a": [
      1
    ],
    "e": "With password hash synchronization, Microsoft Entra ID performs cloud authentication and does not require an on-premises agent during each sign-in.",
    "r": "Password hash synchronization behavior"
  },
  {
    "domain": "Implement and manage user identities",
    "type": "single",
    "case": "A company acquired another organization. Users from the acquired tenant must collaborate in Teams. The security team wants to trust MFA claims issued by the acquired tenant.",
    "q": "What should you configure with the LEAST administrative effort?",
    "o": [
      "Inbound cross-tenant access trust settings",
      "A separate password for every guest",
      "Azure RBAC at the management-group scope",
      "Microsoft Entra Domain Services"
    ],
    "a": [
      0
    ],
    "e": "Cross-tenant access settings can trust MFA and device claims from another Microsoft Entra organization.",
    "r": "Cross-tenant access trust settings"
  },
  {
    "domain": "Implement and manage user identities",
    "type": "single",
    "case": "A role-assignable group contains help desk administrators. Membership must be managed only by privileged administrators.",
    "q": "Why should you avoid using a dynamic membership rule for this group?",
    "o": [
      "Role-assignable groups do not support dynamic membership",
      "Dynamic groups cannot contain users",
      "Dynamic groups cannot receive licenses",
      "Role-assignable groups must be Microsoft 365 groups"
    ],
    "a": [
      0
    ],
    "e": "Role-assignable groups use assigned membership; dynamic membership is not supported because membership controls privileged role assignment.",
    "r": "Role-assignable group restrictions"
  },
  {
    "domain": "Implement authentication and access management",
    "type": "multi",
    "case": "Case study: Administrators should activate Global Administrator only when required. Activation must require MFA and approval, and it must last no longer than one hour.",
    "q": "Which TWO configurations are required?",
    "o": [
      "Configure the role as eligible in PIM",
      "Configure PIM activation settings for MFA, approval, and duration",
      "Assign Global Administrator permanently",
      "Require MFA for every Microsoft 365 user through one broad policy",
      "Create an access package"
    ],
    "a": [
      0,
      1
    ],
    "e": "PIM eligible assignment removes standing access, while activation settings enforce MFA, approval, and a maximum activation duration.",
    "r": "PIM eligible assignments and activation settings"
  },
  {
    "domain": "Implement authentication and access management",
    "type": "single",
    "case": "A Conditional Access policy requires a compliant device. A user signs in from a personally owned device that is registered but not marked compliant.",
    "q": "What is the MOST likely result?",
    "o": [
      "Access is granted because the device is registered",
      "Access is blocked because registration does not equal compliance",
      "The user receives Contributor access",
      "PIM activates automatically"
    ],
    "a": [
      1
    ],
    "e": "A registered device is not necessarily compliant. The device must satisfy the compliance requirement enforced by Conditional Access.",
    "r": "Registered versus compliant devices"
  },
  {
    "domain": "Implement authentication and access management",
    "type": "single",
    "case": "Identity Protection detects a high-risk sign-in. The organization wants the user to complete MFA before access is granted, without blocking all sign-ins from the user.",
    "q": "Which solution BEST meets the requirement?",
    "o": [
      "A sign-in risk Conditional Access policy that requires MFA",
      "A user risk policy requiring password change",
      "An Azure RBAC assignment",
      "A resource lock"
    ],
    "a": [
      0
    ],
    "e": "Sign-in risk describes the likelihood that a particular authentication attempt is unauthorized. A risk-based Conditional Access policy can require MFA.",
    "r": "Sign-in risk versus user risk"
  },
  {
    "domain": "Implement authentication and access management",
    "type": "single",
    "case": "A user's credentials are confirmed compromised. The organization wants the user to securely remediate the account before continued access.",
    "q": "Which control is MOST appropriate?",
    "o": [
      "Require a secure password change based on user risk",
      "Require a compliant device only",
      "Assign the user Password Administrator",
      "Enable PIM for the user"
    ],
    "a": [
      0
    ],
    "e": "User risk represents the likelihood that the identity is compromised. Secure password change can remediate the user risk when SSPR is available.",
    "r": "User risk remediation"
  },
  {
    "domain": "Implement authentication and access management",
    "type": "multi",
    "case": "Case study: A company is deploying emergency access accounts. They must remain usable if normal authentication controls fail.",
    "q": "Which TWO actions follow Microsoft identity-resilience principles?",
    "o": [
      "Exclude the accounts from restrictive Conditional Access policies",
      "Monitor and alert on any use of the accounts",
      "Use the accounts for daily administration",
      "Register the accounts to the same personal phone",
      "Assign the accounts to every administrator"
    ],
    "a": [
      0,
      1
    ],
    "e": "Emergency access accounts are excluded from controls that could lock them out, while their use is closely monitored and alerted.",
    "r": "Emergency access account design"
  },
  {
    "domain": "Plan and implement workload identities",
    "type": "single",
    "case": "A developer registers an application in Tenant A. An administrator in Tenant B grants consent to the multitenant application.",
    "q": "Which object is created in Tenant B?",
    "o": [
      "A new app registration owned by Tenant B",
      "A service principal represented as an enterprise application",
      "A managed identity attached to the tenant",
      "An administrative unit"
    ],
    "a": [
      1
    ],
    "e": "When a multitenant app is consented to in another tenant, a service principal is created there and appears as an enterprise application.",
    "r": "Application objects and service principals"
  },
  {
    "domain": "Plan and implement workload identities",
    "type": "single",
    "case": "A daemon application uses application permissions to Microsoft Graph. No user signs in.",
    "q": "Which statement BEST describes the effective authorization?",
    "o": [
      "The app is limited by the signed-in user's permissions",
      "The app acts with its own granted application permissions",
      "The app must use delegated permissions",
      "The app receives Reader on all Azure subscriptions"
    ],
    "a": [
      1
    ],
    "e": "Application permissions are app-only permissions used when no signed-in user is present.",
    "r": "Delegated versus application permissions"
  },
  {
    "domain": "Plan and implement workload identities",
    "type": "multi",
    "case": "Case study: Three Azure Functions must access the same Key Vault permissions. The identity should remain available if one function is deleted.",
    "q": "Which TWO actions should you perform?",
    "o": [
      "Create a user-assigned managed identity",
      "Attach the identity to all three functions",
      "Use a separate system-assigned identity for each function only",
      "Store one client secret in every function",
      "Create a guest user"
    ],
    "a": [
      0,
      1
    ],
    "e": "A user-assigned managed identity has an independent lifecycle and can be shared by multiple Azure resources.",
    "r": "User-assigned managed identities"
  },
  {
    "domain": "Plan and implement workload identities",
    "type": "single",
    "case": "A third-party SaaS application supports SAML and has already been added to the tenant gallery.",
    "q": "Where should you configure user assignment and SAML single sign-on?",
    "o": [
      "The enterprise application",
      "The application registration manifest only",
      "An administrative unit",
      "A management group"
    ],
    "a": [
      0
    ],
    "e": "The enterprise application is the tenant-local service principal used for SSO and user assignment.",
    "r": "Enterprise applications"
  },
  {
    "domain": "Plan and implement identity governance",
    "type": "single",
    "case": "Contractors already have access to a project application. Managers must confirm every quarter that each contractor still requires access.",
    "q": "Which feature BEST meets the requirement?",
    "o": [
      "Access reviews",
      "Entitlement management request policies only",
      "Conditional Access",
      "Dynamic groups"
    ],
    "a": [
      0
    ],
    "e": "Access reviews are designed to periodically confirm or remove existing access.",
    "r": "Access reviews versus entitlement management"
  },
  {
    "domain": "Plan and implement identity governance",
    "type": "single",
    "case": "External partners need to request a bundle containing a group, Teams resources, and an enterprise application. Requests require sponsor approval and expire after 60 days.",
    "q": "Which solution provides the MOST complete lifecycle management?",
    "o": [
      "An entitlement management access package",
      "An Azure RBAC custom role",
      "An administrative unit",
      "A Conditional Access named location"
    ],
    "a": [
      0
    ],
    "e": "Access packages combine resources with request, approval, expiration, and review policies.",
    "r": "Entitlement management access packages"
  },
  {
    "domain": "Plan and implement identity governance",
    "type": "multi",
    "case": "Case study: A company wants to automate employee onboarding and offboarding. New hires should receive a welcome task, and departing employees should have group memberships removed after their final day.",
    "q": "Which TWO items are central to the solution?",
    "o": [
      "Lifecycle Workflows",
      "Joiner and leaver workflow triggers/tasks",
      "Azure availability sets",
      "Resource locks",
      "ExpressRoute"
    ],
    "a": [
      0,
      1
    ],
    "e": "Lifecycle Workflows automate joiner, mover, and leaver processes through workflow triggers and tasks.",
    "r": "Lifecycle Workflows"
  }
];
