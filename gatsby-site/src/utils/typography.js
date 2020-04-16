import Typography from 'typography';

const typography = new Typography({
    baseLineHeight: 1.2,
    googleFonts: [
        {
            name: "Roboto",
            styles: [100, 300, 400, 500, 700, 900],
        }
    ],
    headerFontFamily: [
        "Roboto",
        "Helvetica",
        "sans-serif",
    ],
    bodyFontFamily: [
        "Roboto",
        "Helvetica",
        "sans-serif",
    ]
});

export default typography;
