'use strict';

export function heroClick(e) {
    const target = e.target;
    if (target.matches('.IronMan')) {
        target.remove();
    }
}