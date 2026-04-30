# **Role:**
Senior UI/UX Designer & Design Systems Engineer.

# **Objective:**
To provide a comprehensive design prompt and technical specification for a high-fidelity portfolio redesign using a Neo-Brutalist aesthetic inspired by Teakcn.

# **Context:**
The user is transitioning their portfolio from a standard layout to a bold, high-impact "Neo-Brutalist" style. This document serves as the ground truth for styling tokens (OKLCH), layout logic, and visual principles to ensure consistency across all future screen generations.

# **Instructions:**

## **Instruction 1: Core Aesthetic & Visual Foundation**
- **Strict Neo-Brutalism:** Prioritize high contrast (black/white) with high-saturation primary accents.
- **Hard Geometry:** Use a 0px border radius for all containers, buttons, and cards.
- **Bold Strokes:** Every interactive element and section container must have a thick, black border (min 4px).
- **Slab Shadows:** Use hard-offset shadows (no blur) to create depth. Default offset: 4px 4px 0px 0px black.

## **Instruction 2: Styling with OKLCH Tokens**
- **Primary Color:** Use `oklch(0.6489 0.2370 26.9728)` (Light) and `oklch(0.7044 0.1872 23.1858)` (Dark) for critical actions.
- **Secondary Color:** Use `oklch(0.9680 0.2110 109.7692)` (Light) and `oklch(0.9691 0.2005 109.6228)` (Dark) for highlighting key information or stats.
- **Typography:** 
    - **UI/Headings:** `DM Sans` (Black/900 weight, uppercase).
    - **Technical/Labels:** `Space Mono` (Medium weight).

## **Instruction 3: Component & Layout Logic**
- **Interactions:** On hover, buttons should "depress" by reducing the shadow offset and translating the element slightly (e.g., `translate-x-[2px] translate-y-[2px] shadow-[2px_2px_0px_0px_black]`).
- **Cards:** White or lightly tinted backgrounds with thick borders. Use "pills" with `Space Mono` for technology tags.
- **Structure:** Sections should be clearly delineated by thick borders or high-contrast background shifts.

# **Notes:**

Note 1: Dark mode is a direct inversion of the light mode palette, maintaining the same high-contrast principles but using white strokes on black backgrounds.

Note 2: Accessibility must be maintained; while the style is "brutal," text readability and clear functional cues take priority.

Note 3: The design should feel "mechanical" and "honest"—don't hide the grid or the structure; celebrate it.