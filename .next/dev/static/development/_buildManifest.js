self.__BUILD_MANIFEST = {
  "/dashboard": [
    "static/chunks/pages/dashboard.js"
  ],
  "/dashboard/beneficiaries": [
    "static/chunks/pages/dashboard/beneficiaries.js"
  ],
  "/dashboard/beneficiaries/[id]": [
    "static/chunks/pages/dashboard/beneficiaries/[id].js"
  ],
  "/dashboard/beneficiaries/add-beneficiary": [
    "static/chunks/pages/dashboard/beneficiaries/add-beneficiary.js"
  ],
  "__rewrites": {
    "afterFiles": [],
    "beforeFiles": [],
    "fallback": []
  },
  "sortedPages": [
    "/_app",
    "/_error",
    "/api/hello",
    "/dashboard",
    "/dashboard/activity",
    "/dashboard/beneficiaries",
    "/dashboard/beneficiaries/add-beneficiary",
    "/dashboard/beneficiaries/[id]",
    "/dashboard/inherited-assets",
    "/dashboard/legacy",
    "/dashboard/settings",
    "/dashboard/subscription",
    "/dashboard/transfer-history",
    "/dashboard/triggers",
    "/dashboard/vault",
    "/dashboard/vault/assets",
    "/dashboard/vault/assets/add-asset",
    "/dashboard/vault/assets/[id]",
    "/dashboard/vault/categories",
    "/dashboard/vault/categories/[id]",
    "/inherit",
    "/inherit/activate",
    "/inherit/ownership",
    "/inherit/transfer"
  ]
};self.__BUILD_MANIFEST_CB && self.__BUILD_MANIFEST_CB()