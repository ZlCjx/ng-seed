import {
    animate, style, keyframes, animation
} from '@angular/animations';

export const fadeInUp = animation([
    animate('1s 0.1s', keyframes([
        style({
            offset: 0,
            opacity: 0,
            transform: 'translate3d(0, 100%, 0)'
        }),
        style({
            offset: 1,
            opacity: 1,
            transform: 'translate3d(0, 0, 0)'
        })
    ]))
]);
