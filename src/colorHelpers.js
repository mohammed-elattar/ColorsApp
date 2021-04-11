import chroma from 'chroma-js';

const levels = [50 ,100, 200, 300, 400, 500, 600, 700, 800, 900];
const levelsCount = levels.length;

function generatePallete(starterPallete)
{
    const newPalette = {
        paletteName: starterPallete.paletteName,
        id: starterPallete.id,
        emoji: starterPallete.emoji,
        colors: {}
    }

    for (let level of levels) {
        newPalette.colors[level] = [];
    }

    for (let color of starterPallete.colors) {
        let scale = getScale(color.color, levelsCount).reverse();
        for (let i in scale) {
            let rgbColor = chroma(scale[i]).css();
            newPalette.colors[levels[i]].push({
                name:`${color.name} ${levels[i]}`,
                id: color.name.toLowerCase().replace(/ /g, '-'),
                hex: scale[i],
                rgb: rgbColor,
                rgba: rgbColor.replace('rgb','rgba').replace(')',',1.0)')
            });
        }
    }

    return newPalette;
}

function getRange(hexaColor)
{
    const end = '#fff';
    const start = chroma(hexaColor).darken(1.4).hex();
    return [start, hexaColor, end];
}

function getScale(hexaColor, numberOfColors)
{
    return chroma
    .scale(getRange(hexaColor))
    .mode('lab')
    .colors(numberOfColors);
}

export {generatePallete};