# Editing page content

You can edit all site copy and labels in these files. No build step needed for content-only changes—save and refresh.

## Landing page (home)

**File:** `src/pages/LandingPage.tsx`

| What to change | Where in file |
|----------------|----------------|
| Hero headline (“MOVE BIG. MOVE RIGHT.”) | Search for `MOVE BIG` |
| Hero tagline / subtitle | Search for `Gigatt Transport LLC provides` |
| Small label above headline | `OVERSIZE / OVERWEIGHT TRANSPORT SUPPORT` |
| Button text | `REQUEST A ROUTE / JOB`, `OUR SERVICES` |
| State chips (TX, AR, OK…) | `const STATES = ['TX', 'AR', ...]` |
| Credibility strip (4 items) | `const CRED_ITEMS = [ ... ]` |
| Services section (4 cards) | `const SERVICES = [ ... ]` — each has `title`, `subtitle`, `desc` |
| “What we do” / “SERVICES” heading | Search for `WHAT WE DO`, `SERVICES` |
| Coverage / Primary states text | Search for `COVERAGE AREA`, `Primary operations` |
| “Operational strengths” list | Search for `OPERATIONAL STRENGTHS` — array of 5 bullet strings |
| Bottom CTA (“READY TO MOVE?”) | Search for `READY TO` |
| Footer company name | `GIGATT TRANSPORT LLC` |
| Footer description | `Oversize & overweight escort operations` |
| Contact placeholder (phone, email) | Search for `(xxx) xxx-xxxx`, `contact@gigatttransport.com` |
| Quick links | “Request a Route / Job”, “Services” |
| Copyright | `© 2025 Gigatt Transport LLC` |

## Request form page

**File:** `src/pages/RequestPage.tsx`

| What to change | Where in file |
|----------------|----------------|
| Page title / heading | “REQUEST A ROUTE / JOB” |
| Intro paragraph under title | “Fill out the form below…” |
| Section labels | “01 CONTACT INFO”, “02 MOVE DETAILS”, “03 SERVICE TYPE”, “04 ADDITIONAL NOTES” |
| Field labels | In each `<Field label="…" />` (e.g. “Full Name”, “Email”, “Origin”) |
| Placeholders | `placeholder="…"` on inputs |
| Service type options | `src/data/mockData.ts` → `SERVICE_TYPES` and `STATES` |
| Success message | “REQUEST RECEIVED”, “We'll review your move details…” |
| Submit button text | “SUBMIT REQUEST” |
| Footer note | “* Required fields. We don't share…” |

## Nav (all public pages)

**File:** `src/components/PublicNav.tsx`

- Logo text: “GIGATT”, “TRANSPORT”
- Link labels: “Services”, “Coverage”, “Contact”
- Button: “REQUEST A ROUTE”

## Admin

- Login page text: `src/pages/admin/AdminLogin.tsx` (e.g. “Sign In”, “Demo: admin / gigatt”)
- Requests list/detail labels: `src/pages/admin/AdminRequests.tsx`, `AdminRequestDetail.tsx`

## Shared data (states, service types)

**File:** `src/data/mockData.ts`

- `STATES` — list of state codes for the form and landing page
- `SERVICE_TYPES` — list of service options for the request form
