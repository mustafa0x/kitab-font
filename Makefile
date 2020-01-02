FLAGS = ('opentype', 'omit-instructions', 'no-mac-names', 'short-post')

all: Kitab-Regular.ttf Kitab-Bold.ttf 

%.ttf: %.sfd
	@echo " FF	$@"
	@fontforge                                                             \
	  -quiet                                                               \
	  -lang=py                                                             \
	  -c "import fontforge;                                                \
	  font = fontforge.open('$<');                                         \
	  font.generate('$@', flags=$(FLAGS))"
	@echo " TTX	$@"
	@ttx -q -o $@.ttx $@
	@ttx -q -o $@ $@.ttx
