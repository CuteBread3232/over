const HugeSolarPanel = extendContent(SolarGenerator, "huge-solar-panel", {
	draw(tile){
		Draw.rect(Core.atlas.find(this.name + "-bottom"), tile.drawx(), tile.drawy());
		Draw.rect(Core.atlas.find(this.name + "-spinner-0"), tile.drawx() - 0, tile.drawy() + 0, Time.time() + 20);
		Draw.rect(Core.atlas.find(this.name + "-top"), tile.drawx(), tile.drawy());
	},
	generateIcons: function(){
		return [
			Core.atlas.find(this.name),
		];
	},
});