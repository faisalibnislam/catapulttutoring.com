# Catapult Tutoring homepage redesign

A working, responsive homepage at `index.html`. It is plain HTML, CSS and JavaScript with no build step and no dependencies. Open it through any static server, for example `python3 -m http.server`, and visit `http://localhost:8000`.

## Sources and limits

The build environment could not reach catapulttutoring.com, the Wayback Machine, LinkedIn or Nextdoor, so I didn't inspect the live site directly. Content and branding come from:

- A full-page screenshot of the current homepage, supplied by the client's designer. All service details, course lists, testimonial wording, the mission statement and the founder story are transcribed from it.
- The client's logo files (full lockup and symbol), supplied with the screenshot.
- Colors sampled from the logo and screenshot: teal `#22867e`, charcoal `#4d4d4d`, mint `#bae6e1`, mist `#e7f0f2`, and the bright teal in the logo gradient, `#1db4a6`.

I didn't see the inner pages (Tutors, Testimonials, FAQ, Current Students). Links to them use guessed paths, which need checking (see the confirmation list).

## Files

| Path | Contents |
| --- | --- |
| `index.html` | The page, metadata and structured data |
| `assets/css/styles.css` | Design tokens, layout, states and motion |
| `assets/js/main.js` | Header, menu, scrollspy, reveals, accordion, subject handoff, form validation |
| `assets/fonts/figtree-latin-wght.woff2` | Self-hosted Figtree variable font, latin subset, 20 KB (OFL license included) |
| `assets/img/` | Logo (WebP with PNG fallback), favicon, touch icon, founder photo |

## Length

The current homepage has about 661 words. This page shows 461, about 30% fewer. Course lists, both testimonials and the full mission statement are kept. The cuts come from the longer About copy, which now lives in shorter pieces across the tutor, approach and mission sections.

## Final homepage copy

Navigation: Subjects, Our approach, Tutors, Reviews, FAQ, Current students. Primary button: Find the right tutor.

### Hero

- Eyebrow: Math, science, English and more
- H1: One-on-one online tutoring that builds understanding and confidence
- Lead: Working virtually with students across the country to assess their needs, find their preferred style of learning, and increase their confidence and skills.
- Buttons: Find the right tutor / Explore subjects
- Visual: an illustrated worked problem on graph paper. A student's margin note asks "why does it come back down?" and the tutor replies "Good question! Let's check the slope." It's an illustration, not a photo of a real session.

### Reassurance strip

- Matched to the right tutor. Chosen for each student.
- One-on-one and online. From anywhere in the country.
- Relaxed and confident. Students learn best at ease.

### Subjects and courses

H2: Help with the courses that challenge students most

- Math: Elementary school math, Middle school math, Algebra, Geometry, Algebra II, Precalculus, Statistics, AB and BC calculus, Multivariable calculus. Button: Ask about math.
- Science: Plus the math each course needs. Biology, Chemistry, Physics. Regular, intensified or advanced, IB and AP levels. Button: Ask about science.
- English, economics and more (replaces "+ More"): English, Essay writing, Economics, Languages, Select history courses. Button: Ask about other subjects.
- Prompt: Don't see your course? Link: Ask about another course.

### Our approach

- H2: Support that starts with understanding the student
- Body: Tutors bring creativity and a personal touch to each session.
- How to get started: 1. Tell us what you need (Subject, course and what feels hard.) 2. Get matched with a tutor (Best suited to the student.) 3. Start one-on-one sessions (Online, at the student's pace.)

### Tutors

- H2: Who you'll work with
- Jacqui Anders, Founder and math tutor. Studied math and drama at Vassar College (4.0 GPA) and started Catapult in 2020.
- A team of experienced tutors. Many of our science tutors have also taught in a classroom. Button: Meet all our tutors.

### Reviews

H2: What students and parents say

- "Her ability to explain tough concepts in a way that actually makes sense ... has made a huge difference in how confident I feel in math." Josh B, student. Algebra 2, AP Precalculus, AP AB Calculus.
- "She's able to tailor the sessions to where he needs help the most. It's truly customized tutoring..." Hilary G, parent. Geometry Intensified.
- Link: More testimonials

Both are excerpts, word for word, with ellipses marking omissions. Josh's original contains dashes around the clause about tough teachers. The excerpt leaves out that clause rather than altering it.

### Our mission

Quoted exactly from the current site: "We empower our students to conquer the courses that challenge them most. Through reliable and personalized education, our supportive tutors teach students how to approach difficult concepts, ask bold questions, and catapult themselves into confidence."

### FAQ

H2: Common questions. Link: See all FAQs.

- How does online tutoring work? Sessions are one-on-one and virtual. Your tutor checks what the student already understands, then tailors support from there.
- How do you choose the right tutor? We match each student with the tutor best suited to their needs. See each tutor's background on the Tutors page.
- What about scheduling and rates? We'll go over both when you get in touch.

### Contact

- H2: Let's find the right support
- Lead: Tell us where you could use some help.
- Form: Your name, Email, Subject (optional), What would you like help with? (optional). Button: Send message.

### Footer

Logo, a Pages list (Tutors, Testimonials, FAQ, Current students, Contact), © 2026 Catapult Tutoring, Back to top.

## Content hierarchy

Each section answers one visitor question, in the order a parent tends to ask them:

| Section | Question it answers |
| --- | --- |
| Hero | What is this, and is it for us? |
| Reassurance strip | Why would this feel different from other tutoring? |
| Subjects | Can they help with our course? |
| Approach and steps | How does it work, and what happens first? |
| Tutors | Who will my child work with? |
| Reviews | Has it worked for other families? |
| Mission | What do they believe in? |
| FAQ | What else do I need to know? |
| Contact | How do I start? |

The founder story used to come second on the current page. It now sits after subjects and process, split between the tutor section (credentials) and the approach section (how that background shapes sessions). Visitors see what is offered before they read the history.

## Design system

- Type: Figtree for everything, as a proposed refinement that needs approval. The current site appears to use an Avenir-style geometric sans. Figtree is the closest open-licence match and keeps the same friendly, round character. It ships as one 20 KB variable file.
- Scale: display 36 to 54 px, H2 30 to 42 px, H3 21 px, body 17 px, small 15 px, labels 13 px uppercase with wide tracking. Weights 450 to 700.
- Color: teal `#1d756e` for text and buttons (5.5:1 on white). It is a slightly deeper version of the logo teal `#22867e`, which only reaches 4.4:1 against white. Brand teal and bright teal are used for lines, icons and accents. All body text passes WCAG AA.
- Space: 4 px base scale (4, 8, 12, 16, 24, 32, 48, 64, 96, 128). Sections use a fluid 64 to 120 px vertical rhythm.
- Shape: pill buttons, as on the current site. 10, 16 and 22 px radii. Two shadow levels. Cards are used only where content is a discrete object (testimonials, the steps panel, the form). Subjects and the FAQ use rules and whitespace instead.
- Motif: the arc from the logo's leaping cat appears as a fine line in the hero and the mission band, and again as the parabola in the hero illustration.

## Motion and interaction

| Interaction | Timing | Detail |
| --- | --- | --- |
| Buttons, links, nav | 150 ms | Color and shadow on hover; 1 px press on click; nav underline grows from the left |
| Header | 220 ms | Turns solid white with a hairline once the page scrolls |
| Mobile menu | 220 ms | Fades and drops 8 px; icon morphs to a close mark; Esc, outside click and link click close it; focus moves into the menu and returns to the toggle |
| FAQ accordion | 220 ms | Height eases open; plus becomes minus; `aria-expanded` kept in sync; hidden answers are removed from the tab order |
| Hero entrance | 450 ms, 60 ms stagger | Text rises 12 px; it is readable from the first frame |
| Hero illustration | 1.2 s once | The parabola draws in, points pop, then the notes fade in. It plays once and does not loop |
| Section reveals | 450 ms, 70 ms stagger | Fade and rise 16 px on first view. Content is only hidden after the script confirms the observer is running, so it never stays invisible if scripts fail |
| Subject handoff | 1.2 s highlight | "Ask about science" fills the form's subject, scrolls to the form, flashes the field mint and moves focus to the first empty field. A note says what was set; a Clear link undoes it |
| Form | 700 ms | Inline errors on blur and submit, focus moves to the first problem, then a loading spinner. Because no backend exists yet, a valid submission says plainly that nothing was sent |

With `prefers-reduced-motion: reduce`, every animation and transition is effectively instant and smooth scrolling is off.

## Search and performance

- Title: Online Math, Science and English Tutoring | Catapult Tutoring
- Meta description: One-on-one online tutoring in math, biology, chemistry, physics, English and more. Catapult Tutoring matches each student with the tutor best suited to their needs.
- One H1, then H2 per section and H3/H4 inside. All course names are real HTML text.
- Structured data is limited to `EducationalOrganization` with name, URL, logo, founding year and founder. There is no review or FAQ schema.
- No location is claimed beyond "across the country", which is on the current site.
- The hero has no raster image; the illustration is inline SVG. The logo is preloaded. The founder photo is lazy-loaded with fixed dimensions. One font file, preloaded, with `font-display: swap`. No frameworks; the script is about 9 KB unminified.

## Verified, proposed, and to confirm

### Verified from the current homepage

- Virtual, one-on-one tutoring for students across the country
- Started in 2020 when learning moved online; began as a one-woman math operation and grew into a multi-tutor, multi-subject program
- Jacqui Anders, founder, Vassar College, 4.0 GPA, degree in math and drama
- Each student is matched with the tutor best suited to their needs
- The belief that students learn best when relaxed and confident, in a comfortable, enjoyable setting
- All course and subject lists, science levels, and the science tutor note
- Both testimonials, names and course attributions
- The mission statement
- Navigation items: Tutors, Testimonials, FAQ, Current Students, Contact

### Proposed wording (new copy for approval)

- The H1, hero lead and eyebrow
- "Find the right tutor" as the button label. It reflects the verified matching process. It does not promise instant booking or a free consultation.
- Section headings, reassurance lines and the "Don't see your course?" prompt
- The three getting-started steps. Step 2 describes the verified matching. Steps 1 and 3 describe a likely process that the client has not confirmed.
- The FAQ answers
- The illustrated notes in the hero graphic

### Needs client confirmation

1. Inner page URLs. The page links to `/tutors`, `/testimonials`, `/faq` and `/current-students`. These are guesses based on typical Wix paths.
2. The contact process. The current Contact button's destination is unknown. The new form validates but sends nothing. It needs a real endpoint (a Wix form, an email service, or similar) before launch. Until then the page says nothing was sent.
3. The getting-started steps (see above), especially whether there's a call or consultation before matching.
4. FAQ answers, checked against the existing FAQ page. In particular, does every tutor (not only math tutors) start by assessing what the student understands? What should families be told about scheduling and rates?
5. Jacqui's title. The page says "Founder and math tutor". A public profile lists "Founder and Head Math Tutor".
6. Testimonial excerpts. Please approve both shortened versions, or provide different ones.
7. A high-resolution founder photo. The current one is cropped from the screenshot at 266 by 270 px and will look soft on high-density screens.
8. A vector (SVG) version of the logo, for sharper rendering at small sizes.
9. "Languages" in the subjects list shortens "various languages". Name specific languages if possible.
10. SAT and ACT prep. A third-party listing mentions it, but the current homepage does not. It's left out until confirmed.
11. A privacy policy page, if the form will collect personal details. None was visible in the screenshot.
12. Approval of Figtree as the typeface.
13. The five-star graphic above the current testimonials was removed, because there's no rating source behind it.

## Browser checks

Checked in Chromium at 375, 768, 1024 and 1440 px, with no horizontal overflow at any width and no console errors. A scripted test covered the mobile menu (open, Esc, link click, focus return), the accordion (mouse, Enter, Space), subject handoff and Clear, form errors, the loading state and the not-sent status, scrollspy, and every reveal finishing visible.
