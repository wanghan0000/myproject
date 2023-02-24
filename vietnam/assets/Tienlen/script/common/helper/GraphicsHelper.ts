import { Graphics } from "cc";

export default class GraphicsHelper {
    /**
 *  2 | 1
 * ------
 *  3 | 4
 * 起始线在1象限,0-PI/2 2象限 PI/2-PI  3象限PI-1.5PI 4象限 1.5PI-2PI
 * @param mask 
 * @param cx 
 * @param cy 
 * @param radius 
 * @param startAngle 0-2PI 单位弧度
 * @param deltaAngle 角度差值, 0-2PI 单位弧度
 * @param color 
 */
    static drawPie(graphics: Graphics, cx: number, cy: number, radius: number, startAngle: number, deltaAngle: number, clockWise: boolean, color: string = '#ffffff') {
        let g = graphics;
        if (!g) return;
        g.clear();
        g.fillColor.fromHEX(color);
        g.moveTo(cx, cy);
        let startX = cx + radius * Math.cos(startAngle);
        let startY = cy + radius * Math.sin(startAngle);
        g.lineTo(startX, startY)
        let endAngle = clockWise ? startAngle - deltaAngle : startAngle + deltaAngle;
        endAngle = endAngle > 0 ? endAngle : Math.PI * 2 + endAngle;
        endAngle = endAngle >= Math.PI * 2 ? endAngle - Math.PI * 2 : endAngle;
        g.arc(cx, cy, radius, startAngle, endAngle, !clockWise);
        deltaAngle = Math.abs(deltaAngle) > Math.PI * 2 ? Math.PI * 2 : deltaAngle;
        if (deltaAngle != Math.PI * 2)
            g.lineTo(cx, cy);
        g.fill();
    }
}