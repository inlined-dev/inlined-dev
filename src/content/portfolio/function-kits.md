---
title: "Function kits"
summary: "Replaces Firebase Extensions with ordinary 2nd gen Cloud Functions."
role: "Platform tech lead"
org: "Google"
years: "2025–present"
order: 1
links:
  - label: "Migration guide"
    url: "https://firebase.google.com/docs/extensions/users/migrate"
  - label: "firebase/extensions"
    url: "https://github.com/firebase/extensions"
  - label: "Résumé"
    url: "/resume"
---

Function kits package what a Firebase Extension did as ordinary 2nd gen Cloud Functions for Firebase, so the capability deploys and is managed like the rest of a developer's functions. Kits are distributed through npm, which already provides distribution, trust, and usage metrics, without Google as a gatekeeper.

**Why it matters.** The Firebase Extensions service shuts down on March 31, 2027. With function kits the shutdown becomes an upgrade. Developers keep what their extensions did, and Firebase has one serverless product to maintain instead of two.

**My role.** Led the replacement. Set the strategy with senior leadership against external deadlines, closed the feature gaps by bringing Extensions features into Functions itself, such as lifecycle hooks and declarative dependencies on IAM roles and APIs, and shipped tooling and an agent skill that migrate extension code and deployments. Then trained the owning team and handed it off.
