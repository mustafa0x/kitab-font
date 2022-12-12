# Kitab

Kitab, based on [Scheherazade](https://software.sil.org/scheherazade/), is an Arabic font
with a design based on traditional typefaces such as Monotype Naskh,
extended to cover the full Unicode Arabic repertoire.

It is also designed to support rendering [Quranic text](https://github.com/quranacademy/quran-text) in a Unicode-compliant manner.

## Changes

- Increased the base font size.
- Decreased the base line height.
- Added the Basmalah (U+FDFD), ﷺ, and ﷻ characters from Amiri.
- Replaced the angle quotes and ayah quotes with Amiri's (i.e., «» and ﴿﴾).
- Replaced U+06E0 (small high upright rectangular zero) with Amiri's.
- Added laam hamzah alif ligature (i.e., لا but with a hamzah in the middle).
  This is needed for Quranic orthography (e.g. الـٔاخرة).
  Currently there is no pure Unicode solution for this
- The width of ۩ (U+06E9) was increased.
- A slight curve was added to U+0670 (Small alif).
- Numerous collision fixes.

The follow glyphs were enlarged:
- U+06E4 (Small high maddah)
- U+06DB (Small high 3 dots)
- U+06D8 (Small high meem initial form)
- U+06E5 (Small waaw)

The following glyphs were made to be lower on "the line" when in a word.
- U+0654 (Hamzah above) (أَنۢبِـُٔونِی)
- U+06E7 (Small high yaa) (ٱلنَّبِیِّـۧنَ)
- U+06E4 (madd) when on top of U+06E6 (small yaa) (یَسۡتَحۡیِۦۤ)

The following honorifics were added (note: these honorifics are set to be included in Unicode 14)
- U+FDFE (سبحانه وتعالى)
- U+FDFF (عز وجل)
- U+FD40 (رحمه الله)
- U+FD41 (رضي الله عنه)
- U+FD42 (رضي الله عنها)
- U+FD43 (رضي الله عنهم)
- U+FD44 (رضي الله عنهما)
- U+FD45 (رضي الله عنهن)
- U+FD47 (عليه السلام)
- U+FD4D (عليها السلام)
- U+FD48 (عليهم السلام)
- U+FD49 (عليهما السلام)

## Subsetting and compressing

- `./subset.mjs` (requires [pyftsubset](https://github.com/fonttools/fonttools) and [zx](https://github.com/google/zx)) -- it will output `dist/{kitab-base,kitab-base-bold,kitab-phrases}.{woff,woff2}`

## License

This font software is free to use, modify, and redistribute
according to the terms of the [SIL Open Font License](http://scripts.sil.org/ofl).
