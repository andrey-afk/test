import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
    selector: '[appHover]'
})

export class HoverDerective {
    @HostBinding('class.hovered') isHovered = false;

    @HostListener('mouseenter') onMouseEnter() {
        this.isHovered = true;
    }

    @HostListener('mouseleave') onmouseleave() {
            this.isHovered = false;
    }
}