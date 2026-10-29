#!/usr/bin/env bash
# One-time setup for .github/workflows/deploy.yml. Run it yourself, signed in
# to gcloud as a project owner and to gh with admin on the repository.
#
# Creates a github-deploy service account that can only deploy Firebase
# Hosting, and a Workload Identity Federation provider that lets GitHub
# Actions act as it, but only from pushes to this repository's main branch.
# No key is created. Then stores the two names as repository variables.
#
# Re-running it fails on the resources that already exist; that is harmless.

set -euo pipefail

PROJECT=inlined-dev
REPO=inlined-dev/inlined-dev
SA=github-deploy@$PROJECT.iam.gserviceaccount.com
NUMBER=$(gcloud projects describe "$PROJECT" --format='value(projectNumber)')

gcloud services enable sts.googleapis.com iamcredentials.googleapis.com --project "$PROJECT"

gcloud iam service-accounts create github-deploy --project "$PROJECT" \
  --display-name "GitHub Actions deploy ($REPO)"
for role in roles/firebasehosting.admin roles/firebase.viewer; do
  gcloud projects add-iam-policy-binding "$PROJECT" --member "serviceAccount:$SA" \
    --role "$role" --condition=None --quiet >/dev/null
done

gcloud iam workload-identity-pools create github --project "$PROJECT" \
  --location global --display-name "GitHub Actions"
gcloud iam workload-identity-pools providers create-oidc github --project "$PROJECT" \
  --location global --workload-identity-pool github --display-name "GitHub" \
  --issuer-uri https://token.actions.githubusercontent.com \
  --attribute-mapping "google.subject=assertion.sub,attribute.repository=assertion.repository,attribute.ref=assertion.ref" \
  --attribute-condition "assertion.repository == '$REPO' && assertion.ref == 'refs/heads/main'"

gcloud iam service-accounts add-iam-policy-binding "$SA" --project "$PROJECT" \
  --role roles/iam.workloadIdentityUser \
  --member "principalSet://iam.googleapis.com/projects/$NUMBER/locations/global/workloadIdentityPools/github/attribute.repository/$REPO" >/dev/null

gh variable set WIF_PROVIDER --repo "$REPO" \
  --body "projects/$NUMBER/locations/global/workloadIdentityPools/github/providers/github"
gh variable set DEPLOY_SERVICE_ACCOUNT --repo "$REPO" --body "$SA"

echo "Done. Pushes to main now deploy to Firebase Hosting."
