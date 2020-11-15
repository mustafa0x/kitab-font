all: Kitab-Regular.ttf Kitab-Bold.ttf 

%.ttf: %.sfd lellah.fea
	@echo " FF	$@"
	@fontforge -quiet -lang=py -script build.py $< $(*F).tmp.ttf lellah.fea
	@echo " TTX	$@"
	@ttx -q -o $(*F).ttx $(*F).tmp.ttf && rm $(*F).tmp.ttf
	@ttx -q -o $@ $(*F).ttx && rm $(*F).ttx
