#!/usr/bin/env zx

const chars = [
  'U+00A0', // NBSP
  'U+00AD', // Soft Hyphen
  'U+061C', // Arabic letter mark (ALM)

  // Whitespaces, joiners, marks, and separators
  'U+2000-200F',
  'U+2028-202F',
  'U+2060-206D',

  'U+FEFF', // BOM
]
const chars_text = `
!"#$%&'()*+,-./0123456789:;<=>[\]_{}«»·
،

ؘؘؙؚ؛
؟
ءآأؤإئابةتثجحخد
ذرزسشصضطظعغ
ـفقكلمنهوىيًٌٍَُ
ِّْٕٜٓٔ
٠١٢٣٤٥٦٧٨٩٪٫٬
ٰٱ
ی
۔
ۖۗۘۙۚۛۜ۝۟
ۣ۠ۡۢۤۥۦ۪ۭۧۨ۫۬
ࣰࣱࣲ
ࣳ
‐‑‒–—―‘’“”
•…‧
‹›
−
∙
﴾﴿
ﷲ
`.replaceAll('\n', '').trim()
const phrases = [
  'U+E100-E103', // Private use
  'U+FD40-FD4F', // Note: FD46 (صلى الله عليه وآله) isn't in the font
  'U+FDFA-FDFB',
  'U+FDFD-FDFF', // Avoid FDFC (﷼) ﷺﷻ﷽
]

await $`mkdir -p build`
for (const fmt of ['woff', 'woff2']) {
    await $`pyftsubset Kitab-Regular.ttf --text=${chars_text} --unicodes=${chars.join(',')}   --flavor=${fmt} --output-file=build/kitab-base.${fmt}`
    await $`pyftsubset Kitab-Bold.ttf    --text=${chars_text} --unicodes=${chars.join(',')}   --flavor=${fmt} --output-file=build/kitab-base-bold.${fmt}`
    await $`pyftsubset Kitab-Regular.ttf --text="۞۩"          --unicodes=${phrases.join(',')} --flavor=${fmt} --output-file=build/kitab-phrases.${fmt}`
}
