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

## CSS

```css
@font-face {
  font-family: Kitab;
  src: url(/assets/kitab-base.woff2);
  unicode-range: U+200?, U+60C, U+618-61B, U+61F, U+621-63A, U+640-655, U+65C, U+660-66C, U+670-671, U+6CC, U+6D4, U+6D6-6DD, U+6DF-6E8, U+6EA-6ED, U+8F0-8F3, U+FD3E-FD3F, U+FDF2;
}
@font-face {
  font-family: Kitab;
  src: url(/assets/kitab-base-bold.woff2);
  font-weight: 700;
  unicode-range: U+200?, U+60C, U+618-61B, U+61F, U+621-63A, U+640-655, U+65C, U+660-66C, U+670-671, U+6CC, U+6D4, U+6D6-6DD, U+6DF-6E8, U+6EA-6ED, U+8F0-8F3, U+FD3E-FD3F, U+FDF2;
}
@font-face {
  font-family: Kitab;
  src: url(/assets/kitab-phrases.woff2);
  unicode-range: U+6DE, U+6E9, U+E100-E103, U+FD3E-FD45, U+FD47-FD4F, U+FDFA-FDFB, U+FDFD-FDFF;
}
@font-face {
  font-family: Kitab;
  src: url(/assets/kitab-phrases.woff2);
  font-weight: 700;
  unicode-range: U+6DE, U+6E9, U+E100-E103, U+FD3E-FD45, U+FD47-FD4F, U+FDFA-FDFB, U+FDFD-FDFF;
}
```

## unicode-range

The following code can create a valid CSS unicode-range from a set of characters.

```py
import itertools

def ranges(i):
    for a, b in itertools.groupby(enumerate(i), lambda pair: pair[1] - pair[0]):
        b = list(b)
        yield b[0][1], b[-1][1]

def unicode_range(chars):
    ints = sorted([ord(c) for c in set(chars)])
    groups = list(ranges(ints))
    groups1 = [(hex(a), hex(b)) for a, b in groups]
    groups2 = [(f'{a}-{b}' if a != b else a) for a, b in groups1]
    return ', '.join(groups2).replace('-0x', '-').replace('0x', 'U+').upper()
```

## License

This font software is free to use, modify, and redistribute
according to the terms of the [SIL Open Font License](http://scripts.sil.org/ofl).
