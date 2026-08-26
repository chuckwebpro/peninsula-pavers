PENINSULA PAVERS - SCHEMA MARKUP PACKAGE
WEBPRO International Inc | July 2026

===========================================================
FILE MAP
===========================================================

01-homepage.json                      https://peninsulapavers.com/
02-services-hub.json                  /services/
03-service-outdoor-living-spaces.json /services/outdoor-living-spaces/
04-service-patios.json                /services/patios/
05-service-driveways.json             /services/driveways/
06-service-retaining-walls.json       /services/retaining-walls/
07-service-walkways.json              /services/walkways/
08-service-waterscapes.json           /services/waterscapes/
09-service-landscaping.json           /services/landscaping/
10-about.json                         /about/
11-contact.json                       /contact/
12-gallery.json                       /gallery/   (only if this page exists)


===========================================================
HOW TO IMPLEMENT
===========================================================

Each file is the complete JSON-LD block for one page. Wrap the
file contents in a script tag and place it in the HEAD of the
matching page.

  <script type="application/ld+json">
  ... paste file contents here ...
  </script>

One block per page. Do not combine files. Do not place the
homepage block on interior pages.

If the site runs on WordPress with Rank Math or Yoast, disable
that plugin's automatic schema output for these page types
first. Two competing LocalBusiness blocks on the same page is
worse than none.


===========================================================
BEFORE ANYTHING GOES LIVE - REQUIRED DATA
===========================================================

Every placeholder below appears in 01-homepage.json unless
noted. Search for REPLACE_ and substitute real values. Do not
launch with any REPLACE_ string still in the markup.

  REPLACE_STREET_ADDRESS               Physical street address
  REPLACE_POSTAL_CODE                  ZIP code
  REPLACE_LATITUDE                     Decimal, e.g. 44.7631
  REPLACE_LONGITUDE                    Decimal, e.g. -85.6206
  REPLACE_OPEN_TIME                    24-hour, e.g. 08:00
  REPLACE_CLOSE_TIME                   24-hour, e.g. 17:00
  REPLACE_FOUNDING_YEAR                Four digits, e.g. 1998
  REPLACE_GOOGLE_BUSINESS_PROFILE_URL  Full GBP listing URL
  REPLACE_FACEBOOK_URL                 Or delete the entry
  REPLACE_LOGO_URL                     Absolute URL to logo file
  REPLACE_PRIMARY_IMAGE_URL            Absolute URL, 1200px wide min

  REPLACE_LEN_ALLGAIER_PHOTO_URL       (10-about.json)

The address, geo coordinates, and hours must match the Google
Business Profile exactly. Mismatched NAP between schema and GBP
actively harms local ranking rather than just failing to help.

The founding year drives the "more than 25 years" claim used
throughout the site copy. Confirm it with Krista so the number
in the markup and the number in the content agree.


===========================================================
GRAPH STRUCTURE
===========================================================

Every page references a single business node:

  https://peninsulapavers.com/#business

That node is DEFINED once, on the homepage. Every other page
points at it by @id rather than redeclaring it. This is what
lets search engines and AI answer engines understand the seven
service pages as one business rather than seven.

Because of that, the homepage block is load-bearing. If it is
missing or malformed, every other page on the site has a
reference pointing at nothing.

Other connected nodes:

  /#website                    WebSite, defined on homepage
  /#organization               Organization, defined on homepage
  /#logo                       ImageObject, defined on homepage
  /services/#catalog           OfferCatalog, defined on hub
  /about/#len-allgaier         Person, defined on About

The homepage references /services/#catalog and the About page
Person node. Both resolve as long as those two pages ship with
their blocks in place.


===========================================================
WHAT IS DELIBERATELY NOT INCLUDED
===========================================================

AggregateRating and Review markup are absent. Review schema
requires real, verifiable review data, and fabricated or
self-serving review markup is a manual action risk. Once Krista
supplies confirmed review counts and average rating from Google,
that can be added to the business node on the homepage.

Price ranges are absent from the Service offers by design. Each
offer carries a PriceSpecification with a description explaining
that projects are quoted individually and quotes hold for 30
days. This matches the FAQ content and avoids publishing numbers
that would misrepresent most projects.

priceRange on the business node is set to a general indicator
rather than dollar figures. Adjust or remove if the client
prefers.


===========================================================
VALIDATION
===========================================================

Before launch, run each page through both:

  Google Rich Results Test    https://search.google.com/test/rich-results
  Schema.org Validator        https://validator.schema.org

Test the live URL, not the pasted code, so the test sees the
markup in the same state a crawler will.

Expect Rich Results Test to report FAQ eligibility on the seven
service pages and merchant or local business eligibility on the
homepage. Service and OfferCatalog nodes will validate without
producing a rich result, which is correct and expected. They
exist to describe the business to search engines and AI answer
engines, not to generate a SERP feature.

After launch, monitor Search Console under Enhancements for FAQ
and any structured data errors.


===========================================================
NOTES
===========================================================

FAQ text in files 03 through 09 matches the approved page copy
in the site content document exactly. If page copy changes, the
schema must be updated to match. Schema that contradicts visible
page content is a policy violation, not just an inconsistency.

File 12 (gallery) contains a placeholder ImageGallery node. If a
gallery page exists, add one ImageObject per project photo with
contentUrl and caption. If no gallery page exists, discard the
file.

WEBPRO International Inc | July 2026
