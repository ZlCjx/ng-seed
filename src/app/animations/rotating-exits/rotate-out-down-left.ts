import {
    animate, style, keyframes, animation
} from '@angular/animations';

export const rotateOutDownLeft = animation([
    animate('1s 0.1s', keyframes([
        style({
            offset: 0,
            transformOrigin: 'left bottom',
            opacity: 1
        }),
        style({
            offset: 1,
            transformOrigin: 'left bottom',
            transform: 'rotate3d(0, 0, 1, 45deg)',
            opacity: 0
        })
    ]))
]);
