import { parse } from 'coolors-io'
import chroma from 'chroma-js'

const palette = 'https://coolors.co/f9fafb-060a0f-6593c2-6eb4a8-f0974e-e8765a'
// const palette = 'https://coolors.co/ebf2fa-060a0e-064789-427aa1-679436-a5be00'
// const palette = 'https://coolors.co/0f0806-f6f5f3-4281a4-48a9a6-d4b483-c1666b'

export default () => {
    let colors = parse(palette);

    document.body.style.setProperty('--primary-color', colors[0]);
    document.body.style.setProperty('--secondary-color', colors[1])

    for (let i=2;i<colors.length;i++) {
        document.body.style.setProperty(`--accent${i-1}`, colors[i]);
        document.body.style.setProperty(`--accent${i-1}-light`, chroma(colors[i]).set('hsl.l',0.9))
        document.body.style.setProperty(`--accent${i-1}-dark`, chroma(colors[i]).set('hsl.l',0.1))
    }
}


