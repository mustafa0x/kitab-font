FLAGS = ('opentype', 'omit-instructions', 'no-mac-names', 'short-post')

all: Kitab-Regular.ttf Kitab-Bold.ttf 

%.ttf: %.sfd
	@echo " FF	$@"
	@fontforge                                                             \
	  -quiet                                                               \
	  -lang=py                                                             \
	  -c "import fontforge;                                                \
	  font = fontforge.open('$<');                                         \
	  font.generate('$(*F).tmp.ttf', flags=$(FLAGS))"
	@echo " TTX	$@"
	@ttx -q -o $(*F).ttx $(*F).tmp.ttf && rm $(*F).tmp.ttf
	@ttx -q -o $@ $(*F).ttx && rm $(*F).ttx
