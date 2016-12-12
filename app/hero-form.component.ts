import {Component} from '@angular/core';
import {Hero} from './hero';

@Component({
    moduleId:module.id,
    selector:'hero-form',
    templateUrl:'hero-form.component.html'
})
export class HeroFormComponent {

    powers = ['Really Smart','Super Flexible','Super Hot','Weather Change'];

    model=new Hero(11,'Dr Strange',this.powers[0],'London');

    submitted=false;

    onSubmit(){
        this.submitted=true;
    }

    newHero() {
        this.model = new Hero(12, '', '');
    }

    get diagnostic() {
        return JSON.stringify(this.model);
    }
}