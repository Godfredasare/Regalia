// ============================================================================
// REGALIA PETITE — collection configuration & section content
// ============================================================================

// Configurable: Petite age range. Update here — never hardcode in pages.
export const PETITE_AGE = {
  min: 1,
  max: 12,
  label: '1\u201312 Years',
} as const

// What We Make — four rows (house voice)
export const petiteWhatWeMake = [
  {
    title: 'Ceremonial & Traditional',
    copy:
      "Kaftans, agbada and senator sets for boys; traditional pieces for girls. Heritage, tailored to a small frame.",
  },
  {
    title: 'Weddings & Occasions',
    copy:
      'Page boys, flower girls, ring bearers and the whole entourage \u2014 dressed as one picture with the couple.',
  },
  {
    title: 'Church & Smart Wear',
    copy:
      'Considered, comfortable formalwear for Sundays, recitals, graduations and school occasions.',
  },
  {
    title: 'Family & \u201cMini-Me\u201d Sets',
    copy:
      'Coordinated looks that echo the parents\u2019 outfits, so the family arrives as one.',
  },
] as const

// Petite promise — the strongest trust signal
export const petitePromise = {
  opening:
    'A child\u2019s garment has a harder job than an adult\u2019s: it must look immaculate and survive a real day.',
  bullets: [
    {
      title: 'Soft fabrics',
      description:
        'Soft fabrics chosen for comfort against young skin, with room to move, run and sit.',
    },
    {
      title: 'The Petite label',
      description:
        'Our soft woven Petite label only \u2014 stitched flat, with no metal tags, pins or small parts.',
    },
    {
      title: 'Gentle fastenings',
      description:
        'Gentle fastenings, covered seams, and nothing that scratches or restricts.',
    },
    {
      title: 'Made to order',
      description:
        'Made to order, so it fits your child now \u2014 with a little grace built in for growing.',
    },
  ],
  closing: 'Beautiful is not enough for a child. It must also be kind.',
} as const

// Petite fitting timeline — four steps
export const petiteFitting = [
  {
    number: '01',
    title: 'Tell us',
    description: 'The occasion, and your child\u2019s age.',
  },
  {
    number: '02',
    title: 'Measure',
    description:
      'A few simple measurements \u2014 at the atelier, or guided by you at home.',
  },
  {
    number: '03',
    title: 'Agree',
    description:
      'The fabric, the colour, and any match to the family\u2019s outfits.',
  },
  {
    number: '04',
    title: 'Craft & fit',
    description:
      'We craft and finish the piece, with a gentle fitting before it is yours.',
  },
] as const
