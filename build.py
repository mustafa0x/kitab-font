import fontforge
import sys

FLAGS = ('opentype', 'omit-instructions', 'no-mac-names') #, 'short-post')

font = fontforge.open(sys.argv[1])

allA = {g.glyphname for g in font.glyphs()}
allE = allA - {"uni0627" "uni0622" "uni0671" "uni0627.fina" "uni0671.fina" "uni0648"}
with open(sys.argv[3]) as f:
    classes = f"@All = [{' '.join(allA)}];\n@AllExceptWawAndAlef = [{' '.join(allE)}];"
    fea = f.read().replace("%CLASSES%", classes)

with open(sys.argv[1].replace(".sfd", ".fea"), "w") as f:
    f.write(fea)

font.mergeFeature(f.name)

font.generate(sys.argv[2], flags=FLAGS)

