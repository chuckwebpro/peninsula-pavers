# Managing Projects on the Testimonials Page

Projects are defined in a single array at the top of `src/pages/testimonials.astro`.
No database, no CMS — edit the file, commit, and redeploy.

## Project data shape

Each entry in the `projects` array requires these five fields:

```ts
{
  type: string;       // eyebrow label, e.g. "Outdoor Patio"
  title: string;      // headline quote (without the curly quotes — those are added automatically)
  clientName: string; // e.g. "Dawn Hartley"
  clientCity: string; // e.g. "Traverse City"
  review: string;     // one-paragraph body text
  images: [string, string, string, string]; // exactly 4 paths — see below
}
```

### Images

The `images` tuple must have **exactly four** entries:

| Index | Role              | Displayed as                       |
| ----- | ----------------- | ---------------------------------- |
| `[0]` | Main image        | Large photo, left side of the card |
| `[1]` | Thumbnail 1       | Bottom strip, column 1 of 3        |
| `[2]` | Thumbnail 2       | Bottom strip, column 2 of 3        |
| `[3]` | Thumbnail 3       | Bottom strip, column 3 of 3        |

All four images are also available in the lightbox. Clicking any image opens the
lightbox at that image's index; the user can arrow through all four from there.

Put image files in `/public/images/` and reference them as `/images/filename.jpg`.

---

## Adding a new project

1. **Copy an existing image set** into `/public/images/` (four photos, named
   consistently, e.g. `my-project-1.jpg` … `my-project-4.jpg`).

2. **Open `src/pages/testimonials.astro`** and find the `projects` array near the
   top of the frontmatter (between the `---` fences).

3. **Append a new object** to the array:

   ```ts
   {
     type: 'Landscaping',
     title: 'The whole front yard is unrecognizable — in the best way',
     clientName: 'Mark & Lisa Portor',
     clientCity: 'Traverse City',
     review:
       'We had a bare, sloped front yard that looked neglected. Peninsula Pavers regraded it, added a stone border, and planted everything. It looks like it has always been there.',
     images: [
       '/images/my-project-1.jpg',
       '/images/my-project-2.jpg',
       '/images/my-project-3.jpg',
       '/images/my-project-4.jpg',
     ],
   },
   ```

4. **Rebuild** (`npm run build`) or let your deploy pipeline handle it.

The counter ("1 / 5", "1 / 6", etc.) updates automatically from the array length.

---

## Editing an existing project

Locate the project object by its `type` or `title` string and change any field
directly. To swap an image, replace the path string and make sure the new file
exists in `/public/images/`.

---

## Removing a project

Delete the entire object (including the trailing comma if it isn't the last entry).
The slider will renumber itself automatically.

---

## Reordering projects

The slider shows projects in array order. Cut an object out of the array and paste
it into the position you want.

---

## Adding or updating testimonial carousel entries

The testimonial carousel (the navy "What Our Clients Say" section) is managed
separately via the `tItems` array, also in the frontmatter of
`src/pages/testimonials.astro`. Each entry takes:

```ts
{
  quote: string; // full review text
  name: string;  // "First Last"
  role: string;  // displayed below the name, e.g. "Homeowner"
}
```

The carousel doubles the array for smooth looping (`[...tItems, ...tItems]`), so
only edit `tItems` — the duplication is automatic. The `UNIQUE` constant in the
inline script must match `tItems.length`; if you add or remove entries, update that
value too:

```js
// Near the bottom of the file, inside the <script is:inline> block:
var UNIQUE = 3; // ← change this to match the number of entries in tItems
```
